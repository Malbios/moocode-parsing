// Generated from c://dev//moocode-utils//moocode-parsing//src//grammar//MoocodePartialParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { Property_accessorContext } from "./MoocodePartialParser";
import { Verb_invocationContext } from "./MoocodePartialParser";
import { Corified_verb_invocationContext } from "./MoocodePartialParser";
import { Bf_invocationContext } from "./MoocodePartialParser";
import { MoocodeContext } from "./MoocodePartialParser";
import { StatementContext } from "./MoocodePartialParser";
import { StatementsContext } from "./MoocodePartialParser";
import { Empty_statementContext } from "./MoocodePartialParser";
import { CommentContext } from "./MoocodePartialParser";
import { If_statementContext } from "./MoocodePartialParser";
import { If_expressionContext } from "./MoocodePartialParser";
import { Elseif_expressionContext } from "./MoocodePartialParser";
import { Else_expressionContext } from "./MoocodePartialParser";
import { Return_statementContext } from "./MoocodePartialParser";
import { Non_empty_returnContext } from "./MoocodePartialParser";
import { Empty_returnContext } from "./MoocodePartialParser";
import { For_loop_statementContext } from "./MoocodePartialParser";
import { For_expressionContext } from "./MoocodePartialParser";
import { Ranged_for_expressionContext } from "./MoocodePartialParser";
import { Continue_statementContext } from "./MoocodePartialParser";
import { Empty_continueContext } from "./MoocodePartialParser";
import { Non_empty_continueContext } from "./MoocodePartialParser";
import { Break_statementContext } from "./MoocodePartialParser";
import { Empty_breakContext } from "./MoocodePartialParser";
import { Non_empty_breakContext } from "./MoocodePartialParser";
import { While_loop_statementContext } from "./MoocodePartialParser";
import { Try_statementContext } from "./MoocodePartialParser";
import { Try_exceptContext } from "./MoocodePartialParser";
import { Error_codesContext } from "./MoocodePartialParser";
import { Try_finallyContext } from "./MoocodePartialParser";
import { Fork_statementContext } from "./MoocodePartialParser";
import { ExpressionContext } from "./MoocodePartialParser";
import { AssignmentContext } from "./MoocodePartialParser";
import { Assignment_operatorContext } from "./MoocodePartialParser";
import { Non_assignmentContext } from "./MoocodePartialParser";
import { Conditional_expressionContext } from "./MoocodePartialParser";
import { Conditional_in_expressionContext } from "./MoocodePartialParser";
import { Conditional_or_expressionContext } from "./MoocodePartialParser";
import { Conditional_and_expressionContext } from "./MoocodePartialParser";
import { Inclusive_or_expressionContext } from "./MoocodePartialParser";
import { Exclusive_or_expressionContext } from "./MoocodePartialParser";
import { And_expressionContext } from "./MoocodePartialParser";
import { Equality_expressionContext } from "./MoocodePartialParser";
import { Relational_expressionContext } from "./MoocodePartialParser";
import { Shift_expressionContext } from "./MoocodePartialParser";
import { Additive_expressionContext } from "./MoocodePartialParser";
import { Multiplicative_expressionContext } from "./MoocodePartialParser";
import { Unary_expressionContext } from "./MoocodePartialParser";
import { Negative_unary_expressionContext } from "./MoocodePartialParser";
import { Negated_unary_expressionContext } from "./MoocodePartialParser";
import { Complement_unary_expressionContext } from "./MoocodePartialParser";
import { Primary_expressionContext } from "./MoocodePartialParser";
import { ExpressionsContext } from "./MoocodePartialParser";
import { Primary_expression_startContext } from "./MoocodePartialParser";
import { Parenthesis_expressionContext } from "./MoocodePartialParser";
import { Error_catcherContext } from "./MoocodePartialParser";
import { ListContext } from "./MoocodePartialParser";
import { MapContext } from "./MoocodePartialParser";
import { Map_entryContext } from "./MoocodePartialParser";
import { IndexerContext } from "./MoocodePartialParser";
import { List_splicerContext } from "./MoocodePartialParser";
import { Object_referenceContext } from "./MoocodePartialParser";
import { Object_idContext } from "./MoocodePartialParser";
import { Corified_valueContext } from "./MoocodePartialParser";
import { Optional_variableContext } from "./MoocodePartialParser";
import { LiteralContext } from "./MoocodePartialParser";
import { Bool_literalContext } from "./MoocodePartialParser";
import { String_literalContext } from "./MoocodePartialParser";
import { Integer_literalContext } from "./MoocodePartialParser";
import { Float_literalContext } from "./MoocodePartialParser";
import { CaretContext } from "./MoocodePartialParser";
import { DollarContext } from "./MoocodePartialParser";
import { Error_codeContext } from "./MoocodePartialParser";
import { IdentifierContext } from "./MoocodePartialParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MoocodePartialParser`.
 */
