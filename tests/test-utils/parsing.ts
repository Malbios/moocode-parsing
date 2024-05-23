import { ParseTree, ParserRuleContext } from 'antlr4';

import {
    Additive_expressionContext,
    And_expressionContext,
    Conditional_and_expressionContext,
    Conditional_expressionContext,
    Conditional_in_expressionContext,
    Conditional_or_expressionContext,
    Empty_breakContext,
    Empty_continueContext,
    Empty_returnContext,
    Equality_expressionContext,
    Error_catcherContext,
    Exclusive_or_expressionContext,
    For_expressionContext,
    For_loop_statementContext,
    Fork_statementContext,
    If_statementContext,
    Inclusive_or_expressionContext,
    ListContext,
    List_slicerContext,
    Multiplicative_expressionContext,
    Non_empty_breakContext,
    Non_empty_continueContext,
    Non_empty_returnContext,
    Primary_expressionContext,
    Ranged_for_expressionContext,
    Relational_expressionContext,
    Shift_expressionContext,
    Try_statementContext,
    While_loop_statementContext
} from '../../src/grammar/generated/MoocodeParser';

import { getContextAsText } from '../../src/ast/common';
import moocodeParserVisitor from '../../src/grammar/generated/MoocodeParserVisitor';

class FirstContextVisitor<T extends ParserRuleContext> extends moocodeParserVisitor<T | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private expectedContextType: any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public constructor(expectedContextType: any) {
        super();

        this.expectedContextType = expectedContextType;
    }

    visit(tree: ParseTree): T | undefined {
        if (tree instanceof this.expectedContextType) {
            return tree as T;
        }

        const context = tree as ParserRuleContext;
        if (!context) {
            return undefined;
        }

        if (context.getChildCount() == 0) {
            return undefined;
        }

        for (const child of context.children ?? []) {
            const result = this.visit(child);
            if (result) {
                return result;
            }
        }

        return undefined;
    }
}

