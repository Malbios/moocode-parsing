import { suite, test } from 'mocha';
import { parseExpression } from '../../src';


suite('debugging tests', () => {
    test('should do x', () => {
        const code = 'retval = $login:(args[1])(@listdelete(args, 1))';
        const result = parseExpression(code);

        console.log(result);
    });
});