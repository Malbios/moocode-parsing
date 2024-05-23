parser grammar MoocodeParser;

options {
	tokenVocab = MoocodeLexer;
	caseInsensitive = true;
}

moocode: statement* EOF;

statement:
	empty_statement
	| comment
	| expression SEMICOLON
	| return_statement
	| continue_statement
	| break_statement
	| fork_statement
	| try_statement
	| if_statement
	| for_loop_statement
	| while_loop_statement;

statements: statement*;

empty_statement: SEMICOLON;

comment: STRING_LITERAL SEMICOLON;

if_statement:
	if_expression elseif_expression* else_expression? ENDIF;

if_expression:
	IF OPEN_PARENS conditions = expression CLOSE_PARENS body = statements;

elseif_expression:
	ELSEIF OPEN_PARENS conditions = expression CLOSE_PARENS body = statements;

else_expression: ELSE body = statements;

return_statement: (non_empty_return | empty_return) SEMICOLON;

non_empty_return: RETURN expression;

empty_return: RETURN;

for_loop_statement:
	FOR value = identifier (COMMA key = identifier)? IN (
		OPEN_PARENS range = expression CLOSE_PARENS
		| OPEN_BRACKET start = expression OP_RANGE end = expression CLOSE_BRACKET
	) body = statements ENDFOR;

continue_statement: (empty_continue | non_empty_continue) SEMICOLON;

empty_continue: CONTINUE;

non_empty_continue: CONTINUE identifier;

break_statement: (empty_break | non_empty_break) SEMICOLON;

empty_break: BREAK;

non_empty_break: BREAK identifier;

while_loop_statement:
	WHILE (outer_name = identifier)? OPEN_PARENS (
		inner_name = identifier EQUALS
	)? conditions = expression CLOSE_PARENS statements ENDWHILE;

try_statement:
	TRY statements (
		try_except+
		| try_finally
		| try_except+ try_finally
	) ENDTRY;

try_except:
	EXCEPT identifier OPEN_PARENS error_codes CLOSE_PARENS statements;

try_finally: FINALLY statements;

fork_statement:
	FORK (name = identifier)? OPEN_PARENS schedule = expression CLOSE_PARENS statements ENDFORK;

error_codes: any_error | (expression (COMMA expression)*);

any_error: ANY_ERROR;

expression: assignment | non_assignment;

assignment: unary_expression assignment_operator expression;

assignment_operator: EQUALS;

non_assignment: conditional_expression;

conditional_expression:
	if_conditions = conditional_in_expression (
		QUESTION_MARK true_ex = expression PIPE false_ex = expression
	)?;

conditional_in_expression:
	left = conditional_or_expression (
		IN right = conditional_or_expression
	)?;

conditional_or_expression:
	conditional_and_expression (OP_OR conditional_and_expression)*;

conditional_and_expression:
	inclusive_or_expression (OP_AND inclusive_or_expression)*;

inclusive_or_expression:
	exclusive_or_expression (BIT_OR exclusive_or_expression)*;

exclusive_or_expression:
	and_expression (BIT_XOR and_expression)*;

and_expression:
	equality_expression (BIT_AND equality_expression)*;

equality_expression:
	relational_expression ((OP_EQ | OP_NE) relational_expression)*;

relational_expression:
	shift_expression (
		(OP_LT | OP_GT | OP_LE | OP_GE) shift_expression
	)*;

shift_expression:
	additive_expression (
		(LOG_SHIFT_LEFT | LOG_SHIFT_RIGHT) additive_expression
	)*;

additive_expression:
	multiplicative_expression (
		(PLUS | MINUS) multiplicative_expression
	)*;

multiplicative_expression:
	unary_expression ((STAR | DIV | PERCENT) unary_expression)*;

unary_expression:
	primary_expression
	| negative_unary_expression
	| negated_unary_expression
	| complement_unary_expression;

negative_unary_expression: MINUS unary_expression;

negated_unary_expression: OP_NOT unary_expression;

complement_unary_expression: WAVE unary_expression;

primary_expression:
	pe = primary_expression_start (
		indexer
		| property_accessor
		| verb_invocation
		| bf_invocation
	)*;

property_accessor:
	DOT (
		identifier
		| OPEN_PARENS computed_prop_arguments = expression CLOSE_PARENS
	);

verb_invocation:
	COLON (
		identifier
		| OPEN_PARENS computed_verb_arguments = expression CLOSE_PARENS
	) OPEN_PARENS arguments = expressions CLOSE_PARENS;

expressions: expression? (COMMA expression)*;

bf_invocation: OPEN_PARENS arguments = expressions CLOSE_PARENS;

primary_expression_start:
	identifier
	| literal
	| error_code
	| object_reference
	| list_slicer
	| list
	| map
	| error_catcher
	| parented_expression;

parented_expression: OPEN_PARENS expression CLOSE_PARENS;

error_catcher:
	TICK try = expression OP_NOT error_codes ARROW on_error = expression SINGLE_QUOTE;

list: OPEN_BRACE expression? (COMMA expression)* CLOSE_BRACE;

map: OPEN_BRACKET map_entry? (COMMA map_entry)* CLOSE_BRACKET;

map_entry:
	map_key = expression THIN_ARROW map_value = expression;

indexer:
	OPEN_BRACKET (
		argument = expression
		| start = expression OP_RANGE end = expression
	) CLOSE_BRACKET;

list_slicer: AT identifier;

object_reference: object_id | corified_value;

object_id: SHARP MINUS? integer_literal;

corified_value: DOLLAR identifier;

literal:
	bool_literal
	| string_literal
	| integer_literal
	| float_literal
	| circumflex_literal
	| dollar_literal;

bool_literal: TRUE | FALSE;

string_literal: STRING_LITERAL;

integer_literal: INTEGER_LITERAL;

float_literal: FLOAT_LITERAL;

dollar_literal: DOLLAR;

circumflex_literal: CIRCUMFLEX;

error_code:
	E_NONE
	| E_TYPE
	| E_DIV
	| E_PERM
	| E_PROPNF
	| E_VERBNF
	| E_VARNF
	| E_INVIND
	| E_RECMOVE
	| E_MAXREC
	| E_RANGE
	| E_ARGS
	| E_NACC
	| E_INVARG
	| E_QUOTA
	| E_FLOAT
	| E_FILE
	| E_EXEC
	| E_INTRPT;

identifier: IDENTIFIER;