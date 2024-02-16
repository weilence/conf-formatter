import * as vscode from 'vscode';
import antlr4 = require('antlr4');
import { StatementContext, StructContext, ValueContext } from "./grammer/NamedConfParser";
import { CommonTokenStream, ParseTreeWalker, TerminalNode, TokenStreamRewriter } from 'antlr4';
import NamedConfListener from './grammer/NamedConfListener';
import { parse } from './parser';
import NamedConfLexer from './grammer/NamedConfLexer';

const selector = { language: 'named.conf' };

function format(text: string): string {
  const ctx = parse(text);

  const listener = new FormatListener(ctx.parser!.getTokenStream() as CommonTokenStream);
  const walker = new ParseTreeWalker();
  walker.walk(listener, ctx);

  const newText = listener.rewirter.getText();
  return newText;
}

function provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
  const firstLine = document.lineAt(0);
  const lastLine = document.lineAt(document.lineCount - 1);
  const textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
  const text = document.getText(textRange);
  const newText = format(text);

  return [vscode.TextEdit.replace(textRange, newText)];
}

export default function registerFormatProvider(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(
    selector,
    { provideDocumentFormattingEdits }
  ));
}

const INDENT = '    ';
const HIDDEN_CHANNEL = NamedConfLexer.channelNames.indexOf('HIDDEN');

class FormatListener extends NamedConfListener {
  indent = '';
  tokenStream: CommonTokenStream;
  rewirter: TokenStreamRewriter;

  constructor(tokenStream: CommonTokenStream) {
    super();
    this.tokenStream = tokenStream;
    // @ts-expect-error workaroud for missing type
    this.rewirter = new antlr4.default.TokenStreamRewriter(tokenStream);
  }

  private addIndent() {
    this.indent += INDENT;
  }

  private removeIndent() {
    this.indent = this.indent.slice(0, -4);
  }

  enterStatement = (ctx: StatementContext) => {
    this.rewirter.insertBefore(ctx.start, this.indent);
  };

  exitStatement = (ctx: StatementContext ) => {
    this.rewirter.insertAfter(ctx.stop!, '\n');
  };

  enterStruct = (ctx: StructContext) => {
    this.rewirter.insertAfter(ctx.start, '\n');
    this.addIndent();
  };

  exitStruct = (ctx: StructContext) => {
    this.removeIndent();
    this.rewirter.insertBefore(ctx.stop!, this.indent);
  };

  enterValue = (ctx: ValueContext) => {
    if (ctx.parentCtx && ctx.parentCtx.getChild(0) !== ctx) {
      this.rewirter.insertBefore(ctx.start, ' ');
    }
  };

  visitTerminal(node: TerminalNode): void {
    const tokens = this.tokenStream.getHiddenTokensToLeft(node.symbol.tokenIndex, HIDDEN_CHANNEL);
    if (tokens?.length) {
      for (const token of tokens) {
        if (token.type === NamedConfLexer.LINE_COMMENT) {
          this.rewirter.insertBefore(token, this.indent);
          continue;
        }
      }
    }
  }
}