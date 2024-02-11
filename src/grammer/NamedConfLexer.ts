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
	public static readonly COMMENT = 8;
	public static readonly NEWLINE = 9;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'{'", "'}'", 
                                                            "'!'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, "IDENTIFIER", 
                                                             "STRING", "WS", 
                                                             "COMMENT", 
                                                             "NEWLINE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "IDENTIFIER", "STRING", "WS", "COMMENT", 
		"NEWLINE",
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

	public static readonly _serializedATN: number[] = [4,0,9,94,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,
	0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,29,8,4,11,4,12,4,30,1,5,1,5,5,5,35,8,
	5,10,5,12,5,38,9,5,1,5,1,5,1,6,4,6,43,8,6,11,6,12,6,44,1,6,1,6,1,7,1,7,
	1,7,1,7,5,7,53,8,7,10,7,12,7,56,9,7,1,7,3,7,59,8,7,1,7,1,7,1,7,5,7,64,8,
	7,10,7,12,7,67,9,7,1,7,3,7,70,8,7,1,7,1,7,1,7,1,7,1,7,5,7,77,8,7,10,7,12,
	7,80,9,7,1,7,1,7,3,7,84,8,7,1,7,1,7,1,8,4,8,89,8,8,11,8,12,8,90,1,8,1,8,
	4,36,54,65,78,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,3,4,0,45,
	57,65,90,95,95,97,122,2,0,9,9,32,32,2,0,10,10,13,13,104,0,1,1,0,0,0,0,3,
	1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
	15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,21,1,0,0,0,5,23,1,0,0,0,7,25,1,0,
	0,0,9,28,1,0,0,0,11,32,1,0,0,0,13,42,1,0,0,0,15,83,1,0,0,0,17,88,1,0,0,
	0,19,20,5,59,0,0,20,2,1,0,0,0,21,22,5,123,0,0,22,4,1,0,0,0,23,24,5,125,
	0,0,24,6,1,0,0,0,25,26,5,33,0,0,26,8,1,0,0,0,27,29,7,0,0,0,28,27,1,0,0,
	0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,10,1,0,0,0,32,36,5,34,0,
	0,33,35,9,0,0,0,34,33,1,0,0,0,35,38,1,0,0,0,36,37,1,0,0,0,36,34,1,0,0,0,
	37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,34,0,0,40,12,1,0,0,0,41,43,7,1,0,0,
	42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,
	47,6,6,0,0,47,14,1,0,0,0,48,49,5,47,0,0,49,50,5,47,0,0,50,54,1,0,0,0,51,
	53,9,0,0,0,52,51,1,0,0,0,53,56,1,0,0,0,54,55,1,0,0,0,54,52,1,0,0,0,55,58,
	1,0,0,0,56,54,1,0,0,0,57,59,5,13,0,0,58,57,1,0,0,0,58,59,1,0,0,0,59,60,
	1,0,0,0,60,84,5,10,0,0,61,65,5,35,0,0,62,64,9,0,0,0,63,62,1,0,0,0,64,67,
	1,0,0,0,65,66,1,0,0,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,68,70,5,
	13,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,84,5,10,0,0,72,73,5,
	47,0,0,73,74,5,42,0,0,74,78,1,0,0,0,75,77,9,0,0,0,76,75,1,0,0,0,77,80,1,
	0,0,0,78,79,1,0,0,0,78,76,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,5,42,
	0,0,82,84,5,47,0,0,83,48,1,0,0,0,83,61,1,0,0,0,83,72,1,0,0,0,84,85,1,0,
	0,0,85,86,6,7,1,0,86,16,1,0,0,0,87,89,7,2,0,0,88,87,1,0,0,0,89,90,1,0,0,
	0,90,88,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,6,8,0,0,93,18,1,0,0,0,
	11,0,30,36,44,54,58,65,69,78,83,90,2,6,0,0,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NamedConfLexer.__ATN) {
			NamedConfLexer.__ATN = new ATNDeserializer().deserialize(NamedConfLexer._serializedATN);
		}

		return NamedConfLexer.__ATN;
	}


	static DecisionsToDFA = NamedConfLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}