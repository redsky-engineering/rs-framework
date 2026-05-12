// Storybook 10 (webpack5 builder) config.
// - `.stories.mdx` is gone in Storybook 7+; plain `.mdx` lives alongside CSF3 `.stories.tsx`.
// - Most former `essentials` addons (actions, viewport, controls, …) are built into core.
// - `@storybook/addon-styling-webpack`/`@storybook/preset-scss` aren't used here — we configure
//   sass via `webpackFinal` so we don't need an extra dev dep.
module.exports = {
	// NOTE: the legacy `*.stories.mdx` files (SB6 format) are intentionally NOT matched here —
	// they'll be migrated to plain `*.mdx` + CSF3 in a follow-up. Add `'../src/**/*.mdx'` back
	// once that migration lands.
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-webpack5-compiler-swc'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	docs: {},
	webpackFinal: async (config) => {
		config.module = config.module || { rules: [] };
		config.module.rules = config.module.rules || [];
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
		});
		return config;
	}
};
