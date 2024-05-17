// Generated from c://dev//moocode-parsing//src//grammar//MoocodeLexer.g4 by ANTLR 4.13.1
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
export default class MoocodeLexer extends Lexer {
	public static readonly SINGLE_LINE_COMMENT = 1;
	public static readonly WHITESPACES = 2;
	public static readonly BREAK = 3;
	public static readonly CONTINUE = 4;
	public static readonly ELSE = 5;
	public static readonly ELSEIF = 6;
	public static readonly ENDFOR = 7;
	public static readonly ENDFORK = 8;
	public static readonly ENDIF = 9;
	public static readonly ENDTRY = 10;
	public static readonly ENDWHILE = 11;
	public static readonly EXCEPT = 12;
	public static readonly FALSE = 13;
	public static readonly FINALLY = 14;
	public static readonly FOR = 15;
	public static readonly FORK = 16;
	public static readonly IF = 17;
	public static readonly IN = 18;
	public static readonly RETURN = 19;
	public static readonly TRUE = 20;
	public static readonly TRY = 21;
	public static readonly WHILE = 22;
	public static readonly E_NONE = 23;
	public static readonly E_TYPE = 24;
	public static readonly E_DIV = 25;
	public static readonly E_PERM = 26;
	public static readonly E_PROPNF = 27;
	public static readonly E_VERBNF = 28;
	public static readonly E_VARNF = 29;
	public static readonly E_INVIND = 30;
	public static readonly E_RECMOVE = 31;
	public static readonly E_MAXREC = 32;
	public static readonly E_RANGE = 33;
	public static readonly E_ARGS = 34;
	public static readonly E_NACC = 35;
	public static readonly E_INVARG = 36;
	public static readonly E_QUOTA = 37;
	public static readonly E_FLOAT = 38;
	public static readonly E_FILE = 39;
	public static readonly E_EXEC = 40;
	public static readonly E_INTRPT = 41;
	public static readonly ANY_ERROR = 42;
	public static readonly IDENTIFIER = 43;
	public static readonly INTEGER_LITERAL = 44;
	public static readonly FLOAT_LITERAL = 45;
	public static readonly STRING_LITERAL = 46;
	public static readonly ARROW = 47;
	public static readonly AT = 48;
	public static readonly BIT_AND = 49;
	public static readonly BIT_OR = 50;
	public static readonly BIT_XOR = 51;
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN", 
                                                                                      "COMMENT" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'break'", 
                                                            "'continue'", 
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
	public static readonly symbolicNames: (string | null)[] = [ null, "SINGLE_LINE_COMMENT", 
                                                             "WHITESPACES", 
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"SINGLE_LINE_COMMENT", "WHITESPACES", "BREAK", "CONTINUE", "ELSE", "ELSEIF", 
		"ENDFOR", "ENDFORK", "ENDIF", "ENDTRY", "ENDWHILE", "EXCEPT", "FALSE", 
		"FINALLY", "FOR", "FORK", "IF", "IN", "RETURN", "TRUE", "TRY", "WHILE", 
		"E_NONE", "E_TYPE", "E_DIV", "E_PERM", "E_PROPNF", "E_VERBNF", "E_VARNF", 
		"E_INVIND", "E_RECMOVE", "E_MAXREC", "E_RANGE", "E_ARGS", "E_NACC", "E_INVARG", 
		"E_QUOTA", "E_FLOAT", "E_FILE", "E_EXEC", "E_INTRPT", "ANY_ERROR", "IDENTIFIER", 
		"INTEGER_LITERAL", "FLOAT_LITERAL", "STRING_LITERAL", "ARROW", "AT", "BIT_AND", 
		"BIT_OR", "BIT_XOR", "CLOSE_BRACE", "CLOSE_BRACKET", "CLOSE_PARENS", "COLON", 
		"COMMA", "DIV", "DOLLAR", "DOT", "EQUALS", "LOG_SHIFT_RIGHT", "LOG_SHIFT_LEFT", 
		"MINUS", "OP_AND", "OP_EQ", "OP_GE", "OP_GT", "OP_LE", "OP_LT", "OP_NE", 
		"OP_NOT", "OP_OR", "OP_RANGE", "OPEN_BRACE", "OPEN_BRACKET", "OPEN_PARENS", 
		"PERCENT", "PIPE", "PLUS", "QUESTION_MARK", "SEMICOLON", "SHARP", "SINGLE_QUOTE", 
		"STAR", "THIN_ARROW", "TICK", "WAVE", "ANY", "Whitespace", "NewLine", 
		"IdentifierOrKeyword", "IdentifierStartCharacter", "IdentifierPartCharacter", 
		"LetterCharacter", "Digit", "ExponentPart",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MoocodeLexer._ATN, MoocodeLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MoocodeLexer.g4"; }

	public get literalNames(): (string | null)[] { return MoocodeLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MoocodeLexer.symbolicNames; }
	public get ruleNames(): string[] { return MoocodeLexer.ruleNames; }

	public get serializedATN(): number[] { return MoocodeLexer._serializedATN; }

	public get channelNames(): string[] { return MoocodeLexer.channelNames; }

	public get modeNames(): string[] { return MoocodeLexer.modeNames; }

	// @Override
	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 44:
			return this.FLOAT_LITERAL_sempred(localctx, predIndex);
		}
		return true;
	}
	private FLOAT_LITERAL_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this._input.LA(1) != '.'.charCodeAt(0);
		case 1:
			return this._input.LA(-1) != '.'.charCodeAt(0);
		case 2:
			return this._input.LA(-1) != '.'.charCodeAt(0);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,0,88,711,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,
	45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
	2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,
	60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,
	7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,
	74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,
	2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,
	89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,1,0,
	1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,4,1,203,8,1,11,1,12,1,204,1,1,1,1,1,2,1,
	2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
	4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,
	1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,
	20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,
	1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,
	25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
	1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,
	28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,
	31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,
	1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,
	1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,
	39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
	1,41,1,41,1,41,1,41,1,42,1,42,1,43,3,43,489,8,43,1,43,1,43,5,43,493,8,43,
	10,43,12,43,496,9,43,1,44,3,44,499,8,44,1,44,1,44,5,44,503,8,44,10,44,12,
	44,506,9,44,1,44,1,44,1,44,1,44,5,44,512,8,44,10,44,12,44,515,9,44,1,44,
	3,44,518,8,44,3,44,520,8,44,1,44,3,44,523,8,44,1,44,1,44,5,44,527,8,44,
	10,44,12,44,530,9,44,3,44,532,8,44,1,44,1,44,1,44,1,44,5,44,538,8,44,10,
	44,12,44,541,9,44,1,44,3,44,544,8,44,1,44,3,44,547,8,44,1,44,1,44,5,44,
	551,8,44,10,44,12,44,554,9,44,3,44,556,8,44,1,44,1,44,3,44,560,8,44,1,44,
	3,44,563,8,44,1,45,1,45,1,45,1,45,5,45,569,8,45,10,45,12,45,572,9,45,1,
	45,1,45,1,46,1,46,1,46,1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,
	1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,
	57,1,58,1,58,1,59,1,59,1,60,1,60,1,60,1,61,1,61,1,61,1,62,1,62,1,63,1,63,
	1,63,1,64,1,64,1,64,1,65,1,65,1,65,1,66,1,66,1,67,1,67,1,67,1,68,1,68,1,
	69,1,69,1,69,1,70,1,70,1,71,1,71,1,71,1,72,1,72,1,72,1,73,1,73,1,74,1,74,
	1,75,1,75,1,76,1,76,1,77,1,77,1,78,1,78,1,79,1,79,1,80,1,80,1,81,1,81,1,
	82,1,82,1,83,1,83,1,84,1,84,1,84,1,85,1,85,1,86,1,86,1,87,1,87,1,88,1,88,
	1,89,1,89,1,89,3,89,679,8,89,1,90,1,90,5,90,683,8,90,10,90,12,90,686,9,
	90,1,91,1,91,3,91,690,8,91,1,92,1,92,1,92,3,92,695,8,92,1,93,1,93,1,94,
	1,94,1,95,1,95,3,95,703,8,95,1,95,1,95,5,95,707,8,95,10,95,12,95,710,9,
	95,0,0,96,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,
	13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,
	25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,
	37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,
	49,99,50,101,51,103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,
	119,60,121,61,123,62,125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,
	70,141,71,143,72,145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,
	161,81,163,82,165,83,167,84,169,85,171,86,173,87,175,88,177,0,179,0,181,
	0,183,0,185,0,187,0,189,0,191,0,1,0,30,2,0,66,66,98,98,2,0,82,82,114,114,
	2,0,69,69,101,101,2,0,65,65,97,97,2,0,75,75,107,107,2,0,67,67,99,99,2,0,
	79,79,111,111,2,0,78,78,110,110,2,0,84,84,116,116,2,0,73,73,105,105,2,0,
	85,85,117,117,2,0,76,76,108,108,2,0,83,83,115,115,2,0,70,70,102,102,2,0,
	68,68,100,100,2,0,89,89,121,121,2,0,87,87,119,119,2,0,72,72,104,104,2,0,
	88,88,120,120,2,0,80,80,112,112,2,0,86,86,118,118,2,0,77,77,109,109,2,0,
	71,71,103,103,2,0,81,81,113,113,4,0,10,10,13,13,34,34,92,92,2,0,10,10,13,
	13,2,0,9,9,32,32,2,0,65,90,97,122,1,0,48,57,2,0,43,43,45,45,731,0,1,1,0,
	0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,
	0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
	0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,
	0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,
	0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,
	0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,
	0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,
	0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,
	0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,
	1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,
	0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,
	0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,
	0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,
	0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,
	153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,
	1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,
	0,0,0,0,175,1,0,0,0,1,193,1,0,0,0,3,202,1,0,0,0,5,208,1,0,0,0,7,214,1,0,
	0,0,9,223,1,0,0,0,11,228,1,0,0,0,13,235,1,0,0,0,15,242,1,0,0,0,17,250,1,
	0,0,0,19,256,1,0,0,0,21,263,1,0,0,0,23,272,1,0,0,0,25,279,1,0,0,0,27,285,
	1,0,0,0,29,293,1,0,0,0,31,297,1,0,0,0,33,302,1,0,0,0,35,305,1,0,0,0,37,
	308,1,0,0,0,39,315,1,0,0,0,41,320,1,0,0,0,43,324,1,0,0,0,45,330,1,0,0,0,
	47,337,1,0,0,0,49,344,1,0,0,0,51,350,1,0,0,0,53,357,1,0,0,0,55,366,1,0,
	0,0,57,375,1,0,0,0,59,383,1,0,0,0,61,392,1,0,0,0,63,402,1,0,0,0,65,411,
	1,0,0,0,67,419,1,0,0,0,69,426,1,0,0,0,71,433,1,0,0,0,73,442,1,0,0,0,75,
	450,1,0,0,0,77,458,1,0,0,0,79,465,1,0,0,0,81,472,1,0,0,0,83,481,1,0,0,0,
	85,485,1,0,0,0,87,488,1,0,0,0,89,562,1,0,0,0,91,564,1,0,0,0,93,575,1,0,
	0,0,95,578,1,0,0,0,97,580,1,0,0,0,99,583,1,0,0,0,101,586,1,0,0,0,103,589,
	1,0,0,0,105,591,1,0,0,0,107,593,1,0,0,0,109,595,1,0,0,0,111,597,1,0,0,0,
	113,599,1,0,0,0,115,601,1,0,0,0,117,603,1,0,0,0,119,605,1,0,0,0,121,607,
	1,0,0,0,123,610,1,0,0,0,125,613,1,0,0,0,127,615,1,0,0,0,129,618,1,0,0,0,
	131,621,1,0,0,0,133,624,1,0,0,0,135,626,1,0,0,0,137,629,1,0,0,0,139,631,
	1,0,0,0,141,634,1,0,0,0,143,636,1,0,0,0,145,639,1,0,0,0,147,642,1,0,0,0,
	149,644,1,0,0,0,151,646,1,0,0,0,153,648,1,0,0,0,155,650,1,0,0,0,157,652,
	1,0,0,0,159,654,1,0,0,0,161,656,1,0,0,0,163,658,1,0,0,0,165,660,1,0,0,0,
	167,662,1,0,0,0,169,664,1,0,0,0,171,667,1,0,0,0,173,669,1,0,0,0,175,671,
	1,0,0,0,177,673,1,0,0,0,179,678,1,0,0,0,181,680,1,0,0,0,183,689,1,0,0,0,
	185,694,1,0,0,0,187,696,1,0,0,0,189,698,1,0,0,0,191,700,1,0,0,0,193,194,
	5,34,0,0,194,195,3,91,45,0,195,196,5,34,0,0,196,197,3,161,80,0,197,198,
	1,0,0,0,198,199,6,0,0,0,199,2,1,0,0,0,200,203,3,177,88,0,201,203,3,179,
	89,0,202,200,1,0,0,0,202,201,1,0,0,0,203,204,1,0,0,0,204,202,1,0,0,0,204,
	205,1,0,0,0,205,206,1,0,0,0,206,207,6,1,1,0,207,4,1,0,0,0,208,209,7,0,0,
	0,209,210,7,1,0,0,210,211,7,2,0,0,211,212,7,3,0,0,212,213,7,4,0,0,213,6,
	1,0,0,0,214,215,7,5,0,0,215,216,7,6,0,0,216,217,7,7,0,0,217,218,7,8,0,0,
	218,219,7,9,0,0,219,220,7,7,0,0,220,221,7,10,0,0,221,222,7,2,0,0,222,8,
	1,0,0,0,223,224,7,2,0,0,224,225,7,11,0,0,225,226,7,12,0,0,226,227,7,2,0,
	0,227,10,1,0,0,0,228,229,7,2,0,0,229,230,7,11,0,0,230,231,7,12,0,0,231,
	232,7,2,0,0,232,233,7,9,0,0,233,234,7,13,0,0,234,12,1,0,0,0,235,236,7,2,
	0,0,236,237,7,7,0,0,237,238,7,14,0,0,238,239,7,13,0,0,239,240,7,6,0,0,240,
	241,7,1,0,0,241,14,1,0,0,0,242,243,7,2,0,0,243,244,7,7,0,0,244,245,7,14,
	0,0,245,246,7,13,0,0,246,247,7,6,0,0,247,248,7,1,0,0,248,249,7,4,0,0,249,
	16,1,0,0,0,250,251,7,2,0,0,251,252,7,7,0,0,252,253,7,14,0,0,253,254,7,9,
	0,0,254,255,7,13,0,0,255,18,1,0,0,0,256,257,7,2,0,0,257,258,7,7,0,0,258,
	259,7,14,0,0,259,260,7,8,0,0,260,261,7,1,0,0,261,262,7,15,0,0,262,20,1,
	0,0,0,263,264,7,2,0,0,264,265,7,7,0,0,265,266,7,14,0,0,266,267,7,16,0,0,
	267,268,7,17,0,0,268,269,7,9,0,0,269,270,7,11,0,0,270,271,7,2,0,0,271,22,
	1,0,0,0,272,273,7,2,0,0,273,274,7,18,0,0,274,275,7,5,0,0,275,276,7,2,0,
	0,276,277,7,19,0,0,277,278,7,8,0,0,278,24,1,0,0,0,279,280,7,13,0,0,280,
	281,7,3,0,0,281,282,7,11,0,0,282,283,7,12,0,0,283,284,7,2,0,0,284,26,1,
	0,0,0,285,286,7,13,0,0,286,287,7,9,0,0,287,288,7,7,0,0,288,289,7,3,0,0,
	289,290,7,11,0,0,290,291,7,11,0,0,291,292,7,15,0,0,292,28,1,0,0,0,293,294,
	7,13,0,0,294,295,7,6,0,0,295,296,7,1,0,0,296,30,1,0,0,0,297,298,7,13,0,
	0,298,299,7,6,0,0,299,300,7,1,0,0,300,301,7,4,0,0,301,32,1,0,0,0,302,303,
	7,9,0,0,303,304,7,13,0,0,304,34,1,0,0,0,305,306,7,9,0,0,306,307,7,7,0,0,
	307,36,1,0,0,0,308,309,7,1,0,0,309,310,7,2,0,0,310,311,7,8,0,0,311,312,
	7,10,0,0,312,313,7,1,0,0,313,314,7,7,0,0,314,38,1,0,0,0,315,316,7,8,0,0,
	316,317,7,1,0,0,317,318,7,10,0,0,318,319,7,2,0,0,319,40,1,0,0,0,320,321,
	7,8,0,0,321,322,7,1,0,0,322,323,7,15,0,0,323,42,1,0,0,0,324,325,7,16,0,
	0,325,326,7,17,0,0,326,327,7,9,0,0,327,328,7,11,0,0,328,329,7,2,0,0,329,
	44,1,0,0,0,330,331,7,2,0,0,331,332,5,95,0,0,332,333,7,7,0,0,333,334,7,6,
	0,0,334,335,7,7,0,0,335,336,7,2,0,0,336,46,1,0,0,0,337,338,7,2,0,0,338,
	339,5,95,0,0,339,340,7,8,0,0,340,341,7,15,0,0,341,342,7,19,0,0,342,343,
	7,2,0,0,343,48,1,0,0,0,344,345,7,2,0,0,345,346,5,95,0,0,346,347,7,14,0,
	0,347,348,7,9,0,0,348,349,7,20,0,0,349,50,1,0,0,0,350,351,7,2,0,0,351,352,
	5,95,0,0,352,353,7,19,0,0,353,354,7,2,0,0,354,355,7,1,0,0,355,356,7,21,
	0,0,356,52,1,0,0,0,357,358,7,2,0,0,358,359,5,95,0,0,359,360,7,19,0,0,360,
	361,7,1,0,0,361,362,7,6,0,0,362,363,7,19,0,0,363,364,7,7,0,0,364,365,7,
	13,0,0,365,54,1,0,0,0,366,367,7,2,0,0,367,368,5,95,0,0,368,369,7,20,0,0,
	369,370,7,2,0,0,370,371,7,1,0,0,371,372,7,0,0,0,372,373,7,7,0,0,373,374,
	7,13,0,0,374,56,1,0,0,0,375,376,7,2,0,0,376,377,5,95,0,0,377,378,7,20,0,
	0,378,379,7,3,0,0,379,380,7,1,0,0,380,381,7,7,0,0,381,382,7,13,0,0,382,
	58,1,0,0,0,383,384,7,2,0,0,384,385,5,95,0,0,385,386,7,9,0,0,386,387,7,7,
	0,0,387,388,7,20,0,0,388,389,7,9,0,0,389,390,7,7,0,0,390,391,7,14,0,0,391,
	60,1,0,0,0,392,393,7,2,0,0,393,394,5,95,0,0,394,395,7,1,0,0,395,396,7,2,
	0,0,396,397,7,5,0,0,397,398,7,21,0,0,398,399,7,6,0,0,399,400,7,20,0,0,400,
	401,7,2,0,0,401,62,1,0,0,0,402,403,7,2,0,0,403,404,5,95,0,0,404,405,7,21,
	0,0,405,406,7,3,0,0,406,407,7,18,0,0,407,408,7,1,0,0,408,409,7,2,0,0,409,
	410,7,5,0,0,410,64,1,0,0,0,411,412,7,2,0,0,412,413,5,95,0,0,413,414,7,1,
	0,0,414,415,7,3,0,0,415,416,7,7,0,0,416,417,7,22,0,0,417,418,7,2,0,0,418,
	66,1,0,0,0,419,420,7,2,0,0,420,421,5,95,0,0,421,422,7,3,0,0,422,423,7,1,
	0,0,423,424,7,22,0,0,424,425,7,12,0,0,425,68,1,0,0,0,426,427,7,2,0,0,427,
	428,5,95,0,0,428,429,7,7,0,0,429,430,7,3,0,0,430,431,7,5,0,0,431,432,7,
	5,0,0,432,70,1,0,0,0,433,434,7,2,0,0,434,435,5,95,0,0,435,436,7,9,0,0,436,
	437,7,7,0,0,437,438,7,20,0,0,438,439,7,3,0,0,439,440,7,1,0,0,440,441,7,
	22,0,0,441,72,1,0,0,0,442,443,7,2,0,0,443,444,5,95,0,0,444,445,7,23,0,0,
	445,446,7,10,0,0,446,447,7,6,0,0,447,448,7,8,0,0,448,449,7,3,0,0,449,74,
	1,0,0,0,450,451,7,2,0,0,451,452,5,95,0,0,452,453,7,13,0,0,453,454,7,11,
	0,0,454,455,7,6,0,0,455,456,7,3,0,0,456,457,7,8,0,0,457,76,1,0,0,0,458,
	459,7,2,0,0,459,460,5,95,0,0,460,461,7,13,0,0,461,462,7,9,0,0,462,463,7,
	11,0,0,463,464,7,2,0,0,464,78,1,0,0,0,465,466,7,2,0,0,466,467,5,95,0,0,
	467,468,7,2,0,0,468,469,7,18,0,0,469,470,7,2,0,0,470,471,7,5,0,0,471,80,
	1,0,0,0,472,473,7,2,0,0,473,474,5,95,0,0,474,475,7,9,0,0,475,476,7,7,0,
	0,476,477,7,8,0,0,477,478,7,1,0,0,478,479,7,19,0,0,479,480,7,8,0,0,480,
	82,1,0,0,0,481,482,7,3,0,0,482,483,7,7,0,0,483,484,7,15,0,0,484,84,1,0,
	0,0,485,486,3,181,90,0,486,86,1,0,0,0,487,489,3,125,62,0,488,487,1,0,0,
	0,488,489,1,0,0,0,489,490,1,0,0,0,490,494,3,189,94,0,491,493,3,189,94,0,
	492,491,1,0,0,0,493,496,1,0,0,0,494,492,1,0,0,0,494,495,1,0,0,0,495,88,
	1,0,0,0,496,494,1,0,0,0,497,499,3,125,62,0,498,497,1,0,0,0,498,499,1,0,
	0,0,499,500,1,0,0,0,500,504,3,189,94,0,501,503,3,189,94,0,502,501,1,0,0,
	0,503,506,1,0,0,0,504,502,1,0,0,0,504,505,1,0,0,0,505,507,1,0,0,0,506,504,
	1,0,0,0,507,508,5,46,0,0,508,519,4,44,0,0,509,513,3,189,94,0,510,512,3,
	189,94,0,511,510,1,0,0,0,512,515,1,0,0,0,513,511,1,0,0,0,513,514,1,0,0,
	0,514,517,1,0,0,0,515,513,1,0,0,0,516,518,3,191,95,0,517,516,1,0,0,0,517,
	518,1,0,0,0,518,520,1,0,0,0,519,509,1,0,0,0,519,520,1,0,0,0,520,563,1,0,
	0,0,521,523,3,125,62,0,522,521,1,0,0,0,522,523,1,0,0,0,523,531,1,0,0,0,
	524,528,3,189,94,0,525,527,3,189,94,0,526,525,1,0,0,0,527,530,1,0,0,0,528,
	526,1,0,0,0,528,529,1,0,0,0,529,532,1,0,0,0,530,528,1,0,0,0,531,524,1,0,
	0,0,531,532,1,0,0,0,532,533,1,0,0,0,533,534,4,44,1,0,534,535,5,46,0,0,535,
	539,3,189,94,0,536,538,3,189,94,0,537,536,1,0,0,0,538,541,1,0,0,0,539,537,
	1,0,0,0,539,540,1,0,0,0,540,543,1,0,0,0,541,539,1,0,0,0,542,544,3,191,95,
	0,543,542,1,0,0,0,543,544,1,0,0,0,544,563,1,0,0,0,545,547,3,125,62,0,546,
	545,1,0,0,0,546,547,1,0,0,0,547,555,1,0,0,0,548,552,3,189,94,0,549,551,
	3,189,94,0,550,549,1,0,0,0,551,554,1,0,0,0,552,550,1,0,0,0,552,553,1,0,
	0,0,553,556,1,0,0,0,554,552,1,0,0,0,555,548,1,0,0,0,555,556,1,0,0,0,556,
	557,1,0,0,0,557,559,4,44,2,0,558,560,5,46,0,0,559,558,1,0,0,0,559,560,1,
	0,0,0,560,561,1,0,0,0,561,563,3,191,95,0,562,498,1,0,0,0,562,522,1,0,0,
	0,562,546,1,0,0,0,563,90,1,0,0,0,564,570,5,34,0,0,565,569,8,24,0,0,566,
	567,5,92,0,0,567,569,8,25,0,0,568,565,1,0,0,0,568,566,1,0,0,0,569,572,1,
	0,0,0,570,568,1,0,0,0,570,571,1,0,0,0,571,573,1,0,0,0,572,570,1,0,0,0,573,
	574,5,34,0,0,574,92,1,0,0,0,575,576,5,61,0,0,576,577,5,62,0,0,577,94,1,
	0,0,0,578,579,5,64,0,0,579,96,1,0,0,0,580,581,5,38,0,0,581,582,5,46,0,0,
	582,98,1,0,0,0,583,584,5,124,0,0,584,585,5,46,0,0,585,100,1,0,0,0,586,587,
	5,94,0,0,587,588,5,46,0,0,588,102,1,0,0,0,589,590,5,125,0,0,590,104,1,0,
	0,0,591,592,5,93,0,0,592,106,1,0,0,0,593,594,5,41,0,0,594,108,1,0,0,0,595,
	596,5,58,0,0,596,110,1,0,0,0,597,598,5,44,0,0,598,112,1,0,0,0,599,600,5,
	47,0,0,600,114,1,0,0,0,601,602,5,36,0,0,602,116,1,0,0,0,603,604,5,46,0,
	0,604,118,1,0,0,0,605,606,5,61,0,0,606,120,1,0,0,0,607,608,5,62,0,0,608,
	609,5,62,0,0,609,122,1,0,0,0,610,611,5,60,0,0,611,612,5,60,0,0,612,124,
	1,0,0,0,613,614,5,45,0,0,614,126,1,0,0,0,615,616,5,38,0,0,616,617,5,38,
	0,0,617,128,1,0,0,0,618,619,5,61,0,0,619,620,5,61,0,0,620,130,1,0,0,0,621,
	622,5,62,0,0,622,623,5,61,0,0,623,132,1,0,0,0,624,625,5,62,0,0,625,134,
	1,0,0,0,626,627,5,60,0,0,627,628,5,61,0,0,628,136,1,0,0,0,629,630,5,60,
	0,0,630,138,1,0,0,0,631,632,5,33,0,0,632,633,5,61,0,0,633,140,1,0,0,0,634,
	635,5,33,0,0,635,142,1,0,0,0,636,637,5,124,0,0,637,638,5,124,0,0,638,144,
	1,0,0,0,639,640,5,46,0,0,640,641,5,46,0,0,641,146,1,0,0,0,642,643,5,123,
	0,0,643,148,1,0,0,0,644,645,5,91,0,0,645,150,1,0,0,0,646,647,5,40,0,0,647,
	152,1,0,0,0,648,649,5,37,0,0,649,154,1,0,0,0,650,651,5,124,0,0,651,156,
	1,0,0,0,652,653,5,43,0,0,653,158,1,0,0,0,654,655,5,63,0,0,655,160,1,0,0,
	0,656,657,5,59,0,0,657,162,1,0,0,0,658,659,5,35,0,0,659,164,1,0,0,0,660,
	661,5,39,0,0,661,166,1,0,0,0,662,663,5,42,0,0,663,168,1,0,0,0,664,665,5,
	45,0,0,665,666,5,62,0,0,666,170,1,0,0,0,667,668,5,96,0,0,668,172,1,0,0,
	0,669,670,5,126,0,0,670,174,1,0,0,0,671,672,9,0,0,0,672,176,1,0,0,0,673,
	674,7,26,0,0,674,178,1,0,0,0,675,676,5,13,0,0,676,679,5,10,0,0,677,679,
	7,25,0,0,678,675,1,0,0,0,678,677,1,0,0,0,679,180,1,0,0,0,680,684,3,183,
	91,0,681,683,3,185,92,0,682,681,1,0,0,0,683,686,1,0,0,0,684,682,1,0,0,0,
	684,685,1,0,0,0,685,182,1,0,0,0,686,684,1,0,0,0,687,690,3,187,93,0,688,
	690,5,95,0,0,689,687,1,0,0,0,689,688,1,0,0,0,690,184,1,0,0,0,691,695,3,
	187,93,0,692,695,3,189,94,0,693,695,5,95,0,0,694,691,1,0,0,0,694,692,1,
	0,0,0,694,693,1,0,0,0,695,186,1,0,0,0,696,697,7,27,0,0,697,188,1,0,0,0,
	698,699,7,28,0,0,699,190,1,0,0,0,700,702,7,2,0,0,701,703,7,29,0,0,702,701,
	1,0,0,0,702,703,1,0,0,0,703,704,1,0,0,0,704,708,3,189,94,0,705,707,3,189,
	94,0,706,705,1,0,0,0,707,710,1,0,0,0,708,706,1,0,0,0,708,709,1,0,0,0,709,
	192,1,0,0,0,710,708,1,0,0,0,28,0,202,204,488,494,498,504,513,517,519,522,
	528,531,539,543,546,552,555,559,562,568,570,678,684,689,694,702,708,2,0,
	2,0,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoocodeLexer.__ATN) {
			MoocodeLexer.__ATN = new ATNDeserializer().deserialize(MoocodeLexer._serializedATN);
		}

		return MoocodeLexer.__ATN;
	}


	static DecisionsToDFA = MoocodeLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}