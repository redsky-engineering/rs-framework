import { CSSProperties, PropsWithChildren } from 'react';
import * as React from 'react';

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

export const spacingKeys = [
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
		} else if (i === 'bgColor') {
			filtered['backgroundColor'] = props[i];
		} else {
			filtered[i] = props[i];
		}
	}

	return filtered;
}

/**
 * This function will add ripple effects to where the mouse is clicked inside an element.
 * You will need the following css on the component:
 *
 * .parentComponent{
 * 		position: relative;
 *   > .ripple {
 * 		position: absolute;
 * 		background: #fff;
 * 		transform: translate(-50%, -50%);
 * 		pointer-events: none;
 * 		border-radius: 50%;
 * 		animation: ripples 0.6s linear infinite;
 * 	}
 *  @keyframes ripples {
 * 		0% {
 * 			width: 0;
 * 			height: 0;
 * 			opacity: 0.5;
 * 		}
 * 		100% {
 * 			width: 500px;
 * 			height: 500px;
 * 			opacity: 0;
 * 		}
 * 	}
 * }
 * @param event
 */
export function rippleEffect(event: React.MouseEvent<HTMLElement>) {
	let targetBoundingRect = event.currentTarget.getBoundingClientRect();
	let x = event.clientX - targetBoundingRect.x;
	let y = event.clientY - targetBoundingRect.y;
	let ripples = document.createElement('span');
	ripples.style.left = `${x}px`;
	ripples.style.top = `${y}px`;
	ripples.classList.add('ripple');
	event.currentTarget.appendChild(ripples);
	setTimeout(() => {
		ripples.remove();
	}, 600);
}
