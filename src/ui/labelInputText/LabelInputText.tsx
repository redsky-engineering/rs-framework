import * as React from 'react';
import './LabelInputText.scss';
import { Box } from '../box/Box';
import { Label, LabelProps } from '../label/Label';
import classNames from 'classnames';
import { InputText, InputTextProps } from '../inputText/InputText';
import { ICommon } from '../../common/Interfaces';

interface LabelInputTextProps extends ICommon.MarginProps {
	title: string | React.ReactNode;
	isRequired?: boolean;
	// input: Omit<
	// 	InputTextProps,
	// 	| 'm'
	// 	| 'mt'
	// 	| 'mr'
	// 	| 'mb'
	// 	| 'ml'
	// 	| 'mx'
	// 	| 'my'
	// 	| 'margin'
	// 	| 'marginTop'
	// 	| 'marginRight'
	// 	| 'marginBottom'
	// 	| 'marginLeft'
	// 	| 'marginX'
	// 	| 'marginY'
	// >;
	input: InputTextProps;
}

let rsLabelInputTextLabelVariants: Omit<LabelProps, 'children'> = {
	variant: 'body1',
	weight: 'regular'
};

const LabelInputText: React.FC<LabelInputTextProps> = (props) => {
	const {
		title,
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
		input
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

	let { variant, weight, ...otherLabelProps } = rsLabelInputTextLabelVariants;

	return (
		<Box className={'rsLabelInputText'} {...boxMarginProps}>
			<Label
				className={classNames({ required: isRequired })}
				variant={variant}
				weight={weight}
				{...otherLabelProps}
			>
				{title}
			</Label>
			<InputText {...input} />
		</Box>
	);
};

export default LabelInputText;

export const rsLabelInputText = {
	setLabelProps: (props: Omit<LabelProps, 'children'>) => {
		rsLabelInputTextLabelVariants = {
			...props
		};
	}
};
