import * as React from 'react';
import './Select.scss';
import ReactSelect, {
	CommonProps,
	ContainerProps,
	ControlProps,
	GroupBase,
	GroupHeadingProps,
	GroupProps,
	InputActionMeta,
	InputProps,
	LoadingIndicatorProps,
	MenuProps,
	MultiValueProps,
	MultiValueRemoveProps,
	NoticeProps,
	OptionProps,
	PlaceholderProps,
	SingleValueProps,
	ValueContainerProps
} from 'react-select';
import { CSSObject } from '@emotion/serialize';
import { FocusEventHandler, KeyboardEventHandler, useEffect, useState } from 'react';
import clone from 'lodash.clone';
import Creatable from 'react-select/creatable';
import { IRsFormControl, RsFormControl } from '../form/FormControl';
import { Box } from '../box/Box';
import { MenuPortalProps } from 'react-select/dist/declarations/src/components/Menu';
import classNames from 'classnames';

export type OptionType = {
	value: string | number;
	label: string | number;
	isDisabled?: boolean;
};

export type GroupType = {
	label: string;
	options: OptionType[];
};

export type IsMulti = boolean | false;

export type Styles = {
	container?(base: CSSObject, props: ContainerProps<OptionType, IsMulti, GroupType>): CSSObject;
	control?(base: CSSObject, props: ControlProps<OptionType, IsMulti, GroupType>): CSSObject;
	group?(base: CSSObject, props: GroupProps<OptionType, IsMulti, GroupType>): CSSObject;
	groupHeading?(base: CSSObject, props: GroupHeadingProps<OptionType, IsMulti, GroupType>): CSSObject;
	input?(base: CSSObject, props: InputProps): CSSObject;
	loadingIndicator?(base: CSSObject, props: LoadingIndicatorProps<OptionType, IsMulti, GroupType>): CSSObject;
	loadingMessage?(base: CSSObject, props: NoticeProps<OptionType, IsMulti, GroupType>): CSSObject;
	menu?(base: CSSObject, props: MenuProps<OptionType, IsMulti, GroupType>): CSSObject;
	menuPortal?(base: CSSObject, props: MenuPortalProps<OptionType, IsMulti, GroupType>): CSSObject;
	multiValue?(base: CSSObject, props: MultiValueProps<OptionType, IsMulti, GroupType>): CSSObject;
	multiValueLabel?(base: CSSObject, props: MultiValueProps<OptionType, IsMulti, GroupType>): CSSObject;
	multiValueRemove?(base: CSSObject, props: MultiValueRemoveProps<OptionType, IsMulti, GroupType>): CSSObject;
	noOptionsMessage?(base: CSSObject, props: NoticeProps<OptionType, IsMulti, GroupType>): CSSObject;
	option?(base: CSSObject, props: OptionProps<OptionType, IsMulti, GroupType>): CSSObject;
	placeholder?(base: CSSObject, props: PlaceholderProps<OptionType, IsMulti, GroupType>): CSSObject;
	singleValue?(base: CSSObject, props: SingleValueProps<OptionType, IsMulti, GroupType>): CSSObject;
	valueContainer?(base: CSSObject, props: ValueContainerProps<OptionType, IsMulti, GroupType>): CSSObject;
};

export interface SelectProps {
	/** ~~~~~~ Required Props ~~~~~~*/

	control: RsFormControl<IRsFormControl>;
	/** Array of options that populate the Select menu */
	options: OptionType[] | GroupType[];

	/** ~~~~~~ RsForm Control Props ~~~~~~*/

	updateControl?: (control: RsFormControl<IRsFormControl>) => void;
	onRsFormChange?: (event: OptionType | GroupType, control: RsFormControl<IRsFormControl>) => void;

	/** ~~~~~~ Select Optional Props ~~~~~~*/

	/** className attribute applied to the outer component */
	className?: string;
	/** Close the Select menu when the user selects an option */
	closeMenuOnSelect?: boolean;
	/** The id to set on the SelectContainer component. */
	id?: string;
	/** The value of the search input */
	inputValue?: string | undefined;
	/** Is the Select value clearable */
	isClearable?: boolean;
	/** Is the Select disabled */
	isDisabled?: boolean;
	/** Is the Select in a state of loading (async) */
	isLoading?: boolean;
	/** Support multiple selected options */
	isMulti?: IsMulti;
	/** Is the Select direction right-to-left */
	isRtl?: boolean;
	/** Whether to enable search functionality */
	isSearchable?: boolean;
	/** Does it allow creatable capability */
	isCreatable?: boolean;
	/** Where to put the create option in your list */
	createOptionPosition?: 'first' | 'last';
	/** Called when a create option is given */
	onCreateOption?: (inputValue: string) => void;
	/** Async: Text to display when loading options */
	loadingMessage?: (obj: { inputValue: string }) => string | null;
	/** Minimum height of the menu before flipping */
	minMenuHeight?: number;
	/** Maximum height of the menu before scrolling */
	maxMenuHeight?: number;
	/** Whether the menu is open */
	menuIsOpen?: boolean;
	width?: string | number;
	/**
	 * Default placement of the menu in relation to the control. 'auto' will flip
	 * when there isn't enough space below the control.
	 */
	menuPlacement?: 'auto' | 'bottom' | 'top';
	/** The CSS position value of the menu, when "fixed" extra layout management is required */
	menuPosition?: 'absolute' | 'fixed';
	/** Text to display when there are no options */
	noOptionsMessage?: (obj: { inputValue: string }) => string | null;
	/** Handle blur events on the control */
	onBlur?: FocusEventHandler;
	/** Handle focus events on the control */
	onFocus?: FocusEventHandler;
	/** Handle change events on the input */
	onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
	/** Handle key down events on the Select */
	onKeyDown?: KeyboardEventHandler;
	/** Handle the menu opening */
	onMenuOpen?: () => void;
	/** Handle the menu closing */
	onMenuClose?: () => void;
	/** Handle what happens when the clear button is pressed */
	onFormClear?: () => void;
	/** Allows control of whether the menu is opened when the Select is focused */
	openMenuOnFocus?: boolean;
	/** Allows control of whether the menu is opened when the Select is clicked */
	openMenuOnClick?: boolean;
	/** Number of options to jump in menu when page{up|down} keys are used */
	pageSize?: number;
	/** Placeholder text for the Select value */
	placeholder?: React.ReactNode;
	/** Style modifier methods */
	styles?: Styles;
	/** Sets the tabIndex attribute on the input */
	tabIndex?: string | null;
	/** Select the currently focused option when the user presses tab */
	tabSelectsValue?: boolean;
	/** The value of the Select; reflected by the selected option */
	value?: readonly OptionType[] | OptionType | null;
	defaultInputValue?: string;
	defaultMenuIsOpen?: boolean;

