import * as React from 'react';
import './LabelInputText.scss';
import { Box } from '../box/Box';
import { Label, LabelProps } from '../label/Label';
import classNames from 'classnames';
import { InputText, InputTextProps } from '../inputText/InputText';
import { ICommon } from '../../common/Interfaces';
import { useContext } from 'react';
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';

export interface LabelInputTextProps
	extends ICommon.MarginProps,
		Omit<
			InputTextProps,
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

const LabelInputText: React.FC<LabelInputTextProps> = (props) => {
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
		...inputProps
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

	const { labelInputText } = useContext(FrameworkContext);
	let { variant, weight, className, ...otherLabelProps } = labelInputText;

	return (
		<Box className={'rsLabelInputText'} {...boxMarginProps}>
			<Label
				className={classNames({ required: isRequired, className })}
				variant={variant}
				weight={weight}
				{...otherLabelProps}
			>
				{labelTitle}
			</Label>
			<InputText {...inputProps} />
		</Box>
	);
};

export { LabelInputText };
