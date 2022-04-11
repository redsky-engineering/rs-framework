import { CSSProperties, PropsWithChildren } from 'react';

const properties = {
	m: 'margin',
	p: 'padding'
};
const directions = {
	t: 'Top',
	r: 'Right',
	b: 'Bottom',
	l: 'Left',
	x: ['Left', 'Right'],
	y: ['Top', 'Bottom']
};
const aliases = {
	marginX: 'mx',
	marginY: 'my',
	paddingX: 'px',
	paddingY: 'py'
};
export const getSpacingProperties = (prop: string) => {
	// It's not a shorthand notation.
	if (prop.length > 2) {
		// @ts-ignore
		if (aliases[prop]) {
			// @ts-ignore
			prop = aliases[prop];
		} else {
			return [prop];
		}
	}
	const [a, b] = prop.split('');
	// @ts-ignore
	const property = properties[a];
	// @ts-ignore
	const direction = directions[b] || '';
	return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
};

const spacingKeys = [
	'm',
	'mt',
	'mr',
	'mb',
	'ml',
	'mx',
	'my',
	'p',
	'pt',
	'pr',
	'pb',
	'pl',
	'px',
	'py',
	'margin',
	'marginTop',
	'marginRight',
	'marginBottom',
	'marginLeft',
	'marginX',
	'marginY',
	'padding',
	'paddingTop',
	'paddingRight',
	'paddingBottom',
	'paddingLeft',
	'paddingX',
	'paddingY'
];

/**
 * This function converts potential input props to standard CSS properties, for example: mt = marginTop
 * @param props
 * @returns Appropriate CSS properties for style prop on react components
 */
export function transformProps(props: PropsWithChildren<any>): CSSProperties {
	let filtered: any = {};
	let i: keyof typeof props;
	for (i in props) {
		if (i === 'm') {
			filtered['margin'] = props[i];
		} else if (i === 'p') {
			filtered['padding'] = props[i];
		} else if (spacingKeys.includes(i)) {
			let stylePropNames = getSpacingProperties(i);
			for (let propName of stylePropNames) {
				filtered[propName] = props[i];
			}
		} else if (i === 'bgcolor') {
			filtered['backgroundColor'] = props[i];
		} else {
			filtered[i] = props[i];
		}
	}

	return filtered;
}
