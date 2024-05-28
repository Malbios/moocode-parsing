parser grammar MoocodePartialParser;

import MoocodeParser;

options {
	tokenVocab = MoocodeLexer;
	caseInsensitive = true;
}

verb_invocation:
	COLON identifier OPEN_PARENS arguments = expressions? CLOSE_PARENS
	| COLON identifier OPEN_PARENS
	| COLON identifier
	| COLON OPEN_PARENS computed_verb_arguments = expression CLOSE_PARENS OPEN_PARENS arguments =
		expressions? CLOSE_PARENS;