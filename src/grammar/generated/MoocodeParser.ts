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
	public static readonly CARET = 51;
	public static readonly CLOSE_BRACE = 52;
	public static readonly CLOSE_BRACKET = 53;
	public static readonly CLOSE_PARENS = 54;
	public static readonly COLON = 55;
	public static readonly COMMA = 56;
	public static readonly DIV = 57;
	public static readonly DOLLAR = 58;
	public static readonly DOT = 59;
	public static readonly EQUALS = 60;
	public static readonly LOG_SHIFT_RIGHT = 61;
	public static readonly LOG_SHIFT_LEFT = 62;
	public static readonly MINUS = 63;
	public static readonly OP_AND = 64;
	public static readonly OP_EQ = 65;
	public static readonly OP_GE = 66;
	public static readonly OP_GT = 67;
	public static readonly OP_LE = 68;
	public static readonly OP_LT = 69;
	public static readonly OP_NE = 70;
	public static readonly OP_NOT = 71;
	public static readonly OP_OR = 72;
	public static readonly OP_RANGE = 73;
	public static readonly OPEN_BRACE = 74;
	public static readonly OPEN_BRACKET = 75;
	public static readonly OPEN_PARENS = 76;
	public static readonly PERCENT = 77;
	public static readonly PIPE = 78;
	public static readonly PLUS = 79;
	public static readonly QUESTION_MARK = 80;
	public static readonly SEMICOLON = 81;
	public static readonly SHARP = 82;
	public static readonly SINGLE_QUOTE = 83;
	public static readonly STAR = 84;
	public static readonly THIN_ARROW = 85;
	public static readonly TICK = 86;
	public static readonly WAVE = 87;
	public static readonly ANY = 88;
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
	public static readonly RULE_for_expression = 13;
	public static readonly RULE_ranged_for_expression = 14;
	public static readonly RULE_continue_statement = 15;
	public static readonly RULE_empty_continue = 16;
	public static readonly RULE_non_empty_continue = 17;
	public static readonly RULE_break_statement = 18;
	public static readonly RULE_empty_break = 19;
	public static readonly RULE_non_empty_break = 20;
	public static readonly RULE_while_loop_statement = 21;
	public static readonly RULE_try_statement = 22;
	public static readonly RULE_try_except = 23;
	public static readonly RULE_try_finally = 24;
	public static readonly RULE_fork_statement = 25;
	public static readonly RULE_error_codes = 26;
	public static readonly RULE_any_error = 27;
	public static readonly RULE_expression = 28;
	public static readonly RULE_assignment = 29;
	public static readonly RULE_assignment_operator = 30;
	public static readonly RULE_non_assignment = 31;
	public static readonly RULE_conditional_expression = 32;
	public static readonly RULE_conditional_in_expression = 33;
	public static readonly RULE_conditional_or_expression = 34;
	public static readonly RULE_conditional_and_expression = 35;
	public static readonly RULE_inclusive_or_expression = 36;
	public static readonly RULE_exclusive_or_expression = 37;
	public static readonly RULE_and_expression = 38;
	public static readonly RULE_equality_expression = 39;
	public static readonly RULE_relational_expression = 40;
	public static readonly RULE_shift_expression = 41;
	public static readonly RULE_additive_expression = 42;
	public static readonly RULE_multiplicative_expression = 43;
	public static readonly RULE_unary_expression = 44;
	public static readonly RULE_negative_unary_expression = 45;
	public static readonly RULE_negated_unary_expression = 46;
	public static readonly RULE_complement_unary_expression = 47;
	public static readonly RULE_primary_expression = 48;
	public static readonly RULE_property_accessor = 49;
	public static readonly RULE_verb_invocation = 50;
	public static readonly RULE_expressions = 51;
	public static readonly RULE_bf_invocation = 52;
	public static readonly RULE_primary_expression_start = 53;
	public static readonly RULE_parenthesis_expression = 54;
	public static readonly RULE_error_catcher = 55;
	public static readonly RULE_list = 56;
	public static readonly RULE_map = 57;
	public static readonly RULE_map_entry = 58;
	public static readonly RULE_indexer = 59;
	public static readonly RULE_list_slicer = 60;
	public static readonly RULE_object_reference = 61;
	public static readonly RULE_object_id = 62;
	public static readonly RULE_corified_value = 63;
	public static readonly RULE_literal = 64;
	public static readonly RULE_bool_literal = 65;
	public static readonly RULE_string_literal = 66;
	public static readonly RULE_integer_literal = 67;
	public static readonly RULE_float_literal = 68;
	public static readonly RULE_caret = 69;
	public static readonly RULE_dollar = 70;
	public static readonly RULE_error_code = 71;
	public static readonly RULE_identifier = 72;
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
                                                            "'^'", "'}'", 
                                                            "']'", "')'", 
                                                            "':'", "','", 
                                                            "'/'", "'$'", 
                                                            "'.'", "'='", 
                                                            "'>>'", "'<<'", 
                                                            "'-'", "'&&'", 
                                                            "'=='", "'>='", 
                                                            "'>'", "'<='", 
                                                            "'<'", "'!='", 
                                                            "'!'", "'||'", 
                                                            "'..'", "'{'", 
                                                            "'['", "'('", 
                                                            "'%'", "'|'", 
                                                            "'+'", "'?'", 
                                                            "';'", "'#'", 
                                                            "'''", "'*'", 
                                                            "'->'", "'`'", 
                                                            "'~'" ];
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
                                                             "CARET", "CLOSE_BRACE", 
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
		"non_empty_return", "empty_return", "for_loop_statement", "for_expression", 
		"ranged_for_expression", "continue_statement", "empty_continue", "non_empty_continue", 
		"break_statement", "empty_break", "non_empty_break", "while_loop_statement", 
		"try_statement", "try_except", "try_finally", "fork_statement", "error_codes", 
		"any_error", "expression", "assignment", "assignment_operator", "non_assignment", 
		"conditional_expression", "conditional_in_expression", "conditional_or_expression", 
		"conditional_and_expression", "inclusive_or_expression", "exclusive_or_expression", 
		"and_expression", "equality_expression", "relational_expression", "shift_expression", 
		"additive_expression", "multiplicative_expression", "unary_expression", 
		"negative_unary_expression", "negated_unary_expression", "complement_unary_expression", 
		"primary_expression", "property_accessor", "verb_invocation", "expressions", 
		"bf_invocation", "primary_expression_start", "parenthesis_expression", 
		"error_catcher", "list", "map", "map_entry", "indexer", "list_slicer", 
		"object_reference", "object_id", "corified_value", "literal", "bool_literal", 
		"string_literal", "integer_literal", "float_literal", "caret", "dollar", 
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
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294823948) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165439) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 101433) !== 0)) {
				{
				{
				this.state = 146;
				this.statement();
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
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
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 154;
				this.empty_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 155;
				this.comment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 156;
				this.expression();
				this.state = 157;
				this.match(MoocodeParser.SEMICOLON);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 159;
				this.return_statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 160;
				this.continue_statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 161;
				this.break_statement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 162;
				this.fork_statement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 163;
				this.try_statement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 164;
				this.if_statement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 165;
				this.for_loop_statement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 166;
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
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294823948) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165439) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 101433) !== 0)) {
				{
				{
				this.state = 169;
				this.statement();
				}
				}
				this.state = 174;
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
			this.state = 175;
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
			this.state = 177;
			this.match(MoocodeParser.STRING_LITERAL);
			this.state = 178;
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
			this.state = 180;
			this.if_expression();
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 181;
				this.elseif_expression();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 187;
				this.else_expression();
				}
			}

			this.state = 190;
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
			this.state = 192;
			this.match(MoocodeParser.IF);
			this.state = 193;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 194;
			localctx._conditions = this.expression();
			this.state = 195;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 196;
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
			this.state = 198;
			this.match(MoocodeParser.ELSEIF);
			this.state = 199;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 200;
			localctx._conditions = this.expression();
			this.state = 201;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 202;
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
			this.state = 204;
			this.match(MoocodeParser.ELSE);
			this.state = 205;
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
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 207;
				this.non_empty_return();
				}
				break;
			case 2:
				{
				this.state = 208;
				this.empty_return();
				}
				break;
			}
			this.state = 211;
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
			this.state = 213;
			this.match(MoocodeParser.RETURN);
			this.state = 214;
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
			this.state = 216;
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.match(MoocodeParser.FOR);
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 219;
				this.for_expression();
				}
				break;
			case 2:
				{
				this.state = 220;
				this.ranged_for_expression();
				}
				break;
			}
			this.state = 223;
			localctx._body = this.statements();
			this.state = 224;
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
	public for_expression(): For_expressionContext {
		let localctx: For_expressionContext = new For_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MoocodeParser.RULE_for_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			localctx._value = this.identifier();
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 227;
				this.match(MoocodeParser.COMMA);
				this.state = 228;
				localctx._key = this.identifier();
				}
			}

			this.state = 231;
			this.match(MoocodeParser.IN);
			this.state = 232;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 233;
			localctx._range = this.expression();
			this.state = 234;
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
	public ranged_for_expression(): Ranged_for_expressionContext {
		let localctx: Ranged_for_expressionContext = new Ranged_for_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MoocodeParser.RULE_ranged_for_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			localctx._value = this.identifier();
			this.state = 237;
			this.match(MoocodeParser.IN);
			this.state = 238;
			this.match(MoocodeParser.OPEN_BRACKET);
			this.state = 239;
			localctx._start = this.expression();
			this.state = 240;
			this.match(MoocodeParser.OP_RANGE);
			this.state = 241;
			localctx._end = this.expression();
			this.state = 242;
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
	public continue_statement(): Continue_statementContext {
		let localctx: Continue_statementContext = new Continue_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, MoocodeParser.RULE_continue_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 244;
				this.empty_continue();
				}
				break;
			case 2:
				{
				this.state = 245;
				this.non_empty_continue();
				}
				break;
			}
			this.state = 248;
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
		this.enterRule(localctx, 32, MoocodeParser.RULE_empty_continue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 250;
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
		this.enterRule(localctx, 34, MoocodeParser.RULE_non_empty_continue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 252;
			this.match(MoocodeParser.CONTINUE);
			this.state = 253;
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
		this.enterRule(localctx, 36, MoocodeParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 255;
				this.empty_break();
				}
				break;
			case 2:
				{
				this.state = 256;
				this.non_empty_break();
				}
				break;
			}
			this.state = 259;
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
		this.enterRule(localctx, 38, MoocodeParser.RULE_empty_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
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
		this.enterRule(localctx, 40, MoocodeParser.RULE_non_empty_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this.match(MoocodeParser.BREAK);
			this.state = 264;
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
		this.enterRule(localctx, 42, MoocodeParser.RULE_while_loop_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.match(MoocodeParser.WHILE);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 267;
				localctx._outer_name = this.identifier();
				}
			}

			this.state = 270;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 271;
				localctx._inner_name = this.identifier();
				this.state = 272;
				this.match(MoocodeParser.EQUALS);
				}
				break;
			}
			this.state = 276;
			localctx._conditions = this.expression();
			this.state = 277;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 278;
			this.statements();
			this.state = 279;
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
		this.enterRule(localctx, 44, MoocodeParser.RULE_try_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this.match(MoocodeParser.TRY);
			this.state = 282;
			this.statements();
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 283;
					this.try_except();
					}
					}
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===11);
				}
				break;
			case 2:
				{
				this.state = 288;
				this.try_finally();
				}
				break;
			case 3:
				{
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 289;
					this.try_except();
					}
					}
					this.state = 292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===11);
				this.state = 294;
				this.try_finally();
				}
				break;
			}
			this.state = 298;
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
		this.enterRule(localctx, 46, MoocodeParser.RULE_try_except);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this.match(MoocodeParser.EXCEPT);
			this.state = 301;
			this.identifier();
			this.state = 302;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 303;
			this.error_codes();
			this.state = 304;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 305;
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
		this.enterRule(localctx, 48, MoocodeParser.RULE_try_finally);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(MoocodeParser.FINALLY);
			this.state = 308;
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
		this.enterRule(localctx, 50, MoocodeParser.RULE_fork_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 310;
			this.match(MoocodeParser.FORK);
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 311;
				localctx._name = this.identifier();
				}
			}

			this.state = 314;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 315;
			localctx._schedule = this.expression();
			this.state = 316;
			this.match(MoocodeParser.CLOSE_PARENS);
			this.state = 317;
			this.statements();
			this.state = 318;
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
		this.enterRule(localctx, 52, MoocodeParser.RULE_error_codes);
		let _la: number;
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 41:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 320;
				this.any_error();
				}
				break;
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
			case 51:
			case 58:
			case 63:
			case 71:
			case 74:
			case 75:
			case 76:
			case 82:
			case 86:
			case 87:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 321;
				this.expression();
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===56) {
					{
					{
					this.state = 322;
					this.match(MoocodeParser.COMMA);
					this.state = 323;
					this.expression();
					}
					}
					this.state = 328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
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
	public any_error(): Any_errorContext {
		let localctx: Any_errorContext = new Any_errorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MoocodeParser.RULE_any_error);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 331;
			this.match(MoocodeParser.ANY_ERROR);
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
		this.enterRule(localctx, 56, MoocodeParser.RULE_expression);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 333;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 334;
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
		this.enterRule(localctx, 58, MoocodeParser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 337;
			this.unary_expression();
			this.state = 338;
			this.assignment_operator();
			this.state = 339;
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
		this.enterRule(localctx, 60, MoocodeParser.RULE_assignment_operator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 341;
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
		this.enterRule(localctx, 62, MoocodeParser.RULE_non_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 343;
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
		this.enterRule(localctx, 64, MoocodeParser.RULE_conditional_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 345;
			localctx._if_conditions = this.conditional_in_expression();
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80) {
				{
				this.state = 346;
				this.match(MoocodeParser.QUESTION_MARK);
				this.state = 347;
				localctx._true_ex = this.expression();
				this.state = 348;
				this.match(MoocodeParser.PIPE);
				this.state = 349;
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
		this.enterRule(localctx, 66, MoocodeParser.RULE_conditional_in_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 353;
			localctx._left = this.conditional_or_expression();
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 354;
				this.match(MoocodeParser.IN);
				this.state = 355;
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
		this.enterRule(localctx, 68, MoocodeParser.RULE_conditional_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.conditional_and_expression();
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===72) {
				{
				{
				this.state = 359;
				this.match(MoocodeParser.OP_OR);
				this.state = 360;
				this.conditional_and_expression();
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
	public conditional_and_expression(): Conditional_and_expressionContext {
		let localctx: Conditional_and_expressionContext = new Conditional_and_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, MoocodeParser.RULE_conditional_and_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.inclusive_or_expression();
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 367;
				this.match(MoocodeParser.OP_AND);
				this.state = 368;
				this.inclusive_or_expression();
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
	public inclusive_or_expression(): Inclusive_or_expressionContext {
		let localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, MoocodeParser.RULE_inclusive_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.exclusive_or_expression();
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===49) {
				{
				{
				this.state = 375;
				this.match(MoocodeParser.BIT_OR);
				this.state = 376;
				this.exclusive_or_expression();
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
	public exclusive_or_expression(): Exclusive_or_expressionContext {
		let localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, MoocodeParser.RULE_exclusive_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.and_expression();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===50) {
				{
				{
				this.state = 383;
				this.match(MoocodeParser.BIT_XOR);
				this.state = 384;
				this.and_expression();
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
	public and_expression(): And_expressionContext {
		let localctx: And_expressionContext = new And_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, MoocodeParser.RULE_and_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 390;
			this.equality_expression();
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===48) {
				{
				{
				this.state = 391;
				this.match(MoocodeParser.BIT_AND);
				this.state = 392;
				this.equality_expression();
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
	public equality_expression(): Equality_expressionContext {
		let localctx: Equality_expressionContext = new Equality_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, MoocodeParser.RULE_equality_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 398;
			this.relational_expression();
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===65 || _la===70) {
				{
				{
				this.state = 399;
				_la = this._input.LA(1);
				if(!(_la===65 || _la===70)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 400;
				this.relational_expression();
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
	public relational_expression(): Relational_expressionContext {
		let localctx: Relational_expressionContext = new Relational_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, MoocodeParser.RULE_relational_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 406;
			this.shift_expression();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 15) !== 0)) {
				{
				{
				this.state = 407;
				_la = this._input.LA(1);
				if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 15) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 408;
				this.shift_expression();
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
	public shift_expression(): Shift_expressionContext {
		let localctx: Shift_expressionContext = new Shift_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, MoocodeParser.RULE_shift_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 414;
			this.additive_expression();
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===61 || _la===62) {
				{
				{
				this.state = 415;
				_la = this._input.LA(1);
				if(!(_la===61 || _la===62)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 416;
				this.additive_expression();
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
	public additive_expression(): Additive_expressionContext {
		let localctx: Additive_expressionContext = new Additive_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, MoocodeParser.RULE_additive_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 422;
			this.multiplicative_expression();
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===63 || _la===79) {
				{
				{
				this.state = 423;
				_la = this._input.LA(1);
				if(!(_la===63 || _la===79)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 424;
				this.multiplicative_expression();
				}
				}
				this.state = 429;
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
		this.enterRule(localctx, 86, MoocodeParser.RULE_multiplicative_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 430;
			this.unary_expression();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 135266305) !== 0)) {
				{
				{
				this.state = 431;
				_la = this._input.LA(1);
				if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 135266305) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 432;
				this.unary_expression();
				}
				}
				this.state = 437;
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
		this.enterRule(localctx, 88, MoocodeParser.RULE_unary_expression);
		try {
			this.state = 442;
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
			case 51:
			case 58:
			case 74:
			case 75:
			case 76:
			case 82:
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 438;
				this.primary_expression();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 439;
				this.negative_unary_expression();
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 440;
				this.negated_unary_expression();
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 441;
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
		this.enterRule(localctx, 90, MoocodeParser.RULE_negative_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 444;
			this.match(MoocodeParser.MINUS);
			this.state = 445;
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
		this.enterRule(localctx, 92, MoocodeParser.RULE_negated_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 447;
			this.match(MoocodeParser.OP_NOT);
			this.state = 448;
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
		this.enterRule(localctx, 94, MoocodeParser.RULE_complement_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 450;
			this.match(MoocodeParser.WAVE);
			this.state = 451;
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
		this.enterRule(localctx, 96, MoocodeParser.RULE_primary_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			localctx._pe = this.primary_expression_start();
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 3145745) !== 0)) {
				{
				this.state = 458;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 75:
					{
					this.state = 454;
					this.indexer();
					}
					break;
				case 59:
					{
					this.state = 455;
					this.property_accessor();
					}
					break;
				case 55:
					{
					this.state = 456;
					this.verb_invocation();
					}
					break;
				case 76:
					{
					this.state = 457;
					this.bf_invocation();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 462;
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
	public property_accessor(): Property_accessorContext {
		let localctx: Property_accessorContext = new Property_accessorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, MoocodeParser.RULE_property_accessor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 463;
			this.match(MoocodeParser.DOT);
			this.state = 469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				{
				this.state = 464;
				this.identifier();
				}
				break;
			case 76:
				{
				this.state = 465;
				this.match(MoocodeParser.OPEN_PARENS);
				this.state = 466;
				localctx._computed_prop_arguments = this.expression();
				this.state = 467;
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
		this.enterRule(localctx, 100, MoocodeParser.RULE_verb_invocation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 471;
			this.match(MoocodeParser.COLON);
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				{
				this.state = 472;
				this.identifier();
				}
				break;
			case 76:
				{
				this.state = 473;
				this.match(MoocodeParser.OPEN_PARENS);
				this.state = 474;
				localctx._computed_verb_arguments = this.expression();
				this.state = 475;
				this.match(MoocodeParser.CLOSE_PARENS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 479;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 480;
			localctx._arguments = this.expressions();
			this.state = 481;
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
		this.enterRule(localctx, 102, MoocodeParser.RULE_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165439) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100409) !== 0)) {
				{
				this.state = 483;
				this.expression();
				}
			}

			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===56) {
				{
				{
				this.state = 486;
				this.match(MoocodeParser.COMMA);
				this.state = 487;
				this.expression();
				}
				}
				this.state = 492;
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
		this.enterRule(localctx, 104, MoocodeParser.RULE_bf_invocation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 494;
			localctx._arguments = this.expressions();
			this.state = 495;
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
		this.enterRule(localctx, 106, MoocodeParser.RULE_primary_expression_start);
		try {
			this.state = 506;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 497;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 498;
				this.literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 499;
				this.error_code();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 500;
				this.object_reference();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 501;
				this.list_slicer();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 502;
				this.list();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 503;
				this.map();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 504;
				this.error_catcher();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 505;
				this.parenthesis_expression();
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
	public parenthesis_expression(): Parenthesis_expressionContext {
		let localctx: Parenthesis_expressionContext = new Parenthesis_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, MoocodeParser.RULE_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 508;
			this.match(MoocodeParser.OPEN_PARENS);
			this.state = 509;
			this.expression();
			this.state = 510;
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
	public error_catcher(): Error_catcherContext {
		let localctx: Error_catcherContext = new Error_catcherContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, MoocodeParser.RULE_error_catcher);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 512;
			this.match(MoocodeParser.TICK);
			this.state = 513;
			localctx._try_ = this.expression();
			this.state = 514;
			this.match(MoocodeParser.OP_NOT);
			this.state = 515;
			this.error_codes();
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 516;
				this.match(MoocodeParser.ARROW);
				this.state = 517;
				localctx._on_error = this.expression();
				}
			}

			this.state = 520;
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
		this.enterRule(localctx, 112, MoocodeParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 522;
			this.match(MoocodeParser.OPEN_BRACE);
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165439) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100409) !== 0)) {
				{
				this.state = 523;
				this.expression();
				}
			}

			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===56) {
				{
				{
				this.state = 526;
				this.match(MoocodeParser.COMMA);
				this.state = 527;
				this.expression();
				}
				}
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 533;
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
		this.enterRule(localctx, 114, MoocodeParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 535;
			this.match(MoocodeParser.OPEN_BRACKET);
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165439) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100409) !== 0)) {
				{
				this.state = 536;
				this.map_entry();
				}
			}

			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===56) {
				{
				{
				this.state = 539;
				this.match(MoocodeParser.COMMA);
				this.state = 540;
				this.map_entry();
				}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 546;
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
		this.enterRule(localctx, 116, MoocodeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 548;
			localctx._map_key = this.expression();
			this.state = 549;
			this.match(MoocodeParser.THIN_ARROW);
			this.state = 550;
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
		this.enterRule(localctx, 118, MoocodeParser.RULE_indexer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 552;
			this.match(MoocodeParser.OPEN_BRACKET);
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 553;
				localctx._argument = this.expression();
				}
				break;
			case 2:
				{
				this.state = 554;
				localctx._start = this.expression();
				this.state = 555;
				this.match(MoocodeParser.OP_RANGE);
				this.state = 556;
				localctx._end = this.expression();
				}
				break;
			}
			this.state = 560;
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
		this.enterRule(localctx, 120, MoocodeParser.RULE_list_slicer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 562;
			this.match(MoocodeParser.AT);
			this.state = 563;
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
		this.enterRule(localctx, 122, MoocodeParser.RULE_object_reference);
		try {
			this.state = 567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 82:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 565;
				this.object_id();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 566;
				this.corified_value();
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
		this.enterRule(localctx, 124, MoocodeParser.RULE_object_id);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 569;
			this.match(MoocodeParser.SHARP);
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 570;
				this.match(MoocodeParser.MINUS);
				}
			}

			this.state = 573;
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
	public corified_value(): Corified_valueContext {
		let localctx: Corified_valueContext = new Corified_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, MoocodeParser.RULE_corified_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 575;
			this.match(MoocodeParser.DOLLAR);
			this.state = 576;
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
		this.enterRule(localctx, 128, MoocodeParser.RULE_literal);
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 578;
				this.bool_literal();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 579;
				this.string_literal();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 580;
				this.integer_literal();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 581;
				this.float_literal();
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 582;
				this.caret();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 583;
				this.dollar();
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
		this.enterRule(localctx, 130, MoocodeParser.RULE_bool_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 586;
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
		this.enterRule(localctx, 132, MoocodeParser.RULE_string_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 588;
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
		this.enterRule(localctx, 134, MoocodeParser.RULE_integer_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 590;
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
		this.enterRule(localctx, 136, MoocodeParser.RULE_float_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 592;
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
	public caret(): CaretContext {
		let localctx: CaretContext = new CaretContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, MoocodeParser.RULE_caret);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 594;
			this.match(MoocodeParser.CARET);
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
	public dollar(): DollarContext {
		let localctx: DollarContext = new DollarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, MoocodeParser.RULE_dollar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 596;
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
		this.enterRule(localctx, 142, MoocodeParser.RULE_error_code);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 598;
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
		this.enterRule(localctx, 144, MoocodeParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 600;
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

	public static readonly _serializedATN: number[] = [4,1,88,603,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,
	2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,
	68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,1,0,5,0,148,8,0,10,0,12,
	0,151,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,
	1,168,8,1,1,2,5,2,171,8,2,10,2,12,2,174,9,2,1,3,1,3,1,4,1,4,1,4,1,5,1,5,
	5,5,183,8,5,10,5,12,5,186,9,5,1,5,3,5,189,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
	6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,3,9,210,8,9,1,9,1,9,1,
	10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,3,12,222,8,12,1,12,1,12,1,12,1,13,
	1,13,1,13,3,13,230,8,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,14,1,15,1,15,3,15,247,8,15,1,15,1,15,1,16,1,16,1,17,1,17,
	1,17,1,18,1,18,3,18,258,8,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,
	21,3,21,269,8,21,1,21,1,21,1,21,1,21,3,21,275,8,21,1,21,1,21,1,21,1,21,
	1,21,1,22,1,22,1,22,4,22,285,8,22,11,22,12,22,286,1,22,1,22,4,22,291,8,
	22,11,22,12,22,292,1,22,1,22,3,22,297,8,22,1,22,1,22,1,23,1,23,1,23,1,23,
	1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,3,25,313,8,25,1,25,1,25,1,25,1,
	25,1,25,1,25,1,26,1,26,1,26,1,26,5,26,325,8,26,10,26,12,26,328,9,26,3,26,
	330,8,26,1,27,1,27,1,28,1,28,3,28,336,8,28,1,29,1,29,1,29,1,29,1,30,1,30,
	1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,352,8,32,1,33,1,33,1,33,3,
	33,357,8,33,1,34,1,34,1,34,5,34,362,8,34,10,34,12,34,365,9,34,1,35,1,35,
	1,35,5,35,370,8,35,10,35,12,35,373,9,35,1,36,1,36,1,36,5,36,378,8,36,10,
	36,12,36,381,9,36,1,37,1,37,1,37,5,37,386,8,37,10,37,12,37,389,9,37,1,38,
	1,38,1,38,5,38,394,8,38,10,38,12,38,397,9,38,1,39,1,39,1,39,5,39,402,8,
	39,10,39,12,39,405,9,39,1,40,1,40,1,40,5,40,410,8,40,10,40,12,40,413,9,
	40,1,41,1,41,1,41,5,41,418,8,41,10,41,12,41,421,9,41,1,42,1,42,1,42,5,42,
	426,8,42,10,42,12,42,429,9,42,1,43,1,43,1,43,5,43,434,8,43,10,43,12,43,
	437,9,43,1,44,1,44,1,44,1,44,3,44,443,8,44,1,45,1,45,1,45,1,46,1,46,1,46,
	1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,5,48,459,8,48,10,48,12,48,462,9,
	48,1,49,1,49,1,49,1,49,1,49,1,49,3,49,470,8,49,1,50,1,50,1,50,1,50,1,50,
	1,50,3,50,478,8,50,1,50,1,50,1,50,1,50,1,51,3,51,485,8,51,1,51,1,51,5,51,
	489,8,51,10,51,12,51,492,9,51,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,3,53,507,8,53,1,54,1,54,1,54,1,54,1,55,1,55,1,55,
	1,55,1,55,1,55,3,55,519,8,55,1,55,1,55,1,56,1,56,3,56,525,8,56,1,56,1,56,
	5,56,529,8,56,10,56,12,56,532,9,56,1,56,1,56,1,57,1,57,3,57,538,8,57,1,
	57,1,57,5,57,542,8,57,10,57,12,57,545,9,57,1,57,1,57,1,58,1,58,1,58,1,58,
	1,59,1,59,1,59,1,59,1,59,1,59,3,59,559,8,59,1,59,1,59,1,60,1,60,1,60,1,
	61,1,61,3,61,568,8,61,1,62,1,62,3,62,572,8,62,1,62,1,62,1,63,1,63,1,63,
	1,64,1,64,1,64,1,64,1,64,1,64,3,64,585,8,64,1,65,1,65,1,66,1,66,1,67,1,
	67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,1,72,1,72,1,72,0,0,73,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
	104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
	140,142,144,0,7,2,0,65,65,70,70,1,0,66,69,1,0,61,62,2,0,63,63,79,79,3,0,
	57,57,77,77,84,84,2,0,12,12,19,19,1,0,22,40,602,0,149,1,0,0,0,2,167,1,0,
	0,0,4,172,1,0,0,0,6,175,1,0,0,0,8,177,1,0,0,0,10,180,1,0,0,0,12,192,1,0,
	0,0,14,198,1,0,0,0,16,204,1,0,0,0,18,209,1,0,0,0,20,213,1,0,0,0,22,216,
	1,0,0,0,24,218,1,0,0,0,26,226,1,0,0,0,28,236,1,0,0,0,30,246,1,0,0,0,32,
	250,1,0,0,0,34,252,1,0,0,0,36,257,1,0,0,0,38,261,1,0,0,0,40,263,1,0,0,0,
	42,266,1,0,0,0,44,281,1,0,0,0,46,300,1,0,0,0,48,307,1,0,0,0,50,310,1,0,
	0,0,52,329,1,0,0,0,54,331,1,0,0,0,56,335,1,0,0,0,58,337,1,0,0,0,60,341,
	1,0,0,0,62,343,1,0,0,0,64,345,1,0,0,0,66,353,1,0,0,0,68,358,1,0,0,0,70,
	366,1,0,0,0,72,374,1,0,0,0,74,382,1,0,0,0,76,390,1,0,0,0,78,398,1,0,0,0,
	80,406,1,0,0,0,82,414,1,0,0,0,84,422,1,0,0,0,86,430,1,0,0,0,88,442,1,0,
	0,0,90,444,1,0,0,0,92,447,1,0,0,0,94,450,1,0,0,0,96,453,1,0,0,0,98,463,
	1,0,0,0,100,471,1,0,0,0,102,484,1,0,0,0,104,493,1,0,0,0,106,506,1,0,0,0,
	108,508,1,0,0,0,110,512,1,0,0,0,112,522,1,0,0,0,114,535,1,0,0,0,116,548,
	1,0,0,0,118,552,1,0,0,0,120,562,1,0,0,0,122,567,1,0,0,0,124,569,1,0,0,0,
	126,575,1,0,0,0,128,584,1,0,0,0,130,586,1,0,0,0,132,588,1,0,0,0,134,590,
	1,0,0,0,136,592,1,0,0,0,138,594,1,0,0,0,140,596,1,0,0,0,142,598,1,0,0,0,
	144,600,1,0,0,0,146,148,3,2,1,0,147,146,1,0,0,0,148,151,1,0,0,0,149,147,
	1,0,0,0,149,150,1,0,0,0,150,152,1,0,0,0,151,149,1,0,0,0,152,153,5,0,0,1,
	153,1,1,0,0,0,154,168,3,6,3,0,155,168,3,8,4,0,156,157,3,56,28,0,157,158,
	5,81,0,0,158,168,1,0,0,0,159,168,3,18,9,0,160,168,3,30,15,0,161,168,3,36,
	18,0,162,168,3,50,25,0,163,168,3,44,22,0,164,168,3,10,5,0,165,168,3,24,
	12,0,166,168,3,42,21,0,167,154,1,0,0,0,167,155,1,0,0,0,167,156,1,0,0,0,
	167,159,1,0,0,0,167,160,1,0,0,0,167,161,1,0,0,0,167,162,1,0,0,0,167,163,
	1,0,0,0,167,164,1,0,0,0,167,165,1,0,0,0,167,166,1,0,0,0,168,3,1,0,0,0,169,
	171,3,2,1,0,170,169,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,172,173,1,0,
	0,0,173,5,1,0,0,0,174,172,1,0,0,0,175,176,5,81,0,0,176,7,1,0,0,0,177,178,
	5,45,0,0,178,179,5,81,0,0,179,9,1,0,0,0,180,184,3,12,6,0,181,183,3,14,7,
	0,182,181,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,188,
	1,0,0,0,186,184,1,0,0,0,187,189,3,16,8,0,188,187,1,0,0,0,188,189,1,0,0,
	0,189,190,1,0,0,0,190,191,5,8,0,0,191,11,1,0,0,0,192,193,5,16,0,0,193,194,
	5,76,0,0,194,195,3,56,28,0,195,196,5,54,0,0,196,197,3,4,2,0,197,13,1,0,
	0,0,198,199,5,5,0,0,199,200,5,76,0,0,200,201,3,56,28,0,201,202,5,54,0,0,
	202,203,3,4,2,0,203,15,1,0,0,0,204,205,5,4,0,0,205,206,3,4,2,0,206,17,1,
	0,0,0,207,210,3,20,10,0,208,210,3,22,11,0,209,207,1,0,0,0,209,208,1,0,0,
	0,210,211,1,0,0,0,211,212,5,81,0,0,212,19,1,0,0,0,213,214,5,18,0,0,214,
	215,3,56,28,0,215,21,1,0,0,0,216,217,5,18,0,0,217,23,1,0,0,0,218,221,5,
	14,0,0,219,222,3,26,13,0,220,222,3,28,14,0,221,219,1,0,0,0,221,220,1,0,
	0,0,222,223,1,0,0,0,223,224,3,4,2,0,224,225,5,6,0,0,225,25,1,0,0,0,226,
	229,3,144,72,0,227,228,5,56,0,0,228,230,3,144,72,0,229,227,1,0,0,0,229,
	230,1,0,0,0,230,231,1,0,0,0,231,232,5,17,0,0,232,233,5,76,0,0,233,234,3,
	56,28,0,234,235,5,54,0,0,235,27,1,0,0,0,236,237,3,144,72,0,237,238,5,17,
	0,0,238,239,5,75,0,0,239,240,3,56,28,0,240,241,5,73,0,0,241,242,3,56,28,
	0,242,243,5,53,0,0,243,29,1,0,0,0,244,247,3,32,16,0,245,247,3,34,17,0,246,
	244,1,0,0,0,246,245,1,0,0,0,247,248,1,0,0,0,248,249,5,81,0,0,249,31,1,0,
	0,0,250,251,5,3,0,0,251,33,1,0,0,0,252,253,5,3,0,0,253,254,3,144,72,0,254,
	35,1,0,0,0,255,258,3,38,19,0,256,258,3,40,20,0,257,255,1,0,0,0,257,256,
	1,0,0,0,258,259,1,0,0,0,259,260,5,81,0,0,260,37,1,0,0,0,261,262,5,2,0,0,
	262,39,1,0,0,0,263,264,5,2,0,0,264,265,3,144,72,0,265,41,1,0,0,0,266,268,
	5,21,0,0,267,269,3,144,72,0,268,267,1,0,0,0,268,269,1,0,0,0,269,270,1,0,
	0,0,270,274,5,76,0,0,271,272,3,144,72,0,272,273,5,60,0,0,273,275,1,0,0,
	0,274,271,1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,3,56,28,0,277,
	278,5,54,0,0,278,279,3,4,2,0,279,280,5,10,0,0,280,43,1,0,0,0,281,282,5,
	20,0,0,282,296,3,4,2,0,283,285,3,46,23,0,284,283,1,0,0,0,285,286,1,0,0,
	0,286,284,1,0,0,0,286,287,1,0,0,0,287,297,1,0,0,0,288,297,3,48,24,0,289,
	291,3,46,23,0,290,289,1,0,0,0,291,292,1,0,0,0,292,290,1,0,0,0,292,293,1,
	0,0,0,293,294,1,0,0,0,294,295,3,48,24,0,295,297,1,0,0,0,296,284,1,0,0,0,
	296,288,1,0,0,0,296,290,1,0,0,0,297,298,1,0,0,0,298,299,5,9,0,0,299,45,
	1,0,0,0,300,301,5,11,0,0,301,302,3,144,72,0,302,303,5,76,0,0,303,304,3,
	52,26,0,304,305,5,54,0,0,305,306,3,4,2,0,306,47,1,0,0,0,307,308,5,13,0,
	0,308,309,3,4,2,0,309,49,1,0,0,0,310,312,5,15,0,0,311,313,3,144,72,0,312,
	311,1,0,0,0,312,313,1,0,0,0,313,314,1,0,0,0,314,315,5,76,0,0,315,316,3,
	56,28,0,316,317,5,54,0,0,317,318,3,4,2,0,318,319,5,7,0,0,319,51,1,0,0,0,
	320,330,3,54,27,0,321,326,3,56,28,0,322,323,5,56,0,0,323,325,3,56,28,0,
	324,322,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,330,
	1,0,0,0,328,326,1,0,0,0,329,320,1,0,0,0,329,321,1,0,0,0,330,53,1,0,0,0,
	331,332,5,41,0,0,332,55,1,0,0,0,333,336,3,58,29,0,334,336,3,62,31,0,335,
	333,1,0,0,0,335,334,1,0,0,0,336,57,1,0,0,0,337,338,3,88,44,0,338,339,3,
	60,30,0,339,340,3,56,28,0,340,59,1,0,0,0,341,342,5,60,0,0,342,61,1,0,0,
	0,343,344,3,64,32,0,344,63,1,0,0,0,345,351,3,66,33,0,346,347,5,80,0,0,347,
	348,3,56,28,0,348,349,5,78,0,0,349,350,3,56,28,0,350,352,1,0,0,0,351,346,
	1,0,0,0,351,352,1,0,0,0,352,65,1,0,0,0,353,356,3,68,34,0,354,355,5,17,0,
	0,355,357,3,68,34,0,356,354,1,0,0,0,356,357,1,0,0,0,357,67,1,0,0,0,358,
	363,3,70,35,0,359,360,5,72,0,0,360,362,3,70,35,0,361,359,1,0,0,0,362,365,
	1,0,0,0,363,361,1,0,0,0,363,364,1,0,0,0,364,69,1,0,0,0,365,363,1,0,0,0,
	366,371,3,72,36,0,367,368,5,64,0,0,368,370,3,72,36,0,369,367,1,0,0,0,370,
	373,1,0,0,0,371,369,1,0,0,0,371,372,1,0,0,0,372,71,1,0,0,0,373,371,1,0,
	0,0,374,379,3,74,37,0,375,376,5,49,0,0,376,378,3,74,37,0,377,375,1,0,0,
	0,378,381,1,0,0,0,379,377,1,0,0,0,379,380,1,0,0,0,380,73,1,0,0,0,381,379,
	1,0,0,0,382,387,3,76,38,0,383,384,5,50,0,0,384,386,3,76,38,0,385,383,1,
	0,0,0,386,389,1,0,0,0,387,385,1,0,0,0,387,388,1,0,0,0,388,75,1,0,0,0,389,
	387,1,0,0,0,390,395,3,78,39,0,391,392,5,48,0,0,392,394,3,78,39,0,393,391,
	1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,77,1,0,0,0,
	397,395,1,0,0,0,398,403,3,80,40,0,399,400,7,0,0,0,400,402,3,80,40,0,401,
	399,1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,79,1,0,
	0,0,405,403,1,0,0,0,406,411,3,82,41,0,407,408,7,1,0,0,408,410,3,82,41,0,
	409,407,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,412,81,
	1,0,0,0,413,411,1,0,0,0,414,419,3,84,42,0,415,416,7,2,0,0,416,418,3,84,
	42,0,417,415,1,0,0,0,418,421,1,0,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,
	83,1,0,0,0,421,419,1,0,0,0,422,427,3,86,43,0,423,424,7,3,0,0,424,426,3,
	86,43,0,425,423,1,0,0,0,426,429,1,0,0,0,427,425,1,0,0,0,427,428,1,0,0,0,
	428,85,1,0,0,0,429,427,1,0,0,0,430,435,3,88,44,0,431,432,7,4,0,0,432,434,
	3,88,44,0,433,431,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,
	0,436,87,1,0,0,0,437,435,1,0,0,0,438,443,3,96,48,0,439,443,3,90,45,0,440,
	443,3,92,46,0,441,443,3,94,47,0,442,438,1,0,0,0,442,439,1,0,0,0,442,440,
	1,0,0,0,442,441,1,0,0,0,443,89,1,0,0,0,444,445,5,63,0,0,445,446,3,88,44,
	0,446,91,1,0,0,0,447,448,5,71,0,0,448,449,3,88,44,0,449,93,1,0,0,0,450,
	451,5,87,0,0,451,452,3,88,44,0,452,95,1,0,0,0,453,460,3,106,53,0,454,459,
	3,118,59,0,455,459,3,98,49,0,456,459,3,100,50,0,457,459,3,104,52,0,458,
	454,1,0,0,0,458,455,1,0,0,0,458,456,1,0,0,0,458,457,1,0,0,0,459,462,1,0,
	0,0,460,458,1,0,0,0,460,461,1,0,0,0,461,97,1,0,0,0,462,460,1,0,0,0,463,
	469,5,59,0,0,464,470,3,144,72,0,465,466,5,76,0,0,466,467,3,56,28,0,467,
	468,5,54,0,0,468,470,1,0,0,0,469,464,1,0,0,0,469,465,1,0,0,0,470,99,1,0,
	0,0,471,477,5,55,0,0,472,478,3,144,72,0,473,474,5,76,0,0,474,475,3,56,28,
	0,475,476,5,54,0,0,476,478,1,0,0,0,477,472,1,0,0,0,477,473,1,0,0,0,478,
	479,1,0,0,0,479,480,5,76,0,0,480,481,3,102,51,0,481,482,5,54,0,0,482,101,
	1,0,0,0,483,485,3,56,28,0,484,483,1,0,0,0,484,485,1,0,0,0,485,490,1,0,0,
	0,486,487,5,56,0,0,487,489,3,56,28,0,488,486,1,0,0,0,489,492,1,0,0,0,490,
	488,1,0,0,0,490,491,1,0,0,0,491,103,1,0,0,0,492,490,1,0,0,0,493,494,5,76,
	0,0,494,495,3,102,51,0,495,496,5,54,0,0,496,105,1,0,0,0,497,507,3,144,72,
	0,498,507,3,128,64,0,499,507,3,142,71,0,500,507,3,122,61,0,501,507,3,120,
	60,0,502,507,3,112,56,0,503,507,3,114,57,0,504,507,3,110,55,0,505,507,3,
	108,54,0,506,497,1,0,0,0,506,498,1,0,0,0,506,499,1,0,0,0,506,500,1,0,0,
	0,506,501,1,0,0,0,506,502,1,0,0,0,506,503,1,0,0,0,506,504,1,0,0,0,506,505,
	1,0,0,0,507,107,1,0,0,0,508,509,5,76,0,0,509,510,3,56,28,0,510,511,5,54,
	0,0,511,109,1,0,0,0,512,513,5,86,0,0,513,514,3,56,28,0,514,515,5,71,0,0,
	515,518,3,52,26,0,516,517,5,46,0,0,517,519,3,56,28,0,518,516,1,0,0,0,518,
	519,1,0,0,0,519,520,1,0,0,0,520,521,5,83,0,0,521,111,1,0,0,0,522,524,5,
	74,0,0,523,525,3,56,28,0,524,523,1,0,0,0,524,525,1,0,0,0,525,530,1,0,0,
	0,526,527,5,56,0,0,527,529,3,56,28,0,528,526,1,0,0,0,529,532,1,0,0,0,530,
	528,1,0,0,0,530,531,1,0,0,0,531,533,1,0,0,0,532,530,1,0,0,0,533,534,5,52,
	0,0,534,113,1,0,0,0,535,537,5,75,0,0,536,538,3,116,58,0,537,536,1,0,0,0,
	537,538,1,0,0,0,538,543,1,0,0,0,539,540,5,56,0,0,540,542,3,116,58,0,541,
	539,1,0,0,0,542,545,1,0,0,0,543,541,1,0,0,0,543,544,1,0,0,0,544,546,1,0,
	0,0,545,543,1,0,0,0,546,547,5,53,0,0,547,115,1,0,0,0,548,549,3,56,28,0,
	549,550,5,85,0,0,550,551,3,56,28,0,551,117,1,0,0,0,552,558,5,75,0,0,553,
	559,3,56,28,0,554,555,3,56,28,0,555,556,5,73,0,0,556,557,3,56,28,0,557,
	559,1,0,0,0,558,553,1,0,0,0,558,554,1,0,0,0,559,560,1,0,0,0,560,561,5,53,
	0,0,561,119,1,0,0,0,562,563,5,47,0,0,563,564,3,144,72,0,564,121,1,0,0,0,
	565,568,3,124,62,0,566,568,3,126,63,0,567,565,1,0,0,0,567,566,1,0,0,0,568,
	123,1,0,0,0,569,571,5,82,0,0,570,572,5,63,0,0,571,570,1,0,0,0,571,572,1,
	0,0,0,572,573,1,0,0,0,573,574,3,134,67,0,574,125,1,0,0,0,575,576,5,58,0,
	0,576,577,3,144,72,0,577,127,1,0,0,0,578,585,3,130,65,0,579,585,3,132,66,
	0,580,585,3,134,67,0,581,585,3,136,68,0,582,585,3,138,69,0,583,585,3,140,
	70,0,584,578,1,0,0,0,584,579,1,0,0,0,584,580,1,0,0,0,584,581,1,0,0,0,584,
	582,1,0,0,0,584,583,1,0,0,0,585,129,1,0,0,0,586,587,7,5,0,0,587,131,1,0,
	0,0,588,589,5,45,0,0,589,133,1,0,0,0,590,591,5,43,0,0,591,135,1,0,0,0,592,
	593,5,44,0,0,593,137,1,0,0,0,594,595,5,51,0,0,595,139,1,0,0,0,596,597,5,
	58,0,0,597,141,1,0,0,0,598,599,7,6,0,0,599,143,1,0,0,0,600,601,5,42,0,0,
	601,145,1,0,0,0,48,149,167,172,184,188,209,221,229,246,257,268,274,286,
	292,296,312,326,329,335,351,356,363,371,379,387,395,403,411,419,427,435,
	442,458,460,469,477,484,490,506,518,524,530,537,543,558,567,571,584];

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
	public _body!: StatementsContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(MoocodeParser.FOR, 0);
	}
	public ENDFOR(): TerminalNode {
		return this.getToken(MoocodeParser.ENDFOR, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public for_expression(): For_expressionContext {
		return this.getTypedRuleContext(For_expressionContext, 0) as For_expressionContext;
	}
	public ranged_for_expression(): Ranged_for_expressionContext {
		return this.getTypedRuleContext(Ranged_for_expressionContext, 0) as Ranged_for_expressionContext;
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


export class For_expressionContext extends ParserRuleContext {
	public _value!: IdentifierContext;
	public _key!: IdentifierContext;
	public _range!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(MoocodeParser.IN, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MoocodeParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_for_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterFor_expression) {
	 		listener.enterFor_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitFor_expression) {
	 		listener.exitFor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitFor_expression) {
			return visitor.visitFor_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ranged_for_expressionContext extends ParserRuleContext {
	public _value!: IdentifierContext;
	public _start!: ExpressionContext;
	public _end!: ExpressionContext;
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(MoocodeParser.IN, 0);
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
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_ranged_for_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterRanged_for_expression) {
	 		listener.enterRanged_for_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitRanged_for_expression) {
	 		listener.exitRanged_for_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitRanged_for_expression) {
			return visitor.visitRanged_for_expression(this);
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
	public error_codes(): Error_codesContext {
		return this.getTypedRuleContext(Error_codesContext, 0) as Error_codesContext;
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodeParser.CLOSE_PARENS, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
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
	public any_error(): Any_errorContext {
		return this.getTypedRuleContext(Any_errorContext, 0) as Any_errorContext;
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


export class Any_errorContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANY_ERROR(): TerminalNode {
		return this.getToken(MoocodeParser.ANY_ERROR, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_any_error;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterAny_error) {
	 		listener.enterAny_error(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitAny_error) {
	 		listener.exitAny_error(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitAny_error) {
			return visitor.visitAny_error(this);
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
	public property_accessor_list(): Property_accessorContext[] {
		return this.getTypedRuleContexts(Property_accessorContext) as Property_accessorContext[];
	}
	public property_accessor(i: number): Property_accessorContext {
		return this.getTypedRuleContext(Property_accessorContext, i) as Property_accessorContext;
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


export class Property_accessorContext extends ParserRuleContext {
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
    	return MoocodeParser.RULE_property_accessor;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterProperty_accessor) {
	 		listener.enterProperty_accessor(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitProperty_accessor) {
	 		listener.exitProperty_accessor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitProperty_accessor) {
			return visitor.visitProperty_accessor(this);
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
	public parenthesis_expression(): Parenthesis_expressionContext {
		return this.getTypedRuleContext(Parenthesis_expressionContext, 0) as Parenthesis_expressionContext;
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


export class Parenthesis_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
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
    	return MoocodeParser.RULE_parenthesis_expression;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterParenthesis_expression) {
	 		listener.enterParenthesis_expression(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitParenthesis_expression) {
	 		listener.exitParenthesis_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitParenthesis_expression) {
			return visitor.visitParenthesis_expression(this);
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
	public SINGLE_QUOTE(): TerminalNode {
		return this.getToken(MoocodeParser.SINGLE_QUOTE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(MoocodeParser.ARROW, 0);
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
	public corified_value(): Corified_valueContext {
		return this.getTypedRuleContext(Corified_valueContext, 0) as Corified_valueContext;
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


export class Corified_valueContext extends ParserRuleContext {
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
    	return MoocodeParser.RULE_corified_value;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterCorified_value) {
	 		listener.enterCorified_value(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitCorified_value) {
	 		listener.exitCorified_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitCorified_value) {
			return visitor.visitCorified_value(this);
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
	public caret(): CaretContext {
		return this.getTypedRuleContext(CaretContext, 0) as CaretContext;
	}
	public dollar(): DollarContext {
		return this.getTypedRuleContext(DollarContext, 0) as DollarContext;
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


export class CaretContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CARET(): TerminalNode {
		return this.getToken(MoocodeParser.CARET, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_caret;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterCaret) {
	 		listener.enterCaret(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitCaret) {
	 		listener.exitCaret(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitCaret) {
			return visitor.visitCaret(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DollarContext extends ParserRuleContext {
	constructor(parser?: MoocodeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(MoocodeParser.DOLLAR, 0);
	}
    public get ruleIndex(): number {
    	return MoocodeParser.RULE_dollar;
	}
	public enterRule(listener: MoocodeParserListener): void {
	    if(listener.enterDollar) {
	 		listener.enterDollar(this);
		}
	}
	public exitRule(listener: MoocodeParserListener): void {
	    if(listener.exitDollar) {
	 		listener.exitDollar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodeParserVisitor<Result>): Result {
		if (visitor.visitDollar) {
			return visitor.visitDollar(this);
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
