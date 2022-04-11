import React, { forwardRef } from 'react';
import './Label.scss';
import { ICommon } from '../../common/Interfaces';
import { transformProps } from '../../utils/internal';
import classNames from 'classnames';

export interface LabelProps
	extends ICommon.SpacingProps,
		ICommon.TextProps,
		ICommon.DimensionProps,
		ICommon.HtmlElementProps,
		ICommon.PaletteProps,
		Pick<ICommon.InteractProps, 'onClick'> {
	variant:
		| 'display1'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'link1'
		| 'link2'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| 'caption1'
		| 'button'
		| 'overline'
		| string;
	children: React.ReactNode;
}

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Label = forwardRef<HTMLDivElement, LabelProps>((props, ref) => {
	const { className, onClick, variant, id, ...other } = props;
	let styleValues = transformProps(other);

	let ElementType: TagType = 'p';
	if (headings.includes(props.variant)) ElementType = props.variant as TagType;

	return (
		<ElementType
			id={id}
			onClick={onClick || undefined}
			ref={ref}
			style={styleValues}
			className={classNames('rsLabel', props.className, props.variant)}
		>
			{props.children}
		</ElementType>
	);
});

export default Label;
