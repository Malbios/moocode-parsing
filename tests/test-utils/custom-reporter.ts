import { reporters, Runner, Test } from 'mocha';

const error_stack_max = 5;

const green_color = '\x1b[32m';
const red_color = '\x1b[31m';
const color_reset = '\x1b[0m';

function getDuration(speed?: string, duration?: number): string {
	if (speed === 'fast' || !duration) {
		return '';
	}

	return ` (${red_color}${duration}ms${color_reset})`;
}

class CustomReporter extends reporters.Base {
	private indents = 0;

	public constructor(runner: Runner) {
		super(runner);
		const stats = runner.stats;

		runner
			.once(Runner.constants.EVENT_RUN_BEGIN, () => {
				console.log();
			})
			.on(Runner.constants.EVENT_SUITE_BEGIN, () => {
				this.increaseIndent();
			})
			.on(Runner.constants.EVENT_SUITE_END, () => {
				this.decreaseIndent();
			})
			.on(Runner.constants.EVENT_TEST_PASS, (test: Test) => {
				console.log();
				console.log(`${green_color}${this.indent()}PASSED: ${test.fullTitle()}${color_reset}${getDuration(test.speed, test.duration)}`);
			})
			.on(Runner.constants.EVENT_TEST_FAIL, (test: Test, error: Error) => {
				console.log();
				console.log(`${red_color}${this.indent()}FAILED: ${test.fullTitle()}${color_reset}${getDuration(test.speed, test.duration)}`);
				console.log(`${this.indent()}Error: ${error.message}`);
				if (error.stack) {
					let stack = error.stack.split('\n');
					while (!stack.at(0)?.trimStart().startsWith('at')) {
						stack = stack.slice(1);
					}
					for (const line of stack.slice(0, Math.min(stack.length, error_stack_max))) {
						console.log(`${this.indent()}${line}`);
					}
				}
			})
			.once(Runner.constants.EVENT_RUN_END, () => {
				const passes = stats?.passes ?? 0;
				const failures = stats?.failures ?? 0;
				const all = passes + failures;

				const message = `${passes < all ? red_color : green_color}end: ${passes}/${all} tests passed${color_reset}`;

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