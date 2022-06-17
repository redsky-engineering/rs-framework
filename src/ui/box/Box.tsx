import React, { CSSProperties, PropsWithChildren, MouseEvent } from 'react';
import { transformProps } from '../../utils/internal';
import { ICommon } from '../../common/Interfaces';
import classNames from 'classnames';

export interface BoxProps
	extends ICommon.SpacingProps,
		ICommon.DimensionProps,
		ICommon.PaletteProps,
		ICommon.BorderProps,
		ICommon.PositionProps,
		ICommon.FlexProps,
		ICommon.GridProps,
		ICommon.InteractProps<HTMLDivElement>,
		ICommon.HtmlElementProps {
	style?: CSSProperties;
	// Spacing props
	boxSizing?: string;

	// Display properties

	overflow?: string;
	textOverflow?: 'clip' | 'ellipsis' | string | 'initial' | 'inherit';
	visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
	whiteSpace?: string;

	// Events
	onMouseEnter?: (event: MouseEvent) => void;
	onMouseLeave?: (event: MouseEvent) => void;
}

const Box: React.FC<BoxProps> = (props) => {
	const { elementRef, className, onClick, onMouseEnter, onMouseLeave, id, style, ...other } = props;
	let cssProperties = transformProps(other);
	if (style) cssProperties = { ...cssProperties, ...style };

	return (
		<div
			id={id}
			ref={elementRef}
			className={classNames('rsBox', className)}
			style={cssProperties}
			onClick={onClick || undefined}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			{props.children}
		</div>
	);
};
export { Box };
