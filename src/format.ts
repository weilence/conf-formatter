import * as vscode from 'vscode';
import  { ValueContext } from "./grammer/NamedConfParser";
import { parse } from "./parser";
import { ParseTreeWalker } from 'antlr4';
import NamedConfListener from './grammer/NamedConfListener';

const selector = { language: 'named.conf' };

function format(text: string): string {
  const ctx = parse(text);

  const listener = new FormatListener();
  const walker = new ParseTreeWalker();
  walker.walk(listener, ctx);

  const newText = listener.text;
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

class FormatListener extends NamedConfListener {
  indent = '';
  text = '';

  private addIndent() {
    this.indent += INDENT;
  }

  private removeIndent() {
    this.indent = this.indent.slice(0, -4);
  }

  enterStatement = () => {
    this.text += this.indent;
  };

  exitStatement= () => {
    this.text += ';\n';
  };

  enterStruct = () => {
    this.text += '{\n';
    this.addIndent();
  };

  exitStruct = () => {
    this.removeIndent();
    this.text += this.indent;
    this.text += '}';
  };

  enterValue = (ctx: ValueContext) => {
    if (ctx.parentCtx && ctx.parentCtx.getChild(0) !== ctx) {
      this.text += ' ';
    }

    if (!ctx.struct()) {
      this.text += ctx.getText();
    }
  };
}