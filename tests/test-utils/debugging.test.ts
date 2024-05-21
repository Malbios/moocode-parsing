import { suite, test } from 'mocha';

import { generateAst } from '../../src';

suite('debugging tests', () => {
    test('should do x', () => {
        const code = `
$a[b].c:d();
$e[f].g[h]:i();
`;
        const result = generateAst(code);

        console.log();
    });
});