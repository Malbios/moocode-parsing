// Generated from c://dev//moocode-utils//moocode-parsing//src//grammar//MoocodeParser.g4 by ANTLR 4.13.1
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
import MoocodeParserListener from "./MoocodeParserListener.js";
import MoocodeParserVisitor from "./MoocodeParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MoocodeParser extends Parser {
	public static readonly WHITESPACES = 1;
	public static readonly BREAK = 2;
	public static readonly CONTINUE = 3;
	public static readonly ELSE = 4;
	public static readonly ELSEIF = 5;
	public static readonly ENDFOR = 6;
	public static readonly ENDFORK = 7;
	public static readonly ENDIF = 8;
	public static readonly ENDTRY = 9;
	public static readonly ENDWHILE = 10;
	public static readonly EXCEPT = 11;
	public static readonly FALSE = 12;
	public static readonly FINALLY = 13;
	public static readonly FOR = 14;
	public static readonly FORK = 15;
	public static readonly IF = 16;
	public static readonly IN = 17;
	public static readonly RETURN = 18;
	public static readonly TRUE = 19;
	public static readonly TRY = 20;
	public static readonly WHILE = 21;
	public static readonly E_NONE = 22;
	public static readonly E_TYPE = 23;
	public static readonly E_DIV = 24;
	public static readonly E_PERM = 25;
	public static readonly E_PROPNF = 26;
	public static readonly E_VERBNF = 27;
	public static readonly E_VARNF = 28;
	public static readonly E_INVIND = 29;
	public static readonly E_RECMOVE = 30;
	public static readonly E_MAXREC = 31;
	public static readonly E_RANGE = 32;
	public static readonly E_ARGS = 33;
	public static readonly E_NACC = 34;
	public static readonly E_INVARG = 35;
	public static readonly E_QUOTA = 36;
	public static readonly E_FLOAT = 37;
	public static readonly E_FILE = 38;
	public static readonly E_EXEC = 39;
	public static readonly E_INTRPT = 40;
	public static readonly ANY_ERROR = 41;
	public static readonly IDENTIFIER = 42;
	public static readonly INTEGER_LITERAL = 43;
	public static readonly FLOAT_LITERAL = 44;
	public static readonly STRING_LITERAL = 45;
	public static readonly ARROW = 46;
	public static readonly AT = 47;
	public static readonly BIT_AND = 48;
	public static readonly BIT_OR = 49;
	public static readonly BIT_XOR = 50;
	public static readonly CLOSE_BRACE = 51;
	public static readonly CLOSE_BRACKET = 52;
	public static readonly CLOSE_PARENS = 53;
	public static readonly COLON = 54;
	public static readonly COMMA = 55;
	public static readonly DIV = 56;
	public static readonly DOLLAR = 57;
	public static readonly DOT = 58;
	public static readonly EQUALS = 59;
	public static readonly LOG_SHIFT_RIGHT = 60;
	public static readonly LOG_SHIFT_LEFT = 61;
	public static readonly MINUS = 62;
	public static readonly OP_AND = 63;
	public static readonly OP_EQ = 64;
	public static readonly OP_GE = 65;
	public static readonly OP_GT = 66;
	public static readonly OP_LE = 67;
	public static readonly OP_LT = 68;
	public static readonly OP_NE = 69;
	public static readonly OP_NOT = 70;
	public static readonly OP_OR = 71;
	public static readonly OP_RANGE = 72;
	public static readonly OPEN_BRACE = 73;
	public static readonly OPEN_BRACKET = 74;
	public static readonly OPEN_PARENS = 75;
	public static readonly PERCENT = 76;
	public static readonly PIPE = 77;
	public static readonly PLUS = 78;
	public static readonly QUESTION_MARK = 79;
	public static readonly SEMICOLON = 80;
	public static readonly SHARP = 81;
	public static readonly SINGLE_QUOTE = 82;
	public static readonly STAR = 83;
	public static readonly THIN_ARROW = 84;
	public static readonly TICK = 85;
	public static readonly WAVE = 86;
	public static readonly ANY = 87;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_moocode = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_statements = 2;
	public static readonly RULE_empty_statement = 3;
	public static readonly RULE_comment = 4;
	public static readonly RULE_if_statement = 5;
	public static readonly RULE_if_expression = 6;
	public static readonly RULE_elseif_expression = 7;
	public static readonly RULE_else_expression = 8;
	public static readonly RULE_return_statement = 9;
	public static readonly RULE_non_empty_return = 10;
	public static readonly RULE_empty_return = 11;
	public static readonly RULE_for_loop_statement = 12;
	public static readonly RULE_continue_statement = 13;
	public static readonly RULE_empty_continue = 14;
	public static readonly RULE_non_empty_continue = 15;
	public static readonly RULE_break_statement = 16;
	public static readonly RULE_empty_break = 17;
	public static readonly RULE_non_empty_break = 18;
	public static readonly RULE_while_loop_statement = 19;
	public static readonly RULE_try_statement = 20;
	public static readonly RULE_try_except = 21;
	public static readonly RULE_try_finally = 22;
	public static readonly RULE_fork_statement = 23;
	public static readonly RULE_error_codes = 24;
	public static readonly RULE_expression = 25;
	public static readonly RULE_assignment = 26;
	public static readonly RULE_assignment_operator = 27;
	public static readonly RULE_non_assignment = 28;
	public static readonly RULE_conditional_expression = 29;
	public static readonly RULE_conditional_in_expression = 30;
	public static readonly RULE_conditional_or_expression = 31;
	public static readonly RULE_conditional_and_expression = 32;
	public static readonly RULE_inclusive_or_expression = 33;
	public static readonly RULE_exclusive_or_expression = 34;
	public static readonly RULE_and_expression = 35;
	public static readonly RULE_equality_expression = 36;
	public static readonly RULE_relational_expression = 37;
	public static readonly RULE_shift_expression = 38;
	public static readonly RULE_additive_expression = 39;
	public static readonly RULE_multiplicative_expression = 40;
	public static readonly RULE_unary_expression = 41;
	public static readonly RULE_negative_unary_expression = 42;
	public static readonly RULE_negated_unary_expression = 43;
	public static readonly RULE_complement_unary_expression = 44;
	public static readonly RULE_primary_expression = 45;
	public static readonly RULE_property_access = 46;
	public static readonly RULE_verb_invocation = 47;
	public static readonly RULE_expressions = 48;
	public static readonly RULE_bf_invocation = 49;
	public static readonly RULE_primary_expression_start = 50;
	public static readonly RULE_error_catcher = 51;
	public static readonly RULE_list = 52;
	public static readonly RULE_map = 53;
	public static readonly RULE_map_entry = 54;
	public static readonly RULE_indexer = 55;
	public static readonly RULE_list_slicer = 56;
	public static readonly RULE_object_reference = 57;
	public static readonly RULE_object_id = 58;
	public static readonly RULE_corified_object = 59;
	public static readonly RULE_literal = 60;
	public static readonly RULE_bool_literal = 61;
	public static readonly RULE_string_literal = 62;
	public static readonly RULE_integer_literal = 63;
	public static readonly RULE_float_literal = 64;
	public static readonly RULE_dollar_literal = 65;
	public static readonly RULE_error_code = 66;
	public static readonly RULE_identifier = 67;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'break'", "'continue'", 
                                                            "'else'", "'elseif'", 
                                                            "'endfor'", 
                                                            "'endfork'", 
                                                            "'endif'", "'endtry'", 
                                                            "'endwhile'", 
                                                            "'except'", 
                                                            "'false'", "'finally'", 
                                                            "'for'", "'fork'", 
                                                            "'if'", "'in'", 
                                                            "'return'", 
                                                            "'true'", "'try'", 
                                                            "'while'", "'E_NONE'", 
                                                            "'E_TYPE'", 
                                                            "'E_DIV'", "'E_PERM'", 
                                                            "'E_PROPNF'", 
                                                            "'E_VERBNF'", 
                                                            "'E_VARNF'", 
                                                            "'E_INVIND'", 
                                                            "'E_RECMOVE'", 
                                                            "'E_MAXREC'", 
                                                            "'E_RANGE'", 
                                                            "'E_ARGS'", 
                                                            "'E_NACC'", 
                                                            "'E_INVARG'", 
                                                            "'E_QUOTA'", 
                                                            "'E_FLOAT'", 
                                                            "'E_FILE'", 
                                                            "'E_EXEC'", 
                                                            "'E_INTRPT'", 
                                                            "'ANY'", null, 
                                                            null, null, 
                                                            null, "'=>'", 
                                                            "'@'", "'&.'", 
                                                            "'|.'", "'^.'", 
                                                            "'}'", "']'", 
                                                            "')'", "':'", 
                                                            "','", "'/'", 
                                                            "'$'", "'.'", 
                                                            "'='", "'>>'", 
                                                            "'<<'", "'-'", 
                                                            "'&&'", "'=='", 
                                                            "'>='", "'>'", 
                                                            "'<='", "'<'", 
                                                            "'!='", "'!'", 
                                                            "'||'", "'..'", 
                                                            "'{'", "'['", 
                                                            "'('", "'%'", 
                                                            "'|'", "'+'", 
                                                            "'?'", "';'", 
                                                            "'#'", "'''", 
                                                            "'*'", "'->'", 
                                                            "'`'", "'~'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WHITESPACES", 
                                                             "BREAK", "CONTINUE", 
                                                             "ELSE", "ELSEIF", 
                                                             "ENDFOR", "ENDFORK", 
                                                             "ENDIF", "ENDTRY", 
                                                             "ENDWHILE", 
                                                             "EXCEPT", "FALSE", 
                                                             "FINALLY", 
                                                             "FOR", "FORK", 
                                                             "IF", "IN", 
                                                             "RETURN", "TRUE", 
                                                             "TRY", "WHILE", 
                                                             "E_NONE", "E_TYPE", 
                                                             "E_DIV", "E_PERM", 
                                                             "E_PROPNF", 
                                                             "E_VERBNF", 
                                                             "E_VARNF", 
                                                             "E_INVIND", 
                                                             "E_RECMOVE", 
                                                             "E_MAXREC", 
                                                             "E_RANGE", 
                                                             "E_ARGS", "E_NACC", 
                                                             "E_INVARG", 
                                                             "E_QUOTA", 
                                                             "E_FLOAT", 
                                                             "E_FILE", "E_EXEC", 
                                                             "E_INTRPT", 
                                                             "ANY_ERROR", 
                                                             "IDENTIFIER", 
                                                             "INTEGER_LITERAL", 
                                                             "FLOAT_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "ARROW", "AT", 
                                                             "BIT_AND", 
                                                             "BIT_OR", "BIT_XOR", 
                                                             "CLOSE_BRACE", 
                                                             "CLOSE_BRACKET", 
                                                             "CLOSE_PARENS", 
                                                             "COLON", "COMMA", 
                                                             "DIV", "DOLLAR", 
                                                             "DOT", "EQUALS", 
                                                             "LOG_SHIFT_RIGHT", 
                                                             "LOG_SHIFT_LEFT", 
                                                             "MINUS", "OP_AND", 
                                                             "OP_EQ", "OP_GE", 
                                                             "OP_GT", "OP_LE", 
                                                             "OP_LT", "OP_NE", 
                                                             "OP_NOT", "OP_OR", 
                                                             "OP_RANGE", 
                                                             "OPEN_BRACE", 
                                                             "OPEN_BRACKET", 
                                                             "OPEN_PARENS", 
                                                             "PERCENT", 
                                                             "PIPE", "PLUS", 
                                                             "QUESTION_MARK", 
                                                             "SEMICOLON", 
                                                             "SHARP", "SINGLE_QUOTE", 
                                                             "STAR", "THIN_ARROW", 
                                                             "TICK", "WAVE", 
                                                             "ANY" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"moocode", "statement", "statements", "empty_statement", "comment", "if_statement", 
		"if_expression", "elseif_expression", "else_expression", "return_statement", 
		"non_empty_return", "empty_return", "for_loop_statement", "continue_statement", 
		"empty_continue", "non_empty_continue", "break_statement", "empty_break", 
		"non_empty_break", "while_loop_statement", "try_statement", "try_except", 
		"try_finally", "fork_statement", "error_codes", "expression", "assignment", 
		"assignment_operator", "non_assignment", "conditional_expression", "conditional_in_expression", 
		"conditional_or_expression", "conditional_and_expression", "inclusive_or_expression", 
		"exclusive_or_expression", "and_expression", "equality_expression", "relational_expression", 
		"shift_expression", "additive_expression", "multiplicative_expression", 
		"unary_expression", "negative_unary_expression", "negated_unary_expression", 
		"complement_unary_expression", "primary_expression", "property_access", 
		"verb_invocation", "expressions", "bf_invocation", "primary_expression_start", 
		"error_catcher", "list", "map", "map_entry", "indexer", "list_slicer", 
		"object_reference", "object_id", "corified_object", "literal", "bool_literal", 
		"string_literal", "integer_literal", "float_literal", "dollar_literal", 
		"error_code", "identifier",
	];
	public get grammarFileName(): string { return "MoocodeParser.g4"; }
	public get literalNames(): (string | null)[] { return MoocodeParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MoocodeParser.symbolicNames; }
	public get ruleNames(): string[] { return MoocodeParser.ruleNames; }
	public get serializedATN(): number[] { return MoocodeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MoocodeParser._ATN, MoocodeParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public moocode(): MoocodeContext {
		let localctx: MoocodeContext = new MoocodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MoocodeParser.RULE_moocode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294823948) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1107344895) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 101433) !== 0)) {
				{
				{
				this.state = 136;
				this.statement();
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 142;
			this.match(MoocodeParser.EOF);
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
		this.enterRule(localctx, 2, MoocodeParser.RULE_statement);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 144;
				this.empty_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 145;
				this.comment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 146;
				this.expression();
				this.state = 147;
				this.match(MoocodeParser.SEMICOLON);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 149;
				this.return_statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 150;
				this.continue_statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 151;
				this.break_statement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 152;
				this.fork_statement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 153;
				this.try_statement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 154;
				this.if_statement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 155;
				this.for_loop_statement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 156;
				this.while_loop_statement();
				}
				break;
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
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MoocodeParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294823948) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1107344895) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 101433) !== 0)) {
				{
				{
				this.state = 159;
				this.statement();
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public empty_statement(): Empty_statementContext {
		let localctx: Empty_statementContext = new Empty_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MoocodeParser.RULE_empty_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 165;
			this.match(MoocodeParser.SEMICOLON);
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
	public comment(): CommentContext {
		let localctx: CommentContext = new CommentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MoocodeParser.RULE_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			this.match(MoocodeParser.STRING_LITERAL);
			this.state = 168;
			this.match(MoocodeParser.SEMICOLON);
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
	public if_statement(): If_statementContext {
		let localctx: If_statementContext = new If_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MoocodeParser.RULE_if_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.if_expression();
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 171;
				this.elseif_expression();
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 177;
				this.else_expression();
				}
			}

			this.state = 180;
			this.match(MoocodeParser.ENDIF);
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
	public if_expression(): If_expressionContext {
		let localctx: If_expressionContext = new If_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MoocodeParser.RULE_if_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.match(MoocodeParser.IF);
			this.state = 183;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 184;
			localctx._conditions = this.expression();
			this.state = 185;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 186;
			localctx._body = this.statements();
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
	public elseif_expression(): Elseif_expressionContext {
		let localctx: Elseif_expressionContext = new Elseif_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MoocodeParser.RULE_elseif_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.match(MoocodeParser.ELSEIF);
			this.state = 189;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 190;
			localctx._conditions = this.expression();
			this.state = 191;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 192;
			localctx._body = this.statements();
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
	public else_expression(): Else_expressionContext {
		let localctx: Else_expressionContext = new Else_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MoocodeParser.RULE_else_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.match(MoocodeParser.ELSE);
			this.state = 195;
			localctx._body = this.statements();
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
	public return_statement(): Return_statementContext {
		let localctx: Return_statementContext = new Return_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MoocodeParser.RULE_return_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 197;
				this.non_empty_return();
				}
				break;
			case 2:
				{
				this.state = 198;
				this.empty_return();
				}
				break;
			}
			this.state = 201;
			this.match(MoocodeParser.SEMICOLON);
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
	public non_empty_return(): Non_empty_returnContext {
		let localctx: Non_empty_returnContext = new Non_empty_returnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MoocodeParser.RULE_non_empty_return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.match(MoocodeParser.RETURN);
			this.state = 204;
			this.expression();
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
	public empty_return(): Empty_returnContext {
		let localctx: Empty_returnContext = new Empty_returnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MoocodeParser.RULE_empty_return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			this.match(MoocodeParser.RETURN);
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
	public for_loop_statement(): For_loop_statementContext {
		let localctx: For_loop_statementContext = new For_loop_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MoocodeParser.RULE_for_loop_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this.match(MoocodeParser.FOR);
			this.state = 209;
			localctx._value = this.identifier();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55) {
				{
				this.state = 210;
				this.match(MoocodeParser.COMMA);
				this.state = 211;
				localctx._key = this.identifier();
				}
			}

			this.state = 214;
			this.match(MoocodeParser.IN);
			this.state = 225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 75:
				{
				this.state = 215;
				this.match(MoocodeParser.OPEN_PARENS);
				this.state = 216;
				localctx._range = this.expression();
				this.state = 217;
				this.match(MoocodeParser.CLOSE_PARENS);
				}
				break;
			case 74:
				{
				this.state = 219;
				this.match(MoocodeParser.OPEN_BRACKET);
				this.state = 220;
				localctx._start = this.expression();
				this.state = 221;
				this.match(MoocodeParser.OP_RANGE);
				this.state = 222;
				localctx._end = this.expression();
				this.state = 223;
				this.match(MoocodeParser.CLOSE_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 227;
			localctx._body = this.statements();
			this.state = 228;
			this.match(MoocodeParser.ENDFOR);
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
	public continue_statement(): Continue_statementContext {
		let localctx: Continue_statementContext = new Continue_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MoocodeParser.RULE_continue_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 230;
				this.empty_continue();
				}
				break;
			case 2:
				{
				this.state = 231;
				this.non_empty_continue();
				}
				break;
			}
			this.state = 234;
			this.match(MoocodeParser.SEMICOLON);
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
	public empty_continue(): Empty_continueContext {
		let localctx: Empty_continueContext = new Empty_continueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MoocodeParser.RULE_empty_continue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			this.match(MoocodeParser.CONTINUE);
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
	public non_empty_continue(): Non_empty_continueContext {
		let localctx: Non_empty_continueContext = new Non_empty_continueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MoocodeParser.RULE_non_empty_continue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this.match(MoocodeParser.CONTINUE);
			this.state = 239;
			this.identifier();
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
	public break_statement(): Break_statementContext {
		let localctx: Break_statementContext = new Break_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, MoocodeParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 241;
				this.empty_break();
				}
				break;
			case 2:
				{
				this.state = 242;
				this.non_empty_break();
				}
				break;
			}
			this.state = 245;
			this.match(MoocodeParser.SEMICOLON);
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
	public empty_break(): Empty_breakContext {
		let localctx: Empty_breakContext = new Empty_breakContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, MoocodeParser.RULE_empty_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
			this.match(MoocodeParser.BREAK);
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
	public non_empty_break(): Non_empty_breakContext {
		let localctx: Non_empty_breakContext = new Non_empty_breakContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, MoocodeParser.RULE_non_empty_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this.match(MoocodeParser.BREAK);
			this.state = 250;
			this.identifier();
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
	public while_loop_statement(): While_loop_statementContext {
		let localctx: While_loop_statementContext = new While_loop_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, MoocodeParser.RULE_while_loop_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 252;
			this.match(MoocodeParser.WHILE);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 253;
				localctx._outer_name = this.identifier();
				}
			}

			this.state = 256;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 257;
				localctx._inner_name = this.identifier();
				this.state = 258;
				this.match(MoocodeParser.EQUALS);
				}
				break;
			}
			this.state = 262;
			localctx._conditions = this.expression();
			this.state = 263;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 264;
			this.statements();
			this.state = 265;
			this.match(MoocodeParser.ENDWHILE);
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
	public try_statement(): Try_statementContext {
		let localctx: Try_statementContext = new Try_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, MoocodeParser.RULE_try_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this.match(MoocodeParser.TRY);
			this.state = 268;
			this.statements();
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 269;
					this.try_except();
					}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===11);
				}
				break;
			case 2:
				{
				this.state = 274;
				this.try_finally();
				}
				break;
			case 3:
				{
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 275;
					this.try_except();
					}
					}
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===11);
				this.state = 280;
				this.try_finally();
				}
				break;
			}
			this.state = 284;
			this.match(MoocodeParser.ENDTRY);
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
	public try_except(): Try_exceptContext {
		let localctx: Try_exceptContext = new Try_exceptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, MoocodeParser.RULE_try_except);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			this.match(MoocodeParser.EXCEPT);
			this.state = 287;
			this.identifier();
			this.state = 288;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
				{
				this.state = 289;
				this.error_codes();
				}
				break;
			case 41:
				{
				this.state = 290;
				this.match(MoocodeParser.ANY_ERROR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 293;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 294;
			this.statements();
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
	public try_finally(): Try_finallyContext {
		let localctx: Try_finallyContext = new Try_finallyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, MoocodeParser.RULE_try_finally);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this.match(MoocodeParser.FINALLY);
			this.state = 297;
			this.statements();
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
	public fork_statement(): Fork_statementContext {
		let localctx: Fork_statementContext = new Fork_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, MoocodeParser.RULE_fork_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 299;
			this.match(MoocodeParser.FORK);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 300;
				localctx._name = this.identifier();
				}
			}

			this.state = 303;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 304;
			localctx._schedule = this.expression();
			this.state = 305;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 306;
			this.statements();
			this.state = 307;
			this.match(MoocodeParser.ENDFORK);
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
	public error_codes(): Error_codesContext {
		let localctx: Error_codesContext = new Error_codesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, MoocodeParser.RULE_error_codes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this.error_code();
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 310;
				this.match(MoocodeParser.COMMA);
				this.state = 311;
				this.error_code();
				}
				}
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, MoocodeParser.RULE_expression);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 317;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 318;
				this.non_assignment();
				}
				break;
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
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, MoocodeParser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this.unary_expression();
			this.state = 322;
			this.assignment_operator();
			this.state = 323;
			this.expression();
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
	public assignment_operator(): Assignment_operatorContext {
		let localctx: Assignment_operatorContext = new Assignment_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MoocodeParser.RULE_assignment_operator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 325;
			this.match(MoocodeParser.EQUALS);
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
	public non_assignment(): Non_assignmentContext {
		let localctx: Non_assignmentContext = new Non_assignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, MoocodeParser.RULE_non_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
			this.conditional_expression();
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
	public conditional_expression(): Conditional_expressionContext {
		let localctx: Conditional_expressionContext = new Conditional_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, MoocodeParser.RULE_conditional_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 329;
			localctx._if_conditions = this.conditional_in_expression();
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===79) {
				{
				this.state = 330;
				this.match(MoocodeParser.QUESTION_MARK);
				this.state = 331;
				localctx._true_ex = this.expression();
				this.state = 332;
				this.match(MoocodeParser.PIPE);
				this.state = 333;
				localctx._false_ex = this.expression();
				}
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
	public conditional_in_expression(): Conditional_in_expressionContext {
		let localctx: Conditional_in_expressionContext = new Conditional_in_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, MoocodeParser.RULE_conditional_in_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 337;
			localctx._left = this.conditional_or_expression();
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 338;
				this.match(MoocodeParser.IN);
				this.state = 339;
				localctx._right = this.conditional_or_expression();
				}
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
	public conditional_or_expression(): Conditional_or_expressionContext {
		let localctx: Conditional_or_expressionContext = new Conditional_or_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, MoocodeParser.RULE_conditional_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this.conditional_and_expression();
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 343;
				this.match(MoocodeParser.OP_OR);
				this.state = 344;
				this.conditional_and_expression();
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public conditional_and_expression(): Conditional_and_expressionContext {
		let localctx: Conditional_and_expressionContext = new Conditional_and_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, MoocodeParser.RULE_conditional_and_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.inclusive_or_expression();
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===63) {
				{
				{
				this.state = 351;
				this.match(MoocodeParser.OP_AND);
				this.state = 352;
				this.inclusive_or_expression();
				}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public inclusive_or_expression(): Inclusive_or_expressionContext {
		let localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, MoocodeParser.RULE_inclusive_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.exclusive_or_expression();
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 359;
				this.match(MoocodeParser.BIT_OR);
				this.state = 360;
				this.exclusive_or_expression();
				}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public exclusive_or_expression(): Exclusive_or_expressionContext {
		let localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, MoocodeParser.RULE_exclusive_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.and_expression();
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===50) {
				{
				{
				this.state = 367;
				this.match(MoocodeParser.BIT_XOR);
				this.state = 368;
				this.and_expression();
				}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public and_expression(): And_expressionContext {
		let localctx: And_expressionContext = new And_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, MoocodeParser.RULE_and_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.equality_expression();
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===48) {
				{
				{
				this.state = 375;
				this.match(MoocodeParser.BIT_AND);
				this.state = 376;
				this.equality_expression();
				}
				}
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public equality_expression(): Equality_expressionContext {
		let localctx: Equality_expressionContext = new Equality_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, MoocodeParser.RULE_equality_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.relational_expression();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64 || _la===69) {
				{
				{
				this.state = 383;
				_la = this._input.LA(1);
				if(!(_la===64 || _la===69)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 384;
				this.relational_expression();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public relational_expression(): Relational_expressionContext {
		let localctx: Relational_expressionContext = new Relational_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, MoocodeParser.RULE_relational_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 390;
			this.shift_expression();
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 15) !== 0)) {
				{
				{
				this.state = 391;
				_la = this._input.LA(1);
				if(!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 15) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 392;
				this.shift_expression();
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public shift_expression(): Shift_expressionContext {
		let localctx: Shift_expressionContext = new Shift_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, MoocodeParser.RULE_shift_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 398;
			this.additive_expression();
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===60 || _la===61) {
				{
				{
				this.state = 399;
				_la = this._input.LA(1);
				if(!(_la===60 || _la===61)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 400;
				this.additive_expression();
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public additive_expression(): Additive_expressionContext {
		let localctx: Additive_expressionContext = new Additive_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, MoocodeParser.RULE_additive_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 406;
			this.multiplicative_expression();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===62 || _la===78) {
				{
				{
				this.state = 407;
				_la = this._input.LA(1);
				if(!(_la===62 || _la===78)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 408;
				this.multiplicative_expression();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public multiplicative_expression(): Multiplicative_expressionContext {
		let localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, MoocodeParser.RULE_multiplicative_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 414;
			this.unary_expression();
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 135266305) !== 0)) {
				{
				{
				this.state = 415;
				_la = this._input.LA(1);
				if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 135266305) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 416;
				this.unary_expression();
				}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public unary_expression(): Unary_expressionContext {
		let localctx: Unary_expressionContext = new Unary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, MoocodeParser.RULE_unary_expression);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 19:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 42:
			case 43:
			case 44:
			case 45:
			case 47:
			case 57:
			case 73:
			case 74:
			case 75:
			case 81:
			case 85:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 422;
				this.primary_expression();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 423;
				this.negative_unary_expression();
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 424;
				this.negated_unary_expression();
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 425;
				this.complement_unary_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public negative_unary_expression(): Negative_unary_expressionContext {
		let localctx: Negative_unary_expressionContext = new Negative_unary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, MoocodeParser.RULE_negative_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 428;
			this.match(MoocodeParser.MINUS);
			this.state = 429;
			this.unary_expression();
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
	public negated_unary_expression(): Negated_unary_expressionContext {
		let localctx: Negated_unary_expressionContext = new Negated_unary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, MoocodeParser.RULE_negated_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
			this.match(MoocodeParser.OP_NOT);
			this.state = 432;
			this.unary_expression();
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
	public complement_unary_expression(): Complement_unary_expressionContext {
		let localctx: Complement_unary_expressionContext = new Complement_unary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, MoocodeParser.RULE_complement_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 434;
			this.match(MoocodeParser.WAVE);
			this.state = 435;
			this.unary_expression();
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
	public primary_expression(): Primary_expressionContext {
		let localctx: Primary_expressionContext = new Primary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, MoocodeParser.RULE_primary_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 437;
			localctx._pe = this.primary_expression_start();
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 3145745) !== 0)) {
				{
				this.state = 442;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 74:
					{
					this.state = 438;
					this.indexer();
					}
					break;
				case 58:
					{
					this.state = 439;
					this.property_access();
					}
					break;
				case 54:
					{
					this.state = 440;
					this.verb_invocation();
					}
					break;
				case 75:
					{
					this.state = 441;
					this.bf_invocation();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public property_access(): Property_accessContext {
		let localctx: Property_accessContext = new Property_accessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, MoocodeParser.RULE_property_access);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 447;
			this.match(MoocodeParser.DOT);
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				{
				this.state = 448;
				this.identifier();
				}
				break;
			case 75:
				{
				this.state = 449;
				this.match(MoocodeParser.OPEN_PARENS);
				this.state = 450;
				localctx._computed_prop_arguments = this.expression();
				this.state = 451;
				this.match(MoocodeParser.CLOSE_PARENS);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public verb_invocation(): Verb_invocationContext {
		let localctx: Verb_invocationContext = new Verb_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, MoocodeParser.RULE_verb_invocation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 455;
			this.match(MoocodeParser.COLON);
			this.state = 461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				{
				this.state = 456;
				this.identifier();
				}
				break;
			case 75:
				{
				this.state = 457;
				this.match(MoocodeParser.OPEN_PARENS);
				this.state = 458;
				localctx._computed_verb_arguments = this.expression();
				this.state = 459;
				this.match(MoocodeParser.CLOSE_PARENS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 463;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 464;
			localctx._arguments = this.expressions();
			this.state = 465;
			this.match(MoocodeParser.CLOSE_PARENS);
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
	public expressions(): ExpressionsContext {
		let localctx: ExpressionsContext = new ExpressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, MoocodeParser.RULE_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1107344895) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 100409) !== 0)) {
				{
				this.state = 467;
				this.expression();
				}
			}

			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 470;
				this.match(MoocodeParser.COMMA);
				this.state = 471;
				this.expression();
				}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public bf_invocation(): Bf_invocationContext {
		let localctx: Bf_invocationContext = new Bf_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, MoocodeParser.RULE_bf_invocation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 477;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 478;
			localctx._arguments = this.expressions();
			this.state = 479;
			this.match(MoocodeParser.CLOSE_PARENS);
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
	public primary_expression_start(): Primary_expression_startContext {
		let localctx: Primary_expression_startContext = new Primary_expression_startContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, MoocodeParser.RULE_primary_expression_start);
		try {
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 481;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 482;
				this.literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 483;
				this.error_code();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 484;
				this.object_reference();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 485;
				this.list_slicer();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 486;
				this.list();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 487;
				this.map();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 488;
				this.error_catcher();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 489;
				this.match(MoocodeParser.OPEN_PARENS);
				this.state = 490;
				this.expression();
				this.state = 491;
				this.match(MoocodeParser.CLOSE_PARENS);
				}
				break;
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
	public error_catcher(): Error_catcherContext {
		let localctx: Error_catcherContext = new Error_catcherContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, MoocodeParser.RULE_error_catcher);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 495;
			this.match(MoocodeParser.TICK);
			this.state = 496;
			localctx._try_ = this.expression();
			this.state = 497;
			this.match(MoocodeParser.OP_NOT);
			this.state = 498;
			this.error_codes();
			this.state = 499;
			this.match(MoocodeParser.ARROW);
			this.state = 500;
			localctx._on_error = this.expression();
			this.state = 501;
			this.match(MoocodeParser.SINGLE_QUOTE);
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
	public list(): ListContext {
		let localctx: ListContext = new ListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, MoocodeParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 503;
			this.match(MoocodeParser.OPEN_BRACE);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1107344895) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 100409) !== 0)) {
				{
				this.state = 504;
				this.expression();
				}
			}

			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 507;
				this.match(MoocodeParser.COMMA);
				this.state = 508;
				this.expression();
				}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 514;
			this.match(MoocodeParser.CLOSE_BRACE);
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
	public map(): MapContext {
		let localctx: MapContext = new MapContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, MoocodeParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 516;
			this.match(MoocodeParser.OPEN_BRACKET);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1107344895) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 100409) !== 0)) {
				{
				this.state = 517;
				this.map_entry();
				}
			}

			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 520;
				this.match(MoocodeParser.COMMA);
				this.state = 521;
				this.map_entry();
				}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 527;
			this.match(MoocodeParser.CLOSE_BRACKET);
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
	public map_entry(): Map_entryContext {
		let localctx: Map_entryContext = new Map_entryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, MoocodeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 529;
			localctx._map_key = this.expression();
			this.state = 530;
			this.match(MoocodeParser.THIN_ARROW);
			this.state = 531;
			localctx._map_value = this.expression();
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
	public indexer(): IndexerContext {
		let localctx: IndexerContext = new IndexerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, MoocodeParser.RULE_indexer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 533;
			this.match(MoocodeParser.OPEN_BRACKET);
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 534;
				localctx._argument = this.expression();
				}
				break;
			case 2:
				{
				this.state = 535;
				localctx._start = this.expression();
				this.state = 536;
				this.match(MoocodeParser.OP_RANGE);
				this.state = 537;
				localctx._end = this.expression();
				}
				break;
			}
			this.state = 541;
			this.match(MoocodeParser.CLOSE_BRACKET);
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
	public list_slicer(): List_slicerContext {
		let localctx: List_slicerContext = new List_slicerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, MoocodeParser.RULE_list_slicer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 543;
			this.match(MoocodeParser.AT);
			this.state = 544;
			this.identifier();
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
	public object_reference(): Object_referenceContext {
		let localctx: Object_referenceContext = new Object_referenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, MoocodeParser.RULE_object_reference);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 546;
				this.object_id();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 547;
				this.corified_object();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public object_id(): Object_idContext {
		let localctx: Object_idContext = new Object_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, MoocodeParser.RULE_object_id);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 550;
			this.match(MoocodeParser.SHARP);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 551;
				this.match(MoocodeParser.MINUS);
				}
			}

			this.state = 554;
			this.integer_literal();
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
	public corified_object(): Corified_objectContext {
		let localctx: Corified_objectContext = new Corified_objectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, MoocodeParser.RULE_corified_object);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 556;
			this.match(MoocodeParser.DOLLAR);
			this.state = 557;
			this.identifier();
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
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, MoocodeParser.RULE_literal);
		try {
			this.state = 564;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 559;
				this.bool_literal();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 560;
				this.string_literal();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 561;
				this.integer_literal();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 562;
				this.float_literal();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 563;
				this.dollar_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public bool_literal(): Bool_literalContext {
		let localctx: Bool_literalContext = new Bool_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, MoocodeParser.RULE_bool_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 566;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===19)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public string_literal(): String_literalContext {
		let localctx: String_literalContext = new String_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, MoocodeParser.RULE_string_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this.match(MoocodeParser.STRING_LITERAL);
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
	public integer_literal(): Integer_literalContext {
		let localctx: Integer_literalContext = new Integer_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, MoocodeParser.RULE_integer_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 570;
			this.match(MoocodeParser.INTEGER_LITERAL);
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
	public float_literal(): Float_literalContext {
		let localctx: Float_literalContext = new Float_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, MoocodeParser.RULE_float_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 572;
			this.match(MoocodeParser.FLOAT_LITERAL);
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
	public dollar_literal(): Dollar_literalContext {
		let localctx: Dollar_literalContext = new Dollar_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, MoocodeParser.RULE_dollar_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 574;
			this.match(MoocodeParser.DOLLAR);
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
	public error_code(): Error_codeContext {
		let localctx: Error_codeContext = new Error_codeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, MoocodeParser.RULE_error_code);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 576;
			_la = this._input.LA(1);
			if(!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 524287) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, MoocodeParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 578;
			this.match(MoocodeParser.IDENTIFIER);
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

	public static readonly _serializedATN: number[] = [4,1,87,581,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,
	2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,1,
	0,5,0,138,8,0,10,0,12,0,141,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,3,1,158,8,1,1,2,5,2,161,8,2,10,2,12,2,164,9,2,1,3,1,
	3,1,4,1,4,1,4,1,5,1,5,5,5,173,8,5,10,5,12,5,176,9,5,1,5,3,5,179,8,5,1,5,
	1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,
	3,9,200,8,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,3,12,213,
	8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,226,8,
	12,1,12,1,12,1,12,1,13,1,13,3,13,233,8,13,1,13,1,13,1,14,1,14,1,15,1,15,
	1,15,1,16,1,16,3,16,244,8,16,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,19,1,
	19,3,19,255,8,19,1,19,1,19,1,19,1,19,3,19,261,8,19,1,19,1,19,1,19,1,19,
	1,19,1,20,1,20,1,20,4,20,271,8,20,11,20,12,20,272,1,20,1,20,4,20,277,8,
	20,11,20,12,20,278,1,20,1,20,3,20,283,8,20,1,20,1,20,1,21,1,21,1,21,1,21,
	1,21,3,21,292,8,21,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,3,23,302,8,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,5,24,313,8,24,10,24,12,24,
	316,9,24,1,25,1,25,3,25,320,8,25,1,26,1,26,1,26,1,26,1,27,1,27,1,28,1,28,
	1,29,1,29,1,29,1,29,1,29,1,29,3,29,336,8,29,1,30,1,30,1,30,3,30,341,8,30,
	1,31,1,31,1,31,5,31,346,8,31,10,31,12,31,349,9,31,1,32,1,32,1,32,5,32,354,
	8,32,10,32,12,32,357,9,32,1,33,1,33,1,33,5,33,362,8,33,10,33,12,33,365,
	9,33,1,34,1,34,1,34,5,34,370,8,34,10,34,12,34,373,9,34,1,35,1,35,1,35,5,
	35,378,8,35,10,35,12,35,381,9,35,1,36,1,36,1,36,5,36,386,8,36,10,36,12,
	36,389,9,36,1,37,1,37,1,37,5,37,394,8,37,10,37,12,37,397,9,37,1,38,1,38,
	1,38,5,38,402,8,38,10,38,12,38,405,9,38,1,39,1,39,1,39,5,39,410,8,39,10,
	39,12,39,413,9,39,1,40,1,40,1,40,5,40,418,8,40,10,40,12,40,421,9,40,1,41,
	1,41,1,41,1,41,3,41,427,8,41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,
	44,1,45,1,45,1,45,1,45,1,45,5,45,443,8,45,10,45,12,45,446,9,45,1,46,1,46,
	1,46,1,46,1,46,1,46,3,46,454,8,46,1,47,1,47,1,47,1,47,1,47,1,47,3,47,462,
	8,47,1,47,1,47,1,47,1,47,1,48,3,48,469,8,48,1,48,1,48,5,48,473,8,48,10,
	48,12,48,476,9,48,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,
	1,50,1,50,1,50,1,50,1,50,3,50,494,8,50,1,51,1,51,1,51,1,51,1,51,1,51,1,
	51,1,51,1,52,1,52,3,52,506,8,52,1,52,1,52,5,52,510,8,52,10,52,12,52,513,
	9,52,1,52,1,52,1,53,1,53,3,53,519,8,53,1,53,1,53,5,53,523,8,53,10,53,12,
	53,526,9,53,1,53,1,53,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,
	3,55,540,8,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,3,57,549,8,57,1,58,1,58,
	3,58,553,8,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,3,60,565,
	8,60,1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,66,1,66,1,67,1,
	67,1,67,0,0,68,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
	42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,
	90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
	128,130,132,134,0,7,2,0,64,64,69,69,1,0,65,68,1,0,60,61,2,0,62,62,78,78,
	3,0,56,56,76,76,83,83,2,0,12,12,19,19,1,0,22,40,583,0,139,1,0,0,0,2,157,
	1,0,0,0,4,162,1,0,0,0,6,165,1,0,0,0,8,167,1,0,0,0,10,170,1,0,0,0,12,182,
	1,0,0,0,14,188,1,0,0,0,16,194,1,0,0,0,18,199,1,0,0,0,20,203,1,0,0,0,22,
	206,1,0,0,0,24,208,1,0,0,0,26,232,1,0,0,0,28,236,1,0,0,0,30,238,1,0,0,0,
	32,243,1,0,0,0,34,247,1,0,0,0,36,249,1,0,0,0,38,252,1,0,0,0,40,267,1,0,
	0,0,42,286,1,0,0,0,44,296,1,0,0,0,46,299,1,0,0,0,48,309,1,0,0,0,50,319,
	1,0,0,0,52,321,1,0,0,0,54,325,1,0,0,0,56,327,1,0,0,0,58,329,1,0,0,0,60,
	337,1,0,0,0,62,342,1,0,0,0,64,350,1,0,0,0,66,358,1,0,0,0,68,366,1,0,0,0,
	70,374,1,0,0,0,72,382,1,0,0,0,74,390,1,0,0,0,76,398,1,0,0,0,78,406,1,0,
	0,0,80,414,1,0,0,0,82,426,1,0,0,0,84,428,1,0,0,0,86,431,1,0,0,0,88,434,
	1,0,0,0,90,437,1,0,0,0,92,447,1,0,0,0,94,455,1,0,0,0,96,468,1,0,0,0,98,
	477,1,0,0,0,100,493,1,0,0,0,102,495,1,0,0,0,104,503,1,0,0,0,106,516,1,0,
	0,0,108,529,1,0,0,0,110,533,1,0,0,0,112,543,1,0,0,0,114,548,1,0,0,0,116,
	550,1,0,0,0,118,556,1,0,0,0,120,564,1,0,0,0,122,566,1,0,0,0,124,568,1,0,
	0,0,126,570,1,0,0,0,128,572,1,0,0,0,130,574,1,0,0,0,132,576,1,0,0,0,134,
	578,1,0,0,0,136,138,3,2,1,0,137,136,1,0,0,0,138,141,1,0,0,0,139,137,1,0,
	0,0,139,140,1,0,0,0,140,142,1,0,0,0,141,139,1,0,0,0,142,143,5,0,0,1,143,
	1,1,0,0,0,144,158,3,6,3,0,145,158,3,8,4,0,146,147,3,50,25,0,147,148,5,80,
	0,0,148,158,1,0,0,0,149,158,3,18,9,0,150,158,3,26,13,0,151,158,3,32,16,
	0,152,158,3,46,23,0,153,158,3,40,20,0,154,158,3,10,5,0,155,158,3,24,12,
	0,156,158,3,38,19,0,157,144,1,0,0,0,157,145,1,0,0,0,157,146,1,0,0,0,157,
	149,1,0,0,0,157,150,1,0,0,0,157,151,1,0,0,0,157,152,1,0,0,0,157,153,1,0,
	0,0,157,154,1,0,0,0,157,155,1,0,0,0,157,156,1,0,0,0,158,3,1,0,0,0,159,161,
	3,2,1,0,160,159,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,
	163,5,1,0,0,0,164,162,1,0,0,0,165,166,5,80,0,0,166,7,1,0,0,0,167,168,5,
	45,0,0,168,169,5,80,0,0,169,9,1,0,0,0,170,174,3,12,6,0,171,173,3,14,7,0,
	172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,178,
	1,0,0,0,176,174,1,0,0,0,177,179,3,16,8,0,178,177,1,0,0,0,178,179,1,0,0,
	0,179,180,1,0,0,0,180,181,5,8,0,0,181,11,1,0,0,0,182,183,5,16,0,0,183,184,
	5,75,0,0,184,185,3,50,25,0,185,186,5,53,0,0,186,187,3,4,2,0,187,13,1,0,
	0,0,188,189,5,5,0,0,189,190,5,75,0,0,190,191,3,50,25,0,191,192,5,53,0,0,
	192,193,3,4,2,0,193,15,1,0,0,0,194,195,5,4,0,0,195,196,3,4,2,0,196,17,1,
	0,0,0,197,200,3,20,10,0,198,200,3,22,11,0,199,197,1,0,0,0,199,198,1,0,0,
	0,200,201,1,0,0,0,201,202,5,80,0,0,202,19,1,0,0,0,203,204,5,18,0,0,204,
	205,3,50,25,0,205,21,1,0,0,0,206,207,5,18,0,0,207,23,1,0,0,0,208,209,5,
	14,0,0,209,212,3,134,67,0,210,211,5,55,0,0,211,213,3,134,67,0,212,210,1,
	0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,225,5,17,0,0,215,216,5,75,0,0,
	216,217,3,50,25,0,217,218,5,53,0,0,218,226,1,0,0,0,219,220,5,74,0,0,220,
	221,3,50,25,0,221,222,5,72,0,0,222,223,3,50,25,0,223,224,5,52,0,0,224,226,
	1,0,0,0,225,215,1,0,0,0,225,219,1,0,0,0,226,227,1,0,0,0,227,228,3,4,2,0,
	228,229,5,6,0,0,229,25,1,0,0,0,230,233,3,28,14,0,231,233,3,30,15,0,232,
	230,1,0,0,0,232,231,1,0,0,0,233,234,1,0,0,0,234,235,5,80,0,0,235,27,1,0,
	0,0,236,237,5,3,0,0,237,29,1,0,0,0,238,239,5,3,0,0,239,240,3,134,67,0,240,
	31,1,0,0,0,241,244,3,34,17,0,242,244,3,36,18,0,243,241,1,0,0,0,243,242,
	1,0,0,0,244,245,1,0,0,0,245,246,5,80,0,0,246,33,1,0,0,0,247,248,5,2,0,0,
	248,35,1,0,0,0,249,250,5,2,0,0,250,251,3,134,67,0,251,37,1,0,0,0,252,254,
	5,21,0,0,253,255,3,134,67,0,254,253,1,0,0,0,254,255,1,0,0,0,255,256,1,0,
	0,0,256,260,5,75,0,0,257,258,3,134,67,0,258,259,5,59,0,0,259,261,1,0,0,
	0,260,257,1,0,0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,263,3,50,25,0,263,
	264,5,53,0,0,264,265,3,4,2,0,265,266,5,10,0,0,266,39,1,0,0,0,267,268,5,
	20,0,0,268,282,3,4,2,0,269,271,3,42,21,0,270,269,1,0,0,0,271,272,1,0,0,
	0,272,270,1,0,0,0,272,273,1,0,0,0,273,283,1,0,0,0,274,283,3,44,22,0,275,
	277,3,42,21,0,276,275,1,0,0,0,277,278,1,0,0,0,278,276,1,0,0,0,278,279,1,
	0,0,0,279,280,1,0,0,0,280,281,3,44,22,0,281,283,1,0,0,0,282,270,1,0,0,0,
	282,274,1,0,0,0,282,276,1,0,0,0,283,284,1,0,0,0,284,285,5,9,0,0,285,41,
	1,0,0,0,286,287,5,11,0,0,287,288,3,134,67,0,288,291,5,75,0,0,289,292,3,
	48,24,0,290,292,5,41,0,0,291,289,1,0,0,0,291,290,1,0,0,0,292,293,1,0,0,
	0,293,294,5,53,0,0,294,295,3,4,2,0,295,43,1,0,0,0,296,297,5,13,0,0,297,
	298,3,4,2,0,298,45,1,0,0,0,299,301,5,15,0,0,300,302,3,134,67,0,301,300,
	1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,304,5,75,0,0,304,305,3,50,25,
	0,305,306,5,53,0,0,306,307,3,4,2,0,307,308,5,7,0,0,308,47,1,0,0,0,309,314,
	3,132,66,0,310,311,5,55,0,0,311,313,3,132,66,0,312,310,1,0,0,0,313,316,
	1,0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,49,1,0,0,0,316,314,1,0,0,0,
	317,320,3,52,26,0,318,320,3,56,28,0,319,317,1,0,0,0,319,318,1,0,0,0,320,
	51,1,0,0,0,321,322,3,82,41,0,322,323,3,54,27,0,323,324,3,50,25,0,324,53,
	1,0,0,0,325,326,5,59,0,0,326,55,1,0,0,0,327,328,3,58,29,0,328,57,1,0,0,
	0,329,335,3,60,30,0,330,331,5,79,0,0,331,332,3,50,25,0,332,333,5,77,0,0,
	333,334,3,50,25,0,334,336,1,0,0,0,335,330,1,0,0,0,335,336,1,0,0,0,336,59,
	1,0,0,0,337,340,3,62,31,0,338,339,5,17,0,0,339,341,3,62,31,0,340,338,1,
	0,0,0,340,341,1,0,0,0,341,61,1,0,0,0,342,347,3,64,32,0,343,344,5,71,0,0,
	344,346,3,64,32,0,345,343,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,
	1,0,0,0,348,63,1,0,0,0,349,347,1,0,0,0,350,355,3,66,33,0,351,352,5,63,0,
	0,352,354,3,66,33,0,353,351,1,0,0,0,354,357,1,0,0,0,355,353,1,0,0,0,355,
	356,1,0,0,0,356,65,1,0,0,0,357,355,1,0,0,0,358,363,3,68,34,0,359,360,5,
	49,0,0,360,362,3,68,34,0,361,359,1,0,0,0,362,365,1,0,0,0,363,361,1,0,0,
	0,363,364,1,0,0,0,364,67,1,0,0,0,365,363,1,0,0,0,366,371,3,70,35,0,367,
	368,5,50,0,0,368,370,3,70,35,0,369,367,1,0,0,0,370,373,1,0,0,0,371,369,
	1,0,0,0,371,372,1,0,0,0,372,69,1,0,0,0,373,371,1,0,0,0,374,379,3,72,36,
	0,375,376,5,48,0,0,376,378,3,72,36,0,377,375,1,0,0,0,378,381,1,0,0,0,379,
	377,1,0,0,0,379,380,1,0,0,0,380,71,1,0,0,0,381,379,1,0,0,0,382,387,3,74,
	37,0,383,384,7,0,0,0,384,386,3,74,37,0,385,383,1,0,0,0,386,389,1,0,0,0,
	387,385,1,0,0,0,387,388,1,0,0,0,388,73,1,0,0,0,389,387,1,0,0,0,390,395,
	3,76,38,0,391,392,7,1,0,0,392,394,3,76,38,0,393,391,1,0,0,0,394,397,1,0,
	0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,75,1,0,0,0,397,395,1,0,0,0,398,
	403,3,78,39,0,399,400,7,2,0,0,400,402,3,78,39,0,401,399,1,0,0,0,402,405,
	1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,77,1,0,0,0,405,403,1,0,0,0,
	406,411,3,80,40,0,407,408,7,3,0,0,408,410,3,80,40,0,409,407,1,0,0,0,410,
	413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,412,79,1,0,0,0,413,411,1,0,
	0,0,414,419,3,82,41,0,415,416,7,4,0,0,416,418,3,82,41,0,417,415,1,0,0,0,
	418,421,1,0,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,81,1,0,0,0,421,419,
	1,0,0,0,422,427,3,90,45,0,423,427,3,84,42,0,424,427,3,86,43,0,425,427,3,
	88,44,0,426,422,1,0,0,0,426,423,1,0,0,0,426,424,1,0,0,0,426,425,1,0,0,0,
	427,83,1,0,0,0,428,429,5,62,0,0,429,430,3,82,41,0,430,85,1,0,0,0,431,432,
	5,70,0,0,432,433,3,82,41,0,433,87,1,0,0,0,434,435,5,86,0,0,435,436,3,82,
	41,0,436,89,1,0,0,0,437,444,3,100,50,0,438,443,3,110,55,0,439,443,3,92,
	46,0,440,443,3,94,47,0,441,443,3,98,49,0,442,438,1,0,0,0,442,439,1,0,0,
	0,442,440,1,0,0,0,442,441,1,0,0,0,443,446,1,0,0,0,444,442,1,0,0,0,444,445,
	1,0,0,0,445,91,1,0,0,0,446,444,1,0,0,0,447,453,5,58,0,0,448,454,3,134,67,
	0,449,450,5,75,0,0,450,451,3,50,25,0,451,452,5,53,0,0,452,454,1,0,0,0,453,
	448,1,0,0,0,453,449,1,0,0,0,454,93,1,0,0,0,455,461,5,54,0,0,456,462,3,134,
	67,0,457,458,5,75,0,0,458,459,3,50,25,0,459,460,5,53,0,0,460,462,1,0,0,
	0,461,456,1,0,0,0,461,457,1,0,0,0,462,463,1,0,0,0,463,464,5,75,0,0,464,
	465,3,96,48,0,465,466,5,53,0,0,466,95,1,0,0,0,467,469,3,50,25,0,468,467,
	1,0,0,0,468,469,1,0,0,0,469,474,1,0,0,0,470,471,5,55,0,0,471,473,3,50,25,
	0,472,470,1,0,0,0,473,476,1,0,0,0,474,472,1,0,0,0,474,475,1,0,0,0,475,97,
	1,0,0,0,476,474,1,0,0,0,477,478,5,75,0,0,478,479,3,96,48,0,479,480,5,53,
	0,0,480,99,1,0,0,0,481,494,3,134,67,0,482,494,3,120,60,0,483,494,3,132,
	66,0,484,494,3,114,57,0,485,494,3,112,56,0,486,494,3,104,52,0,487,494,3,
	106,53,0,488,494,3,102,51,0,489,490,5,75,0,0,490,491,3,50,25,0,491,492,
	5,53,0,0,492,494,1,0,0,0,493,481,1,0,0,0,493,482,1,0,0,0,493,483,1,0,0,
	0,493,484,1,0,0,0,493,485,1,0,0,0,493,486,1,0,0,0,493,487,1,0,0,0,493,488,
	1,0,0,0,493,489,1,0,0,0,494,101,1,0,0,0,495,496,5,85,0,0,496,497,3,50,25,
	0,497,498,5,70,0,0,498,499,3,48,24,0,499,500,5,46,0,0,500,501,3,50,25,0,
	501,502,5,82,0,0,502,103,1,0,0,0,503,505,5,73,0,0,504,506,3,50,25,0,505,
	504,1,0,0,0,505,506,1,0,0,0,506,511,1,0,0,0,507,508,5,55,0,0,508,510,3,
	50,25,0,509,507,1,0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,512,1,0,0,0,
	512,514,1,0,0,0,513,511,1,0,0,0,514,515,5,51,0,0,515,105,1,0,0,0,516,518,
	5,74,0,0,517,519,3,108,54,0,518,517,1,0,0,0,518,519,1,0,0,0,519,524,1,0,
	0,0,520,521,5,55,0,0,521,523,3,108,54,0,522,520,1,0,0,0,523,526,1,0,0,0,
	524,522,1,0,0,0,524,525,1,0,0,0,525,527,1,0,0,0,526,524,1,0,0,0,527,528,
	5,52,0,0,528,107,1,0,0,0,529,530,3,50,25,0,530,531,5,84,0,0,531,532,3,50,
	25,0,532,109,1,0,0,0,533,539,5,74,0,0,534,540,3,50,25,0,535,536,3,50,25,
	0,536,537,5,72,0,0,537,538,3,50,25,0,538,540,1,0,0,0,539,534,1,0,0,0,539,
	535,1,0,0,0,540,541,1,0,0,0,541,542,5,52,0,0,542,111,1,0,0,0,543,544,5,
	47,0,0,544,545,3,134,67,0,545,113,1,0,0,0,546,549,3,116,58,0,547,549,3,
	118,59,0,548,546,1,0,0,0,548,547,1,0,0,0,549,115,1,0,0,0,550,552,5,81,0,
	0,551,553,5,62,0,0,552,551,1,0,0,0,552,553,1,0,0,0,553,554,1,0,0,0,554,
	555,3,126,63,0,555,117,1,0,0,0,556,557,5,57,0,0,557,558,3,134,67,0,558,
	119,1,0,0,0,559,565,3,122,61,0,560,565,3,124,62,0,561,565,3,126,63,0,562,
	565,3,128,64,0,563,565,3,130,65,0,564,559,1,0,0,0,564,560,1,0,0,0,564,561,
	1,0,0,0,564,562,1,0,0,0,564,563,1,0,0,0,565,121,1,0,0,0,566,567,7,5,0,0,
	567,123,1,0,0,0,568,569,5,45,0,0,569,125,1,0,0,0,570,571,5,43,0,0,571,127,
	1,0,0,0,572,573,5,44,0,0,573,129,1,0,0,0,574,575,5,57,0,0,575,131,1,0,0,
	0,576,577,7,6,0,0,577,133,1,0,0,0,578,579,5,42,0,0,579,135,1,0,0,0,47,139,
	157,162,174,178,199,212,225,232,243,254,260,272,278,282,291,301,314,319,
	335,340,347,355,363,371,379,387,395,403,411,419,426,442,444,453,461,468,
	474,493,505,511,518,524,539,548,552,564];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoocodeParser.__ATN) {
			MoocodeParser.__ATN = new ATNDeserializer().deserialize(MoocodeParser._serializedATN);
		}

		return MoocodeParser.__ATN;
	}


	static DecisionsToDFA = MoocodeParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class MoocodeContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(MoocodeParser.EOF, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_moocode;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterMoocode) {
	 		listener.enterMoocode(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitMoocode) {
	 		listener.exitMoocode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitMoocode) {
			return visitor.visitMoocode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public empty_statement(): Empty_statementContext {
		return this.getTypedRuleContext(Empty_statementContext, 0) as Empty_statementContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodeParser.SEMICOLON, 0);
	}
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
	}
	public continue_statement(): Continue_statementContext {
		return this.getTypedRuleContext(Continue_statementContext, 0) as Continue_statementContext;
	}
	public break_statement(): Break_statementContext {
		return this.getTypedRuleContext(Break_statementContext, 0) as Break_statementContext;
	}
	public fork_statement(): Fork_statementContext {
		return this.getTypedRuleContext(Fork_statementContext, 0) as Fork_statementContext;
	}
	public try_statement(): Try_statementContext {
		return this.getTypedRuleContext(Try_statementContext, 0) as Try_statementContext;
	}
	public if_statement(): If_statementContext {
		return this.getTypedRuleContext(If_statementContext, 0) as If_statementContext;
	}
	public for_loop_statement(): For_loop_statementContext {
		return this.getTypedRuleContext(For_loop_statementContext, 0) as For_loop_statementContext;
	}
	public while_loop_statement(): While_loop_statementContext {
		return this.getTypedRuleContext(While_loop_statementContext, 0) as While_loop_statementContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MoocodeParser.RULE_statements;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodeParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_empty_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterEmpty_statement) {
	 		listener.enterEmpty_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitEmpty_statement) {
	 		listener.exitEmpty_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitEmpty_statement) {
			return visitor.visitEmpty_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(MoocodeParser.STRING_LITERAL, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodeParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_comment;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterComment) {
	 		listener.enterComment(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitComment) {
	 		listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_expression(): If_expressionContext {
		return this.getTypedRuleContext(If_expressionContext, 0) as If_expressionContext;
	}
	public ENDIF(): TerminalNode {
		return this.getToken(MoocodeParser.ENDIF, 0);
	}
	public elseif_expression_list(): Elseif_expressionContext[] {
		return this.getTypedRuleContexts(Elseif_expressionContext) as Elseif_expressionContext[];
	}
	public elseif_expression(i: number): Elseif_expressionContext {
		return this.getTypedRuleContext(Elseif_expressionContext, i) as Elseif_expressionContext;
	}
	public else_expression(): Else_expressionContext {
		return this.getTypedRuleContext(Else_expressionContext, 0) as Else_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_if_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterIf_statement) {
	 		listener.enterIf_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitIf_statement) {
	 		listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_expressionContext extends ParserRuleContext {
	public _conditions!: ExpressionContext;
	public _body!: StatementsContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(MoocodeParser.IF, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_if_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterIf_expression) {
	 		listener.enterIf_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitIf_expression) {
	 		listener.exitIf_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitIf_expression) {
			return visitor.visitIf_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elseif_expressionContext extends ParserRuleContext {
	public _conditions!: ExpressionContext;
	public _body!: StatementsContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSEIF(): TerminalNode {
		return this.getToken(MoocodeParser.ELSEIF, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_elseif_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterElseif_expression) {
	 		listener.enterElseif_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitElseif_expression) {
	 		listener.exitElseif_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitElseif_expression) {
			return visitor.visitElseif_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_expressionContext extends ParserRuleContext {
	public _body!: StatementsContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MoocodeParser.ELSE, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_else_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterElse_expression) {
	 		listener.enterElse_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitElse_expression) {
	 		listener.exitElse_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitElse_expression) {
			return visitor.visitElse_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodeParser.SEMICOLON, 0);
	}
	public non_empty_return(): Non_empty_returnContext {
		return this.getTypedRuleContext(Non_empty_returnContext, 0) as Non_empty_returnContext;
	}
	public empty_return(): Empty_returnContext {
		return this.getTypedRuleContext(Empty_returnContext, 0) as Empty_returnContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_return_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterReturn_statement) {
	 		listener.enterReturn_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitReturn_statement) {
	 		listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_empty_returnContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(MoocodeParser.RETURN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_non_empty_return;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterNon_empty_return) {
	 		listener.enterNon_empty_return(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitNon_empty_return) {
	 		listener.exitNon_empty_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitNon_empty_return) {
			return visitor.visitNon_empty_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_returnContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(MoocodeParser.RETURN, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_empty_return;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterEmpty_return) {
	 		listener.enterEmpty_return(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitEmpty_return) {
	 		listener.exitEmpty_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitEmpty_return) {
			return visitor.visitEmpty_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_loop_statementContext extends ParserRuleContext {
	public _value!: IdentifierContext;
	public _key!: IdentifierContext;
	public _range!: ExpressionContext;
	public _start!: ExpressionContext;
	public _end!: ExpressionContext;
	public _body!: StatementsContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(MoocodeParser.FOR, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(MoocodeParser.IN, 0);
	}
	public ENDFOR(): TerminalNode {
		return this.getToken(MoocodeParser.ENDFOR, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_BRACKET, 0);
	}
	public OP_RANGE(): TerminalNode {
		return this.getToken(MoocodeParser.OP_RANGE, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MoocodeParser.COMMA, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_for_loop_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterFor_loop_statement) {
	 		listener.enterFor_loop_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitFor_loop_statement) {
	 		listener.exitFor_loop_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitFor_loop_statement) {
			return visitor.visitFor_loop_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodeParser.SEMICOLON, 0);
	}
	public empty_continue(): Empty_continueContext {
		return this.getTypedRuleContext(Empty_continueContext, 0) as Empty_continueContext;
	}
	public non_empty_continue(): Non_empty_continueContext {
		return this.getTypedRuleContext(Non_empty_continueContext, 0) as Non_empty_continueContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_continue_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterContinue_statement) {
	 		listener.enterContinue_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitContinue_statement) {
	 		listener.exitContinue_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitContinue_statement) {
			return visitor.visitContinue_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_continueContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(MoocodeParser.CONTINUE, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_empty_continue;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterEmpty_continue) {
	 		listener.enterEmpty_continue(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitEmpty_continue) {
	 		listener.exitEmpty_continue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitEmpty_continue) {
			return visitor.visitEmpty_continue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_empty_continueContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(MoocodeParser.CONTINUE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_non_empty_continue;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterNon_empty_continue) {
	 		listener.enterNon_empty_continue(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitNon_empty_continue) {
	 		listener.exitNon_empty_continue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitNon_empty_continue) {
			return visitor.visitNon_empty_continue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodeParser.SEMICOLON, 0);
	}
	public empty_break(): Empty_breakContext {
		return this.getTypedRuleContext(Empty_breakContext, 0) as Empty_breakContext;
	}
	public non_empty_break(): Non_empty_breakContext {
		return this.getTypedRuleContext(Non_empty_breakContext, 0) as Non_empty_breakContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_break_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterBreak_statement) {
	 		listener.enterBreak_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitBreak_statement) {
	 		listener.exitBreak_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitBreak_statement) {
			return visitor.visitBreak_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_breakContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(MoocodeParser.BREAK, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_empty_break;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterEmpty_break) {
	 		listener.enterEmpty_break(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitEmpty_break) {
	 		listener.exitEmpty_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitEmpty_break) {
			return visitor.visitEmpty_break(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_empty_breakContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(MoocodeParser.BREAK, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_non_empty_break;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterNon_empty_break) {
	 		listener.enterNon_empty_break(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitNon_empty_break) {
	 		listener.exitNon_empty_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitNon_empty_break) {
			return visitor.visitNon_empty_break(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_loop_statementContext extends ParserRuleContext {
	public _outer_name!: IdentifierContext;
	public _inner_name!: IdentifierContext;
	public _conditions!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(MoocodeParser.WHILE, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public ENDWHILE(): TerminalNode {
		return this.getToken(MoocodeParser.ENDWHILE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(MoocodeParser.EQUALS, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_while_loop_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterWhile_loop_statement) {
	 		listener.enterWhile_loop_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitWhile_loop_statement) {
	 		listener.exitWhile_loop_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitWhile_loop_statement) {
			return visitor.visitWhile_loop_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(MoocodeParser.TRY, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public ENDTRY(): TerminalNode {
		return this.getToken(MoocodeParser.ENDTRY, 0);
	}
	public try_finally(): Try_finallyContext {
		return this.getTypedRuleContext(Try_finallyContext, 0) as Try_finallyContext;
	}
	public try_except_list(): Try_exceptContext[] {
		return this.getTypedRuleContexts(Try_exceptContext) as Try_exceptContext[];
	}
	public try_except(i: number): Try_exceptContext {
		return this.getTypedRuleContext(Try_exceptContext, i) as Try_exceptContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_try_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterTry_statement) {
	 		listener.enterTry_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitTry_statement) {
	 		listener.exitTry_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitTry_statement) {
			return visitor.visitTry_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_exceptContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(MoocodeParser.EXCEPT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public error_codes(): Error_codesContext {
		return this.getTypedRuleContext(Error_codesContext, 0) as Error_codesContext;
	}
	public ANY_ERROR(): TerminalNode {
		return this.getToken(MoocodeParser.ANY_ERROR, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_try_except;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterTry_except) {
	 		listener.enterTry_except(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitTry_except) {
	 		listener.exitTry_except(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitTry_except) {
			return visitor.visitTry_except(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_finallyContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(MoocodeParser.FINALLY, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_try_finally;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterTry_finally) {
	 		listener.enterTry_finally(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitTry_finally) {
	 		listener.exitTry_finally(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitTry_finally) {
			return visitor.visitTry_finally(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fork_statementContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _schedule!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FORK(): TerminalNode {
		return this.getToken(MoocodeParser.FORK, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public ENDFORK(): TerminalNode {
		return this.getToken(MoocodeParser.ENDFORK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_fork_statement;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterFork_statement) {
	 		listener.enterFork_statement(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitFork_statement) {
	 		listener.exitFork_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitFork_statement) {
			return visitor.visitFork_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Error_codesContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public error_code_list(): Error_codeContext[] {
		return this.getTypedRuleContexts(Error_codeContext) as Error_codeContext[];
	}
	public error_code(i: number): Error_codeContext {
		return this.getTypedRuleContext(Error_codeContext, i) as Error_codeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_error_codes;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterError_codes) {
	 		listener.enterError_codes(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitError_codes) {
	 		listener.exitError_codes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitError_codes) {
			return visitor.visitError_codes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public non_assignment(): Non_assignmentContext {
		return this.getTypedRuleContext(Non_assignmentContext, 0) as Non_assignmentContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unary_expression(): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
	}
	public assignment_operator(): Assignment_operatorContext {
		return this.getTypedRuleContext(Assignment_operatorContext, 0) as Assignment_operatorContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_assignment;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(MoocodeParser.EQUALS, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_assignment_operator;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterAssignment_operator) {
	 		listener.enterAssignment_operator(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitAssignment_operator) {
	 		listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_assignmentContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_non_assignment;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterNon_assignment) {
	 		listener.enterNon_assignment(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitNon_assignment) {
	 		listener.exitNon_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitNon_assignment) {
			return visitor.visitNon_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_expressionContext extends ParserRuleContext {
	public _if_conditions!: Conditional_in_expressionContext;
	public _true_ex!: ExpressionContext;
	public _false_ex!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_in_expression(): Conditional_in_expressionContext {
		return this.getTypedRuleContext(Conditional_in_expressionContext, 0) as Conditional_in_expressionContext;
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(MoocodeParser.QUESTION_MARK, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(MoocodeParser.PIPE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_conditional_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterConditional_expression) {
	 		listener.enterConditional_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitConditional_expression) {
	 		listener.exitConditional_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitConditional_expression) {
			return visitor.visitConditional_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_in_expressionContext extends ParserRuleContext {
	public _left!: Conditional_or_expressionContext;
	public _right!: Conditional_or_expressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_or_expression_list(): Conditional_or_expressionContext[] {
		return this.getTypedRuleContexts(Conditional_or_expressionContext) as Conditional_or_expressionContext[];
	}
	public conditional_or_expression(i: number): Conditional_or_expressionContext {
		return this.getTypedRuleContext(Conditional_or_expressionContext, i) as Conditional_or_expressionContext;
	}
	public IN(): TerminalNode {
		return this.getToken(MoocodeParser.IN, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_conditional_in_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterConditional_in_expression) {
	 		listener.enterConditional_in_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitConditional_in_expression) {
	 		listener.exitConditional_in_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitConditional_in_expression) {
			return visitor.visitConditional_in_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_or_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_and_expression_list(): Conditional_and_expressionContext[] {
		return this.getTypedRuleContexts(Conditional_and_expressionContext) as Conditional_and_expressionContext[];
	}
	public conditional_and_expression(i: number): Conditional_and_expressionContext {
		return this.getTypedRuleContext(Conditional_and_expressionContext, i) as Conditional_and_expressionContext;
	}
	public OP_OR_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_OR);
	}
	public OP_OR(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_OR, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_conditional_or_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterConditional_or_expression) {
	 		listener.enterConditional_or_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitConditional_or_expression) {
	 		listener.exitConditional_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitConditional_or_expression) {
			return visitor.visitConditional_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_and_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inclusive_or_expression_list(): Inclusive_or_expressionContext[] {
		return this.getTypedRuleContexts(Inclusive_or_expressionContext) as Inclusive_or_expressionContext[];
	}
	public inclusive_or_expression(i: number): Inclusive_or_expressionContext {
		return this.getTypedRuleContext(Inclusive_or_expressionContext, i) as Inclusive_or_expressionContext;
	}
	public OP_AND_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_AND);
	}
	public OP_AND(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_AND, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_conditional_and_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterConditional_and_expression) {
	 		listener.enterConditional_and_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitConditional_and_expression) {
	 		listener.exitConditional_and_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitConditional_and_expression) {
			return visitor.visitConditional_and_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inclusive_or_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exclusive_or_expression_list(): Exclusive_or_expressionContext[] {
		return this.getTypedRuleContexts(Exclusive_or_expressionContext) as Exclusive_or_expressionContext[];
	}
	public exclusive_or_expression(i: number): Exclusive_or_expressionContext {
		return this.getTypedRuleContext(Exclusive_or_expressionContext, i) as Exclusive_or_expressionContext;
	}
	public BIT_OR_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.BIT_OR);
	}
	public BIT_OR(i: number): TerminalNode {
		return this.getToken(MoocodeParser.BIT_OR, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_inclusive_or_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterInclusive_or_expression) {
	 		listener.enterInclusive_or_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitInclusive_or_expression) {
	 		listener.exitInclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitInclusive_or_expression) {
			return visitor.visitInclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exclusive_or_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public and_expression_list(): And_expressionContext[] {
		return this.getTypedRuleContexts(And_expressionContext) as And_expressionContext[];
	}
	public and_expression(i: number): And_expressionContext {
		return this.getTypedRuleContext(And_expressionContext, i) as And_expressionContext;
	}
	public BIT_XOR_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.BIT_XOR);
	}
	public BIT_XOR(i: number): TerminalNode {
		return this.getToken(MoocodeParser.BIT_XOR, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_exclusive_or_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterExclusive_or_expression) {
	 		listener.enterExclusive_or_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitExclusive_or_expression) {
	 		listener.exitExclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitExclusive_or_expression) {
			return visitor.visitExclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equality_expression_list(): Equality_expressionContext[] {
		return this.getTypedRuleContexts(Equality_expressionContext) as Equality_expressionContext[];
	}
	public equality_expression(i: number): Equality_expressionContext {
		return this.getTypedRuleContext(Equality_expressionContext, i) as Equality_expressionContext;
	}
	public BIT_AND_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.BIT_AND);
	}
	public BIT_AND(i: number): TerminalNode {
		return this.getToken(MoocodeParser.BIT_AND, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_and_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterAnd_expression) {
	 		listener.enterAnd_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitAnd_expression) {
	 		listener.exitAnd_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitAnd_expression) {
			return visitor.visitAnd_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relational_expression_list(): Relational_expressionContext[] {
		return this.getTypedRuleContexts(Relational_expressionContext) as Relational_expressionContext[];
	}
	public relational_expression(i: number): Relational_expressionContext {
		return this.getTypedRuleContext(Relational_expressionContext, i) as Relational_expressionContext;
	}
	public OP_EQ_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_EQ);
	}
	public OP_EQ(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_EQ, i);
	}
	public OP_NE_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_NE);
	}
	public OP_NE(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_NE, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_equality_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterEquality_expression) {
	 		listener.enterEquality_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitEquality_expression) {
	 		listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shift_expression_list(): Shift_expressionContext[] {
		return this.getTypedRuleContexts(Shift_expressionContext) as Shift_expressionContext[];
	}
	public shift_expression(i: number): Shift_expressionContext {
		return this.getTypedRuleContext(Shift_expressionContext, i) as Shift_expressionContext;
	}
	public OP_LT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_LT);
	}
	public OP_LT(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_LT, i);
	}
	public OP_GT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_GT);
	}
	public OP_GT(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_GT, i);
	}
	public OP_LE_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_LE);
	}
	public OP_LE(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_LE, i);
	}
	public OP_GE_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OP_GE);
	}
	public OP_GE(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OP_GE, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_relational_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterRelational_expression) {
	 		listener.enterRelational_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitRelational_expression) {
	 		listener.exitRelational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitRelational_expression) {
			return visitor.visitRelational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additive_expression_list(): Additive_expressionContext[] {
		return this.getTypedRuleContexts(Additive_expressionContext) as Additive_expressionContext[];
	}
	public additive_expression(i: number): Additive_expressionContext {
		return this.getTypedRuleContext(Additive_expressionContext, i) as Additive_expressionContext;
	}
	public LOG_SHIFT_LEFT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.LOG_SHIFT_LEFT);
	}
	public LOG_SHIFT_LEFT(i: number): TerminalNode {
		return this.getToken(MoocodeParser.LOG_SHIFT_LEFT, i);
	}
	public LOG_SHIFT_RIGHT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.LOG_SHIFT_RIGHT);
	}
	public LOG_SHIFT_RIGHT(i: number): TerminalNode {
		return this.getToken(MoocodeParser.LOG_SHIFT_RIGHT, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_shift_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterShift_expression) {
	 		listener.enterShift_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitShift_expression) {
	 		listener.exitShift_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitShift_expression) {
			return visitor.visitShift_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicative_expression_list(): Multiplicative_expressionContext[] {
		return this.getTypedRuleContexts(Multiplicative_expressionContext) as Multiplicative_expressionContext[];
	}
	public multiplicative_expression(i: number): Multiplicative_expressionContext {
		return this.getTypedRuleContext(Multiplicative_expressionContext, i) as Multiplicative_expressionContext;
	}
	public PLUS_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.PLUS);
	}
	public PLUS(i: number): TerminalNode {
		return this.getToken(MoocodeParser.PLUS, i);
	}
	public MINUS_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(MoocodeParser.MINUS, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_additive_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterAdditive_expression) {
	 		listener.enterAdditive_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitAdditive_expression) {
	 		listener.exitAdditive_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitAdditive_expression) {
			return visitor.visitAdditive_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unary_expression_list(): Unary_expressionContext[] {
		return this.getTypedRuleContexts(Unary_expressionContext) as Unary_expressionContext[];
	}
	public unary_expression(i: number): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, i) as Unary_expressionContext;
	}
	public STAR_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.STAR);
	}
	public STAR(i: number): TerminalNode {
		return this.getToken(MoocodeParser.STAR, i);
	}
	public DIV_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.DIV);
	}
	public DIV(i: number): TerminalNode {
		return this.getToken(MoocodeParser.DIV, i);
	}
	public PERCENT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.PERCENT);
	}
	public PERCENT(i: number): TerminalNode {
		return this.getToken(MoocodeParser.PERCENT, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_multiplicative_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterMultiplicative_expression) {
	 		listener.enterMultiplicative_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitMultiplicative_expression) {
	 		listener.exitMultiplicative_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitMultiplicative_expression) {
			return visitor.visitMultiplicative_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary_expression(): Primary_expressionContext {
		return this.getTypedRuleContext(Primary_expressionContext, 0) as Primary_expressionContext;
	}
	public negative_unary_expression(): Negative_unary_expressionContext {
		return this.getTypedRuleContext(Negative_unary_expressionContext, 0) as Negative_unary_expressionContext;
	}
	public negated_unary_expression(): Negated_unary_expressionContext {
		return this.getTypedRuleContext(Negated_unary_expressionContext, 0) as Negated_unary_expressionContext;
	}
	public complement_unary_expression(): Complement_unary_expressionContext {
		return this.getTypedRuleContext(Complement_unary_expressionContext, 0) as Complement_unary_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_unary_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterUnary_expression) {
	 		listener.enterUnary_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitUnary_expression) {
	 		listener.exitUnary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitUnary_expression) {
			return visitor.visitUnary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Negative_unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MoocodeParser.MINUS, 0);
	}
	public unary_expression(): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_negative_unary_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterNegative_unary_expression) {
	 		listener.enterNegative_unary_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitNegative_unary_expression) {
	 		listener.exitNegative_unary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitNegative_unary_expression) {
			return visitor.visitNegative_unary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Negated_unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OP_NOT(): TerminalNode {
		return this.getToken(MoocodeParser.OP_NOT, 0);
	}
	public unary_expression(): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_negated_unary_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterNegated_unary_expression) {
	 		listener.enterNegated_unary_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitNegated_unary_expression) {
	 		listener.exitNegated_unary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitNegated_unary_expression) {
			return visitor.visitNegated_unary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Complement_unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WAVE(): TerminalNode {
		return this.getToken(MoocodeParser.WAVE, 0);
	}
	public unary_expression(): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_complement_unary_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterComplement_unary_expression) {
	 		listener.enterComplement_unary_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitComplement_unary_expression) {
	 		listener.exitComplement_unary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitComplement_unary_expression) {
			return visitor.visitComplement_unary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public _pe!: Primary_expression_startContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary_expression_start(): Primary_expression_startContext {
		return this.getTypedRuleContext(Primary_expression_startContext, 0) as Primary_expression_startContext;
	}
	public indexer_list(): IndexerContext[] {
		return this.getTypedRuleContexts(IndexerContext) as IndexerContext[];
	}
	public indexer(i: number): IndexerContext {
		return this.getTypedRuleContext(IndexerContext, i) as IndexerContext;
	}
	public property_access_list(): Property_accessContext[] {
		return this.getTypedRuleContexts(Property_accessContext) as Property_accessContext[];
	}
	public property_access(i: number): Property_accessContext {
		return this.getTypedRuleContext(Property_accessContext, i) as Property_accessContext;
	}
	public verb_invocation_list(): Verb_invocationContext[] {
		return this.getTypedRuleContexts(Verb_invocationContext) as Verb_invocationContext[];
	}
	public verb_invocation(i: number): Verb_invocationContext {
		return this.getTypedRuleContext(Verb_invocationContext, i) as Verb_invocationContext;
	}
	public bf_invocation_list(): Bf_invocationContext[] {
		return this.getTypedRuleContexts(Bf_invocationContext) as Bf_invocationContext[];
	}
	public bf_invocation(i: number): Bf_invocationContext {
		return this.getTypedRuleContext(Bf_invocationContext, i) as Bf_invocationContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_primary_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterPrimary_expression) {
	 		listener.enterPrimary_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitPrimary_expression) {
	 		listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Property_accessContext extends ParserRuleContext {
	public _computed_prop_arguments!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(MoocodeParser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_property_access;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterProperty_access) {
	 		listener.enterProperty_access(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitProperty_access) {
	 		listener.exitProperty_access(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitProperty_access) {
			return visitor.visitProperty_access(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Verb_invocationContext extends ParserRuleContext {
	public _computed_verb_arguments!: ExpressionContext;
	public _arguments!: ExpressionsContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(MoocodeParser.COLON, 0);
	}
	public OPEN_PARENS_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.OPEN_PARENS);
	}
	public OPEN_PARENS(i: number): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, i);
	}
	public CLOSE_PARENS_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.CLOSE_PARENS);
	}
	public CLOSE_PARENS(i: number): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, i);
	}
	public expressions(): ExpressionsContext {
		return this.getTypedRuleContext(ExpressionsContext, 0) as ExpressionsContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_verb_invocation;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterVerb_invocation) {
	 		listener.enterVerb_invocation(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitVerb_invocation) {
	 		listener.exitVerb_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitVerb_invocation) {
			return visitor.visitVerb_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_expressions;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterExpressions) {
	 		listener.enterExpressions(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitExpressions) {
	 		listener.exitExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitExpressions) {
			return visitor.visitExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bf_invocationContext extends ParserRuleContext {
	public _arguments!: ExpressionsContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public expressions(): ExpressionsContext {
		return this.getTypedRuleContext(ExpressionsContext, 0) as ExpressionsContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_bf_invocation;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterBf_invocation) {
	 		listener.enterBf_invocation(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitBf_invocation) {
	 		listener.exitBf_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitBf_invocation) {
			return visitor.visitBf_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expression_startContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public error_code(): Error_codeContext {
		return this.getTypedRuleContext(Error_codeContext, 0) as Error_codeContext;
	}
	public object_reference(): Object_referenceContext {
		return this.getTypedRuleContext(Object_referenceContext, 0) as Object_referenceContext;
	}
	public list_slicer(): List_slicerContext {
		return this.getTypedRuleContext(List_slicerContext, 0) as List_slicerContext;
	}
	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
	}
	public map(): MapContext {
		return this.getTypedRuleContext(MapContext, 0) as MapContext;
	}
	public error_catcher(): Error_catcherContext {
		return this.getTypedRuleContext(Error_catcherContext, 0) as Error_catcherContext;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_primary_expression_start;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterPrimary_expression_start) {
	 		listener.enterPrimary_expression_start(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitPrimary_expression_start) {
	 		listener.exitPrimary_expression_start(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression_start) {
			return visitor.visitPrimary_expression_start(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Error_catcherContext extends ParserRuleContext {
	public _try_!: ExpressionContext;
	public _on_error!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TICK(): TerminalNode {
		return this.getToken(MoocodeParser.TICK, 0);
	}
	public OP_NOT(): TerminalNode {
		return this.getToken(MoocodeParser.OP_NOT, 0);
	}
	public error_codes(): Error_codesContext {
		return this.getTypedRuleContext(Error_codesContext, 0) as Error_codesContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(MoocodeParser.ARROW, 0);
	}
	public SINGLE_QUOTE(): TerminalNode {
		return this.getToken(MoocodeParser.SINGLE_QUOTE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_error_catcher;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterError_catcher) {
	 		listener.enterError_catcher(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitError_catcher) {
	 		listener.exitError_catcher(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitError_catcher) {
			return visitor.visitError_catcher(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_BRACE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_list;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_BRACKET, 0);
	}
	public map_entry_list(): Map_entryContext[] {
		return this.getTypedRuleContexts(Map_entryContext) as Map_entryContext[];
	}
	public map_entry(i: number): Map_entryContext {
		return this.getTypedRuleContext(Map_entryContext, i) as Map_entryContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MoocodeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_map;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterMap) {
	 		listener.enterMap(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitMap) {
	 		listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitMap) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Map_entryContext extends ParserRuleContext {
	public _map_key!: ExpressionContext;
	public _map_value!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THIN_ARROW(): TerminalNode {
		return this.getToken(MoocodeParser.THIN_ARROW, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_map_entry;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterMap_entry) {
	 		listener.enterMap_entry(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitMap_entry) {
	 		listener.exitMap_entry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitMap_entry) {
			return visitor.visitMap_entry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexerContext extends ParserRuleContext {
	public _argument!: ExpressionContext;
	public _start!: ExpressionContext;
	public _end!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_BRACKET, 0);
	}
	public OP_RANGE(): TerminalNode {
		return this.getToken(MoocodeParser.OP_RANGE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_indexer;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterIndexer) {
	 		listener.enterIndexer(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitIndexer) {
	 		listener.exitIndexer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitIndexer) {
			return visitor.visitIndexer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_slicerContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(MoocodeParser.AT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_list_slicer;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterList_slicer) {
	 		listener.enterList_slicer(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitList_slicer) {
	 		listener.exitList_slicer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitList_slicer) {
			return visitor.visitList_slicer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_referenceContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object_id(): Object_idContext {
		return this.getTypedRuleContext(Object_idContext, 0) as Object_idContext;
	}
	public corified_object(): Corified_objectContext {
		return this.getTypedRuleContext(Corified_objectContext, 0) as Corified_objectContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_object_reference;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterObject_reference) {
	 		listener.enterObject_reference(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitObject_reference) {
	 		listener.exitObject_reference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitObject_reference) {
			return visitor.visitObject_reference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_idContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHARP(): TerminalNode {
		return this.getToken(MoocodeParser.SHARP, 0);
	}
	public integer_literal(): Integer_literalContext {
		return this.getTypedRuleContext(Integer_literalContext, 0) as Integer_literalContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MoocodeParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_object_id;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterObject_id) {
	 		listener.enterObject_id(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitObject_id) {
	 		listener.exitObject_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitObject_id) {
			return visitor.visitObject_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Corified_objectContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(MoocodeParser.DOLLAR, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_corified_object;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterCorified_object) {
	 		listener.enterCorified_object(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitCorified_object) {
	 		listener.exitCorified_object(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitCorified_object) {
			return visitor.visitCorified_object(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bool_literal(): Bool_literalContext {
		return this.getTypedRuleContext(Bool_literalContext, 0) as Bool_literalContext;
	}
	public string_literal(): String_literalContext {
		return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
	}
	public integer_literal(): Integer_literalContext {
		return this.getTypedRuleContext(Integer_literalContext, 0) as Integer_literalContext;
	}
	public float_literal(): Float_literalContext {
		return this.getTypedRuleContext(Float_literalContext, 0) as Float_literalContext;
	}
	public dollar_literal(): Dollar_literalContext {
		return this.getTypedRuleContext(Dollar_literalContext, 0) as Dollar_literalContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_literal;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(MoocodeParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(MoocodeParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_bool_literal;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterBool_literal) {
	 		listener.enterBool_literal(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitBool_literal) {
	 		listener.exitBool_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitBool_literal) {
			return visitor.visitBool_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(MoocodeParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_string_literal;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterString_literal) {
	 		listener.enterString_literal(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitString_literal) {
	 		listener.exitString_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitString_literal) {
			return visitor.visitString_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(MoocodeParser.INTEGER_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_integer_literal;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterInteger_literal) {
	 		listener.enterInteger_literal(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitInteger_literal) {
	 		listener.exitInteger_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitInteger_literal) {
			return visitor.visitInteger_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Float_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT_LITERAL(): TerminalNode {
		return this.getToken(MoocodeParser.FLOAT_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_float_literal;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterFloat_literal) {
	 		listener.enterFloat_literal(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitFloat_literal) {
	 		listener.exitFloat_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitFloat_literal) {
			return visitor.visitFloat_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dollar_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(MoocodeParser.DOLLAR, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_dollar_literal;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterDollar_literal) {
	 		listener.enterDollar_literal(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitDollar_literal) {
	 		listener.exitDollar_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitDollar_literal) {
			return visitor.visitDollar_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Error_codeContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public E_NONE(): TerminalNode {
		return this.getToken(MoocodeParser.E_NONE, 0);
	}
	public E_TYPE(): TerminalNode {
		return this.getToken(MoocodeParser.E_TYPE, 0);
	}
	public E_DIV(): TerminalNode {
		return this.getToken(MoocodeParser.E_DIV, 0);
	}
	public E_PERM(): TerminalNode {
		return this.getToken(MoocodeParser.E_PERM, 0);
	}
	public E_PROPNF(): TerminalNode {
		return this.getToken(MoocodeParser.E_PROPNF, 0);
	}
	public E_VERBNF(): TerminalNode {
		return this.getToken(MoocodeParser.E_VERBNF, 0);
	}
	public E_VARNF(): TerminalNode {
		return this.getToken(MoocodeParser.E_VARNF, 0);
	}
	public E_INVIND(): TerminalNode {
		return this.getToken(MoocodeParser.E_INVIND, 0);
	}
	public E_RECMOVE(): TerminalNode {
		return this.getToken(MoocodeParser.E_RECMOVE, 0);
	}
	public E_MAXREC(): TerminalNode {
		return this.getToken(MoocodeParser.E_MAXREC, 0);
	}
	public E_RANGE(): TerminalNode {
		return this.getToken(MoocodeParser.E_RANGE, 0);
	}
	public E_ARGS(): TerminalNode {
		return this.getToken(MoocodeParser.E_ARGS, 0);
	}
	public E_NACC(): TerminalNode {
		return this.getToken(MoocodeParser.E_NACC, 0);
	}
	public E_INVARG(): TerminalNode {
		return this.getToken(MoocodeParser.E_INVARG, 0);
	}
	public E_QUOTA(): TerminalNode {
		return this.getToken(MoocodeParser.E_QUOTA, 0);
	}
	public E_FLOAT(): TerminalNode {
		return this.getToken(MoocodeParser.E_FLOAT, 0);
	}
	public E_FILE(): TerminalNode {
		return this.getToken(MoocodeParser.E_FILE, 0);
	}
	public E_EXEC(): TerminalNode {
		return this.getToken(MoocodeParser.E_EXEC, 0);
	}
	public E_INTRPT(): TerminalNode {
		return this.getToken(MoocodeParser.E_INTRPT, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_error_code;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterError_code) {
	 		listener.enterError_code(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitError_code) {
	 		listener.exitError_code(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitError_code) {
			return visitor.visitError_code(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(MoocodeParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_identifier;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
