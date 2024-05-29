// Generated from c://dev//moocode-utils//moocode-parsing//src//grammar//MoocodePartialParser.g4 by ANTLR 4.13.1
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
import MoocodePartialParserListener from "./MoocodePartialParserListener.js";
import MoocodePartialParserVisitor from "./MoocodePartialParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MoocodePartialParser extends Parser {
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
	public static readonly RULE_property_accessor = 0;
	public static readonly RULE_verb_invocation = 1;
	public static readonly RULE_corified_verb_invocation = 2;
	public static readonly RULE_bf_invocation = 3;
	public static readonly RULE_moocode = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_statements = 6;
	public static readonly RULE_empty_statement = 7;
	public static readonly RULE_comment = 8;
	public static readonly RULE_if_statement = 9;
	public static readonly RULE_if_expression = 10;
	public static readonly RULE_elseif_expression = 11;
	public static readonly RULE_else_expression = 12;
	public static readonly RULE_return_statement = 13;
	public static readonly RULE_non_empty_return = 14;
	public static readonly RULE_empty_return = 15;
	public static readonly RULE_for_loop_statement = 16;
	public static readonly RULE_for_expression = 17;
	public static readonly RULE_ranged_for_expression = 18;
	public static readonly RULE_continue_statement = 19;
	public static readonly RULE_empty_continue = 20;
	public static readonly RULE_non_empty_continue = 21;
	public static readonly RULE_break_statement = 22;
	public static readonly RULE_empty_break = 23;
	public static readonly RULE_non_empty_break = 24;
	public static readonly RULE_while_loop_statement = 25;
	public static readonly RULE_try_statement = 26;
	public static readonly RULE_try_except = 27;
	public static readonly RULE_error_codes = 28;
	public static readonly RULE_try_finally = 29;
	public static readonly RULE_fork_statement = 30;
	public static readonly RULE_expression = 31;
	public static readonly RULE_assignment = 32;
	public static readonly RULE_assignment_operator = 33;
	public static readonly RULE_non_assignment = 34;
	public static readonly RULE_conditional_expression = 35;
	public static readonly RULE_conditional_in_expression = 36;
	public static readonly RULE_conditional_or_expression = 37;
	public static readonly RULE_conditional_and_expression = 38;
	public static readonly RULE_inclusive_or_expression = 39;
	public static readonly RULE_exclusive_or_expression = 40;
	public static readonly RULE_and_expression = 41;
	public static readonly RULE_equality_expression = 42;
	public static readonly RULE_relational_expression = 43;
	public static readonly RULE_shift_expression = 44;
	public static readonly RULE_additive_expression = 45;
	public static readonly RULE_multiplicative_expression = 46;
	public static readonly RULE_unary_expression = 47;
	public static readonly RULE_negative_unary_expression = 48;
	public static readonly RULE_negated_unary_expression = 49;
	public static readonly RULE_complement_unary_expression = 50;
	public static readonly RULE_primary_expression = 51;
	public static readonly RULE_expressions = 52;
	public static readonly RULE_primary_expression_start = 53;
	public static readonly RULE_parenthesis_expression = 54;
	public static readonly RULE_error_catcher = 55;
	public static readonly RULE_list = 56;
	public static readonly RULE_map = 57;
	public static readonly RULE_map_entry = 58;
	public static readonly RULE_indexer = 59;
	public static readonly RULE_list_splicer = 60;
	public static readonly RULE_object_reference = 61;
	public static readonly RULE_object_id = 62;
	public static readonly RULE_corified_value = 63;
	public static readonly RULE_optional_variable = 64;
	public static readonly RULE_literal = 65;
	public static readonly RULE_bool_literal = 66;
	public static readonly RULE_string_literal = 67;
	public static readonly RULE_integer_literal = 68;
	public static readonly RULE_float_literal = 69;
	public static readonly RULE_caret = 70;
	public static readonly RULE_dollar = 71;
	public static readonly RULE_error_code = 72;
	public static readonly RULE_identifier = 73;
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
		"property_accessor", "verb_invocation", "corified_verb_invocation", "bf_invocation", 
		"moocode", "statement", "statements", "empty_statement", "comment", "if_statement", 
		"if_expression", "elseif_expression", "else_expression", "return_statement", 
		"non_empty_return", "empty_return", "for_loop_statement", "for_expression", 
		"ranged_for_expression", "continue_statement", "empty_continue", "non_empty_continue", 
		"break_statement", "empty_break", "non_empty_break", "while_loop_statement", 
		"try_statement", "try_except", "error_codes", "try_finally", "fork_statement", 
		"expression", "assignment", "assignment_operator", "non_assignment", "conditional_expression", 
		"conditional_in_expression", "conditional_or_expression", "conditional_and_expression", 
		"inclusive_or_expression", "exclusive_or_expression", "and_expression", 
		"equality_expression", "relational_expression", "shift_expression", "additive_expression", 
		"multiplicative_expression", "unary_expression", "negative_unary_expression", 
		"negated_unary_expression", "complement_unary_expression", "primary_expression", 
		"expressions", "primary_expression_start", "parenthesis_expression", "error_catcher", 
		"list", "map", "map_entry", "indexer", "list_splicer", "object_reference", 
		"object_id", "corified_value", "optional_variable", "literal", "bool_literal", 
		"string_literal", "integer_literal", "float_literal", "caret", "dollar", 
		"error_code", "identifier",
	];
	public get grammarFileName(): string { return "MoocodePartialParser.g4"; }
	public get literalNames(): (string | null)[] { return MoocodePartialParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MoocodePartialParser.symbolicNames; }
	public get ruleNames(): string[] { return MoocodePartialParser.ruleNames; }
	public get serializedATN(): number[] { return MoocodePartialParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MoocodePartialParser._ATN, MoocodePartialParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public property_accessor(): Property_accessorContext {
		let localctx: Property_accessorContext = new Property_accessorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MoocodePartialParser.RULE_property_accessor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this.match(MoocodePartialParser.DOT);
			this.state = 160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				{
				this.state = 157;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 149;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 150;
					localctx._computed_prop_arguments = this.expression();
					this.state = 151;
					this.match(MoocodePartialParser.CLOSE_PARENS);
					}
					break;
				case 2:
					{
					this.state = 153;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 155;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 154;
						localctx._computed_prop_arguments = this.expression();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 42:
				{
				{
				this.state = 159;
				this.identifier();
				}
				}
				break;
			case 17:
			case 46:
			case 48:
			case 49:
			case 50:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 75:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 83:
			case 84:
			case 85:
				break;
			default:
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
	public verb_invocation(): Verb_invocationContext {
		let localctx: Verb_invocationContext = new Verb_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MoocodePartialParser.RULE_verb_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.match(MoocodePartialParser.COLON);
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				{
				this.state = 192;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 163;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 164;
					localctx._computed_verb_arguments = this.expression();
					this.state = 165;
					this.match(MoocodePartialParser.CLOSE_PARENS);
					this.state = 166;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100921) !== 0)) {
						{
						this.state = 167;
						localctx._arguments = this.expressions();
						}
					}

					this.state = 170;
					this.match(MoocodePartialParser.CLOSE_PARENS);
					}
					break;
				case 2:
					{
					this.state = 172;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 173;
					localctx._computed_verb_arguments = this.expression();
					this.state = 174;
					this.match(MoocodePartialParser.CLOSE_PARENS);
					this.state = 175;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 177;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						this.state = 176;
						localctx._arguments = this.expressions();
						}
						break;
					}
					}
					break;
				case 3:
					{
					this.state = 179;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 180;
					localctx._computed_verb_arguments = this.expression();
					this.state = 181;
					this.match(MoocodePartialParser.CLOSE_PARENS);
					this.state = 182;
					this.match(MoocodePartialParser.OPEN_PARENS);
					}
					break;
				case 4:
					{
					this.state = 184;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 185;
					localctx._computed_verb_arguments = this.expression();
					this.state = 186;
					this.match(MoocodePartialParser.CLOSE_PARENS);
					}
					break;
				case 5:
					{
					this.state = 188;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 190;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						this.state = 189;
						localctx._computed_verb_arguments = this.expression();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 42:
				{
				this.state = 207;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 194;
					this.identifier();
					this.state = 195;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 197;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100921) !== 0)) {
						{
						this.state = 196;
						localctx._arguments = this.expressions();
						}
					}

					this.state = 199;
					this.match(MoocodePartialParser.CLOSE_PARENS);
					}
					break;
				case 2:
					{
					this.state = 201;
					this.identifier();
					this.state = 202;
					this.match(MoocodePartialParser.OPEN_PARENS);
					this.state = 204;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						this.state = 203;
						localctx._arguments = this.expressions();
						}
						break;
					}
					}
					break;
				case 3:
					{
					this.state = 206;
					this.identifier();
					}
					break;
				}
				}
				break;
			case 17:
			case 46:
			case 48:
			case 49:
			case 50:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 75:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 83:
			case 84:
			case 85:
				break;
			default:
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
	public corified_verb_invocation(): Corified_verb_invocationContext {
		let localctx: Corified_verb_invocationContext = new Corified_verb_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MoocodePartialParser.RULE_corified_verb_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 211;
			this.corified_value();
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 212;
				this.match(MoocodePartialParser.OPEN_PARENS);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100921) !== 0)) {
					{
					this.state = 213;
					localctx._arguments = this.expressions();
					}
				}

				this.state = 216;
				this.match(MoocodePartialParser.CLOSE_PARENS);
				}
				break;
			case 2:
				{
				this.state = 217;
				this.match(MoocodePartialParser.OPEN_PARENS);
				this.state = 219;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 218;
					localctx._arguments = this.expressions();
					}
					break;
				}
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
	public bf_invocation(): Bf_invocationContext {
		let localctx: Bf_invocationContext = new Bf_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MoocodePartialParser.RULE_bf_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 223;
			this.identifier();
			this.state = 233;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 224;
				this.match(MoocodePartialParser.OPEN_PARENS);
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100921) !== 0)) {
					{
					this.state = 225;
					localctx._arguments = this.expressions();
					}
				}

				this.state = 228;
				this.match(MoocodePartialParser.CLOSE_PARENS);
				}
				break;
			case 2:
				{
				this.state = 229;
				this.match(MoocodePartialParser.OPEN_PARENS);
				this.state = 231;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 230;
					localctx._arguments = this.expressions();
					}
					break;
				}
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
	public moocode(): MoocodeContext {
		let localctx: MoocodeContext = new MoocodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MoocodePartialParser.RULE_moocode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294823948) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 101945) !== 0)) {
				{
				{
				this.state = 235;
				this.statement();
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
			this.match(MoocodePartialParser.EOF);
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
		this.enterRule(localctx, 10, MoocodePartialParser.RULE_statement);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 243;
				this.empty_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 244;
				this.comment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 245;
				this.expression();
				this.state = 246;
				this.match(MoocodePartialParser.SEMICOLON);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 248;
				this.return_statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 249;
				this.continue_statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 250;
				this.break_statement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 251;
				this.fork_statement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 252;
				this.try_statement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 253;
				this.if_statement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 254;
				this.for_loop_statement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 255;
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
		this.enterRule(localctx, 12, MoocodePartialParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294823948) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 101945) !== 0)) {
				{
				{
				this.state = 258;
				this.statement();
				}
				}
				this.state = 263;
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
		this.enterRule(localctx, 14, MoocodePartialParser.RULE_empty_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			this.match(MoocodePartialParser.SEMICOLON);
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
		this.enterRule(localctx, 16, MoocodePartialParser.RULE_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.string_literal();
			this.state = 267;
			this.match(MoocodePartialParser.SEMICOLON);
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
		this.enterRule(localctx, 18, MoocodePartialParser.RULE_if_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 269;
			this.if_expression();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 270;
				this.elseif_expression();
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 276;
				this.else_expression();
				}
			}

			this.state = 279;
			this.match(MoocodePartialParser.ENDIF);
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
		this.enterRule(localctx, 20, MoocodePartialParser.RULE_if_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this.match(MoocodePartialParser.IF);
			this.state = 282;
			this.match(MoocodePartialParser.OPEN_PARENS);
			this.state = 283;
			localctx._conditions = this.expression();
			this.state = 284;
			this.match(MoocodePartialParser.CLOSE_PARENS);
			this.state = 285;
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
		this.enterRule(localctx, 22, MoocodePartialParser.RULE_elseif_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
			this.match(MoocodePartialParser.ELSEIF);
			this.state = 288;
			this.match(MoocodePartialParser.OPEN_PARENS);
			this.state = 289;
			localctx._conditions = this.expression();
			this.state = 290;
			this.match(MoocodePartialParser.CLOSE_PARENS);
			this.state = 291;
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
		this.enterRule(localctx, 24, MoocodePartialParser.RULE_else_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.match(MoocodePartialParser.ELSE);
			this.state = 294;
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
		this.enterRule(localctx, 26, MoocodePartialParser.RULE_return_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 296;
				this.non_empty_return();
				}
				break;
			case 2:
				{
				this.state = 297;
				this.empty_return();
				}
				break;
			}
			this.state = 300;
			this.match(MoocodePartialParser.SEMICOLON);
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
		this.enterRule(localctx, 28, MoocodePartialParser.RULE_non_empty_return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.match(MoocodePartialParser.RETURN);
			this.state = 303;
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
		this.enterRule(localctx, 30, MoocodePartialParser.RULE_empty_return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this.match(MoocodePartialParser.RETURN);
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
		this.enterRule(localctx, 32, MoocodePartialParser.RULE_for_loop_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(MoocodePartialParser.FOR);
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.for_expression();
				}
				break;
			case 2:
				{
				this.state = 309;
				this.ranged_for_expression();
				}
				break;
			}
			this.state = 312;
			localctx._body = this.statements();
			this.state = 313;
			this.match(MoocodePartialParser.ENDFOR);
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
		this.enterRule(localctx, 34, MoocodePartialParser.RULE_for_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			localctx._value = this.identifier();
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 316;
				this.match(MoocodePartialParser.COMMA);
				this.state = 317;
				localctx._key = this.identifier();
				}
			}

			this.state = 320;
			this.match(MoocodePartialParser.IN);
			this.state = 321;
			this.match(MoocodePartialParser.OPEN_PARENS);
			this.state = 322;
			localctx._range = this.expression();
			this.state = 323;
			this.match(MoocodePartialParser.CLOSE_PARENS);
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
		this.enterRule(localctx, 36, MoocodePartialParser.RULE_ranged_for_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 325;
			localctx._value = this.identifier();
			this.state = 326;
			this.match(MoocodePartialParser.IN);
			this.state = 327;
			this.match(MoocodePartialParser.OPEN_BRACKET);
			this.state = 328;
			localctx._start = this.expression();
			this.state = 329;
			this.match(MoocodePartialParser.OP_RANGE);
			this.state = 330;
			localctx._end = this.expression();
			this.state = 331;
			this.match(MoocodePartialParser.CLOSE_BRACKET);
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
		this.enterRule(localctx, 38, MoocodePartialParser.RULE_continue_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 333;
				this.empty_continue();
				}
				break;
			case 2:
				{
				this.state = 334;
				this.non_empty_continue();
				}
				break;
			}
			this.state = 337;
			this.match(MoocodePartialParser.SEMICOLON);
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
		this.enterRule(localctx, 40, MoocodePartialParser.RULE_empty_continue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 339;
			this.match(MoocodePartialParser.CONTINUE);
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
		this.enterRule(localctx, 42, MoocodePartialParser.RULE_non_empty_continue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 341;
			this.match(MoocodePartialParser.CONTINUE);
			this.state = 342;
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
		this.enterRule(localctx, 44, MoocodePartialParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 344;
				this.empty_break();
				}
				break;
			case 2:
				{
				this.state = 345;
				this.non_empty_break();
				}
				break;
			}
			this.state = 348;
			this.match(MoocodePartialParser.SEMICOLON);
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
		this.enterRule(localctx, 46, MoocodePartialParser.RULE_empty_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.match(MoocodePartialParser.BREAK);
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
		this.enterRule(localctx, 48, MoocodePartialParser.RULE_non_empty_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 352;
			this.match(MoocodePartialParser.BREAK);
			this.state = 353;
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
		this.enterRule(localctx, 50, MoocodePartialParser.RULE_while_loop_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 355;
			this.match(MoocodePartialParser.WHILE);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 356;
				localctx._outer_name = this.identifier();
				}
			}

			this.state = 359;
			this.match(MoocodePartialParser.OPEN_PARENS);
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 360;
				localctx._inner_name = this.identifier();
				this.state = 361;
				this.match(MoocodePartialParser.EQUALS);
				}
				break;
			}
			this.state = 365;
			localctx._conditions = this.expression();
			this.state = 366;
			this.match(MoocodePartialParser.CLOSE_PARENS);
			this.state = 367;
			this.statements();
			this.state = 368;
			this.match(MoocodePartialParser.ENDWHILE);
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
		this.enterRule(localctx, 52, MoocodePartialParser.RULE_try_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			this.match(MoocodePartialParser.TRY);
			this.state = 371;
			this.statements();
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 372;
					this.try_except();
					}
					}
					this.state = 375;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===11);
				}
				break;
			case 2:
				{
				this.state = 377;
				this.try_finally();
				}
				break;
			case 3:
				{
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 378;
					this.try_except();
					}
					}
					this.state = 381;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===11);
				this.state = 383;
				this.try_finally();
				}
				break;
			}
			this.state = 387;
			this.match(MoocodePartialParser.ENDTRY);
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
		this.enterRule(localctx, 54, MoocodePartialParser.RULE_try_except);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 389;
			this.match(MoocodePartialParser.EXCEPT);
			this.state = 390;
			this.identifier();
			this.state = 391;
			this.match(MoocodePartialParser.OPEN_PARENS);
			this.state = 392;
			this.error_codes();
			this.state = 393;
			this.match(MoocodePartialParser.CLOSE_PARENS);
			this.state = 394;
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
	public error_codes(): Error_codesContext {
		let localctx: Error_codesContext = new Error_codesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, MoocodePartialParser.RULE_error_codes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.expression();
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===56) {
				{
				{
				this.state = 397;
				this.match(MoocodePartialParser.COMMA);
				this.state = 398;
				this.expression();
				}
				}
				this.state = 403;
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
	public try_finally(): Try_finallyContext {
		let localctx: Try_finallyContext = new Try_finallyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, MoocodePartialParser.RULE_try_finally);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 404;
			this.match(MoocodePartialParser.FINALLY);
			this.state = 405;
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
		this.enterRule(localctx, 60, MoocodePartialParser.RULE_fork_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.match(MoocodePartialParser.FORK);
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 408;
				localctx._name = this.identifier();
				}
			}

			this.state = 411;
			this.match(MoocodePartialParser.OPEN_PARENS);
			this.state = 412;
			localctx._schedule = this.expression();
			this.state = 413;
			this.match(MoocodePartialParser.CLOSE_PARENS);
			this.state = 414;
			this.statements();
			this.state = 415;
			this.match(MoocodePartialParser.ENDFORK);
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
		this.enterRule(localctx, 62, MoocodePartialParser.RULE_expression);
		try {
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 417;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 418;
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
		this.enterRule(localctx, 64, MoocodePartialParser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 421;
			this.unary_expression();
			this.state = 422;
			this.assignment_operator();
			this.state = 423;
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
		this.enterRule(localctx, 66, MoocodePartialParser.RULE_assignment_operator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this.match(MoocodePartialParser.EQUALS);
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
		this.enterRule(localctx, 68, MoocodePartialParser.RULE_non_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 427;
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
		this.enterRule(localctx, 70, MoocodePartialParser.RULE_conditional_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 429;
			localctx._if_conditions = this.conditional_in_expression();
			this.state = 435;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 430;
				this.match(MoocodePartialParser.QUESTION_MARK);
				this.state = 431;
				localctx._true_ex = this.expression();
				this.state = 432;
				this.match(MoocodePartialParser.PIPE);
				this.state = 433;
				localctx._false_ex = this.expression();
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
	public conditional_in_expression(): Conditional_in_expressionContext {
		let localctx: Conditional_in_expressionContext = new Conditional_in_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, MoocodePartialParser.RULE_conditional_in_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 437;
			this.conditional_or_expression();
			this.state = 442;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 438;
					this.match(MoocodePartialParser.IN);
					this.state = 439;
					this.conditional_or_expression();
					}
					}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
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
		this.enterRule(localctx, 74, MoocodePartialParser.RULE_conditional_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 445;
			this.conditional_and_expression();
			this.state = 450;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 446;
					this.match(MoocodePartialParser.OP_OR);
					this.state = 447;
					this.conditional_and_expression();
					}
					}
				}
				this.state = 452;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
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
		this.enterRule(localctx, 76, MoocodePartialParser.RULE_conditional_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this.inclusive_or_expression();
			this.state = 458;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 454;
					this.match(MoocodePartialParser.OP_AND);
					this.state = 455;
					this.inclusive_or_expression();
					}
					}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
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
		this.enterRule(localctx, 78, MoocodePartialParser.RULE_inclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 461;
			this.exclusive_or_expression();
			this.state = 466;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 462;
					this.match(MoocodePartialParser.BIT_OR);
					this.state = 463;
					this.exclusive_or_expression();
					}
					}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
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
		this.enterRule(localctx, 80, MoocodePartialParser.RULE_exclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 469;
			this.and_expression();
			this.state = 474;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 470;
					this.match(MoocodePartialParser.BIT_XOR);
					this.state = 471;
					this.and_expression();
					}
					}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
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
		this.enterRule(localctx, 82, MoocodePartialParser.RULE_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 477;
			this.equality_expression();
			this.state = 482;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 478;
					this.match(MoocodePartialParser.BIT_AND);
					this.state = 479;
					this.equality_expression();
					}
					}
				}
				this.state = 484;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
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
		this.enterRule(localctx, 84, MoocodePartialParser.RULE_equality_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 485;
			this.relational_expression();
			this.state = 490;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 486;
					_la = this._input.LA(1);
					if(!(_la===65 || _la===70)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 487;
					this.relational_expression();
					}
					}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
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
		this.enterRule(localctx, 86, MoocodePartialParser.RULE_relational_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			this.shift_expression();
			this.state = 498;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 494;
					_la = this._input.LA(1);
					if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 15) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 495;
					this.shift_expression();
					}
					}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
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
		this.enterRule(localctx, 88, MoocodePartialParser.RULE_shift_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 501;
			this.additive_expression();
			this.state = 506;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 502;
					_la = this._input.LA(1);
					if(!(_la===61 || _la===62)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 503;
					this.additive_expression();
					}
					}
				}
				this.state = 508;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
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
		this.enterRule(localctx, 90, MoocodePartialParser.RULE_additive_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			this.multiplicative_expression();
			this.state = 514;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 510;
					_la = this._input.LA(1);
					if(!(_la===63 || _la===79)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 511;
					this.multiplicative_expression();
					}
					}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(localctx, 92, MoocodePartialParser.RULE_multiplicative_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 517;
			this.unary_expression();
			this.state = 522;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 518;
					_la = this._input.LA(1);
					if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 135266305) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 519;
					this.unary_expression();
					}
					}
				}
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
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
		this.enterRule(localctx, 94, MoocodePartialParser.RULE_unary_expression);
		try {
			this.state = 529;
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
			case 41:
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
			case 80:
			case 82:
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 525;
				this.primary_expression();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 526;
				this.negative_unary_expression();
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 527;
				this.negated_unary_expression();
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 528;
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
		this.enterRule(localctx, 96, MoocodePartialParser.RULE_negative_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 531;
			this.match(MoocodePartialParser.MINUS);
			this.state = 532;
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
		this.enterRule(localctx, 98, MoocodePartialParser.RULE_negated_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 534;
			this.match(MoocodePartialParser.OP_NOT);
			this.state = 535;
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
		this.enterRule(localctx, 100, MoocodePartialParser.RULE_complement_unary_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 537;
			this.match(MoocodePartialParser.WAVE);
			this.state = 538;
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
		this.enterRule(localctx, 102, MoocodePartialParser.RULE_primary_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 540;
			localctx._pe = this.primary_expression_start();
			this.state = 546;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 544;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 75:
						{
						this.state = 541;
						this.indexer();
						}
						break;
					case 59:
						{
						this.state = 542;
						this.property_accessor();
						}
						break;
					case 55:
						{
						this.state = 543;
						this.verb_invocation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
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
	public expressions(): ExpressionsContext {
		let localctx: ExpressionsContext = new ExpressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, MoocodePartialParser.RULE_expressions);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 549;
			this.expression();
			this.state = 554;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 550;
					this.match(MoocodePartialParser.COMMA);
					this.state = 551;
					this.expression();
					}
					}
				}
				this.state = 556;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
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
	public primary_expression_start(): Primary_expression_startContext {
		let localctx: Primary_expression_startContext = new Primary_expression_startContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, MoocodePartialParser.RULE_primary_expression_start);
		try {
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 557;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 558;
				this.literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 559;
				this.object_reference();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 560;
				this.list();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 561;
				this.map();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 562;
				this.error_code();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 563;
				this.optional_variable();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 564;
				this.list_splicer();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 565;
				this.error_catcher();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 566;
				this.corified_verb_invocation();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 567;
				this.bf_invocation();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 568;
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
		this.enterRule(localctx, 108, MoocodePartialParser.RULE_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 571;
			this.match(MoocodePartialParser.OPEN_PARENS);
			this.state = 572;
			this.expression();
			this.state = 573;
			this.match(MoocodePartialParser.CLOSE_PARENS);
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
		this.enterRule(localctx, 110, MoocodePartialParser.RULE_error_catcher);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 575;
			this.match(MoocodePartialParser.TICK);
			this.state = 576;
			localctx._try_ = this.expression();
			this.state = 577;
			this.match(MoocodePartialParser.OP_NOT);
			this.state = 578;
			this.error_codes();
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 579;
				this.match(MoocodePartialParser.ARROW);
				this.state = 580;
				localctx._on_error = this.expression();
				}
			}

			this.state = 583;
			this.match(MoocodePartialParser.SINGLE_QUOTE);
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
		this.enterRule(localctx, 112, MoocodePartialParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 585;
			this.match(MoocodePartialParser.OPEN_BRACE);
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100921) !== 0)) {
				{
				this.state = 586;
				this.expression();
				}
			}

			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===56) {
				{
				{
				this.state = 589;
				this.match(MoocodePartialParser.COMMA);
				this.state = 590;
				this.expression();
				}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 596;
			this.match(MoocodePartialParser.CLOSE_BRACE);
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
		this.enterRule(localctx, 114, MoocodePartialParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 598;
			this.match(MoocodePartialParser.OPEN_BRACKET);
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4291301376) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2215165951) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 100921) !== 0)) {
				{
				this.state = 599;
				this.map_entry();
				}
			}

			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===56) {
				{
				{
				this.state = 602;
				this.match(MoocodePartialParser.COMMA);
				this.state = 603;
				this.map_entry();
				}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 609;
			this.match(MoocodePartialParser.CLOSE_BRACKET);
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
		this.enterRule(localctx, 116, MoocodePartialParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 611;
			localctx._map_key = this.expression();
			this.state = 612;
			this.match(MoocodePartialParser.THIN_ARROW);
			this.state = 613;
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
		this.enterRule(localctx, 118, MoocodePartialParser.RULE_indexer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 615;
			this.match(MoocodePartialParser.OPEN_BRACKET);
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 616;
				localctx._argument = this.expression();
				}
				break;
			case 2:
				{
				this.state = 617;
				localctx._start = this.expression();
				this.state = 618;
				this.match(MoocodePartialParser.OP_RANGE);
				this.state = 619;
				localctx._end = this.expression();
				}
				break;
			}
			this.state = 623;
			this.match(MoocodePartialParser.CLOSE_BRACKET);
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
	public list_splicer(): List_splicerContext {
		let localctx: List_splicerContext = new List_splicerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, MoocodePartialParser.RULE_list_splicer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 625;
			this.match(MoocodePartialParser.AT);
			this.state = 626;
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
	public object_reference(): Object_referenceContext {
		let localctx: Object_referenceContext = new Object_referenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, MoocodePartialParser.RULE_object_reference);
		try {
			this.state = 630;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 82:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 628;
				this.object_id();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 629;
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
		this.enterRule(localctx, 124, MoocodePartialParser.RULE_object_id);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 632;
			this.match(MoocodePartialParser.SHARP);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 633;
				this.match(MoocodePartialParser.MINUS);
				}
			}

			this.state = 636;
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
		this.enterRule(localctx, 126, MoocodePartialParser.RULE_corified_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 638;
			this.match(MoocodePartialParser.DOLLAR);
			this.state = 639;
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
	public optional_variable(): Optional_variableContext {
		let localctx: Optional_variableContext = new Optional_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, MoocodePartialParser.RULE_optional_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 641;
			this.match(MoocodePartialParser.QUESTION_MARK);
			this.state = 642;
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
		this.enterRule(localctx, 130, MoocodePartialParser.RULE_literal);
		try {
			this.state = 650;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 644;
				this.bool_literal();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 645;
				this.string_literal();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 646;
				this.integer_literal();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 647;
				this.float_literal();
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 648;
				this.caret();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 649;
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
		this.enterRule(localctx, 132, MoocodePartialParser.RULE_bool_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
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
		this.enterRule(localctx, 134, MoocodePartialParser.RULE_string_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 654;
			this.match(MoocodePartialParser.STRING_LITERAL);
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
		this.enterRule(localctx, 136, MoocodePartialParser.RULE_integer_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 656;
			this.match(MoocodePartialParser.INTEGER_LITERAL);
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
		this.enterRule(localctx, 138, MoocodePartialParser.RULE_float_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 658;
			this.match(MoocodePartialParser.FLOAT_LITERAL);
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
		this.enterRule(localctx, 140, MoocodePartialParser.RULE_caret);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 660;
			this.match(MoocodePartialParser.CARET);
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
		this.enterRule(localctx, 142, MoocodePartialParser.RULE_dollar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 662;
			this.match(MoocodePartialParser.DOLLAR);
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
		this.enterRule(localctx, 144, MoocodePartialParser.RULE_error_code);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 664;
			_la = this._input.LA(1);
			if(!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 1048575) !== 0))) {
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
		this.enterRule(localctx, 146, MoocodePartialParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 666;
			this.match(MoocodePartialParser.IDENTIFIER);
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

	public static readonly _serializedATN: number[] = [4,1,88,669,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,
	2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,
	68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,1,0,1,0,1,0,1,
	0,1,0,1,0,1,0,3,0,156,8,0,3,0,158,8,0,1,0,3,0,161,8,0,1,1,1,1,1,1,1,1,1,
	1,1,1,3,1,169,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,178,8,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,191,8,1,3,1,193,8,1,1,1,1,1,1,1,3,1,198,
	8,1,1,1,1,1,1,1,1,1,1,1,3,1,205,8,1,1,1,3,1,208,8,1,3,1,210,8,1,1,2,1,2,
	1,2,3,2,215,8,2,1,2,1,2,1,2,3,2,220,8,2,3,2,222,8,2,1,3,1,3,1,3,3,3,227,
	8,3,1,3,1,3,1,3,3,3,232,8,3,3,3,234,8,3,1,4,5,4,237,8,4,10,4,12,4,240,9,
	4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,257,8,
	5,1,6,5,6,260,8,6,10,6,12,6,263,9,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,5,9,272,
	8,9,10,9,12,9,275,9,9,1,9,3,9,278,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,
	1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,3,13,299,8,
	13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,3,16,311,8,16,1,16,
	1,16,1,16,1,17,1,17,1,17,3,17,319,8,17,1,17,1,17,1,17,1,17,1,17,1,18,1,
	18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,3,19,336,8,19,1,19,1,19,1,20,
	1,20,1,21,1,21,1,21,1,22,1,22,3,22,347,8,22,1,22,1,22,1,23,1,23,1,24,1,
	24,1,24,1,25,1,25,3,25,358,8,25,1,25,1,25,1,25,1,25,3,25,364,8,25,1,25,
	1,25,1,25,1,25,1,25,1,26,1,26,1,26,4,26,374,8,26,11,26,12,26,375,1,26,1,
	26,4,26,380,8,26,11,26,12,26,381,1,26,1,26,3,26,386,8,26,1,26,1,26,1,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,5,28,400,8,28,10,28,12,28,
	403,9,28,1,29,1,29,1,29,1,30,1,30,3,30,410,8,30,1,30,1,30,1,30,1,30,1,30,
	1,30,1,31,1,31,3,31,420,8,31,1,32,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,
	35,1,35,1,35,1,35,1,35,1,35,3,35,436,8,35,1,36,1,36,1,36,5,36,441,8,36,
	10,36,12,36,444,9,36,1,37,1,37,1,37,5,37,449,8,37,10,37,12,37,452,9,37,
	1,38,1,38,1,38,5,38,457,8,38,10,38,12,38,460,9,38,1,39,1,39,1,39,5,39,465,
	8,39,10,39,12,39,468,9,39,1,40,1,40,1,40,5,40,473,8,40,10,40,12,40,476,
	9,40,1,41,1,41,1,41,5,41,481,8,41,10,41,12,41,484,9,41,1,42,1,42,1,42,5,
	42,489,8,42,10,42,12,42,492,9,42,1,43,1,43,1,43,5,43,497,8,43,10,43,12,
	43,500,9,43,1,44,1,44,1,44,5,44,505,8,44,10,44,12,44,508,9,44,1,45,1,45,
	1,45,5,45,513,8,45,10,45,12,45,516,9,45,1,46,1,46,1,46,5,46,521,8,46,10,
	46,12,46,524,9,46,1,47,1,47,1,47,1,47,3,47,530,8,47,1,48,1,48,1,48,1,49,
	1,49,1,49,1,50,1,50,1,50,1,51,1,51,1,51,1,51,5,51,545,8,51,10,51,12,51,
	548,9,51,1,52,1,52,1,52,5,52,553,8,52,10,52,12,52,556,9,52,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,570,8,53,1,54,1,54,
	1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,3,55,582,8,55,1,55,1,55,1,56,1,
	56,3,56,588,8,56,1,56,1,56,5,56,592,8,56,10,56,12,56,595,9,56,1,56,1,56,
	1,57,1,57,3,57,601,8,57,1,57,1,57,5,57,605,8,57,10,57,12,57,608,9,57,1,
	57,1,57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,3,59,622,8,59,
	1,59,1,59,1,60,1,60,1,60,1,61,1,61,3,61,631,8,61,1,62,1,62,3,62,635,8,62,
	1,62,1,62,1,63,1,63,1,63,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,3,
	65,651,8,65,1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,
	1,72,1,72,1,73,1,73,1,73,0,0,74,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
	30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
	78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,
	120,122,124,126,128,130,132,134,136,138,140,142,144,146,0,7,2,0,65,65,70,
	70,1,0,66,69,1,0,61,62,2,0,63,63,79,79,3,0,57,57,77,77,84,84,2,0,12,12,
	19,19,1,0,22,41,688,0,148,1,0,0,0,2,162,1,0,0,0,4,211,1,0,0,0,6,223,1,0,
	0,0,8,238,1,0,0,0,10,256,1,0,0,0,12,261,1,0,0,0,14,264,1,0,0,0,16,266,1,
	0,0,0,18,269,1,0,0,0,20,281,1,0,0,0,22,287,1,0,0,0,24,293,1,0,0,0,26,298,
	1,0,0,0,28,302,1,0,0,0,30,305,1,0,0,0,32,307,1,0,0,0,34,315,1,0,0,0,36,
	325,1,0,0,0,38,335,1,0,0,0,40,339,1,0,0,0,42,341,1,0,0,0,44,346,1,0,0,0,
	46,350,1,0,0,0,48,352,1,0,0,0,50,355,1,0,0,0,52,370,1,0,0,0,54,389,1,0,
	0,0,56,396,1,0,0,0,58,404,1,0,0,0,60,407,1,0,0,0,62,419,1,0,0,0,64,421,
	1,0,0,0,66,425,1,0,0,0,68,427,1,0,0,0,70,429,1,0,0,0,72,437,1,0,0,0,74,
	445,1,0,0,0,76,453,1,0,0,0,78,461,1,0,0,0,80,469,1,0,0,0,82,477,1,0,0,0,
	84,485,1,0,0,0,86,493,1,0,0,0,88,501,1,0,0,0,90,509,1,0,0,0,92,517,1,0,
	0,0,94,529,1,0,0,0,96,531,1,0,0,0,98,534,1,0,0,0,100,537,1,0,0,0,102,540,
	1,0,0,0,104,549,1,0,0,0,106,569,1,0,0,0,108,571,1,0,0,0,110,575,1,0,0,0,
	112,585,1,0,0,0,114,598,1,0,0,0,116,611,1,0,0,0,118,615,1,0,0,0,120,625,
	1,0,0,0,122,630,1,0,0,0,124,632,1,0,0,0,126,638,1,0,0,0,128,641,1,0,0,0,
	130,650,1,0,0,0,132,652,1,0,0,0,134,654,1,0,0,0,136,656,1,0,0,0,138,658,
	1,0,0,0,140,660,1,0,0,0,142,662,1,0,0,0,144,664,1,0,0,0,146,666,1,0,0,0,
	148,160,5,59,0,0,149,150,5,76,0,0,150,151,3,62,31,0,151,152,5,54,0,0,152,
	158,1,0,0,0,153,155,5,76,0,0,154,156,3,62,31,0,155,154,1,0,0,0,155,156,
	1,0,0,0,156,158,1,0,0,0,157,149,1,0,0,0,157,153,1,0,0,0,158,161,1,0,0,0,
	159,161,3,146,73,0,160,157,1,0,0,0,160,159,1,0,0,0,160,161,1,0,0,0,161,
	1,1,0,0,0,162,209,5,55,0,0,163,164,5,76,0,0,164,165,3,62,31,0,165,166,5,
	54,0,0,166,168,5,76,0,0,167,169,3,104,52,0,168,167,1,0,0,0,168,169,1,0,
	0,0,169,170,1,0,0,0,170,171,5,54,0,0,171,193,1,0,0,0,172,173,5,76,0,0,173,
	174,3,62,31,0,174,175,5,54,0,0,175,177,5,76,0,0,176,178,3,104,52,0,177,
	176,1,0,0,0,177,178,1,0,0,0,178,193,1,0,0,0,179,180,5,76,0,0,180,181,3,
	62,31,0,181,182,5,54,0,0,182,183,5,76,0,0,183,193,1,0,0,0,184,185,5,76,
	0,0,185,186,3,62,31,0,186,187,5,54,0,0,187,193,1,0,0,0,188,190,5,76,0,0,
	189,191,3,62,31,0,190,189,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,163,
	1,0,0,0,192,172,1,0,0,0,192,179,1,0,0,0,192,184,1,0,0,0,192,188,1,0,0,0,
	193,210,1,0,0,0,194,195,3,146,73,0,195,197,5,76,0,0,196,198,3,104,52,0,
	197,196,1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,200,5,54,0,0,200,208,
	1,0,0,0,201,202,3,146,73,0,202,204,5,76,0,0,203,205,3,104,52,0,204,203,
	1,0,0,0,204,205,1,0,0,0,205,208,1,0,0,0,206,208,3,146,73,0,207,194,1,0,
	0,0,207,201,1,0,0,0,207,206,1,0,0,0,208,210,1,0,0,0,209,192,1,0,0,0,209,
	207,1,0,0,0,209,210,1,0,0,0,210,3,1,0,0,0,211,221,3,126,63,0,212,214,5,
	76,0,0,213,215,3,104,52,0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,
	0,216,222,5,54,0,0,217,219,5,76,0,0,218,220,3,104,52,0,219,218,1,0,0,0,
	219,220,1,0,0,0,220,222,1,0,0,0,221,212,1,0,0,0,221,217,1,0,0,0,222,5,1,
	0,0,0,223,233,3,146,73,0,224,226,5,76,0,0,225,227,3,104,52,0,226,225,1,
	0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,234,5,54,0,0,229,231,5,76,0,0,
	230,232,3,104,52,0,231,230,1,0,0,0,231,232,1,0,0,0,232,234,1,0,0,0,233,
	224,1,0,0,0,233,229,1,0,0,0,234,7,1,0,0,0,235,237,3,10,5,0,236,235,1,0,
	0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,241,1,0,0,0,240,
	238,1,0,0,0,241,242,5,0,0,1,242,9,1,0,0,0,243,257,3,14,7,0,244,257,3,16,
	8,0,245,246,3,62,31,0,246,247,5,81,0,0,247,257,1,0,0,0,248,257,3,26,13,
	0,249,257,3,38,19,0,250,257,3,44,22,0,251,257,3,60,30,0,252,257,3,52,26,
	0,253,257,3,18,9,0,254,257,3,32,16,0,255,257,3,50,25,0,256,243,1,0,0,0,
	256,244,1,0,0,0,256,245,1,0,0,0,256,248,1,0,0,0,256,249,1,0,0,0,256,250,
	1,0,0,0,256,251,1,0,0,0,256,252,1,0,0,0,256,253,1,0,0,0,256,254,1,0,0,0,
	256,255,1,0,0,0,257,11,1,0,0,0,258,260,3,10,5,0,259,258,1,0,0,0,260,263,
	1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,13,1,0,0,0,263,261,1,0,0,0,
	264,265,5,81,0,0,265,15,1,0,0,0,266,267,3,134,67,0,267,268,5,81,0,0,268,
	17,1,0,0,0,269,273,3,20,10,0,270,272,3,22,11,0,271,270,1,0,0,0,272,275,
	1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,
	276,278,3,24,12,0,277,276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,280,
	5,8,0,0,280,19,1,0,0,0,281,282,5,16,0,0,282,283,5,76,0,0,283,284,3,62,31,
	0,284,285,5,54,0,0,285,286,3,12,6,0,286,21,1,0,0,0,287,288,5,5,0,0,288,
	289,5,76,0,0,289,290,3,62,31,0,290,291,5,54,0,0,291,292,3,12,6,0,292,23,
	1,0,0,0,293,294,5,4,0,0,294,295,3,12,6,0,295,25,1,0,0,0,296,299,3,28,14,
	0,297,299,3,30,15,0,298,296,1,0,0,0,298,297,1,0,0,0,299,300,1,0,0,0,300,
	301,5,81,0,0,301,27,1,0,0,0,302,303,5,18,0,0,303,304,3,62,31,0,304,29,1,
	0,0,0,305,306,5,18,0,0,306,31,1,0,0,0,307,310,5,14,0,0,308,311,3,34,17,
	0,309,311,3,36,18,0,310,308,1,0,0,0,310,309,1,0,0,0,311,312,1,0,0,0,312,
	313,3,12,6,0,313,314,5,6,0,0,314,33,1,0,0,0,315,318,3,146,73,0,316,317,
	5,56,0,0,317,319,3,146,73,0,318,316,1,0,0,0,318,319,1,0,0,0,319,320,1,0,
	0,0,320,321,5,17,0,0,321,322,5,76,0,0,322,323,3,62,31,0,323,324,5,54,0,
	0,324,35,1,0,0,0,325,326,3,146,73,0,326,327,5,17,0,0,327,328,5,75,0,0,328,
	329,3,62,31,0,329,330,5,73,0,0,330,331,3,62,31,0,331,332,5,53,0,0,332,37,
	1,0,0,0,333,336,3,40,20,0,334,336,3,42,21,0,335,333,1,0,0,0,335,334,1,0,
	0,0,336,337,1,0,0,0,337,338,5,81,0,0,338,39,1,0,0,0,339,340,5,3,0,0,340,
	41,1,0,0,0,341,342,5,3,0,0,342,343,3,146,73,0,343,43,1,0,0,0,344,347,3,
	46,23,0,345,347,3,48,24,0,346,344,1,0,0,0,346,345,1,0,0,0,347,348,1,0,0,
	0,348,349,5,81,0,0,349,45,1,0,0,0,350,351,5,2,0,0,351,47,1,0,0,0,352,353,
	5,2,0,0,353,354,3,146,73,0,354,49,1,0,0,0,355,357,5,21,0,0,356,358,3,146,
	73,0,357,356,1,0,0,0,357,358,1,0,0,0,358,359,1,0,0,0,359,363,5,76,0,0,360,
	361,3,146,73,0,361,362,5,60,0,0,362,364,1,0,0,0,363,360,1,0,0,0,363,364,
	1,0,0,0,364,365,1,0,0,0,365,366,3,62,31,0,366,367,5,54,0,0,367,368,3,12,
	6,0,368,369,5,10,0,0,369,51,1,0,0,0,370,371,5,20,0,0,371,385,3,12,6,0,372,
	374,3,54,27,0,373,372,1,0,0,0,374,375,1,0,0,0,375,373,1,0,0,0,375,376,1,
	0,0,0,376,386,1,0,0,0,377,386,3,58,29,0,378,380,3,54,27,0,379,378,1,0,0,
	0,380,381,1,0,0,0,381,379,1,0,0,0,381,382,1,0,0,0,382,383,1,0,0,0,383,384,
	3,58,29,0,384,386,1,0,0,0,385,373,1,0,0,0,385,377,1,0,0,0,385,379,1,0,0,
	0,386,387,1,0,0,0,387,388,5,9,0,0,388,53,1,0,0,0,389,390,5,11,0,0,390,391,
	3,146,73,0,391,392,5,76,0,0,392,393,3,56,28,0,393,394,5,54,0,0,394,395,
	3,12,6,0,395,55,1,0,0,0,396,401,3,62,31,0,397,398,5,56,0,0,398,400,3,62,
	31,0,399,397,1,0,0,0,400,403,1,0,0,0,401,399,1,0,0,0,401,402,1,0,0,0,402,
	57,1,0,0,0,403,401,1,0,0,0,404,405,5,13,0,0,405,406,3,12,6,0,406,59,1,0,
	0,0,407,409,5,15,0,0,408,410,3,146,73,0,409,408,1,0,0,0,409,410,1,0,0,0,
	410,411,1,0,0,0,411,412,5,76,0,0,412,413,3,62,31,0,413,414,5,54,0,0,414,
	415,3,12,6,0,415,416,5,7,0,0,416,61,1,0,0,0,417,420,3,64,32,0,418,420,3,
	68,34,0,419,417,1,0,0,0,419,418,1,0,0,0,420,63,1,0,0,0,421,422,3,94,47,
	0,422,423,3,66,33,0,423,424,3,62,31,0,424,65,1,0,0,0,425,426,5,60,0,0,426,
	67,1,0,0,0,427,428,3,70,35,0,428,69,1,0,0,0,429,435,3,72,36,0,430,431,5,
	80,0,0,431,432,3,62,31,0,432,433,5,78,0,0,433,434,3,62,31,0,434,436,1,0,
	0,0,435,430,1,0,0,0,435,436,1,0,0,0,436,71,1,0,0,0,437,442,3,74,37,0,438,
	439,5,17,0,0,439,441,3,74,37,0,440,438,1,0,0,0,441,444,1,0,0,0,442,440,
	1,0,0,0,442,443,1,0,0,0,443,73,1,0,0,0,444,442,1,0,0,0,445,450,3,76,38,
	0,446,447,5,72,0,0,447,449,3,76,38,0,448,446,1,0,0,0,449,452,1,0,0,0,450,
	448,1,0,0,0,450,451,1,0,0,0,451,75,1,0,0,0,452,450,1,0,0,0,453,458,3,78,
	39,0,454,455,5,64,0,0,455,457,3,78,39,0,456,454,1,0,0,0,457,460,1,0,0,0,
	458,456,1,0,0,0,458,459,1,0,0,0,459,77,1,0,0,0,460,458,1,0,0,0,461,466,
	3,80,40,0,462,463,5,49,0,0,463,465,3,80,40,0,464,462,1,0,0,0,465,468,1,
	0,0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,79,1,0,0,0,468,466,1,0,0,0,469,
	474,3,82,41,0,470,471,5,50,0,0,471,473,3,82,41,0,472,470,1,0,0,0,473,476,
	1,0,0,0,474,472,1,0,0,0,474,475,1,0,0,0,475,81,1,0,0,0,476,474,1,0,0,0,
	477,482,3,84,42,0,478,479,5,48,0,0,479,481,3,84,42,0,480,478,1,0,0,0,481,
	484,1,0,0,0,482,480,1,0,0,0,482,483,1,0,0,0,483,83,1,0,0,0,484,482,1,0,
	0,0,485,490,3,86,43,0,486,487,7,0,0,0,487,489,3,86,43,0,488,486,1,0,0,0,
	489,492,1,0,0,0,490,488,1,0,0,0,490,491,1,0,0,0,491,85,1,0,0,0,492,490,
	1,0,0,0,493,498,3,88,44,0,494,495,7,1,0,0,495,497,3,88,44,0,496,494,1,0,
	0,0,497,500,1,0,0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,87,1,0,0,0,500,
	498,1,0,0,0,501,506,3,90,45,0,502,503,7,2,0,0,503,505,3,90,45,0,504,502,
	1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,507,1,0,0,0,507,89,1,0,0,0,
	508,506,1,0,0,0,509,514,3,92,46,0,510,511,7,3,0,0,511,513,3,92,46,0,512,
	510,1,0,0,0,513,516,1,0,0,0,514,512,1,0,0,0,514,515,1,0,0,0,515,91,1,0,
	0,0,516,514,1,0,0,0,517,522,3,94,47,0,518,519,7,4,0,0,519,521,3,94,47,0,
	520,518,1,0,0,0,521,524,1,0,0,0,522,520,1,0,0,0,522,523,1,0,0,0,523,93,
	1,0,0,0,524,522,1,0,0,0,525,530,3,102,51,0,526,530,3,96,48,0,527,530,3,
	98,49,0,528,530,3,100,50,0,529,525,1,0,0,0,529,526,1,0,0,0,529,527,1,0,
	0,0,529,528,1,0,0,0,530,95,1,0,0,0,531,532,5,63,0,0,532,533,3,94,47,0,533,
	97,1,0,0,0,534,535,5,71,0,0,535,536,3,94,47,0,536,99,1,0,0,0,537,538,5,
	87,0,0,538,539,3,94,47,0,539,101,1,0,0,0,540,546,3,106,53,0,541,545,3,118,
	59,0,542,545,3,0,0,0,543,545,3,2,1,0,544,541,1,0,0,0,544,542,1,0,0,0,544,
	543,1,0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,103,1,0,
	0,0,548,546,1,0,0,0,549,554,3,62,31,0,550,551,5,56,0,0,551,553,3,62,31,
	0,552,550,1,0,0,0,553,556,1,0,0,0,554,552,1,0,0,0,554,555,1,0,0,0,555,105,
	1,0,0,0,556,554,1,0,0,0,557,570,3,146,73,0,558,570,3,130,65,0,559,570,3,
	122,61,0,560,570,3,112,56,0,561,570,3,114,57,0,562,570,3,144,72,0,563,570,
	3,128,64,0,564,570,3,120,60,0,565,570,3,110,55,0,566,570,3,4,2,0,567,570,
	3,6,3,0,568,570,3,108,54,0,569,557,1,0,0,0,569,558,1,0,0,0,569,559,1,0,
	0,0,569,560,1,0,0,0,569,561,1,0,0,0,569,562,1,0,0,0,569,563,1,0,0,0,569,
	564,1,0,0,0,569,565,1,0,0,0,569,566,1,0,0,0,569,567,1,0,0,0,569,568,1,0,
	0,0,570,107,1,0,0,0,571,572,5,76,0,0,572,573,3,62,31,0,573,574,5,54,0,0,
	574,109,1,0,0,0,575,576,5,86,0,0,576,577,3,62,31,0,577,578,5,71,0,0,578,
	581,3,56,28,0,579,580,5,46,0,0,580,582,3,62,31,0,581,579,1,0,0,0,581,582,
	1,0,0,0,582,583,1,0,0,0,583,584,5,83,0,0,584,111,1,0,0,0,585,587,5,74,0,
	0,586,588,3,62,31,0,587,586,1,0,0,0,587,588,1,0,0,0,588,593,1,0,0,0,589,
	590,5,56,0,0,590,592,3,62,31,0,591,589,1,0,0,0,592,595,1,0,0,0,593,591,
	1,0,0,0,593,594,1,0,0,0,594,596,1,0,0,0,595,593,1,0,0,0,596,597,5,52,0,
	0,597,113,1,0,0,0,598,600,5,75,0,0,599,601,3,116,58,0,600,599,1,0,0,0,600,
	601,1,0,0,0,601,606,1,0,0,0,602,603,5,56,0,0,603,605,3,116,58,0,604,602,
	1,0,0,0,605,608,1,0,0,0,606,604,1,0,0,0,606,607,1,0,0,0,607,609,1,0,0,0,
	608,606,1,0,0,0,609,610,5,53,0,0,610,115,1,0,0,0,611,612,3,62,31,0,612,
	613,5,85,0,0,613,614,3,62,31,0,614,117,1,0,0,0,615,621,5,75,0,0,616,622,
	3,62,31,0,617,618,3,62,31,0,618,619,5,73,0,0,619,620,3,62,31,0,620,622,
	1,0,0,0,621,616,1,0,0,0,621,617,1,0,0,0,622,623,1,0,0,0,623,624,5,53,0,
	0,624,119,1,0,0,0,625,626,5,47,0,0,626,627,3,62,31,0,627,121,1,0,0,0,628,
	631,3,124,62,0,629,631,3,126,63,0,630,628,1,0,0,0,630,629,1,0,0,0,631,123,
	1,0,0,0,632,634,5,82,0,0,633,635,5,63,0,0,634,633,1,0,0,0,634,635,1,0,0,
	0,635,636,1,0,0,0,636,637,3,136,68,0,637,125,1,0,0,0,638,639,5,58,0,0,639,
	640,3,146,73,0,640,127,1,0,0,0,641,642,5,80,0,0,642,643,3,146,73,0,643,
	129,1,0,0,0,644,651,3,132,66,0,645,651,3,134,67,0,646,651,3,136,68,0,647,
	651,3,138,69,0,648,651,3,140,70,0,649,651,3,142,71,0,650,644,1,0,0,0,650,
	645,1,0,0,0,650,646,1,0,0,0,650,647,1,0,0,0,650,648,1,0,0,0,650,649,1,0,
	0,0,651,131,1,0,0,0,652,653,7,5,0,0,653,133,1,0,0,0,654,655,5,45,0,0,655,
	135,1,0,0,0,656,657,5,43,0,0,657,137,1,0,0,0,658,659,5,44,0,0,659,139,1,
	0,0,0,660,661,5,51,0,0,661,141,1,0,0,0,662,663,5,58,0,0,663,143,1,0,0,0,
	664,665,7,6,0,0,665,145,1,0,0,0,666,667,5,42,0,0,667,147,1,0,0,0,61,155,
	157,160,168,177,190,192,197,204,207,209,214,219,221,226,231,233,238,256,
	261,273,277,298,310,318,335,346,357,363,375,381,385,401,409,419,435,442,
	450,458,466,474,482,490,498,506,514,522,529,544,546,554,569,581,587,593,
	600,606,621,630,634,650];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoocodePartialParser.__ATN) {
			MoocodePartialParser.__ATN = new ATNDeserializer().deserialize(MoocodePartialParser._serializedATN);
		}

		return MoocodePartialParser.__ATN;
	}


	static DecisionsToDFA = MoocodePartialParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Property_accessorContext extends ParserRuleContext {
	public _computed_prop_arguments!: ExpressionContext;
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(MoocodePartialParser.DOT, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_property_accessor;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterProperty_accessor) {
	 		listener.enterProperty_accessor(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitProperty_accessor) {
	 		listener.exitProperty_accessor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(MoocodePartialParser.COLON, 0);
	}
	public OPEN_PARENS_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.OPEN_PARENS);
	}
	public OPEN_PARENS(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, i);
	}
	public CLOSE_PARENS_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.CLOSE_PARENS);
	}
	public CLOSE_PARENS(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, i);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public expressions(): ExpressionsContext {
		return this.getTypedRuleContext(ExpressionsContext, 0) as ExpressionsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_verb_invocation;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterVerb_invocation) {
	 		listener.enterVerb_invocation(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitVerb_invocation) {
	 		listener.exitVerb_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitVerb_invocation) {
			return visitor.visitVerb_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Corified_verb_invocationContext extends ParserRuleContext {
	public _arguments!: ExpressionsContext;
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public corified_value(): Corified_valueContext {
		return this.getTypedRuleContext(Corified_valueContext, 0) as Corified_valueContext;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public expressions(): ExpressionsContext {
		return this.getTypedRuleContext(ExpressionsContext, 0) as ExpressionsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_corified_verb_invocation;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterCorified_verb_invocation) {
	 		listener.enterCorified_verb_invocation(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitCorified_verb_invocation) {
	 		listener.exitCorified_verb_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitCorified_verb_invocation) {
			return visitor.visitCorified_verb_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bf_invocationContext extends ParserRuleContext {
	public _arguments!: ExpressionsContext;
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public expressions(): ExpressionsContext {
		return this.getTypedRuleContext(ExpressionsContext, 0) as ExpressionsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_bf_invocation;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterBf_invocation) {
	 		listener.enterBf_invocation(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitBf_invocation) {
	 		listener.exitBf_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitBf_invocation) {
			return visitor.visitBf_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoocodeContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(MoocodePartialParser.EOF, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_moocode;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterMoocode) {
	 		listener.enterMoocode(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitMoocode) {
	 		listener.exitMoocode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitMoocode) {
			return visitor.visitMoocode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(MoocodePartialParser.SEMICOLON, 0);
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
    	return MoocodePartialParser.RULE_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MoocodePartialParser.RULE_statements;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodePartialParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_empty_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterEmpty_statement) {
	 		listener.enterEmpty_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitEmpty_statement) {
	 		listener.exitEmpty_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitEmpty_statement) {
			return visitor.visitEmpty_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_literal(): String_literalContext {
		return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodePartialParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_comment;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterComment) {
	 		listener.enterComment(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitComment) {
	 		listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_expression(): If_expressionContext {
		return this.getTypedRuleContext(If_expressionContext, 0) as If_expressionContext;
	}
	public ENDIF(): TerminalNode {
		return this.getToken(MoocodePartialParser.ENDIF, 0);
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
    	return MoocodePartialParser.RULE_if_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterIf_statement) {
	 		listener.enterIf_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitIf_statement) {
	 		listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(MoocodePartialParser.IF, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_if_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterIf_expression) {
	 		listener.enterIf_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitIf_expression) {
	 		listener.exitIf_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSEIF(): TerminalNode {
		return this.getToken(MoocodePartialParser.ELSEIF, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_elseif_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterElseif_expression) {
	 		listener.enterElseif_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitElseif_expression) {
	 		listener.exitElseif_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitElseif_expression) {
			return visitor.visitElseif_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_expressionContext extends ParserRuleContext {
	public _body!: StatementsContext;
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MoocodePartialParser.ELSE, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_else_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterElse_expression) {
	 		listener.enterElse_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitElse_expression) {
	 		listener.exitElse_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitElse_expression) {
			return visitor.visitElse_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodePartialParser.SEMICOLON, 0);
	}
	public non_empty_return(): Non_empty_returnContext {
		return this.getTypedRuleContext(Non_empty_returnContext, 0) as Non_empty_returnContext;
	}
	public empty_return(): Empty_returnContext {
		return this.getTypedRuleContext(Empty_returnContext, 0) as Empty_returnContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_return_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterReturn_statement) {
	 		listener.enterReturn_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitReturn_statement) {
	 		listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_empty_returnContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(MoocodePartialParser.RETURN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_non_empty_return;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterNon_empty_return) {
	 		listener.enterNon_empty_return(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitNon_empty_return) {
	 		listener.exitNon_empty_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitNon_empty_return) {
			return visitor.visitNon_empty_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_returnContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(MoocodePartialParser.RETURN, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_empty_return;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterEmpty_return) {
	 		listener.enterEmpty_return(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitEmpty_return) {
	 		listener.exitEmpty_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitEmpty_return) {
			return visitor.visitEmpty_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_loop_statementContext extends ParserRuleContext {
	public _body!: StatementsContext;
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(MoocodePartialParser.FOR, 0);
	}
	public ENDFOR(): TerminalNode {
		return this.getToken(MoocodePartialParser.ENDFOR, 0);
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
    	return MoocodePartialParser.RULE_for_loop_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterFor_loop_statement) {
	 		listener.enterFor_loop_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitFor_loop_statement) {
	 		listener.exitFor_loop_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(MoocodePartialParser.IN, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
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
		return this.getToken(MoocodePartialParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_for_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterFor_expression) {
	 		listener.enterFor_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitFor_expression) {
	 		listener.exitFor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(MoocodePartialParser.IN, 0);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_BRACKET, 0);
	}
	public OP_RANGE(): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_RANGE, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_BRACKET, 0);
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
    	return MoocodePartialParser.RULE_ranged_for_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterRanged_for_expression) {
	 		listener.enterRanged_for_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitRanged_for_expression) {
	 		listener.exitRanged_for_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitRanged_for_expression) {
			return visitor.visitRanged_for_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodePartialParser.SEMICOLON, 0);
	}
	public empty_continue(): Empty_continueContext {
		return this.getTypedRuleContext(Empty_continueContext, 0) as Empty_continueContext;
	}
	public non_empty_continue(): Non_empty_continueContext {
		return this.getTypedRuleContext(Non_empty_continueContext, 0) as Non_empty_continueContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_continue_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterContinue_statement) {
	 		listener.enterContinue_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitContinue_statement) {
	 		listener.exitContinue_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitContinue_statement) {
			return visitor.visitContinue_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_continueContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(MoocodePartialParser.CONTINUE, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_empty_continue;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterEmpty_continue) {
	 		listener.enterEmpty_continue(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitEmpty_continue) {
	 		listener.exitEmpty_continue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitEmpty_continue) {
			return visitor.visitEmpty_continue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_empty_continueContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(MoocodePartialParser.CONTINUE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_non_empty_continue;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterNon_empty_continue) {
	 		listener.enterNon_empty_continue(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitNon_empty_continue) {
	 		listener.exitNon_empty_continue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitNon_empty_continue) {
			return visitor.visitNon_empty_continue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MoocodePartialParser.SEMICOLON, 0);
	}
	public empty_break(): Empty_breakContext {
		return this.getTypedRuleContext(Empty_breakContext, 0) as Empty_breakContext;
	}
	public non_empty_break(): Non_empty_breakContext {
		return this.getTypedRuleContext(Non_empty_breakContext, 0) as Non_empty_breakContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_break_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterBreak_statement) {
	 		listener.enterBreak_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitBreak_statement) {
	 		listener.exitBreak_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitBreak_statement) {
			return visitor.visitBreak_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_breakContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(MoocodePartialParser.BREAK, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_empty_break;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterEmpty_break) {
	 		listener.enterEmpty_break(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitEmpty_break) {
	 		listener.exitEmpty_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitEmpty_break) {
			return visitor.visitEmpty_break(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_empty_breakContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(MoocodePartialParser.BREAK, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_non_empty_break;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterNon_empty_break) {
	 		listener.enterNon_empty_break(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitNon_empty_break) {
	 		listener.exitNon_empty_break(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(MoocodePartialParser.WHILE, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public ENDWHILE(): TerminalNode {
		return this.getToken(MoocodePartialParser.ENDWHILE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(MoocodePartialParser.EQUALS, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_while_loop_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterWhile_loop_statement) {
	 		listener.enterWhile_loop_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitWhile_loop_statement) {
	 		listener.exitWhile_loop_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitWhile_loop_statement) {
			return visitor.visitWhile_loop_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_statementContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(MoocodePartialParser.TRY, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public ENDTRY(): TerminalNode {
		return this.getToken(MoocodePartialParser.ENDTRY, 0);
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
    	return MoocodePartialParser.RULE_try_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterTry_statement) {
	 		listener.enterTry_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitTry_statement) {
	 		listener.exitTry_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitTry_statement) {
			return visitor.visitTry_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_exceptContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(MoocodePartialParser.EXCEPT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public error_codes(): Error_codesContext {
		return this.getTypedRuleContext(Error_codesContext, 0) as Error_codesContext;
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_try_except;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterTry_except) {
	 		listener.enterTry_except(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitTry_except) {
	 		listener.exitTry_except(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitTry_except) {
			return visitor.visitTry_except(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Error_codesContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_error_codes;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterError_codes) {
	 		listener.enterError_codes(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitError_codes) {
	 		listener.exitError_codes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitError_codes) {
			return visitor.visitError_codes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_finallyContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(MoocodePartialParser.FINALLY, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_try_finally;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterTry_finally) {
	 		listener.enterTry_finally(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitTry_finally) {
	 		listener.exitTry_finally(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FORK(): TerminalNode {
		return this.getToken(MoocodePartialParser.FORK, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public ENDFORK(): TerminalNode {
		return this.getToken(MoocodePartialParser.ENDFORK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_fork_statement;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterFork_statement) {
	 		listener.enterFork_statement(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitFork_statement) {
	 		listener.exitFork_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitFork_statement) {
			return visitor.visitFork_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MoocodePartialParser.RULE_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MoocodePartialParser.RULE_assignment;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(MoocodePartialParser.EQUALS, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_assignment_operator;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterAssignment_operator) {
	 		listener.enterAssignment_operator(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitAssignment_operator) {
	 		listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_assignmentContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_non_assignment;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterNon_assignment) {
	 		listener.enterNon_assignment(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitNon_assignment) {
	 		listener.exitNon_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_in_expression(): Conditional_in_expressionContext {
		return this.getTypedRuleContext(Conditional_in_expressionContext, 0) as Conditional_in_expressionContext;
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(MoocodePartialParser.QUESTION_MARK, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(MoocodePartialParser.PIPE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_conditional_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterConditional_expression) {
	 		listener.enterConditional_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitConditional_expression) {
	 		listener.exitConditional_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitConditional_expression) {
			return visitor.visitConditional_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_in_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_or_expression_list(): Conditional_or_expressionContext[] {
		return this.getTypedRuleContexts(Conditional_or_expressionContext) as Conditional_or_expressionContext[];
	}
	public conditional_or_expression(i: number): Conditional_or_expressionContext {
		return this.getTypedRuleContext(Conditional_or_expressionContext, i) as Conditional_or_expressionContext;
	}
	public IN_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.IN);
	}
	public IN(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.IN, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_conditional_in_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterConditional_in_expression) {
	 		listener.enterConditional_in_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitConditional_in_expression) {
	 		listener.exitConditional_in_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitConditional_in_expression) {
			return visitor.visitConditional_in_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_or_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.OP_OR);
	}
	public OP_OR(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_OR, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_conditional_or_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterConditional_or_expression) {
	 		listener.enterConditional_or_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitConditional_or_expression) {
	 		listener.exitConditional_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitConditional_or_expression) {
			return visitor.visitConditional_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_and_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.OP_AND);
	}
	public OP_AND(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_AND, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_conditional_and_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterConditional_and_expression) {
	 		listener.enterConditional_and_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitConditional_and_expression) {
	 		listener.exitConditional_and_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitConditional_and_expression) {
			return visitor.visitConditional_and_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inclusive_or_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.BIT_OR);
	}
	public BIT_OR(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.BIT_OR, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_inclusive_or_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterInclusive_or_expression) {
	 		listener.enterInclusive_or_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitInclusive_or_expression) {
	 		listener.exitInclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitInclusive_or_expression) {
			return visitor.visitInclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exclusive_or_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.BIT_XOR);
	}
	public BIT_XOR(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.BIT_XOR, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_exclusive_or_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterExclusive_or_expression) {
	 		listener.enterExclusive_or_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitExclusive_or_expression) {
	 		listener.exitExclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitExclusive_or_expression) {
			return visitor.visitExclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.BIT_AND);
	}
	public BIT_AND(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.BIT_AND, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_and_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterAnd_expression) {
	 		listener.enterAnd_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitAnd_expression) {
	 		listener.exitAnd_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitAnd_expression) {
			return visitor.visitAnd_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.OP_EQ);
	}
	public OP_EQ(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_EQ, i);
	}
	public OP_NE_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.OP_NE);
	}
	public OP_NE(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_NE, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_equality_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterEquality_expression) {
	 		listener.enterEquality_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitEquality_expression) {
	 		listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.OP_LT);
	}
	public OP_LT(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_LT, i);
	}
	public OP_GT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.OP_GT);
	}
	public OP_GT(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_GT, i);
	}
	public OP_LE_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.OP_LE);
	}
	public OP_LE(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_LE, i);
	}
	public OP_GE_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.OP_GE);
	}
	public OP_GE(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_GE, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_relational_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterRelational_expression) {
	 		listener.enterRelational_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitRelational_expression) {
	 		listener.exitRelational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitRelational_expression) {
			return visitor.visitRelational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.LOG_SHIFT_LEFT);
	}
	public LOG_SHIFT_LEFT(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.LOG_SHIFT_LEFT, i);
	}
	public LOG_SHIFT_RIGHT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.LOG_SHIFT_RIGHT);
	}
	public LOG_SHIFT_RIGHT(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.LOG_SHIFT_RIGHT, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_shift_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterShift_expression) {
	 		listener.enterShift_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitShift_expression) {
	 		listener.exitShift_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitShift_expression) {
			return visitor.visitShift_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.PLUS);
	}
	public PLUS(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.PLUS, i);
	}
	public MINUS_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.MINUS, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_additive_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterAdditive_expression) {
	 		listener.enterAdditive_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitAdditive_expression) {
	 		listener.exitAdditive_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitAdditive_expression) {
			return visitor.visitAdditive_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.STAR);
	}
	public STAR(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.STAR, i);
	}
	public DIV_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.DIV);
	}
	public DIV(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.DIV, i);
	}
	public PERCENT_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.PERCENT);
	}
	public PERCENT(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.PERCENT, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_multiplicative_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterMultiplicative_expression) {
	 		listener.enterMultiplicative_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitMultiplicative_expression) {
	 		listener.exitMultiplicative_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitMultiplicative_expression) {
			return visitor.visitMultiplicative_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MoocodePartialParser.RULE_unary_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterUnary_expression) {
	 		listener.enterUnary_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitUnary_expression) {
	 		listener.exitUnary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitUnary_expression) {
			return visitor.visitUnary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Negative_unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MoocodePartialParser.MINUS, 0);
	}
	public unary_expression(): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_negative_unary_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterNegative_unary_expression) {
	 		listener.enterNegative_unary_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitNegative_unary_expression) {
	 		listener.exitNegative_unary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitNegative_unary_expression) {
			return visitor.visitNegative_unary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Negated_unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OP_NOT(): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_NOT, 0);
	}
	public unary_expression(): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_negated_unary_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterNegated_unary_expression) {
	 		listener.enterNegated_unary_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitNegated_unary_expression) {
	 		listener.exitNegated_unary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitNegated_unary_expression) {
			return visitor.visitNegated_unary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Complement_unary_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WAVE(): TerminalNode {
		return this.getToken(MoocodePartialParser.WAVE, 0);
	}
	public unary_expression(): Unary_expressionContext {
		return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_complement_unary_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterComplement_unary_expression) {
	 		listener.enterComplement_unary_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitComplement_unary_expression) {
	 		listener.exitComplement_unary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitComplement_unary_expression) {
			return visitor.visitComplement_unary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public _pe!: Primary_expression_startContext;
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_primary_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterPrimary_expression) {
	 		listener.enterPrimary_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitPrimary_expression) {
	 		listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MoocodePartialParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_expressions;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterExpressions) {
	 		listener.enterExpressions(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitExpressions) {
	 		listener.exitExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitExpressions) {
			return visitor.visitExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expression_startContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public object_reference(): Object_referenceContext {
		return this.getTypedRuleContext(Object_referenceContext, 0) as Object_referenceContext;
	}
	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
	}
	public map(): MapContext {
		return this.getTypedRuleContext(MapContext, 0) as MapContext;
	}
	public error_code(): Error_codeContext {
		return this.getTypedRuleContext(Error_codeContext, 0) as Error_codeContext;
	}
	public optional_variable(): Optional_variableContext {
		return this.getTypedRuleContext(Optional_variableContext, 0) as Optional_variableContext;
	}
	public list_splicer(): List_splicerContext {
		return this.getTypedRuleContext(List_splicerContext, 0) as List_splicerContext;
	}
	public error_catcher(): Error_catcherContext {
		return this.getTypedRuleContext(Error_catcherContext, 0) as Error_catcherContext;
	}
	public corified_verb_invocation(): Corified_verb_invocationContext {
		return this.getTypedRuleContext(Corified_verb_invocationContext, 0) as Corified_verb_invocationContext;
	}
	public bf_invocation(): Bf_invocationContext {
		return this.getTypedRuleContext(Bf_invocationContext, 0) as Bf_invocationContext;
	}
	public parenthesis_expression(): Parenthesis_expressionContext {
		return this.getTypedRuleContext(Parenthesis_expressionContext, 0) as Parenthesis_expressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_primary_expression_start;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterPrimary_expression_start) {
	 		listener.enterPrimary_expression_start(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitPrimary_expression_start) {
	 		listener.exitPrimary_expression_start(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression_start) {
			return visitor.visitPrimary_expression_start(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parenthesis_expressionContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_PARENS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_PARENS, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_parenthesis_expression;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterParenthesis_expression) {
	 		listener.enterParenthesis_expression(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitParenthesis_expression) {
	 		listener.exitParenthesis_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TICK(): TerminalNode {
		return this.getToken(MoocodePartialParser.TICK, 0);
	}
	public OP_NOT(): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_NOT, 0);
	}
	public error_codes(): Error_codesContext {
		return this.getTypedRuleContext(Error_codesContext, 0) as Error_codesContext;
	}
	public SINGLE_QUOTE(): TerminalNode {
		return this.getToken(MoocodePartialParser.SINGLE_QUOTE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(MoocodePartialParser.ARROW, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_error_catcher;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterError_catcher) {
	 		listener.enterError_catcher(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitError_catcher) {
	 		listener.exitError_catcher(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitError_catcher) {
			return visitor.visitError_catcher(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_BRACE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_list;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_BRACKET, 0);
	}
	public map_entry_list(): Map_entryContext[] {
		return this.getTypedRuleContexts(Map_entryContext) as Map_entryContext[];
	}
	public map_entry(i: number): Map_entryContext {
		return this.getTypedRuleContext(Map_entryContext, i) as Map_entryContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(MoocodePartialParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MoocodePartialParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_map;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterMap) {
	 		listener.enterMap(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitMap) {
	 		listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THIN_ARROW(): TerminalNode {
		return this.getToken(MoocodePartialParser.THIN_ARROW, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_map_entry;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterMap_entry) {
	 		listener.enterMap_entry(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitMap_entry) {
	 		listener.exitMap_entry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
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
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(MoocodePartialParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(MoocodePartialParser.CLOSE_BRACKET, 0);
	}
	public OP_RANGE(): TerminalNode {
		return this.getToken(MoocodePartialParser.OP_RANGE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_indexer;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterIndexer) {
	 		listener.enterIndexer(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitIndexer) {
	 		listener.exitIndexer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitIndexer) {
			return visitor.visitIndexer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_splicerContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(MoocodePartialParser.AT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_list_splicer;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterList_splicer) {
	 		listener.enterList_splicer(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitList_splicer) {
	 		listener.exitList_splicer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitList_splicer) {
			return visitor.visitList_splicer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_referenceContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MoocodePartialParser.RULE_object_reference;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterObject_reference) {
	 		listener.enterObject_reference(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitObject_reference) {
	 		listener.exitObject_reference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitObject_reference) {
			return visitor.visitObject_reference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_idContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHARP(): TerminalNode {
		return this.getToken(MoocodePartialParser.SHARP, 0);
	}
	public integer_literal(): Integer_literalContext {
		return this.getTypedRuleContext(Integer_literalContext, 0) as Integer_literalContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MoocodePartialParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_object_id;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterObject_id) {
	 		listener.enterObject_id(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitObject_id) {
	 		listener.exitObject_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitObject_id) {
			return visitor.visitObject_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Corified_valueContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(MoocodePartialParser.DOLLAR, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_corified_value;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterCorified_value) {
	 		listener.enterCorified_value(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitCorified_value) {
	 		listener.exitCorified_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitCorified_value) {
			return visitor.visitCorified_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Optional_variableContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(MoocodePartialParser.QUESTION_MARK, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_optional_variable;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterOptional_variable) {
	 		listener.enterOptional_variable(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitOptional_variable) {
	 		listener.exitOptional_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitOptional_variable) {
			return visitor.visitOptional_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MoocodePartialParser.RULE_literal;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(MoocodePartialParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(MoocodePartialParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_bool_literal;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterBool_literal) {
	 		listener.enterBool_literal(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitBool_literal) {
	 		listener.exitBool_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitBool_literal) {
			return visitor.visitBool_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(MoocodePartialParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_string_literal;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterString_literal) {
	 		listener.enterString_literal(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitString_literal) {
	 		listener.exitString_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitString_literal) {
			return visitor.visitString_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(MoocodePartialParser.INTEGER_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_integer_literal;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterInteger_literal) {
	 		listener.enterInteger_literal(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitInteger_literal) {
	 		listener.exitInteger_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitInteger_literal) {
			return visitor.visitInteger_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Float_literalContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT_LITERAL(): TerminalNode {
		return this.getToken(MoocodePartialParser.FLOAT_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_float_literal;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterFloat_literal) {
	 		listener.enterFloat_literal(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitFloat_literal) {
	 		listener.exitFloat_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitFloat_literal) {
			return visitor.visitFloat_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaretContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CARET(): TerminalNode {
		return this.getToken(MoocodePartialParser.CARET, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_caret;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterCaret) {
	 		listener.enterCaret(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitCaret) {
	 		listener.exitCaret(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitCaret) {
			return visitor.visitCaret(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DollarContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(MoocodePartialParser.DOLLAR, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_dollar;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterDollar) {
	 		listener.enterDollar(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitDollar) {
	 		listener.exitDollar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitDollar) {
			return visitor.visitDollar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Error_codeContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANY_ERROR(): TerminalNode {
		return this.getToken(MoocodePartialParser.ANY_ERROR, 0);
	}
	public E_NONE(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_NONE, 0);
	}
	public E_TYPE(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_TYPE, 0);
	}
	public E_DIV(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_DIV, 0);
	}
	public E_PERM(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_PERM, 0);
	}
	public E_PROPNF(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_PROPNF, 0);
	}
	public E_VERBNF(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_VERBNF, 0);
	}
	public E_VARNF(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_VARNF, 0);
	}
	public E_INVIND(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_INVIND, 0);
	}
	public E_RECMOVE(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_RECMOVE, 0);
	}
	public E_MAXREC(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_MAXREC, 0);
	}
	public E_RANGE(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_RANGE, 0);
	}
	public E_ARGS(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_ARGS, 0);
	}
	public E_NACC(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_NACC, 0);
	}
	public E_INVARG(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_INVARG, 0);
	}
	public E_QUOTA(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_QUOTA, 0);
	}
	public E_FLOAT(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_FLOAT, 0);
	}
	public E_FILE(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_FILE, 0);
	}
	public E_EXEC(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_EXEC, 0);
	}
	public E_INTRPT(): TerminalNode {
		return this.getToken(MoocodePartialParser.E_INTRPT, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_error_code;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterError_code) {
	 		listener.enterError_code(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitError_code) {
	 		listener.exitError_code(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitError_code) {
			return visitor.visitError_code(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: MoocodePartialParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(MoocodePartialParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MoocodePartialParser.RULE_identifier;
	}
	public enterRule(listener: MoocodePartialParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: MoocodePartialParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoocodePartialParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
