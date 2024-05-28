import { suite, test } from 'mocha';
import { parseExpression } from '../../src';


suite('debugging tests', () => {
    test('should do x', () => {
        const code = 'x:y(';
        const result = parseExpression(code);

        console.log(result);
    });
});