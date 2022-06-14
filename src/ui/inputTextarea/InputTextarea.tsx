import * as React from 'react';
import './InputTextarea.scss';
import { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ICommon } from '../../common/Interfaces';
import { RsFormControl } from '../form/FormControl';
import { IRsFormControl } from '../form/FormControl';

import { Box } from '../box/Box';
import clone from 'lodash.clone';

export interface InputTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
	//TextInput Props
	id?: string;
	className?: string;
	boxRef?: React.RefObject<HTMLDivElement>;
	look?: 'standard' | 'filled' | 'outlined' | string;
	noAutocomplete?: boolean;
	autocompleteType?: ICommon.AutoCompleteType | string; // Defaults to "on"
	value?: string | readonly string[] | undefined;

	//Textarea properties
	minLength?: number;
	maxLength?: number;

	//Form Control
	control?: RsFormControl<string | string[] | number>;
	updateControl?: (control: RsFormControl<string | string[] | number>) => void;

	//Css
	color?: string;
	backgroundColor?: string;
	useFloatingPlaceholder?: boolean;

	errorProps?: {};

	onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, control?: RsFormControl<IRsFormControl>) => void;
}

const InputTextarea: React.FC<InputTextareaProps> = (props) => {
	const {
		id,
		look,
		boxRef,
		control,
		updateControl,
		noAutocomplete,
		autocompleteType,
		onChange,
		className,
		backgroundColor,
		color,
		placeholder,
		value,
		minLength,
		maxLength,
		useFloatingPlaceholder,
		...textareaProps
	} = props;
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const [formControl, setFormControl] = React.useState<RsFormControl<string | string[] | number> | undefined>(
		control
	);

	useEffect(() => {
		setFormControl(control);
	}, [control]);
	async function changeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
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

	function renderTextarea() {
		let textArea = (
			<textarea
				ref={textareaRef}
				onChange={changeHandler}
				value={!!formControl ? formControl.value : value}
				autoComplete={getAutocompleteType()}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				placeholder={useFloatingPlaceholder ? ' ' : placeholder}
				{...textareaProps}
			/>
		);

		if (!useFloatingPlaceholder) return textArea;

		return (
			<Box className={'floatingPlaceholder'}>
				{textArea}
				<label>{placeholder}</label>
			</Box>
		);
	}

	function renderErrors() {
		if (!control) return;
		const errorNodes: React.ReactNode[] = [];
		const errors = control.errors;
		for (let index = 0; index < errors.length; index++) {
			const errorMessage = control.getErrorMessage(errors[index]);
			errorNodes.push(
				<div key={`${index}Error`} className={'rsInputTextareaErrorMessage'}>
					{errorMessage}
				</div>
			);
		}
		return errorNodes;
	}

	function focusInput() {
		if (textareaRef && textareaRef.current) textareaRef.current.focus();
	}

	return (
		<Box
			id={id}
			className={classNames('rsInputTextarea', className, look)}
			bgColor={backgroundColor}
			color={color}
			elementRef={boxRef}
		>
			<Box className={'inputTextareaContainer'} onClick={focusInput}>
				{renderTextarea()}
			</Box>
			{renderErrors()}
		</Box>
	);
};

export { InputTextarea };
