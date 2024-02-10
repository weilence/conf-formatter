import * as vscode from 'vscode';
import { parse } from './parser';
import NamedConfListener from './grammer/NamedConfListener';
import { ParseTreeWalker } from 'antlr4';
import { StatementContext } from './grammer/NamedConfParser';

const selector = {language: 'named.conf'};

function provideDocumentSymbols(document: vscode.TextDocument):vscode.DocumentSymbol[] {
  const firstLine = document.lineAt(0);
  const lastLine = document.lineAt(document.lineCount - 1);
  const textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
  const text = document.getText(textRange);
  const ctx = parse(text);

  const documentSymbols: vscode.DocumentSymbol[] = [];
  const listener = new NamedConfListener();

  const symbolStack: vscode.DocumentSymbol[] = [];
  listener.enterStatement = (ctx: StatementContext) => {
    const [name, kind] = getStatementContext(ctx);
    if (kind === null) {
      return;
    }

    const docSymbol = new vscode.DocumentSymbol(
      name,
      '',
      kind,
      new vscode.Range(
        document.positionAt(ctx.start.start),
        document.positionAt(ctx.stop?.stop ?? ctx.start.stop)
      ),
      new vscode.Range(
        document.positionAt(ctx.start.start),
        document.positionAt(ctx.stop?.stop ?? ctx.start.stop)
      )
    );

    if (symbolStack.length === 0) {
      documentSymbols.push(docSymbol);
    } else {
      symbolStack[symbolStack.length - 1].children.push(docSymbol);
    }

    symbolStack.push(docSymbol);
  };
  listener.exitStatement = () => {
    symbolStack.pop();
  };

  const walker = new ParseTreeWalker();
  walker.walk(listener, ctx);

  return documentSymbols;
}

function getStatementContext(ctx: StatementContext): [string, vscode.SymbolKind | null] {
  const valueList = ctx.value_list();
  const first = valueList[0];
  if (!first) {
    return ['', null];
  } else if (first.struct()) {
    return ['{}', vscode.SymbolKind.Struct];
  }

  const name = first.getText();
  if (valueList[1]?.struct() || valueList[2]?.struct()) {
    return [name, vscode.SymbolKind.Struct];
  }

  if (first.IDENTIFIER()) {
    return [name, vscode.SymbolKind.Field];
  } else if (first.STRING()) {
    return [name, vscode.SymbolKind.String];
  }

  return [name, null];
}

export default function registerSymbolProvider(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
    selector,
    { provideDocumentSymbols },
  ));
}