export default class MoocodePartialParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.property_accessor`.
	 * @param ctx the parse tree
	 */
	enterProperty_accessor?: (ctx: Property_accessorContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.property_accessor`.
	 * @param ctx the parse tree
	 */
	exitProperty_accessor?: (ctx: Property_accessorContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.verb_invocation`.
	 * @param ctx the parse tree
	 */
	enterVerb_invocation?: (ctx: Verb_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.verb_invocation`.
	 * @param ctx the parse tree
	 */
	exitVerb_invocation?: (ctx: Verb_invocationContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.corified_verb_invocation`.
	 * @param ctx the parse tree
	 */
	enterCorified_verb_invocation?: (ctx: Corified_verb_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.corified_verb_invocation`.
	 * @param ctx the parse tree
	 */
	exitCorified_verb_invocation?: (ctx: Corified_verb_invocationContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.bf_invocation`.
	 * @param ctx the parse tree
	 */
	enterBf_invocation?: (ctx: Bf_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.bf_invocation`.
	 * @param ctx the parse tree
	 */
	exitBf_invocation?: (ctx: Bf_invocationContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.moocode`.
	 * @param ctx the parse tree
	 */
	enterMoocode?: (ctx: MoocodeContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.moocode`.
	 * @param ctx the parse tree
	 */
	exitMoocode?: (ctx: MoocodeContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	enterEmpty_statement?: (ctx: Empty_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	exitEmpty_statement?: (ctx: Empty_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.if_expression`.
	 * @param ctx the parse tree
	 */
	enterIf_expression?: (ctx: If_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.if_expression`.
	 * @param ctx the parse tree
	 */
	exitIf_expression?: (ctx: If_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.elseif_expression`.
	 * @param ctx the parse tree
	 */
	enterElseif_expression?: (ctx: Elseif_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.elseif_expression`.
	 * @param ctx the parse tree
	 */
	exitElseif_expression?: (ctx: Elseif_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.else_expression`.
	 * @param ctx the parse tree
	 */
	enterElse_expression?: (ctx: Else_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.else_expression`.
	 * @param ctx the parse tree
	 */
	exitElse_expression?: (ctx: Else_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.non_empty_return`.
	 * @param ctx the parse tree
	 */
	enterNon_empty_return?: (ctx: Non_empty_returnContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.non_empty_return`.
	 * @param ctx the parse tree
	 */
	exitNon_empty_return?: (ctx: Non_empty_returnContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.empty_return`.
	 * @param ctx the parse tree
	 */
	enterEmpty_return?: (ctx: Empty_returnContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.empty_return`.
	 * @param ctx the parse tree
	 */
	exitEmpty_return?: (ctx: Empty_returnContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.for_loop_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_loop_statement?: (ctx: For_loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.for_loop_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_loop_statement?: (ctx: For_loop_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.for_expression`.
	 * @param ctx the parse tree
	 */
	enterFor_expression?: (ctx: For_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.for_expression`.
	 * @param ctx the parse tree
	 */
	exitFor_expression?: (ctx: For_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.ranged_for_expression`.
	 * @param ctx the parse tree
	 */
	enterRanged_for_expression?: (ctx: Ranged_for_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.ranged_for_expression`.
	 * @param ctx the parse tree
	 */
	exitRanged_for_expression?: (ctx: Ranged_for_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	enterContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	exitContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.empty_continue`.
	 * @param ctx the parse tree
	 */
	enterEmpty_continue?: (ctx: Empty_continueContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.empty_continue`.
	 * @param ctx the parse tree
	 */
	exitEmpty_continue?: (ctx: Empty_continueContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.non_empty_continue`.
	 * @param ctx the parse tree
	 */
	enterNon_empty_continue?: (ctx: Non_empty_continueContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.non_empty_continue`.
	 * @param ctx the parse tree
	 */
	exitNon_empty_continue?: (ctx: Non_empty_continueContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.break_statement`.
	 * @param ctx the parse tree
	 */
	enterBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.break_statement`.
	 * @param ctx the parse tree
	 */
	exitBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.empty_break`.
	 * @param ctx the parse tree
	 */
	enterEmpty_break?: (ctx: Empty_breakContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.empty_break`.
	 * @param ctx the parse tree
	 */
	exitEmpty_break?: (ctx: Empty_breakContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.non_empty_break`.
	 * @param ctx the parse tree
	 */
	enterNon_empty_break?: (ctx: Non_empty_breakContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.non_empty_break`.
	 * @param ctx the parse tree
	 */
	exitNon_empty_break?: (ctx: Non_empty_breakContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.while_loop_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_loop_statement?: (ctx: While_loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.while_loop_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_loop_statement?: (ctx: While_loop_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.try_statement`.
	 * @param ctx the parse tree
	 */
	enterTry_statement?: (ctx: Try_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.try_statement`.
	 * @param ctx the parse tree
	 */
	exitTry_statement?: (ctx: Try_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.try_except`.
	 * @param ctx the parse tree
	 */
	enterTry_except?: (ctx: Try_exceptContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.try_except`.
	 * @param ctx the parse tree
	 */
	exitTry_except?: (ctx: Try_exceptContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.error_codes`.
	 * @param ctx the parse tree
	 */
	enterError_codes?: (ctx: Error_codesContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.error_codes`.
	 * @param ctx the parse tree
	 */
	exitError_codes?: (ctx: Error_codesContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.try_finally`.
	 * @param ctx the parse tree
	 */
	enterTry_finally?: (ctx: Try_finallyContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.try_finally`.
	 * @param ctx the parse tree
	 */
	exitTry_finally?: (ctx: Try_finallyContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.fork_statement`.
	 * @param ctx the parse tree
	 */
	enterFork_statement?: (ctx: Fork_statementContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.fork_statement`.
	 * @param ctx the parse tree
	 */
	exitFork_statement?: (ctx: Fork_statementContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.non_assignment`.
	 * @param ctx the parse tree
	 */
	enterNon_assignment?: (ctx: Non_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.non_assignment`.
	 * @param ctx the parse tree
	 */
	exitNon_assignment?: (ctx: Non_assignmentContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.conditional_in_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_in_expression?: (ctx: Conditional_in_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.conditional_in_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_in_expression?: (ctx: Conditional_in_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_or_expression?: (ctx: Conditional_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_or_expression?: (ctx: Conditional_or_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_and_expression?: (ctx: Conditional_and_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_and_expression?: (ctx: Conditional_and_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.and_expression`.
	 * @param ctx the parse tree
	 */
	enterAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.and_expression`.
	 * @param ctx the parse tree
	 */
	exitAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	enterShift_expression?: (ctx: Shift_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	exitShift_expression?: (ctx: Shift_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.negative_unary_expression`.
	 * @param ctx the parse tree
	 */
	enterNegative_unary_expression?: (ctx: Negative_unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.negative_unary_expression`.
	 * @param ctx the parse tree
	 */
	exitNegative_unary_expression?: (ctx: Negative_unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.negated_unary_expression`.
	 * @param ctx the parse tree
	 */
	enterNegated_unary_expression?: (ctx: Negated_unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.negated_unary_expression`.
	 * @param ctx the parse tree
	 */
	exitNegated_unary_expression?: (ctx: Negated_unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.complement_unary_expression`.
	 * @param ctx the parse tree
	 */
	enterComplement_unary_expression?: (ctx: Complement_unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.complement_unary_expression`.
	 * @param ctx the parse tree
	 */
	exitComplement_unary_expression?: (ctx: Complement_unary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression_start?: (ctx: Primary_expression_startContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression_start?: (ctx: Primary_expression_startContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.parenthesis_expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesis_expression?: (ctx: Parenthesis_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.parenthesis_expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesis_expression?: (ctx: Parenthesis_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.error_catcher`.
	 * @param ctx the parse tree
	 */
	enterError_catcher?: (ctx: Error_catcherContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.error_catcher`.
	 * @param ctx the parse tree
	 */
	exitError_catcher?: (ctx: Error_catcherContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.map_entry`.
	 * @param ctx the parse tree
	 */
	enterMap_entry?: (ctx: Map_entryContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.map_entry`.
	 * @param ctx the parse tree
	 */
	exitMap_entry?: (ctx: Map_entryContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.indexer`.
	 * @param ctx the parse tree
	 */
	enterIndexer?: (ctx: IndexerContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.indexer`.
	 * @param ctx the parse tree
	 */
	exitIndexer?: (ctx: IndexerContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.list_splicer`.
	 * @param ctx the parse tree
	 */
	enterList_splicer?: (ctx: List_splicerContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.list_splicer`.
	 * @param ctx the parse tree
	 */
	exitList_splicer?: (ctx: List_splicerContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.object_reference`.
	 * @param ctx the parse tree
	 */
	enterObject_reference?: (ctx: Object_referenceContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.object_reference`.
	 * @param ctx the parse tree
	 */
	exitObject_reference?: (ctx: Object_referenceContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.object_id`.
	 * @param ctx the parse tree
	 */
	enterObject_id?: (ctx: Object_idContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.object_id`.
	 * @param ctx the parse tree
	 */
	exitObject_id?: (ctx: Object_idContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.corified_value`.
	 * @param ctx the parse tree
	 */
	enterCorified_value?: (ctx: Corified_valueContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.corified_value`.
	 * @param ctx the parse tree
	 */
	exitCorified_value?: (ctx: Corified_valueContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.optional_variable`.
	 * @param ctx the parse tree
	 */
	enterOptional_variable?: (ctx: Optional_variableContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.optional_variable`.
	 * @param ctx the parse tree
	 */
	exitOptional_variable?: (ctx: Optional_variableContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.bool_literal`.
	 * @param ctx the parse tree
	 */
	enterBool_literal?: (ctx: Bool_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.bool_literal`.
	 * @param ctx the parse tree
	 */
	exitBool_literal?: (ctx: Bool_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	enterInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	exitInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.float_literal`.
	 * @param ctx the parse tree
	 */
	enterFloat_literal?: (ctx: Float_literalContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.float_literal`.
	 * @param ctx the parse tree
	 */
	exitFloat_literal?: (ctx: Float_literalContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.caret`.
	 * @param ctx the parse tree
	 */
	enterCaret?: (ctx: CaretContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.caret`.
	 * @param ctx the parse tree
	 */
	exitCaret?: (ctx: CaretContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.dollar`.
	 * @param ctx the parse tree
	 */
	enterDollar?: (ctx: DollarContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.dollar`.
	 * @param ctx the parse tree
	 */
	exitDollar?: (ctx: DollarContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.error_code`.
	 * @param ctx the parse tree
	 */
	enterError_code?: (ctx: Error_codeContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.error_code`.
	 * @param ctx the parse tree
	 */
	exitError_code?: (ctx: Error_codeContext) => void;
	/**
	 * Enter a parse tree produced by `MoocodePartialParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MoocodePartialParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

