import { CharStreams, CommonTokenStream } from "antlr4";
import NamedConfParser, { ProgContext } from "./grammer/NamedConfParser";
import NamedConfLexer from "./grammer/NamedConfLexer";

export function parse(text: string): ProgContext {
  const charStream = CharStreams.fromString(text);
  const lexer = new NamedConfLexer(charStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new NamedConfParser(tokenStream);
  return parser.prog();
}