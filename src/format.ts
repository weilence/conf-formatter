import * as vscode from 'vscode';
import  { StatementContext, StructContext } from "./grammer/NamedConfParser";
import { parse } from "./parser";

const selector = { language: 'named.conf' };

function format(text: string): string {
  const ctx = parse(text);
  let newText = '';
  ctx.statement_list().forEach((statement: StatementContext) => {
    newText += formatStatement(0, statement);
  });

  return newText;
}

function formatStatement(level: number, ctx: StatementContext): string {
  let text = '';

  ctx.value_list().forEach((value, i) => {
    if (i > 0) {
      text += ' ';
    }

    const child = value.getChild(0);
    if (child instanceof StructContext) {
      text += '{\n';
      child.statement_list().forEach((value) => {
        text += tab(level + 1) + formatStatement(level + 1, value);
      });
      text += tab(level) + '}';
    } else {
      text += child.getText();
    }
  });
  text += ';\n';

  return text;
}

function tab(level: number): string {
  let text = '';
  for (let i = 0; i < level; i++) {
    text += '    ';
  }

  return text;
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