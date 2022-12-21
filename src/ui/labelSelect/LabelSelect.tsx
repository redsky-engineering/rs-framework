import * as React from 'react';
import './LabelSelect.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { Label } from '../label/Label';
import classNames from 'classnames';
import { Select, SelectProps } from '../select/Select';
import { useContext } from 'react';
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';
import { GroupBase, Props } from 'react-select';
import { IRsFormControl, RsFormControl } from '../form/FormControl';
import { extractPropsFromKeys } from '../../utils/internal';

export interface LabelSelectProps<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>
> extends ICommon.MarginProps,
		SelectProps<Option, IsMulti, Group> {
	labelTitle: string | React.ReactNode;
	required?: boolean;
}

function LabelSelect<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
	props: LabelSelectProps<Option, IsMulti, Group>
) {
	const { labelTitle, required, ...selectProps } = props;

	const boxMarginProps = extractPropsFromKeys<ICommon.MarginProps>(props, ICommon.MarginPropsKeys);
	const { className, ...htmlProps } = extractPropsFromKeys<ICommon.HtmlElementProps>(
		props,
		ICommon.HtmlElementPropsKeys
	);

	const { labelSelect } = useContext(FrameworkContext);
	let { variant, weight, ...otherLabelProps } = labelSelect;

	return (
		<Box className={classNames('rsLabelInputText', className)} {...boxMarginProps} {...htmlProps}>
			<Label className={classNames({ required })} variant={variant} weight={weight} {...otherLabelProps}>
				{labelTitle}
			</Label>
			<Select {...selectProps} />
		</Box>
	);
}

export { LabelSelect };
