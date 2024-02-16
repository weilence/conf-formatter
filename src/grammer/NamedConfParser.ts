// Generated from NamedConf.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import NamedConfListener from "./NamedConfListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class NamedConfParser extends Parser {
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
	public static readonly RULE_prog = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_value = 2;
	public static readonly RULE_struct = 3;
	public static readonly RULE_acl = 4;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statement", "value", "struct", "acl",
	];
	public get grammarFileName(): string { return "NamedConf.g4"; }
	public get literalNames(): (string | null)[] { return NamedConfParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return NamedConfParser.symbolicNames; }
	public get ruleNames(): string[] { return NamedConfParser.ruleNames; }
	public get serializedATN(): number[] { return NamedConfParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, NamedConfParser._ATN, NamedConfParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, NamedConfParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 116) !== 0)) {
				{
				{
				this.state = 10;
				this.statement();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 16;
			this.match(NamedConfParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, NamedConfParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.value();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 116) !== 0));
			this.state = 23;
			this.match(NamedConfParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, NamedConfParser.RULE_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 25;
				this.match(NamedConfParser.IDENTIFIER);
				}
				break;
			case 2:
				{
				this.state = 26;
				this.match(NamedConfParser.STRING);
				}
				break;
			case 3:
				{
				this.state = 27;
				this.acl();
				}
				break;
			case 4:
				{
				this.state = 28;
				this.struct();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public struct(): StructContext {
		let localctx: StructContext = new StructContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, NamedConfParser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
			this.match(NamedConfParser.T__1);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 116) !== 0)) {
				{
				{
				this.state = 32;
				this.statement();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this.match(NamedConfParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public acl(): AclContext {
		let localctx: AclContext = new AclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, NamedConfParser.RULE_acl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 40;
				this.match(NamedConfParser.T__3);
				}
			}

			this.state = 43;
			this.match(NamedConfParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,10,46,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,1,0,1,
	1,4,1,20,8,1,11,1,12,1,21,1,1,1,1,1,2,1,2,1,2,1,2,3,2,30,8,2,1,3,1,3,5,
	3,34,8,3,10,3,12,3,37,9,3,1,3,1,3,1,4,3,4,42,8,4,1,4,1,4,1,4,0,0,5,0,2,
	4,6,8,0,0,47,0,13,1,0,0,0,2,19,1,0,0,0,4,29,1,0,0,0,6,31,1,0,0,0,8,41,1,
	0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,
	0,0,14,16,1,0,0,0,15,13,1,0,0,0,16,17,5,0,0,1,17,1,1,0,0,0,18,20,3,4,2,
	0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,
	23,24,5,1,0,0,24,3,1,0,0,0,25,30,5,5,0,0,26,30,5,6,0,0,27,30,3,8,4,0,28,
	30,3,6,3,0,29,25,1,0,0,0,29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,5,
	1,0,0,0,31,35,5,2,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,
	0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,3,0,0,39,7,1,0,
	0,0,40,42,5,4,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,6,0,
	0,44,9,1,0,0,0,5,13,21,29,35,41];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NamedConfParser.__ATN) {
			NamedConfParser.__ATN = new ATNDeserializer().deserialize(NamedConfParser._serializedATN);
		}

		return NamedConfParser.__ATN;
	}


	static DecisionsToDFA = NamedConfParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: NamedConfParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(NamedConfParser.EOF, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return NamedConfParser.RULE_prog;
	}
	public enterRule(listener: NamedConfListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: NamedConfListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: NamedConfParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
    public get ruleIndex(): number {
    	return NamedConfParser.RULE_statement;
	}
	public enterRule(listener: NamedConfListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: NamedConfListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: NamedConfParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(NamedConfParser.IDENTIFIER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(NamedConfParser.STRING, 0);
	}
	public acl(): AclContext {
		return this.getTypedRuleContext(AclContext, 0) as AclContext;
	}
	public struct(): StructContext {
		return this.getTypedRuleContext(StructContext, 0) as StructContext;
	}
    public get ruleIndex(): number {
    	return NamedConfParser.RULE_value;
	}
	public enterRule(listener: NamedConfListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: NamedConfListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class StructContext extends ParserRuleContext {
	constructor(parser?: NamedConfParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return NamedConfParser.RULE_struct;
	}
	public enterRule(listener: NamedConfListener): void {
	    if(listener.enterStruct) {
	 		listener.enterStruct(this);
		}
	}
	public exitRule(listener: NamedConfListener): void {
	    if(listener.exitStruct) {
	 		listener.exitStruct(this);
		}
	}
}


export class AclContext extends ParserRuleContext {
	constructor(parser?: NamedConfParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(NamedConfParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return NamedConfParser.RULE_acl;
	}
	public enterRule(listener: NamedConfListener): void {
	    if(listener.enterAcl) {
	 		listener.enterAcl(this);
		}
	}
	public exitRule(listener: NamedConfListener): void {
	    if(listener.exitAcl) {
	 		listener.exitAcl(this);
		}
	}
}
