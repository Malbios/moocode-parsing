import { reporters, Runner, Test } from 'mocha';

const { EVENT_RUN_BEGIN, EVENT_RUN_END, EVENT_TEST_FAIL, EVENT_TEST_PASS, EVENT_SUITE_BEGIN, EVENT_SUITE_END } = Runner.constants;

// This reporter outputs test results, indenting two spaces per suite
class CustomReporter extends reporters.Base {
	private indents = 0;

	public constructor(runner: Runner) {
		super(runner);
		const stats = runner.stats;

		runner
			.once(EVENT_RUN_BEGIN, () => {
				console.info('start');
			})
			.on(EVENT_SUITE_BEGIN, () => {
				this.increaseIndent();
			})
			.on(EVENT_SUITE_END, () => {
				this.decreaseIndent();
			})
			.on(EVENT_TEST_PASS, (test: Test) => {
				console.log();
				console.log(`${this.indent()}PASSED: ${test.fullTitle()}`);
			})
			.on(EVENT_TEST_FAIL, (test: Test, error: Error) => {
				console.log();
				console.log(`${this.indent()}FAILED: ${test.fullTitle()}`);
				console.log(`${this.indent()}Error: ${error.message}`);
				if (error.stack) {
					const stack = error.stack.split('\n');
					for (const line of stack.slice(2, Math.min(stack.length, 7))) {
						console.log(line);
					}
				}
			})
			.once(EVENT_RUN_END, () => {
				console.log();
				console.log(`end: ${stats?.passes}/${(stats?.passes ?? 0) + (stats?.failures ?? 0)} ok`);
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