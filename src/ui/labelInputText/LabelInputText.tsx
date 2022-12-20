import * as React from 'react';
import './LabelInputText.scss';
import { Box } from '../box/Box';
import { Label, LabelProps } from '../label/Label';
import classNames from 'classnames';
import { InputText, InputTextProps } from '../inputText/InputText';
import { ICommon } from '../../common/Interfaces';
import { useContext } from 'react';
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';
import { extractPropsFromKeys } from '../../utils/internal';

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
}

const LabelInputText: React.FC<LabelInputTextProps> = (props) => {
	const { labelTitle, elementRef, ...inputProps } = props;

	const boxMarginProps = extractPropsFromKeys<ICommon.MarginProps>(props, ICommon.MarginPropsKeys);
	const { className, ...htmlProps } = extractPropsFromKeys<ICommon.HtmlElementProps>(
		props,
		ICommon.HtmlElementPropsKeys
	);

	const { labelInputText } = useContext(FrameworkContext);
	let { variant, weight, ...otherLabelProps } = labelInputText;

	return (
		<Box className={classNames('rsLabelInputText', className)} {...boxMarginProps} {...htmlProps}>
			<Label
				className={classNames({ required: inputProps.required })}
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
