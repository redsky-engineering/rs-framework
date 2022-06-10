/**** NOTE
 * To understand how we are using this file see this url: https://www.codefeetime.com/post/rollup-config-for-react-component-library-with-typescript-scss/
 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
// import { terser } from 'rollup-plugin-terser';

export default {
	input: './src/index.ts',
	output: {
		dir: 'dist',
		format: 'esm',
		preserveModules: true,
		preserveModulesRoot: 'src',
		sourcemap: 'inline'
	},
	plugins: [
		peerDeps(),
		resolve(),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.json',
			declaration: true,
			declarationDir: 'dist'
		}),
		postcss({
			minimize: true,
			extract: true
		}),
		// terser(),
		visualizer({
			filename: 'bundle-analysis.html',
			open: true
		})
	],
	external: ['classnames']
};
