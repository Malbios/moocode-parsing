lexer grammar MoocodeLexer;

options {
	caseInsensitive = true;
}

WHITESPACES: (Whitespace | NewLine)+ -> channel(HIDDEN);

// keywords
BREAK: 'break';
CONTINUE: 'continue';
ELSE: 'else';
ELSEIF: 'elseif';
ENDFOR: 'endfor';
ENDFORK: 'endfork';
ENDIF: 'endif';
ENDTRY: 'endtry';
ENDWHILE: 'endwhile';
EXCEPT: 'except';
FALSE: 'false';
FINALLY: 'finally';
FOR: 'for';
FORK: 'fork';
IF: 'if';
IN: 'in';
RETURN: 'return';
TRUE: 'true';
TRY: 'try';
WHILE: 'while';

// error types
E_NONE: 'E_NONE';
E_TYPE: 'E_TYPE';
E_DIV: 'E_DIV';
E_PERM: 'E_PERM';
E_PROPNF: 'E_PROPNF';
E_VERBNF: 'E_VERBNF';
E_VARNF: 'E_VARNF';
E_INVIND: 'E_INVIND';
E_RECMOVE: 'E_RECMOVE';
E_MAXREC: 'E_MAXREC';
E_RANGE: 'E_RANGE';
E_ARGS: 'E_ARGS';
E_NACC: 'E_NACC';
E_INVARG: 'E_INVARG';
E_QUOTA: 'E_QUOTA';
E_FLOAT: 'E_FLOAT';
E_FILE: 'E_FILE';
E_EXEC: 'E_EXEC';
E_INTRPT: 'E_INTRPT';

ANY_ERROR: 'ANY';

IDENTIFIER: IdentifierOrKeyword;

// literals
INTEGER_LITERAL: MINUS? Digit Digit*;
FLOAT_LITERAL:
	MINUS? Digit Digit* '.' {this._input.LA(1) != '.'.charCodeAt(0)}? (
		Digit Digit* ExponentPart?
	)?
	| MINUS? (Digit Digit*)? {this._input.LA(-1) != '.'.charCodeAt(0)}? '.' Digit Digit*
		ExponentPart?
	| MINUS? (Digit Digit*)? {this._input.LA(-1) != '.'.charCodeAt(0)}? '.'? ExponentPart;
STRING_LITERAL: '"' (~[\\"\r\n] | '\\' ~[\r\n])* '"';

// Operators And Punctuators
ARROW: '=>';
AT: '@';
BIT_AND: '&.';
BIT_OR: '|.';
BIT_XOR: '^.';
CLOSE_BRACE: '}';
CLOSE_BRACKET: ']';
CLOSE_PARENS: ')';
COLON: ':';
COMMA: ',';
DIV: '/';
DOLLAR: '$';
DOT: '.';
EQUALS: '=';
LOG_SHIFT_RIGHT: '>>';
LOG_SHIFT_LEFT: '<<';
MINUS: '-';
OP_AND: '&&';
OP_EQ: '==';
OP_GE: '>=';
OP_GT: '>';
OP_LE: '<=';
OP_LT: '<';
OP_NE: '!=';
OP_NOT: '!';
OP_OR: '||';
OP_RANGE: '..';
OPEN_BRACE: '{';
OPEN_BRACKET: '[';
OPEN_PARENS: '(';
PERCENT: '%';
PIPE: '|';
PLUS: '+';
QUESTION_MARK: '?';
SEMICOLON: ';';
SHARP: '#';
SINGLE_QUOTE: '\'';
STAR: '*';
THIN_ARROW: '->';
TICK: '`';
WAVE: '~';

// last resort token (afaik finding this in the parser result signals incomplete grammar)
ANY: .;

// fragments
fragment Whitespace: ' ' | '\t';

fragment NewLine: '\r\n' | '\r' | '\n';

fragment IdentifierOrKeyword:
	IdentifierStartCharacter IdentifierPartCharacter*;

fragment IdentifierStartCharacter: LetterCharacter | '_';

fragment IdentifierPartCharacter: LetterCharacter | Digit | '_';

fragment LetterCharacter: [a-z];

fragment Digit: [0-9];

fragment ExponentPart: [e] ('+' | '-')? Digit Digit*;