	/* Allows ability to override certain components */
	components?: any;
}

const Select: React.FC<SelectProps> = (props) => {
	const [control, setControl] = useState(props.control);
	const [value, setValue] = useState<OptionType[] | GroupType[]>();
	useEffect(() => {
		setControl(props.control);

		if (!Array.isArray(props.options) || !props.options.length) return;

		if (props.control.value.toString().length > 0) {
			let controlValue = props.control.value;
			let newOptionsArray = createOptionArray(props.options);
			if (typeof controlValue === 'number' || typeof controlValue === 'string') {
				setValue(
					newOptionsArray.filter((item) => {
						return item.value === props.control.value;
					})
				);
			} else if (Array.isArray(controlValue)) {
				let defaultOptions: OptionType[] = [];
				controlValue.forEach((item: string | number) => {
					let optionValue = newOptionsArray.filter((option) => {
						return item === option.value;
					});
					defaultOptions = [...defaultOptions, ...optionValue];
				});
				setValue(defaultOptions);
			}
		}
	}, [props.control, props.options]);

	function isGroupOption(options: OptionType[] | GroupType[]): options is GroupType[] {
		return options[0].hasOwnProperty('options');
	}

	function createOptionArray(options: OptionType[] | GroupType[]): OptionType[] {
		let newOptionsArray: OptionType[] = [];
		if (isGroupOption(options)) {
			options.forEach((item) => {
				newOptionsArray = [...newOptionsArray, ...item.options];
			});
		} else {
			newOptionsArray = options;
		}
		return newOptionsArray;
	}

	useEffect(() => {
		if (control.errors.length > 0) {
			let controlElement = document.querySelector("[class*='control']"); //control
			let placeholderElement = document.querySelector(".rsSelect [class*='placeholder']"); //placeholder
			if (!!controlElement && !!placeholderElement) {
				controlElement.classList.add('error');
				placeholderElement.classList.add('error');
			}
		} else {
			let controlElement = document.querySelector("[class*='control']"); //control
			let placeholderElement = document.querySelector(".rsSelect [class*='placeholder']"); //placeholder
			if (!!controlElement && !!placeholderElement) {
				controlElement.classList.remove('error');
				placeholderElement.classList.remove('error');
			}
		}
	}, [control.errors]);

	async function changeHandler(event: OptionType | GroupType) {
		let target: string | number | string[] | number[] = '';
		if (Array.isArray(event)) {
			target = event.map((item) => {
				return item.value;
			});
			if (target.length === 0) target = props.isMulti ? [] : '';
		} else {
			if (event === null) target = props.isMulti ? [] : '';
			else target = (event as OptionType).value;
		}

		const updated = clone(props.control);
		if (updated) {
			updated.value = target;
			if (typeof updated.value !== 'number') {
				if (updated.value.length === 0) {
					updated.clearErrors();
				} else {
					await updated.validate();
				}
			}

			setControl(updated);
			if (props.updateControl) props.updateControl(updated);
		}
		if (props.onRsFormChange) props.onRsFormChange(event, updated);
	}
	function renderErrors() {
		const errorNodes: React.ReactNode[] = [];
		const errors = control.errors;
		for (let index = 0; index < errors.length; index++) {
			const errorMessage = control.getErrorMessage(errors[index]);
			errorNodes.push(
				<div key={`${index}Error`} className="rsInputErrorMessage">
					{errorMessage}
				</div>
			);
		}
		return errorNodes;
	}

	function renderStyles() {
		if (!props.width) return;
		let width = props.width;
		if (typeof props.width === 'number') width += 'px';

		return { width: width };
	}

	let SelectComponent: any = props.isCreatable ? Creatable : ReactSelect;

	return (
		<Box className={classNames('rsSelect', props.className)} style={renderStyles()}>
			{
				<SelectComponent
					{...props}
					onChange={(value: any, action: any) => {
						changeHandler(value);
						setValue(value);
						if (action.action === 'clear') {
							if (props.onFormClear) props.onFormClear();
						}
					}}
					value={value}
				/>
			}
			{renderErrors()}
		</Box>
	);
};

export { Select };
