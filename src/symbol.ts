import * as vscode from 'vscode';
import { parse } from './parser';
import NamedConfListener from './grammer/NamedConfListener';
import { ParseTreeWalker, ParserRuleContext, TerminalNode } from 'antlr4';
import NamedConfParser, { ProgContext, StatementContext, StructContext } from './grammer/NamedConfParser';

const selector = {language: 'named.conf'};

function provideDocumentSymbols(document: vscode.TextDocument):vscode.DocumentSymbol[] {
  const firstLine = document.lineAt(0);
  const lastLine = document.lineAt(document.lineCount - 1);
  const textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
  const text = document.getText(textRange);
  const ctx = parse(text);

  const listener = new SymbolListener();
  const walker = new ParseTreeWalker();
  walker.walk(listener, ctx);

  return listener.documentSymbols;
}

export default function registerSymbolProvider(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
    selector,
    { provideDocumentSymbols },
  ));
}

class SymbolListener extends NamedConfListener {
  documentSymbols: vscode.DocumentSymbol[] = [];
  private map: Map<ParserRuleContext, vscode.DocumentSymbol> = new Map();

  exitStruct = (ctx: ParserRuleContext) => {
    this.map.delete(ctx);
  };

  enterStatement = (ctx: StatementContext) => {
    const docSymbol = this.getStatementContext(ctx);
    if (!docSymbol) {
      return;
    }

    for (const item of ctx.value_list()) {
      const struct = item.struct();
      if (struct) {
        this.map.set(struct, docSymbol);
      }
    }

    const parent = ctx.parentCtx;
    if (parent instanceof ProgContext) {
      this.documentSymbols.push(docSymbol);
    }

    if (parent instanceof StructContext) {
      const parentDocumentSymbol = this.map.get(parent);
      if (parentDocumentSymbol) {
        if (!parentDocumentSymbol.children) {
          parentDocumentSymbol.children = [];
        }
        parentDocumentSymbol.children.push(docSymbol);
      }
    }
  };


  getStatementContext(ctx: StatementContext): vscode.DocumentSymbol | null {
    const value = ctx.value(0)?.getChild(0);

    let name: string;
    let kind: vscode.SymbolKind;
    if (value instanceof StructContext) {
      name = '{}';
      kind = vscode.SymbolKind.Struct;
    } else if (value instanceof TerminalNode) {
      name = value.getText();
      if (value.symbol.type === NamedConfParser.STRING) {
        kind = vscode.SymbolKind.String;
      } else {
        kind = vscode.SymbolKind.Field;
      }
    } else {
      return null;
    }

    return new vscode.DocumentSymbol(
      name,
      '',
      kind,
      new vscode.Range(
        ctx.start.line - 1,
        ctx.start.column,
        (ctx.stop?.line ?? ctx.start.line) - 1,
        ctx.stop?.column ?? ctx.start.column,
      ),
      new vscode.Range(
        ctx.start.line - 1,
        ctx.start.column,
        (ctx.stop?.line ?? ctx.start.line) - 1,
        ctx.stop?.column ?? ctx.start.column,
      )
    );
  }
}