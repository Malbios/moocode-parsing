// Generated from c://dev//moocode-utils//moocode-parsing//src//grammar//MoocodeParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
import { Property_accessContext } from "./MoocodeParser";
import { Verb_invocationContext } from "./MoocodeParser";
import { ExpressionsContext } from "./MoocodeParser";
import { Bf_invocationContext } from "./MoocodeParser";
import { Primary_expression_startContext } from "./MoocodeParser";
import { Parented_expressionContext } from "./MoocodeParser";
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
import { Dollar_literalContext } from "./MoocodeParser";
import { Circumflex_literalContext } from "./MoocodeParser";
import { Error_codeContext } from "./MoocodeParser";
import { IdentifierContext } from "./MoocodeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MoocodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MoocodeParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MoocodeParser.moocode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoocode?: (ctx: MoocodeContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.empty_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_statement?: (ctx: Empty_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.if_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_expression?: (ctx: If_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.elseif_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseif_expression?: (ctx: Elseif_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.else_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_expression?: (ctx: Else_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.non_empty_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_empty_return?: (ctx: Non_empty_returnContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.empty_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_return?: (ctx: Empty_returnContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.for_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_loop_statement?: (ctx: For_loop_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.continue_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_statement?: (ctx: Continue_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.empty_continue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_continue?: (ctx: Empty_continueContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.non_empty_continue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_empty_continue?: (ctx: Non_empty_continueContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.break_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_statement?: (ctx: Break_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.empty_break`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_break?: (ctx: Empty_breakContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.non_empty_break`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_empty_break?: (ctx: Non_empty_breakContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.while_loop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_loop_statement?: (ctx: While_loop_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.try_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_statement?: (ctx: Try_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.try_except`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_except?: (ctx: Try_exceptContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.try_finally`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_finally?: (ctx: Try_finallyContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.fork_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFork_statement?: (ctx: Fork_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.error_codes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_codes?: (ctx: Error_codesContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.non_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNon_assignment?: (ctx: Non_assignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.conditional_in_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_in_expression?: (ctx: Conditional_in_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_or_expression?: (ctx: Conditional_or_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_and_expression?: (ctx: Conditional_and_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expression?: (ctx: And_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.shift_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expression?: (ctx: Shift_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.negative_unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegative_unary_expression?: (ctx: Negative_unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.negated_unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegated_unary_expression?: (ctx: Negated_unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.complement_unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplement_unary_expression?: (ctx: Complement_unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.property_access`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty_access?: (ctx: Property_accessContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.verb_invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerb_invocation?: (ctx: Verb_invocationContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.bf_invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBf_invocation?: (ctx: Bf_invocationContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.primary_expression_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression_start?: (ctx: Primary_expression_startContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.parented_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParented_expression?: (ctx: Parented_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.error_catcher`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_catcher?: (ctx: Error_catcherContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.map_entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap_entry?: (ctx: Map_entryContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.indexer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexer?: (ctx: IndexerContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.list_slicer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_slicer?: (ctx: List_slicerContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.object_reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_reference?: (ctx: Object_referenceContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.object_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_id?: (ctx: Object_idContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.corified_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCorified_value?: (ctx: Corified_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.bool_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_literal?: (ctx: Bool_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.integer_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_literal?: (ctx: Integer_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.float_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_literal?: (ctx: Float_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.dollar_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDollar_literal?: (ctx: Dollar_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.circumflex_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCircumflex_literal?: (ctx: Circumflex_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.error_code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_code?: (ctx: Error_codeContext) => Result;
	/**
	 * Visit a parse tree produced by `MoocodeParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

