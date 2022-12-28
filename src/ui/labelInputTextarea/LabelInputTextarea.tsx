import * as React from 'react';
import './LabelInputTextarea.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { Label, LabelProps } from '../label/Label';
import classNames from 'classnames';
import { InputTextarea, InputTextareaProps } from '../inputTextarea/InputTextarea';
import { useContext } from 'react';
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';
import { extractPropsFromKeys } from '../../utils/internal';

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
}

const LabelInputTextarea: React.FC<LabelInputTextareaProps> = (props) => {
	const { labelTitle, ...inputTextareaProps } = props;

	const boxMarginProps = extractPropsFromKeys<ICommon.MarginProps>(props, ICommon.MarginPropsKeys);
	const { className, ...htmlProps } = extractPropsFromKeys<ICommon.HtmlElementProps>(
		props,
		ICommon.HtmlElementPropsKeys
	);

	const { labelInputTextArea } = useContext(FrameworkContext);

	return (
		<Box className={classNames('rsLabelInputTextarea', className)} {...boxMarginProps} {...htmlProps}>
			<Label className={classNames({ required: inputTextareaProps.required })} {...labelInputTextArea}>
				{labelTitle}
			</Label>
			<InputTextarea {...inputTextareaProps} />
		</Box>
	);
};

export { LabelInputTextarea };
