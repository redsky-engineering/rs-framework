import '../playground/src/themes/button.scss';
import '../playground/src/themes/checkbox.scss';

// Storybook 9/10 dropped `parameters.actions.argTypesRegex` (auto-binding `on*` to actions).
// Stories that need explicit action spies should import `fn` from `storybook/test`.
export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
