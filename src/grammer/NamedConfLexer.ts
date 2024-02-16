// Generated from NamedConf.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class NamedConfLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly IDENTIFIER = 5;
	public static readonly STRING = 6;
	public static readonly WS = 7;
	public static readonly LINE_COMMENT = 8;
	public static readonly INLINE_COMMENT = 9;
	public static readonly NEWLINE = 10;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'{'", "'}'", 
                                                            "'!'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, "IDENTIFIER", 
                                                             "STRING", "WS", 
                                                             "LINE_COMMENT", 
                                                             "INLINE_COMMENT", 
                                                             "NEWLINE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "IDENTIFIER", "STRING", "WS", "LINE_COMMENT", 
		"INLINE_COMMENT", "NEWLINE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, NamedConfLexer._ATN, NamedConfLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "NamedConf.g4"; }

	public get literalNames(): (string | null)[] { return NamedConfLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return NamedConfLexer.symbolicNames; }
	public get ruleNames(): string[] { return NamedConfLexer.ruleNames; }

	public get serializedATN(): number[] { return NamedConfLexer._serializedATN; }

	public get channelNames(): string[] { return NamedConfLexer.channelNames; }

	public get modeNames(): string[] { return NamedConfLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,10,99,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,31,8,4,11,4,12,4,32,1,5,1,5,5,
	5,37,8,5,10,5,12,5,40,9,5,1,5,1,5,1,6,4,6,45,8,6,11,6,12,6,46,1,6,1,6,1,
	7,1,7,1,7,1,7,5,7,55,8,7,10,7,12,7,58,9,7,1,7,3,7,61,8,7,1,7,1,7,1,7,5,
	7,66,8,7,10,7,12,7,69,9,7,1,7,3,7,72,8,7,1,7,3,7,75,8,7,1,7,1,7,1,8,1,8,
	1,8,1,8,5,8,83,8,8,10,8,12,8,86,9,8,1,8,1,8,1,8,1,8,1,8,1,9,4,9,94,8,9,
	11,9,12,9,95,1,9,1,9,4,38,56,67,84,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,
	8,17,9,19,10,1,0,3,4,0,45,57,65,90,95,95,97,122,2,0,9,9,32,32,2,0,10,10,
	13,13,108,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,
	11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,1,21,1,0,
	0,0,3,23,1,0,0,0,5,25,1,0,0,0,7,27,1,0,0,0,9,30,1,0,0,0,11,34,1,0,0,0,13,
	44,1,0,0,0,15,74,1,0,0,0,17,78,1,0,0,0,19,93,1,0,0,0,21,22,5,59,0,0,22,
	2,1,0,0,0,23,24,5,123,0,0,24,4,1,0,0,0,25,26,5,125,0,0,26,6,1,0,0,0,27,
	28,5,33,0,0,28,8,1,0,0,0,29,31,7,0,0,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,
	1,0,0,0,32,33,1,0,0,0,33,10,1,0,0,0,34,38,5,34,0,0,35,37,9,0,0,0,36,35,
	1,0,0,0,37,40,1,0,0,0,38,39,1,0,0,0,38,36,1,0,0,0,39,41,1,0,0,0,40,38,1,
	0,0,0,41,42,5,34,0,0,42,12,1,0,0,0,43,45,7,1,0,0,44,43,1,0,0,0,45,46,1,
	0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,6,6,0,0,49,14,1,0,
	0,0,50,51,5,47,0,0,51,52,5,47,0,0,52,56,1,0,0,0,53,55,9,0,0,0,54,53,1,0,
	0,0,55,58,1,0,0,0,56,57,1,0,0,0,56,54,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,
	0,59,61,5,13,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,75,5,10,0,
	0,63,67,5,35,0,0,64,66,9,0,0,0,65,64,1,0,0,0,66,69,1,0,0,0,67,68,1,0,0,
	0,67,65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,70,72,5,13,0,0,71,70,1,0,0,
	0,71,72,1,0,0,0,72,73,1,0,0,0,73,75,5,10,0,0,74,50,1,0,0,0,74,63,1,0,0,
	0,75,76,1,0,0,0,76,77,6,7,1,0,77,16,1,0,0,0,78,79,5,47,0,0,79,80,5,42,0,
	0,80,84,1,0,0,0,81,83,9,0,0,0,82,81,1,0,0,0,83,86,1,0,0,0,84,85,1,0,0,0,
	84,82,1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,0,87,88,5,42,0,0,88,89,5,47,0,0,
	89,90,1,0,0,0,90,91,6,8,1,0,91,18,1,0,0,0,92,94,7,2,0,0,93,92,1,0,0,0,94,
	95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,6,9,0,0,98,20,
	1,0,0,0,11,0,32,38,46,56,60,67,71,74,84,95,2,6,0,0,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NamedConfLexer.__ATN) {
			NamedConfLexer.__ATN = new ATNDeserializer().deserialize(NamedConfLexer._serializedATN);
		}

		return NamedConfLexer.__ATN;
	}


	static DecisionsToDFA = NamedConfLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}