// Generated from NamedConf.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./NamedConfParser";
import { StatementContext } from "./NamedConfParser";
import { ValueContext } from "./NamedConfParser";
import { StructContext } from "./NamedConfParser";
import { AclContext } from "./NamedConfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `NamedConfParser`.
 */
export default class NamedConfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `NamedConfParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `NamedConfParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `NamedConfParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `NamedConfParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `NamedConfParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `NamedConfParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `NamedConfParser.struct`.
	 * @param ctx the parse tree
	 */
	enterStruct?: (ctx: StructContext) => void;
	/**
	 * Exit a parse tree produced by `NamedConfParser.struct`.
	 * @param ctx the parse tree
	 */
	exitStruct?: (ctx: StructContext) => void;
	/**
	 * Enter a parse tree produced by `NamedConfParser.acl`.
	 * @param ctx the parse tree
	 */
	enterAcl?: (ctx: AclContext) => void;
	/**
	 * Exit a parse tree produced by `NamedConfParser.acl`.
	 * @param ctx the parse tree
	 */
	exitAcl?: (ctx: AclContext) => void;
}

