import * as React from 'react';
import './InputTextarea.scss';
import { InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ICommon } from '../../common/Interfaces';
import { RsFormControl } from '../form';
import { IRsFormControl } from '../form/FormControl';

import Box from '../box/Box';
import clone from 'lodash.clone';
import { Icon, IconProps } from '../icon/Icon';

export interface NewIconProps extends IconProps {
	position: 'LEFT' | 'RIGHT';
	isHidden?: boolean;
}

interface InputTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'rows' | 'cols'> {
	//TextInput Props
	id?: string;
	className?: string;
	boxRef?: React.RefObject<HTMLDivElement>;
	look?: 'standard' | 'filled' | 'outlined' | string;
	noAutocomplete?: boolean;
	autocompleteType?: ICommon.AutoCompleteType | string; // Defaults to "on"
	value?: string | number | readonly string[] | undefined;

	//Textarea properties
	rows?: number;
	cols?: number;
	autoResize?: boolean;

	//Form Control
	control?: RsFormControl<string | string[] | number>;
	updateControl?: (control: RsFormControl<string | string[] | number>) => void;

	//Css
	color?: string;
	backgroundColor?: string;
	borderColor?: string;
	useFloatingPlaceholder?: boolean;

	icon?: NewIconProps[];

	errorProps?: {};

	onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, control?: RsFormControl<IRsFormControl>) => void;
}

const InputTextarea: React.FC<InputTextareaProps> = (props) => {
	const {
		id,
		look, // Doesn't work, not sure if needed.
		boxRef, // Ask about boxRef. not sure how it works.
		control,
		updateControl,
		icon,
		noAutocomplete,
		autocompleteType,
		onChange,
		className,
		backgroundColor, //WORKS
		borderColor, // Doesn't work
		color, // Not seeing if it works
		placeholder, // Works
		value,

		// This is the props specific to textarea
		rows,
		cols,
		autoResize,

		useFloatingPlaceholder, // It works, just looks ugly.
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

	function getTextareaStyle() {
		let textArea = (
			<textarea
				ref={textareaRef}
				onChange={changeHandler}
				value={!!formControl ? formControl.value : value}
				autoComplete={getAutocompleteType()}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				placeholder={useFloatingPlaceholder ? ' ' : placeholder}
				rows={!!rows ? rows : 3}
				cols={!!cols ? cols : 25}
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

	function renderTextarea() {
		let inputStyled = getTextareaStyle();

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
				<div key={`${index}Error`} className={'rsInputTextareaErrorMessage'}>
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
		if (textareaRef && textareaRef.current) textareaRef.current.focus();
	}

	return (
		<Box
			id={id}
			className={classNames('rsInputTextarea', className, look, { error: hasError() })}
			bgColor={backgroundColor}
			color={color}
			borderColor={borderColor}
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
