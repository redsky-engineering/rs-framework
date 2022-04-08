/**** NOTE
 * To understand how we are using this file see this url: https://www.codefeetime.com/post/rollup-config-for-react-component-library-with-typescript-scss/
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: [
			// {
			// 	file: packageJson.main,
			// 	format: 'cjs',
			// 	sourcemap: true,
			// 	// preserveModules: true,
			// 	// dir: 'dist'
			// },
			{
				// file: packageJson.module,
				format: 'esm',
				sourcemap: true,
				preserveModules: true,
				preserveModulesRoot: 'src',
				dir: 'dist'
			}
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss(),
			terser()
		]
	},
	// {
	// 	input: 'dist/esm/types/index.d.ts',
	// 	output: [{ file: 'dist/index.d.ts', format: 'esm' }],
	// 	plugins: [dts()],
	//
	// 	external: [/\.(css|less|scss)$/]
	// }
];
