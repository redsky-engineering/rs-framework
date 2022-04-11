import React from 'react';

export namespace ICommon {
	export interface HtmlElementProps {
		id?: string;
		display?: 'initial' | 'block' | 'inline' | string;
		className?: string;
	}

	export interface InteractProps {
		onClick?: React.MouseEventHandler<any> | void;
	}

	export interface SpacingProps {
		m?: string | number;
		mt?: string | number;
		mr?: string | number;
		mb?: string | number;
		ml?: string | number;
		mx?: string | number;
		my?: string | number;
		p?: string | number;
		pt?: string | number;
		pr?: string | number;
		pb?: string | number;
		pl?: string | number;
		px?: string | number;
		py?: string | number;
		margin?: string | number;
		marginTop?: string | number;
		marginRight?: string | number;
		marginBottom?: string | number;
		marginLeft?: string | number;
		marginX?: string | number;
		marginY?: string | number;
		padding?: string | number;
		paddingTop?: string | number;
		paddingRight?: string | number;
		paddingBottom?: string | number;
		paddingLeft?: string | number;
		paddingX?: string | number;
		paddingY?: string | number;
	}

	export interface TextProps {
		overflow?: string;
		textOverflow?: 'clip' | 'ellipsis' | string | 'initial' | 'inherit';
		textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit' | string;
		visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
		textTransform?:
			| 'none'
			| 'capitalize'
			| 'uppercase'
			| 'lowercase'
			| 'full-width'
			| 'full-size-kana'
			| 'inherit'
			| 'initial'
			| 'revert'
			| 'unset';
		whiteSpace?: string;
	}

	export interface DimensionProps {
		width?: string | number;
		height?: string | number;
		maxWidth?: string | number;
		maxHeight?: string | number;
		minWidth?: string | number;
		minHeight?: string | number;
	}

	export interface PaletteProps {
		color?: string;
		bgcolor?: string;
	}
}
