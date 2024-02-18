import * as vscode from 'vscode';
import { CharStreams, CommonTokenStream, ErrorListener, Recognizer, Token } from "antlr4";
import NamedConfParser, { ProgContext } from "./grammer/NamedConfParser";
import NamedConfLexer from "./grammer/NamedConfLexer";

export const diagnosticCollection = vscode.languages.createDiagnosticCollection('named.conf');

export function parse(uri: vscode.Uri, text: string): ProgContext {
  const charStream = CharStreams.fromString(text);
  const lexer = new NamedConfLexer(charStream);
  lexer.removeErrorListeners();
  const lexerErrorListener = new LexerErrorListener();
  lexer.addErrorListener(lexerErrorListener);

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new NamedConfParser(tokenStream);
  parser.removeErrorListeners();
  const parserErrorlistener = new ParserErrorListener();
  parser.addErrorListener(parserErrorlistener);

  const ctx = parser.prog();
  diagnosticCollection.set(uri, [...lexerErrorListener.diagnostics, ...parserErrorlistener.diagnostics]);
  return ctx;
}

class LexerErrorListener extends ErrorListener<number> {
  diagnostics: vscode.Diagnostic[] = [];

  syntaxError(recognizer: Recognizer<number>, offendingSymbol: number, line: number, column: number, msg: string) {
    const range = new vscode.Range(line - 1, column, line - 1, column + 1);
    const diagnostic = new vscode.Diagnostic(range, msg, vscode.DiagnosticSeverity.Error);
    this.diagnostics.push(diagnostic);
  }
}

class ParserErrorListener extends ErrorListener<Token> {
  diagnostics: vscode.Diagnostic[] = [];

  syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string) {
    const range = new vscode.Range(line - 1, column, line - 1, column + 1);
    const diagnostic = new vscode.Diagnostic(range, msg, vscode.DiagnosticSeverity.Error);
    this.diagnostics.push(diagnostic);
  }
}