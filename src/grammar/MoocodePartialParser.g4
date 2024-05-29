parser grammar MoocodePartialParser;

import MoocodeParser;

options {
	tokenVocab = MoocodeLexer;
	caseInsensitive = true;
}

property_accessor:
	DOT (
		(
			OPEN_PARENS computed_prop_arguments = expression CLOSE_PARENS
			| OPEN_PARENS computed_prop_arguments = expression?
		)
		| (identifier)
	)?;

verb_invocation:
	COLON (
		(
			OPEN_PARENS computed_verb_arguments = expression CLOSE_PARENS OPEN_PARENS arguments =
				expressions? CLOSE_PARENS
			| OPEN_PARENS computed_verb_arguments = expression CLOSE_PARENS OPEN_PARENS arguments =
				expressions?
			| OPEN_PARENS computed_verb_arguments = expression CLOSE_PARENS OPEN_PARENS
			| OPEN_PARENS computed_verb_arguments = expression CLOSE_PARENS
			| OPEN_PARENS computed_verb_arguments = expression?
		)
		| (
			identifier OPEN_PARENS arguments = expressions? CLOSE_PARENS
			| identifier OPEN_PARENS arguments = expressions?
			| identifier
		)
	)?;

corified_verb_invocation:
	corified_value (
		OPEN_PARENS arguments = expressions? CLOSE_PARENS
		| OPEN_PARENS arguments = expressions?
	);

bf_invocation:
	identifier (
		OPEN_PARENS arguments = expressions? CLOSE_PARENS
		| OPEN_PARENS arguments = expressions?
	);