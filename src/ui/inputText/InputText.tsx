import * as React from 'react';
import './InputText.scss';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ICommon } from '../../common/Interfaces';
import { RsFormControl, IRsFormControl } from '../form/FormControl';

import { Box } from '../box/Box';
import clone from 'lodash.clone';
import { Icon } from '../icon/Icon';

export interface InputTextProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'>,
		Omit<ICommon.HtmlElementProps, 'display'> {
	//TextInput Props
	boxRef?: React.RefObject<HTMLDivElement>;
	look?: 'standard' | 'filled' | 'outlined' | string;
	type: 'text' | 'password' | 'tel' | 'email' | 'hidden' | 'date';
	noAutocomplete?: boolean;
	autocompleteType?: ICommon.AutoCompleteType | string; // Defaults to "on"
	value?: string | number | readonly string[] | undefined;

	//Form Control
	control?: RsFormControl<string | string[] | number>;
	updateControl?: (control: RsFormControl<string | string[] | number>) => void;

	//Css
	color?: string;
	backgroundColor?: string;
	borderColor?: string;
	useFloatingPlaceholder?: boolean;

	icon?: ICommon.NewIconProps[];

	// searchIcon?: boolean;
	maxLength?: number; // Only works with text inputText type
	minLength?: number; // Only works with text inputText type
	minValue?: number; // Only works with number, range, date, datetime-local, month, time and week.
	maxValue?: number; // Only works with number, range, date, datetime-local, month, time and week.
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
		control?: RsFormControl<IRsFormControl>
	) => void;
}

const InputText: React.FC<InputTextProps> = (props) => {
	const {
		id,
		look,
		boxRef,
		control,
		updateControl,
		icon,
		noAutocomplete,
		autocompleteType,
		onChange,
		className,
		backgroundColor,
		borderColor,
		color,
		placeholder,
		type,
		value,
		useFloatingPlaceholder,
		...inputProps
	} = props;
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [formControl, setFormControl] = React.useState<RsFormControl<string | string[] | number> | undefined>(
		control
	);

	useEffect(() => {
		setFormControl(control);
	}, [control]);

	async function changeHandler(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
		// Required to persist in React 16.X but not 17.X. Otherwise the await() will lose the object
		event.persist();
		const target = event.target;

		const startPosition = target.selectionStart || 0;
		const endPosition = target.selectionEnd || 0;
		const updated = clone(control);
		if (updated) {
			updated.value = target.value;
			if (updated.value.length === 0) {
				updated.clearErrors();
			} else {
				await updated.validate();
			}
			setFormControl(updated);
			if (updateControl) updateControl(updated);
		}

		target.setSelectionRange(startPosition, endPosition);
		if (onChange) onChange(event, updated);
	}

	function getAutocompleteType(): string {
		if (props.noAutocomplete) return 'off';
		if (props.autocompleteType) return props.autocompleteType;
		return 'on';
	}

	function getInputStyle() {
		let input = (
			<input
				type={type}
				ref={inputRef}
				onChange={changeHandler}
				value={!!formControl ? formControl.value : value}
				autoComplete={getAutocompleteType()}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				placeholder={useFloatingPlaceholder ? ' ' : placeholder}
				{...inputProps}
			/>
		);

		if (!useFloatingPlaceholder) return input;

		return (
			<Box className={'floatingPlaceholder'}>
				{input}
				<label>{placeholder}</label>
			</Box>
		);
	}

	function renderInput() {
		let inputStyled = getInputStyle();

		if (!icon) {
			return inputStyled;
		}

		let iconInput = [inputStyled];

		icon.forEach((item, index) => {
			const { position, isHidden, ...iconProps } = item;
			if (isHidden) return;
			if (position === 'LEFT') {
				iconInput = [<Icon key={`${item.iconImg}${index}`} {...iconProps} />, ...iconInput];
			} else {
				iconInput = [...iconInput, <Icon key={`${item.iconImg}${index}`} {...iconProps} />];
			}
		});
		return iconInput;
	}

	function renderErrors() {
		if (!control) return;
		const errorNodes: React.ReactNode[] = [];
		const errors = control.errors;
		for (let index = 0; index < errors.length; index++) {
			const errorMessage = control.getErrorMessage(errors[index]);
			errorNodes.push(
				<div key={`${index}Error`} className={'rsInputErrorMessage'}>
					{errorMessage}
				</div>
			);
		}
		return errorNodes;
	}

	function hasError(): boolean {
		if (!control) return false;
		return control.errors.length > 0;
	}

	function focusInput() {
		if (inputRef && inputRef.current) inputRef.current.focus();
	}

	return (
		<Box
			id={id}
			className={classNames('rsInputText', className, look, { error: hasError() })}
			bgColor={backgroundColor}
			color={color}
			borderColor={borderColor}
			elementRef={boxRef}
		>
			<Box className={'inputContainer'} onClick={focusInput}>
				{renderInput()}
			</Box>
			{renderErrors()}
		</Box>
	);
};

export { InputText };
