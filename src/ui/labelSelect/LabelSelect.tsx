import * as React from 'react';
import './LabelSelect.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { Label } from '../label/Label';
import classNames from 'classnames';
import { Select, SelectProps } from '../select/Select';
import { useContext } from 'react';
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';

export interface LabelSelectProps extends ICommon.MarginProps, SelectProps<any> {
	labelTitle: string | React.ReactNode;
	isRequired?: boolean;
}

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

	const { labelSelect } = useContext(FrameworkContext);
	let { variant, weight, className, ...otherLabelProps } = labelSelect;

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
