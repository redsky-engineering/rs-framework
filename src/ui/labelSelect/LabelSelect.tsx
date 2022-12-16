import * as React from 'react';
import './LabelSelect.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { Label, LabelProps } from '../label/Label';
import classNames from 'classnames';
import { Select, SelectProps } from '../select/Select';

export interface LabelSelectProps extends ICommon.MarginProps, SelectProps<any> {
	labelTitle: string | React.ReactNode;
	isRequired?: boolean;
}

let rsLabelSelectLabelDefaultProps: Omit<LabelProps, 'children'> = {
	variant: 'body1',
	weight: 'regular',
	mb: 4
};

const LabelSelect: React.FC<LabelSelectProps> = (props) => {
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
		...selectProps
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

	let { variant, weight, className, ...otherLabelProps } = rsLabelSelectLabelDefaultProps;

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
			<Select {...selectProps} />
		</Box>
	);
};

export { LabelSelect };

export const rsLabelSelect = {
	setLabelProps: (props: Omit<LabelProps, 'children'>) => {
		rsLabelSelectLabelDefaultProps = { ...rsLabelSelectLabelDefaultProps, ...props };
	}
};
