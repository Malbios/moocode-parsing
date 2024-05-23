import { reporters, Runner, Test } from 'mocha';

// This reporter outputs test results, indenting two spaces per suite
class CustomReporter extends reporters.Base {
	private indents = 0;

	public constructor(runner: Runner) {
		super(runner);
		const stats = runner.stats;

		const pass_color_on = '\x1b[32m';
		const fail_color_on = '\x1b[31m';
		const color_off = '\x1b[0m';

		runner
			// .once(Runner.constants.EVENT_RUN_BEGIN, () => {
			// 	console.info('start');
			// })
			.on(Runner.constants.EVENT_SUITE_BEGIN, () => {
				this.increaseIndent();
			})
			.on(Runner.constants.EVENT_SUITE_END, () => {
				this.decreaseIndent();
			})
			.on(Runner.constants.EVENT_TEST_PASS, (test: Test) => {

				console.log();
				console.log(`${pass_color_on}${this.indent()}PASSED: ${test.fullTitle()}${color_off}`);
			})
			.on(Runner.constants.EVENT_TEST_FAIL, (test: Test, error: Error) => {
				console.log();
				console.log(`${fail_color_on}${this.indent()}FAILED: ${test.fullTitle()}${color_off}`);
				console.log(`${this.indent()}Error: ${error.message}`);
				if (error.stack) {
					let stack = error.stack.split('\n');
					while (!stack.at(0)?.trimStart().startsWith('at')) {
						stack = stack.slice(1);
					}
					for (const line of stack.slice(0, Math.min(stack.length, 5))) {
						console.log(line);
					}
				}
			})
			.once(Runner.constants.EVENT_RUN_END, () => {
				const passes = stats?.passes ?? 0;
				const failures = stats?.failures ?? 0;
				const all = passes + failures;

				const message = `${passes < all ? fail_color_on : pass_color_on}end: ${passes}/${all} tests passed${color_off}`;

				console.log();
				console.log(message);
			});
	}

	private indent() {
		return Array(this.indents).join('  ');
	}

	private increaseIndent() {
		this.indents++;
	}

	private decreaseIndent() {
		this.indents--;
	}
}

module.exports = CustomReporter