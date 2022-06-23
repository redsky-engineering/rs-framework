import * as React from 'react';
import './InputTextarea.scss';
import { TextareaHTMLAttributes, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { ICommon } from '../../common/Interfaces';
import { RsFormControl } from '../form/FormControl';
import { IRsFormControl } from '../form/FormControl';

import { Box } from '../box/Box';
import clone from 'lodash.clone';
import { renderErrors } from '../../utils/internal';

export interface InputTextareaProps
	extends ICommon.PaletteProps,
		Omit<ICommon.HtmlElementProps, 'display'>,
		Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>,
		ICommon.MarginProps {
	elementRef?: React.RefObject<HTMLDivElement>;
	look?: 'standard' | 'filled' | 'outlined' | string;
	noAutocomplete?: boolean;
	autocompleteType?: ICommon.AutoCompleteType | string; // Defaults to "on"
	value?: string | readonly string[] | undefined;

	//Textarea properties
	minLength?: number;
	maxLength?: number;

	//Form Control
	control?: RsFormControl<string>;
	updateControl?: (control: RsFormControl<string>) => void;

	useFloatingPlaceholder?: boolean;

	onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextarea: React.FC<InputTextareaProps> = (props) => {
	const {
		id,
		look,
		elementRef,
		control,
		updateControl,
		noAutocomplete,
		autocompleteType,
		onChange,
		className,
		placeholder,
		value,
		minLength,
		maxLength,
		useFloatingPlaceholder,
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
		...textareaProps
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

	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const [formControl, setFormControl] = useState<RsFormControl<string> | undefined>(control);

	useEffect(() => {
		setFormControl(control);
	}, [control]);

	async function changeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
		// Required to persist in React 16.X but not 17.X. Otherwise the await() will lose the object
		event.persist();

		if (onChange) onChange(event.target.value, event);
		if (!control) return;

		const target = event.target;

		const startPosition = target.selectionStart || 0;
		const endPosition = target.selectionEnd || 0;
		const updated = clone(control);

		updated.value = target.value;
		if (updated.value.length === 0) {
			updated.clearErrors();
		} else {
			await updated.validate();
		}
		setFormControl(updated);
		if (updateControl) updateControl(updated);

		target.setSelectionRange(startPosition, endPosition);
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

	function focusInput() {
		if (textareaRef && textareaRef.current) textareaRef.current.focus();
	}

	return (
		<Box
			id={id}
			className={classNames('rsInputTextarea', className, look)}
			elementRef={elementRef}
			color={props.color}
			bgColor={props.bgColor}
			{...boxMarginProps}
		>
			<Box className={'inputTextareaContainer'} onClick={focusInput}>
				{renderTextarea()}
			</Box>
			{renderErrors(props.control)}
		</Box>
	);
};

export { InputTextarea };
