import React from 'react';
import { IconProps } from '../ui';
import { AvatarProps } from '../ui/avatar/Avatar';

export namespace I996 {
	export interface NavigateOptions {
		view?: string | string[]; // The view in which to load the new page into. This would override the router' definition. If no view is specified in either then it loads in current view
	}

	/**
	 * Return true on accept navigation, false or an error string if failed
	 */
	export type RouteGuard = (path: string) => boolean | string;

	export interface RouteDetails<T> {
		path: T; // The path to be used when loading the page component, '*' is any page not found 404
		page: React.ReactNode;
		routeGuard?: RouteGuard;
		options?: I996.NavigateOptions; // Options for the route. Most common will be view to default load page into
	}
}

export namespace ICommon {
	export interface HtmlElementProps {
		id?: string;
		display?: 'initial' | 'block' | 'inline' | string;
		className?: string;
	}

	export interface InteractProps<T> {
		onClick?: React.MouseEventHandler | void;
		elementRef?: React.RefObject<T>;
	}

	export interface MarginProps {
		m?: string | number;
		mt?: string | number;
		mr?: string | number;
		mb?: string | number;
		ml?: string | number;
		mx?: string | number;
		my?: string | number;
		margin?: string | number;
		marginTop?: string | number;
		marginRight?: string | number;
		marginBottom?: string | number;
		marginLeft?: string | number;
		marginX?: string | number;
		marginY?: string | number;
	}

	export interface PaddingProps {
		p?: string | number;
		pt?: string | number;
		pr?: string | number;
		pb?: string | number;
		pl?: string | number;
		px?: string | number;
		py?: string | number;
		padding?: string | number;
		paddingTop?: string | number;
		paddingRight?: string | number;
		paddingBottom?: string | number;
		paddingLeft?: string | number;
		paddingX?: string | number;
		paddingY?: string | number;
	}
	export interface SpacingProps extends PaddingProps, MarginProps {}

	export interface BorderProps {
		border?: string | number;
		borderTop?: string | number;
		borderLeft?: string | number;
		borderRight?: string | number;
		borderBottom?: string | number;
		borderColor?: string;
		borderRadius?: string | number;
	}

	export interface PositionProps {
		position?: string;
		left?: string | number;
		right?: string | number;
		top?: string | number;
		bottom?: string | number;
	}

	export interface FlexProps {
		flexDirection?: string;
		flexWrap?: string;
		justifyContent?:
			| 'flex-start'
			| 'flex-end'
			| 'center'
			| 'space-between'
			| 'space-around'
			| 'space-evenly'
			| 'initial'
			| 'inherit'
			| string;
		alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit' | string;
		alignContent?: string;
		order?: string;
		flex?: string;
		flexGrow?: string | number;
		flexShrink?: string | number;
		alignSelf?: string | number;
		textAlign?: string | number;
		gap?: string | number;
	}

	export interface GridProps {
		placeContent?: string;
		gridTemplateColumns?: string;
		gridTemplateRows?: string;
		gridTemplate?: string;
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
		bgColor?: string;
	}

	export interface NewIconProps extends IconProps {
		position: 'LEFT' | 'RIGHT';
		isHidden?: boolean;
	}

	export interface NewAvatarProps extends AvatarProps {
		position: 'LEFT' | 'RIGHT';
		isHidden?: boolean;
	}

	export type AutoCompleteType =
		| 'off'
		| 'autocomplete'
		| 'on'
		| 'name'
		| 'honorific-prefix'
		| 'given-name'
		| 'additional-name'
		| 'family-name'
		| 'honorific-suffix'
		| 'nickname'
		| 'email'
		| 'username'
		| 'new-password'
		| 'current-password'
		| 'one-time-code'
		| 'organization-title'
		| 'organization'
		| 'street-address'
		| 'address-line1'
		| 'address-line2'
		| 'address-line3'
		| 'address-level4'
		| 'address-level3'
		| 'address-level2'
		| 'address-level1'
		| 'country'
		| 'country-name'
		| 'postal-code'
		| 'cc-name'
		| 'cc-given-name'
		| 'cc-additional-name'
		| 'cc-family-name'
		| 'cc-number'
		| 'cc-exp'
		| 'cc-exp-month'
		| 'cc-exp-year'
		| 'cc-csc'
		| 'cc-type'
		| 'transaction-currency'
		| 'transaction-amount'
		| 'language'
		| 'bday'
		| 'bday-day'
		| 'bday-month'
		| 'bday-year'
		| 'sex'
		| 'tel'
		| 'tel-country-code'
		| 'tel-national'
		| 'tel-area-code'
		| 'tel-local'
		| 'tel-local-prefix'
		| 'tel-local-suffix'
		| 'tel-extension'
		| 'impp'
		| 'url'
		| 'photo';
}