class AllContextsVisitor<T extends ParserRuleContext> extends moocodeParserVisitor<T[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private expectedContextType: any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public constructor(expectedContextType: any) {
        super();

        this.expectedContextType = expectedContextType;
    }

    visit(tree: ParseTree): T[] {
        if (tree instanceof this.expectedContextType) {
            return [tree as T];
        }

        const context = tree as ParserRuleContext;
        if (!context) {
            return [];
        }

        if (context.getChildCount() == 0) {
            return [];
        }

        const results = new Array<T>();
        for (const child of context.children ?? []) {
            const result = this.visit(child);
            if (result) {
                results.concat(result);
            }
        }

        return results;
    }
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class ParsingHelpers {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static getContext<T extends ParserRuleContext>(context: ParserRuleContext | undefined, expectedContextType: any): T | undefined {
        if (!context) {
            return undefined;
        }

        const visitor = new FirstContextVisitor<T>(expectedContextType);

        return visitor.visit(context);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static getAllContexts<T extends ParserRuleContext>(context: ParserRuleContext | undefined, expectedContextType: any): T[] {
        if (!context) {
            return [];
        }

        const visitor = new AllContextsVisitor<T>(expectedContextType);

        return visitor.visit(context);
    }

    public static getEmptyReturn(context: ParserRuleContext | undefined)
        : Empty_returnContext | undefined {
        return this.getContext<Empty_returnContext>(context, Empty_returnContext);
    }

    public static getNonEmptyReturn(context: ParserRuleContext | undefined)
        : Non_empty_returnContext | undefined {
        return this.getContext<Non_empty_returnContext>(context, Non_empty_returnContext);
    }

    public static getEmptyBreak(context: ParserRuleContext | undefined)
        : Empty_breakContext | undefined {
        return this.getContext<Empty_breakContext>(context, Empty_breakContext);
    }

    public static getNonEmptyBreak(context: ParserRuleContext | undefined)
        : Non_empty_breakContext | undefined {
        return this.getContext<Non_empty_breakContext>(context, Non_empty_breakContext);
    }

    public static getEmptyContinue(context: ParserRuleContext | undefined)
        : Empty_continueContext | undefined {
        return this.getContext<Empty_continueContext>(context, Empty_continueContext);
    }

    public static getNonEmptyContinue(context: ParserRuleContext | undefined)
        : Non_empty_continueContext | undefined {
        return this.getContext<Non_empty_continueContext>(context, Non_empty_continueContext);
    }

    public static getListSlicer(context: ParserRuleContext | undefined)
        : List_slicerContext | undefined {
        return this.getContext<List_slicerContext>(context, List_slicerContext);
    }

    public static getErrorCatcher(context: ParserRuleContext | undefined)
        : Error_catcherContext | undefined {
        return this.getContext(context, Error_catcherContext);
    }

    public static getList(context: ParserRuleContext | undefined)
        : ListContext | undefined {
        return this.getContext<ListContext>(context, ListContext);
    }

    public static getConditional(context: ParserRuleContext | undefined)
        : Conditional_expressionContext | undefined {
        return this.getContext<Conditional_expressionContext>(context, Conditional_expressionContext);
    }

    public static getConditionalIn(context: ParserRuleContext | undefined)
        : Conditional_in_expressionContext | undefined {
        return this.getContext<Conditional_in_expressionContext>(context, Conditional_in_expressionContext);
    }

    public static getConditionalOr(context: ParserRuleContext | undefined)
        : Conditional_or_expressionContext | undefined {
        return this.getContext<Conditional_or_expressionContext>(context, Conditional_or_expressionContext);
    }

    public static getConditionalAnd(context: ParserRuleContext | undefined)
        : Conditional_and_expressionContext | undefined {
        return this.getContext<Conditional_and_expressionContext>(context, Conditional_and_expressionContext);
    }

    public static getInclusiveOr(context: ParserRuleContext | undefined)
        : Inclusive_or_expressionContext | undefined {
        return this.getContext<Inclusive_or_expressionContext>(context, Inclusive_or_expressionContext);
    }

    public static getExclusiveOr(context: ParserRuleContext | undefined)
        : Exclusive_or_expressionContext | undefined {
        return this.getContext<Exclusive_or_expressionContext>(context, Exclusive_or_expressionContext);
    }

    public static getAnd(context: ParserRuleContext | undefined)
        : And_expressionContext | undefined {
        return this.getContext<And_expressionContext>(context, And_expressionContext);
    }

    public static getEquality(context: ParserRuleContext | undefined)
        : Equality_expressionContext | undefined {
        return this.getContext<Equality_expressionContext>(context, Equality_expressionContext);
    }

    public static getRelational(context: ParserRuleContext | undefined)
        : Relational_expressionContext | undefined {
        return this.getContext<Relational_expressionContext>(context, Relational_expressionContext);
    }

    public static getShift(context: ParserRuleContext | undefined)
        : Shift_expressionContext | undefined {
        return this.getContext<Shift_expressionContext>(context, Shift_expressionContext);
    }

    public static getAdditive(context: ParserRuleContext | undefined)
        : Additive_expressionContext | undefined {
        return this.getContext<Additive_expressionContext>(context, Additive_expressionContext);
    }

    public static getMultiplicative(context: ParserRuleContext | undefined)
        : Multiplicative_expressionContext | undefined {
        return this.getContext<Multiplicative_expressionContext>(context, Multiplicative_expressionContext);
    }

    public static getPrimaryExpression(context: ParserRuleContext | undefined)
        : Primary_expressionContext | undefined {
        return this.getContext<Primary_expressionContext>(context, Primary_expressionContext);
    }

    public static getIfStatement(context: ParserRuleContext | undefined)
        : If_statementContext | undefined {
        return this.getContext<If_statementContext>(context, If_statementContext);
    }

    public static getForkStatement(context: ParserRuleContext | undefined)
        : Fork_statementContext | undefined {
        return this.getContext<Fork_statementContext>(context, Fork_statementContext);
    }

    public static getTryStatement(context: ParserRuleContext | undefined)
        : Try_statementContext | undefined {
        return this.getContext<Try_statementContext>(context, Try_statementContext);
    }

    public static getWhileStatement(context: ParserRuleContext | undefined)
        : While_loop_statementContext | undefined {
        return this.getContext<While_loop_statementContext>(context, While_loop_statementContext);
    }

    public static getForStatement(context: ParserRuleContext | undefined)
        : For_loop_statementContext | undefined {
        return this.getContext<For_loop_statementContext>(context, For_loop_statementContext);
    }

    public static getForExpression(context: ParserRuleContext | undefined)
        : For_expressionContext | undefined {
        return this.getContext<For_expressionContext>(context, For_expressionContext);
    }

    public static getRangedForExpression(context: ParserRuleContext | undefined)
        : Ranged_for_expressionContext | undefined {
        return this.getContext<Ranged_for_expressionContext>(context, Ranged_for_expressionContext);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static getValue<T extends ParserRuleContext>(context: ParserRuleContext | undefined, expectedContextType: any)
        : string | undefined {
        const foundContext = this.getContext<T>(context, expectedContextType);
        if (!foundContext) {
            return undefined;
        }

        return getContextAsText(foundContext);
    }
}