// Generated from c://dev//moocode-utils//moocode-parsing//src//grammar//MoocodeParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { MoocodeContext } from "./MoocodeParser";
import { StatementContext } from "./MoocodeParser";
import { StatementsContext } from "./MoocodeParser";
import { Empty_statementContext } from "./MoocodeParser";
import { CommentContext } from "./MoocodeParser";
import { If_statementContext } from "./MoocodeParser";
import { If_expressionContext } from "./MoocodeParser";
import { Elseif_expressionContext } from "./MoocodeParser";
import { Else_expressionContext } from "./MoocodeParser";
import { Return_statementContext } from "./MoocodeParser";
import { Non_empty_returnContext } from "./MoocodeParser";
import { Empty_returnContext } from "./MoocodeParser";
import { For_loop_statementContext } from "./MoocodeParser";
import { For_expressionContext } from "./MoocodeParser";
import { Ranged_for_expressionContext } from "./MoocodeParser";
import { Continue_statementContext } from "./MoocodeParser";
import { Empty_continueContext } from "./MoocodeParser";
import { Non_empty_continueContext } from "./MoocodeParser";
import { Break_statementContext } from "./MoocodeParser";
import { Empty_breakContext } from "./MoocodeParser";
import { Non_empty_breakContext } from "./MoocodeParser";
import { While_loop_statementContext } from "./MoocodeParser";
import { Try_statementContext } from "./MoocodeParser";
import { Try_exceptContext } from "./MoocodeParser";
import { Try_finallyContext } from "./MoocodeParser";
import { Fork_statementContext } from "./MoocodeParser";
import { Error_codesContext } from "./MoocodeParser";
import { Any_errorContext } from "./MoocodeParser";
import { ExpressionContext } from "./MoocodeParser";
import { AssignmentContext } from "./MoocodeParser";
import { Assignment_operatorContext } from "./MoocodeParser";
import { Non_assignmentContext } from "./MoocodeParser";
import { Conditional_expressionContext } from "./MoocodeParser";
import { Conditional_in_expressionContext } from "./MoocodeParser";
import { Conditional_or_expressionContext } from "./MoocodeParser";
import { Conditional_and_expressionContext } from "./MoocodeParser";
import { Inclusive_or_expressionContext } from "./MoocodeParser";
import { Exclusive_or_expressionContext } from "./MoocodeParser";
import { And_expressionContext } from "./MoocodeParser";
import { Equality_expressionContext } from "./MoocodeParser";
import { Relational_expressionContext } from "./MoocodeParser";
import { Shift_expressionContext } from "./MoocodeParser";
import { Additive_expressionContext } from "./MoocodeParser";
import { Multiplicative_expressionContext } from "./MoocodeParser";
import { Unary_expressionContext } from "./MoocodeParser";
import { Negative_unary_expressionContext } from "./MoocodeParser";
import { Negated_unary_expressionContext } from "./MoocodeParser";
import { Complement_unary_expressionContext } from "./MoocodeParser";
import { Primary_expressionContext } from "./MoocodeParser";
import { Property_accessorContext } from "./MoocodeParser";
import { Verb_invocationContext } from "./MoocodeParser";
import { ExpressionsContext } from "./MoocodeParser";
import { Bf_invocationContext } from "./MoocodeParser";
import { Primary_expression_startContext } from "./MoocodeParser";
import { Parenthesis_expressionContext } from "./MoocodeParser";
import { Error_catcherContext } from "./MoocodeParser";
import { ListContext } from "./MoocodeParser";
import { MapContext } from "./MoocodeParser";
import { Map_entryContext } from "./MoocodeParser";
import { IndexerContext } from "./MoocodeParser";
import { List_slicerContext } from "./MoocodeParser";
import { Object_referenceContext } from "./MoocodeParser";
import { Object_idContext } from "./MoocodeParser";
import { Corified_valueContext } from "./MoocodeParser";
import { LiteralContext } from "./MoocodeParser";
import { Bool_literalContext } from "./MoocodeParser";
import { String_literalContext } from "./MoocodeParser";
import { Integer_literalContext } from "./MoocodeParser";
import { Float_literalContext } from "./MoocodeParser";
import { CaretContext } from "./MoocodeParser";
import { DollarContext } from "./MoocodeParser";
import { Error_codeContext } from "./MoocodeParser";
import { IdentifierContext } from "./MoocodeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MoocodeParser`.
 */
