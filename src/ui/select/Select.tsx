import * as React from 'react';
import { useEffect, useState } from 'react';
import './Select.scss';
import { Box } from '../box/Box';
import classNames from 'classnames';
import { RsFormControl } from '../form/FormControl';
import {
	ActionMeta,
	default as ReactSelect,
	GroupBase,
	MultiValue,
	OnChangeValue,
	OptionsOrGroups,
	Props,
	SingleValue
} from 'react-select';
import { ICommon } from '../../common/Interfaces';
import { renderErrors } from '../../utils/internal';
import clone from 'lodash.clone';

// For webpack to work I had to import CreatableSelect with full qualified path, which means we lose on the types. Ts-ignore for now
// @ts-ignore
import CreatableSelect from 'react-select/creatable/dist/react-select.esm.js';
import { PropsValue } from 'react-select/dist/declarations/src/types';

export interface SelectProps<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group>,
		ICommon.MarginProps {
	control?: RsFormControl<number | string | number[] | string[]>;
	updateControl?: (control: RsFormControl<number | string | number[] | string[]>) => void;
	isCreatable?: boolean;
	createOptionPosition?: 'first' | 'last';
	onCreateOption?: (inputValue: string) => void;
}

function Select<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
	props: SelectProps<Option, IsMulti, Group>
) {
	const {
		id,
		className,
		control,
		updateControl,
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
		onChange,
		isCreatable,
		createOptionPosition,
		onCreateOption,
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

	const [value, setValue] = useState<PropsValue<Option>>();

	useEffect(() => {
		if (!control || !props.options) return;

		// Todo: We don't handle groups at this time, if we were to we would recurse through all groups selecting the options
		if (isGroupOption(props.options)) return;

		if (Array.isArray(control.value)) {
			let optionsFound = props.options.filter((item) => {
				// @ts-ignore
				return control.value.includes(item.value);
			}) as Option[];
			if (!optionsFound.length) setValue(undefined);
			else setValue(optionsFound);
		} else {
			let optionFound = props.options.find((item) => {
				// @ts-ignore
				return item.value === control.value;
			}) as Option;
			if (!optionFound) setValue(undefined);
			else setValue(optionFound);
		}
	}, [control]);

	function isMultiValue(value: MultiValue<any> | SingleValue<any>): value is MultiValue<any> {
		return !!value && Array.isArray(value);
	}

	function isGroupOption(options: OptionsOrGroups<Option, Group>): options is Group[] {
		// A group has a format like this:
		// [
		// 	{
		// 		label: 'Colours',
		// 		options: colourOptions,
		// 	},
		// 	{
		// 		label: 'Flavours',
		// 		options: flavourOptions,
		// 	},
		// ];
		// Where as an option has this format
		// [
		// 	{
		// 		label: 'Option 1',
		// 		value: 1,
		// 	}
		// ]

		// The best we can do to tell them apart is if there is an options value on one of the element
		return !!options && Array.isArray(options) && options.length > 1 && options[0].hasOwnProperty('options');
	}

	async function handleChange(value: OnChangeValue<Option, IsMulti>, action: ActionMeta<Option>) {
		if (!control || !updateControl) return;
		const updated = clone(control);

		if (action.action === 'clear') {
			if (typeof updated.value === 'number') updated.value = Date.now();
			else if (typeof updated.value === 'string') updated.value = '';
			else if (Array.isArray(updated.value)) updated.value = [];
			updated.clearErrors();
			updateControl(updated);
			return;
		}

		if (isMultiValue(value)) {
			updated.value = value.map((item) => {
				return item.value;
			});
		} else {
			updated.value = (value as SingleValue<any>).value;
		}
		await updated.validate();
		updateControl(updated);
	}

	function renderSelectOrCreateSelect() {
		return !isCreatable ? (
			<ReactSelect
				{...selectProps}
				onChange={(value, action) => {
					if (onChange) onChange(value, action);
					handleChange(value, action);
				}}
				value={value}
			/>
		) : (
			<CreatableSelect
				{...selectProps}
				createOptionPosition={createOptionPosition}
				onCreateOption={onCreateOption}
				onChange={(value: OnChangeValue<Option, IsMulti>, action: ActionMeta<Option>) => {
					if (onChange) onChange(value, action);
					handleChange(value, action);
				}}
				value={value}
			/>
		);
	}

	return (
		<Box id={id} className={classNames('rsSelect', className)} {...boxMarginProps}>
			{renderSelectOrCreateSelect()}
			{renderErrors(props.control)}
		</Box>
	);
}

export { Select };
