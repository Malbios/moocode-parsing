import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('property access tests', () => {
    test('should parse a property access', () => {
        const parser = CommonHelpers.getParser('obj.prop');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'obj');

        expect(primaryExpression?.property_accessor_list()).to.have.length(1);

        const propertyAccess = primaryExpression?.property_accessor(0);

        expect(propertyAccess?._computed_prop_arguments).not.to.exist;

        ExpectHelpers.expectIdentifier(primaryExpression?.property_accessor(0), 'prop');
    });

    test('should parse a property access with computed property name', () => {
        const parser = CommonHelpers.getParser('obj.(myvar)');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'obj');

        expect(primaryExpression?.property_accessor_list()).to.have.length(1);

        const propertyAccess = primaryExpression?.property_accessor(0);

        expect(propertyAccess?.identifier()).not.to.exist;

        ExpectHelpers.expectIdentifier(propertyAccess?._computed_prop_arguments, 'myvar');
    });
});