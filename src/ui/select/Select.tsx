import * as React from 'react';
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
import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

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

	const [value, setValue] = useState<SingleValue<Option>>();

	useEffect(() => {
		if (!control || !props.options) return;

		if (isGroupOption(props.options)) return;

		let optionFound = props.options.find((item) => {
			// @ts-ignore
			return item.value === control.value;
		}) as Option;
		if (!optionFound) setValue(undefined);
		setValue(optionFound);
	}, [control]);

	function isMultiValue(value: MultiValue<any> | SingleValue<any>): value is MultiValue<any> {
		return !!value && Array.isArray(value);
	}

	function isGroupOption(options: OptionsOrGroups<Option, Group>): options is Group[] {
		return !!props.isMulti;
	}

	function handleChange(value: OnChangeValue<Option, IsMulti>, action: ActionMeta<Option>) {
		if (!control || !updateControl) return;
		const updated = clone(control);

		if (action.action === 'clear') {
			if (typeof updated.value === 'number') updated.value = Date.now();
			else if (typeof updated.value === 'string') updated.value = '';
			else if (Array.isArray(updated.value)) updated.value = [];
			updateControl(updated);
			return;
		}

		// TODO: Currently we don't support multi select options
		if (isMultiValue(value)) return;
		updated.value = (value as SingleValue<any>).value;
		updateControl(updated);
	}

	return (
		<Box id={id} className={classNames('rsSelect', className)} {...boxMarginProps}>
			{isCreatable ? (
				<ReactSelect
					{...selectProps}
					onChange={(value, action) => {
						if (onChange) onChange(value, action);
						handleChange(value, action);
						// if (action.action === 'clear') {
						// 	if (props.onFormClear) props.onFormClear();
						// }
					}}
					value={value}
				/>
			) : (
				<CreatableSelect
					{...selectProps}
					onCreateOption={onCreateOption}
					onChange={(value, action) => {
						if (onChange) onChange(value, action);
						handleChange(value, action);
						// changeHandler(value);
						// setValue(value);
						// if (action.action === 'clear') {
						// 	if (props.onFormClear) props.onFormClear();
						// }
					}}
					value={value}
				/>
			)}

			{renderErrors(props.control)}
		</Box>
	);
}

// const Select: React.FC<SelectProps> = (props) => {
// const [control, setControl] = useState(props.control);
// const [value, setValue] = useState<OptionType[] | GroupType[]>();
// useEffect(() => {
// 	setControl(props.control);
//
// 	if (!Array.isArray(props.options) || !props.options.length) return;
//
// 	if (props.control.value.toString().length > 0) {
// 		let controlValue = props.control.value;
// 		let newOptionsArray = createOptionArray(props.options);
// 		if (typeof controlValue === 'number' || typeof controlValue === 'string') {
// 			setValue(
// 				newOptionsArray.filter((item) => {
// 					return item.value === props.control.value;
// 				})
// 			);
// 		} else if (Array.isArray(controlValue)) {
// 			let defaultOptions: OptionType[] = [];
// 			controlValue.forEach((item: string | number) => {
// 				let optionValue = newOptionsArray.filter((option) => {
// 					return item === option.value;
// 				});
// 				defaultOptions = [...defaultOptions, ...optionValue];
// 			});
// 			setValue(defaultOptions);
// 		}
// 	}
// }, [props.control, props.options]);
//
// function isGroupOption(options: OptionType[] | GroupType[]): options is GroupType[] {
// 	return options[0].hasOwnProperty('options');
// }
//
// function createOptionArray(options: OptionType[] | GroupType[]): OptionType[] {
// 	let newOptionsArray: OptionType[] = [];
// 	if (isGroupOption(options)) {
// 		options.forEach((item) => {
// 			newOptionsArray = [...newOptionsArray, ...item.options];
// 		});
// 	} else {
// 		newOptionsArray = options;
// 	}
// 	return newOptionsArray;
// }
//
// useEffect(() => {
// 	if (control.errors.length > 0) {
// 		let controlElement = document.querySelector("[class*='control']"); //control
// 		let placeholderElement = document.querySelector(".rsSelect [class*='placeholder']"); //placeholder
// 		if (!!controlElement && !!placeholderElement) {
// 			controlElement.classList.add('error');
// 			placeholderElement.classList.add('error');
// 		}
// 	} else {
// 		let controlElement = document.querySelector("[class*='control']"); //control
// 		let placeholderElement = document.querySelector(".rsSelect [class*='placeholder']"); //placeholder
// 		if (!!controlElement && !!placeholderElement) {
// 			controlElement.classList.remove('error');
// 			placeholderElement.classList.remove('error');
// 		}
// 	}
// }, [control.errors]);
//
// async function changeHandler(event: OptionType | GroupType) {
// 	let target: string | number | string[] | number[] = '';
// 	if (Array.isArray(event)) {
// 		target = event.map((item) => {
// 			return item.value;
// 		});
// 		if (target.length === 0) target = props.isMulti ? [] : '';
// 	} else {
// 		if (event === null) target = props.isMulti ? [] : '';
// 		else target = (event as OptionType).value;
// 	}
//
// 	const updated = clone(props.control);
// 	if (updated) {
// 		updated.value = target;
// 		if (typeof updated.value !== 'number') {
// 			if (updated.value.length === 0) {
// 				updated.clearErrors();
// 			} else {
// 				await updated.validate();
// 			}
// 		}
//
// 		setControl(updated);
// 		if (props.updateControl) props.updateControl(updated);
// 	}
// 	if (props.onRsFormChange) props.onRsFormChange(event, updated);
// }
// function renderErrors() {
// 	const errorNodes: React.ReactNode[] = [];
// 	const errors = control.errors;
// 	for (let index = 0; index < errors.length; index++) {
// 		const errorMessage = control.getErrorMessage(errors[index]);
// 		errorNodes.push(
// 			<div key={`${index}Error`} className="rsInputErrorMessage">
// 				{errorMessage}
// 			</div>
// 		);
// 	}
// 	return errorNodes;
// }
//
// function renderStyles() {
// 	if (!props.width) return;
// 	let width = props.width;
// 	if (typeof props.width === 'number') width += 'px';
//
// 	return { width: width };
// }
//
// let SelectComponent: any = props.isCreatable ? Creatable : ReactSelect;
//
// return (
// 	<Box className={classNames('rsSelect', props.className)} style={renderStyles()}>
// 		{
// 			<SelectComponent
// 				{...props}
// 				onChange={(value: any, action: any) => {
// 					changeHandler(value);
// 					setValue(value);
// 					if (action.action === 'clear') {
// 						if (props.onFormClear) props.onFormClear();
// 					}
// 				}}
// 				value={value}
// 			/>
// 		}
// 		{renderErrors()}
// 	</Box>
// );

export { Select };