export default class MoocodeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MoocodeParser.moocode`.
	 * @param ctx the parse tree
	 */
	enterMoocode?: (ctx: MoocodeContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.moocode`.
	 * @param ctx the parse tree
	 */
	exitMoocode?: (ctx: MoocodeContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	enterEmpty_statement?: (ctx: Empty_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	exitEmpty_statement?: (ctx: Empty_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.if_expression`.
	 * @param ctx the parse tree
	 */
	enterIf_expression?: (ctx: If_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.if_expression`.
	 * @param ctx the parse tree
	 */
	exitIf_expression?: (ctx: If_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.elseif_expression`.
	 * @param ctx the parse tree
	 */
	enterElseif_expression?: (ctx: Elseif_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.elseif_expression`.
	 * @param ctx the parse tree
	 */
	exitElseif_expression?: (ctx: Elseif_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.else_expression`.
	 * @param ctx the parse tree
	 */
	enterElse_expression?: (ctx: Else_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.else_expression`.
	 * @param ctx the parse tree
	 */
	exitElse_expression?: (ctx: Else_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.non_empty_return`.
	 * @param ctx the parse tree
	 */
	enterNon_empty_return?: (ctx: Non_empty_returnContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.non_empty_return`.
	 * @param ctx the parse tree
	 */
	exitNon_empty_return?: (ctx: Non_empty_returnContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.empty_return`.
	 * @param ctx the parse tree
	 */
	enterEmpty_return?: (ctx: Empty_returnContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.empty_return`.
	 * @param ctx the parse tree
	 */
	exitEmpty_return?: (ctx: Empty_returnContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.for_loop_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_loop_statement?: (ctx: For_loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.for_loop_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_loop_statement?: (ctx: For_loop_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.for_expression`.
	 * @param ctx the parse tree
	 */
	enterFor_expression?: (ctx: For_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.for_expression`.
	 * @param ctx the parse tree
	 */
	exitFor_expression?: (ctx: For_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.ranged_for_expression`.
	 * @param ctx the parse tree
	 */
	enterRanged_for_expression?: (ctx: Ranged_for_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.ranged_for_expression`.
	 * @param ctx the parse tree
	 */
	exitRanged_for_expression?: (ctx: Ranged_for_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	enterContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	exitContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.empty_continue`.
	 * @param ctx the parse tree
	 */
	enterEmpty_continue?: (ctx: Empty_continueContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.empty_continue`.
	 * @param ctx the parse tree
	 */
	exitEmpty_continue?: (ctx: Empty_continueContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.non_empty_continue`.
	 * @param ctx the parse tree
	 */
	enterNon_empty_continue?: (ctx: Non_empty_continueContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.non_empty_continue`.
	 * @param ctx the parse tree
	 */
	exitNon_empty_continue?: (ctx: Non_empty_continueContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.break_statement`.
	 * @param ctx the parse tree
	 */
	enterBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.break_statement`.
	 * @param ctx the parse tree
	 */
	exitBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.empty_break`.
	 * @param ctx the parse tree
	 */
	enterEmpty_break?: (ctx: Empty_breakContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.empty_break`.
	 * @param ctx the parse tree
	 */
	exitEmpty_break?: (ctx: Empty_breakContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.non_empty_break`.
	 * @param ctx the parse tree
	 */
	enterNon_empty_break?: (ctx: Non_empty_breakContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.non_empty_break`.
	 * @param ctx the parse tree
	 */
	exitNon_empty_break?: (ctx: Non_empty_breakContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.while_loop_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_loop_statement?: (ctx: While_loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.while_loop_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_loop_statement?: (ctx: While_loop_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.try_statement`.
	 * @param ctx the parse tree
	 */
	enterTry_statement?: (ctx: Try_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.try_statement`.
	 * @param ctx the parse tree
	 */
	exitTry_statement?: (ctx: Try_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.try_except`.
	 * @param ctx the parse tree
	 */
	enterTry_except?: (ctx: Try_exceptContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.try_except`.
	 * @param ctx the parse tree
	 */
	exitTry_except?: (ctx: Try_exceptContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.try_finally`.
	 * @param ctx the parse tree
	 */
	enterTry_finally?: (ctx: Try_finallyContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.try_finally`.
	 * @param ctx the parse tree
	 */
	exitTry_finally?: (ctx: Try_finallyContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.fork_statement`.
	 * @param ctx the parse tree
	 */
	enterFork_statement?: (ctx: Fork_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.fork_statement`.
	 * @param ctx the parse tree
	 */
	exitFork_statement?: (ctx: Fork_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.error_codes`.
	 * @param ctx the parse tree
	 */
	enterError_codes?: (ctx: Error_codesContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.error_codes`.
	 * @param ctx the parse tree
	 */
	exitError_codes?: (ctx: Error_codesContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.any_error`.
	 * @param ctx the parse tree
	 */
	enterAny_error?: (ctx: Any_errorContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.any_error`.
	 * @param ctx the parse tree
	 */
	exitAny_error?: (ctx: Any_errorContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.non_assignment`.
	 * @param ctx the parse tree
	 */
	enterNon_assignment?: (ctx: Non_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.non_assignment`.
	 * @param ctx the parse tree
	 */
	exitNon_assignment?: (ctx: Non_assignmentContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.conditional_in_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_in_expression?: (ctx: Conditional_in_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.conditional_in_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_in_expression?: (ctx: Conditional_in_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_or_expression?: (ctx: Conditional_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_or_expression?: (ctx: Conditional_or_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_and_expression?: (ctx: Conditional_and_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_and_expression?: (ctx: Conditional_and_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.and_expression`.
	 * @param ctx the parse tree
	 */
	enterAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.and_expression`.
	 * @param ctx the parse tree
	 */
	exitAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	enterShift_expression?: (ctx: Shift_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	exitShift_expression?: (ctx: Shift_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.negative_unary_expression`.
	 * @param ctx the parse tree
	 */
	enterNegative_unary_expression?: (ctx: Negative_unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.negative_unary_expression`.
	 * @param ctx the parse tree
	 */
	exitNegative_unary_expression?: (ctx: Negative_unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.negated_unary_expression`.
	 * @param ctx the parse tree
	 */
	enterNegated_unary_expression?: (ctx: Negated_unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.negated_unary_expression`.
	 * @param ctx the parse tree
	 */
	exitNegated_unary_expression?: (ctx: Negated_unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.complement_unary_expression`.
	 * @param ctx the parse tree
	 */
	enterComplement_unary_expression?: (ctx: Complement_unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.complement_unary_expression`.
	 * @param ctx the parse tree
	 */
	exitComplement_unary_expression?: (ctx: Complement_unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.property_accessor`.
	 * @param ctx the parse tree
	 */
	enterProperty_accessor?: (ctx: Property_accessorContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.property_accessor`.
	 * @param ctx the parse tree
	 */
	exitProperty_accessor?: (ctx: Property_accessorContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.verb_invocation`.
	 * @param ctx the parse tree
	 */
	enterVerb_invocation?: (ctx: Verb_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.verb_invocation`.
	 * @param ctx the parse tree
	 */
	exitVerb_invocation?: (ctx: Verb_invocationContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.bf_invocation`.
	 * @param ctx the parse tree
	 */
	enterBf_invocation?: (ctx: Bf_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.bf_invocation`.
	 * @param ctx the parse tree
	 */
	exitBf_invocation?: (ctx: Bf_invocationContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression_start?: (ctx: Primary_expression_startContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression_start?: (ctx: Primary_expression_startContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.parenthesis_expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesis_expression?: (ctx: Parenthesis_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.parenthesis_expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesis_expression?: (ctx: Parenthesis_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.error_catcher`.
	 * @param ctx the parse tree
	 */
	enterError_catcher?: (ctx: Error_catcherContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.error_catcher`.
	 * @param ctx the parse tree
	 */
	exitError_catcher?: (ctx: Error_catcherContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.map_entry`.
	 * @param ctx the parse tree
	 */
	enterMap_entry?: (ctx: Map_entryContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.map_entry`.
	 * @param ctx the parse tree
	 */
	exitMap_entry?: (ctx: Map_entryContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.indexer`.
	 * @param ctx the parse tree
	 */
	enterIndexer?: (ctx: IndexerContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.indexer`.
	 * @param ctx the parse tree
	 */
	exitIndexer?: (ctx: IndexerContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.list_slicer`.
	 * @param ctx the parse tree
	 */
	enterList_slicer?: (ctx: List_slicerContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.list_slicer`.
	 * @param ctx the parse tree
	 */
	exitList_slicer?: (ctx: List_slicerContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.object_reference`.
	 * @param ctx the parse tree
	 */
	enterObject_reference?: (ctx: Object_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.object_reference`.
	 * @param ctx the parse tree
	 */
	exitObject_reference?: (ctx: Object_referenceContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.object_id`.
	 * @param ctx the parse tree
	 */
	enterObject_id?: (ctx: Object_idContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.object_id`.
	 * @param ctx the parse tree
	 */
	exitObject_id?: (ctx: Object_idContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.corified_value`.
	 * @param ctx the parse tree
	 */
	enterCorified_value?: (ctx: Corified_valueContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.corified_value`.
	 * @param ctx the parse tree
	 */
	exitCorified_value?: (ctx: Corified_valueContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.bool_literal`.
	 * @param ctx the parse tree
	 */
	enterBool_literal?: (ctx: Bool_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.bool_literal`.
	 * @param ctx the parse tree
	 */
	exitBool_literal?: (ctx: Bool_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	enterInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	exitInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.float_literal`.
	 * @param ctx the parse tree
	 */
	enterFloat_literal?: (ctx: Float_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.float_literal`.
	 * @param ctx the parse tree
	 */
	exitFloat_literal?: (ctx: Float_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.caret`.
	 * @param ctx the parse tree
	 */
	enterCaret?: (ctx: CaretContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.caret`.
	 * @param ctx the parse tree
	 */
	exitCaret?: (ctx: CaretContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.dollar`.
	 * @param ctx the parse tree
	 */
	enterDollar?: (ctx: DollarContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.dollar`.
	 * @param ctx the parse tree
	 */
	exitDollar?: (ctx: DollarContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.error_code`.
	 * @param ctx the parse tree
	 */
	enterError_code?: (ctx: Error_codeContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.error_code`.
	 * @param ctx the parse tree
	 */
	exitError_code?: (ctx: Error_codeContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodeParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodeParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

