import * as React from 'react';
import './LabelInputTextarea.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { Label, LabelProps } from '../label/Label';
import classNames from 'classnames';
import { InputTextarea, InputTextareaProps } from '../inputTextarea/InputTextarea';
import { useContext } from 'react';
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';

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

	const { labelInputTextArea } = useContext(FrameworkContext);
	let { variant, weight, className, ...otherLabelProps } = labelInputTextArea;

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
