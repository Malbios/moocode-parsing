// Generated from c://dev//moocode-utils//moocode-parsing//src//grammar//MoocodePartialParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { Verb_invocationContext } from "./MoocodePartialParser";
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
import { Property_accessorContext } from "./MoocodePartialParser";
import { ExpressionsContext } from "./MoocodePartialParser";
import { Bf_invocationContext } from "./MoocodePartialParser";
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
import { Optional_targetContext } from "./MoocodePartialParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MoocodePartialParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MoocodePartialParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.verb_invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerb_invocation?: (ctx: Verb_invocationContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.moocode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoocode?: (ctx: MoocodeContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.empty_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_statement?: (ctx: Empty_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.if_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_expression?: (ctx: If_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.elseif_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseif_expression?: (ctx: Elseif_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.else_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_expression?: (ctx: Else_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.non_empty_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_empty_return?: (ctx: Non_empty_returnContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.empty_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_return?: (ctx: Empty_returnContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.for_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_loop_statement?: (ctx: For_loop_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.for_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_expression?: (ctx: For_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.ranged_for_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRanged_for_expression?: (ctx: Ranged_for_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.continue_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_statement?: (ctx: Continue_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.empty_continue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_continue?: (ctx: Empty_continueContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.non_empty_continue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_empty_continue?: (ctx: Non_empty_continueContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.break_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_statement?: (ctx: Break_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.empty_break`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_break?: (ctx: Empty_breakContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.non_empty_break`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_empty_break?: (ctx: Non_empty_breakContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.while_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_loop_statement?: (ctx: While_loop_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.try_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_statement?: (ctx: Try_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.try_except`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_except?: (ctx: Try_exceptContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.error_codes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_codes?: (ctx: Error_codesContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.try_finally`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_finally?: (ctx: Try_finallyContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.fork_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFork_statement?: (ctx: Fork_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.non_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_assignment?: (ctx: Non_assignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.conditional_in_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_in_expression?: (ctx: Conditional_in_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_or_expression?: (ctx: Conditional_or_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_and_expression?: (ctx: Conditional_and_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expression?: (ctx: And_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.shift_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expression?: (ctx: Shift_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.negative_unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegative_unary_expression?: (ctx: Negative_unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.negated_unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegated_unary_expression?: (ctx: Negated_unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.complement_unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplement_unary_expression?: (ctx: Complement_unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.property_accessor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty_accessor?: (ctx: Property_accessorContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.bf_invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBf_invocation?: (ctx: Bf_invocationContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression_start?: (ctx: Primary_expression_startContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.parenthesis_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesis_expression?: (ctx: Parenthesis_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.error_catcher`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_catcher?: (ctx: Error_catcherContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.map_entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap_entry?: (ctx: Map_entryContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.indexer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexer?: (ctx: IndexerContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.list_splicer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_splicer?: (ctx: List_splicerContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.object_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_reference?: (ctx: Object_referenceContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.object_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_id?: (ctx: Object_idContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.corified_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCorified_value?: (ctx: Corified_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.optional_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptional_target?: (ctx: Optional_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.bool_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_literal?: (ctx: Bool_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.integer_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_literal?: (ctx: Integer_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.float_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_literal?: (ctx: Float_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.caret`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaret?: (ctx: CaretContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.dollar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDollar?: (ctx: DollarContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.error_code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_code?: (ctx: Error_codeContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodePartialParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

