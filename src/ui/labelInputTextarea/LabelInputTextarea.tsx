import * as React from 'react';
import './LabelInputTextarea.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { Label, LabelProps } from '../label/Label';
import classNames from 'classnames';
import { InputTextarea, InputTextareaProps } from '../inputTextarea/InputTextarea';

export interface LabelInputTextareaProps
	extends ICommon.MarginProps,
		Omit<
			InputTextareaProps,
			| 'children'
			| 'm'
			| 'mt'
			| 'mr'
			| 'mb'
			| 'ml'
			| 'mx'
			| 'my'
			| 'margin'
			| 'marginTop'
			| 'marginRight'
			| 'marginBottom'
			| 'marginLeft'
			| 'marginX'
			| 'marginY'
		> {
	labelTitle: string | React.ReactNode;
	isRequired?: boolean;
}

let rsLabelInputTextareaLabelProps: Omit<LabelProps, 'children'> = {
	variant: 'body1',
	weight: 'regular',
	mb: 4
};

const LabelInputTextarea: React.FC<LabelInputTextareaProps> = (props) => {
	const {
		labelTitle,
		isRequired,
		m,
		mt,
		mr,
		mb,
		ml,
		mx,
		my,
		margin,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		marginX,
		marginY,
		...inputTextareaProps
	} = props;

	const boxMarginProps = {
		...(m && { m }),
		...(mt && { mt }),
		...(mr && { mr }),
		...(mb && { mb }),
		...(ml && { ml }),
		...(mx && { mx }),
		...(my && { my }),
		...(margin && { margin }),
		...(marginTop && { marginTop }),
		...(marginRight && { marginRight }),
		...(marginBottom && { marginBottom }),
		...(marginLeft && { marginLeft }),
		...(marginX && { marginX }),
		...(marginY && { marginY })
	};

	let { variant, weight, className, ...otherLabelProps } = rsLabelInputTextareaLabelProps;

	return (
		<Box className={'rsLabelInputTextarea'} {...boxMarginProps}>
			<Label
				className={classNames({ required: isRequired, className })}
				variant={variant}
				weight={weight}
				{...otherLabelProps}
			>
				{labelTitle}
			</Label>
			<InputTextarea {...inputTextareaProps} />
		</Box>
	);
};

export { LabelInputTextarea };

export const rsLabelInputTextarea = {
	setLabelProps: (props: Omit<LabelProps, 'children'>) => {
		rsLabelInputTextareaLabelProps = { ...rsLabelInputTextareaLabelProps, ...props };
	}
};
