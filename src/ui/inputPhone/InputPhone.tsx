import * as React from 'react';
import './InputPhone.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { extractMarginProps, renderErrors } from '../../utils/internal';
import classNames from 'classnames';
import { RsFormControl } from '../form/FormControl';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import PhoneInput, { Props as PhoneInputProps } from 'react-phone-number-input/input';
import clone from 'lodash.clone';
import { Icon } from '../icon/Icon';

//github docs: https://www.npmjs.com/package/react-phone-number-input

export interface InputPhoneProps
	extends Omit<PhoneInputProps<Partial<InputHTMLAttributes<HTMLInputElement>>>, 'onChange'>,
		ICommon.MarginProps {
	control?: RsFormControl<string>;
	updateControl?: (control: RsFormControl<string>) => void;
	immediateValidate?: boolean; // Begins checking the input as soon as it changes
	showFlags?: boolean;
	onChange?: (value: string) => void;
	icon?: ICommon.NewIconProps[];
	helperText?: string | React.ReactNode;
}

const InputPhone: React.FC<InputPhoneProps> = (props) => {
	const { marginProps, remaining } = extractMarginProps(props);
	const {
		className,
		id,
		control,
		value,
		onChange,
		updateControl,
		immediateValidate,
		helperText,
		icon,
		onBlur,
		...phoneProps
	} = remaining;

	const [hasBeenBlurred, setHasBeenBlurred] = useState<boolean>(immediateValidate || false);
	const [formControl, setFormControl] = useState<RsFormControl<string> | undefined>(control);

	useEffect(() => {
		setFormControl(control);
	}, [control]);

	async function changeHandler(value: string) {
		if (onChange) onChange(value);
		if (!control) return;

		validateTarget(value).catch(console.error);
	}

	async function validateTarget(
		value: string,
		forceValidate: boolean = false,
		ignoreCursorPosition: boolean = false
	) {
		if (!control) return;
		const updated = clone(control);

		updated.value = value;
		if (updated.value.length === 0) {
			updated.clearErrors();
		} else if (hasBeenBlurred || forceValidate) {
			await updated.validate();
		}

		setFormControl(updated);
		if (updateControl) updateControl(updated);
	}

	function renderInput() {
		let inputStyled = (
			<PhoneInput
				onChange={changeHandler}
				value={!!formControl ? formControl.value : value}
				// onBlur={handleBlur}
				{...phoneProps}
			/>
		);

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

	//This needs to be looked into more into why its changing the value of the input on blur.

	// async function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
	// 	if (!control) {
	// 		let newEvent = ObjectUtils.clone(event)
	// 		let countryCode = phoneProps.country || phoneProps.defaultCountry || 'US'
	//
	// 		if (newEvent.target.value.length > 1) {
	// 			let parsed = parsePhoneNumber(
	// 				newEvent.target.value,
	// 				countryCode
	// 			);
	// 			newEvent.target.value = parsed!.number;
	// 		} else if(getCountryCallingCode(countryCode) === newEvent.target.value) {
	// 			newEvent.target.value = "+" + newEvent.target.value
	// 		} else {
	// 			newEvent.target.value =
	// 				'+' + getCountryCallingCode(countryCode) + newEvent.target.value;
	// 		}
	// 		if (onBlur) onBlur(newEvent);
	// 		return;
	// 	}
	// 	setHasBeenBlurred(true);
	// 	validateTarget(formControl?.value || '', true, true).catch(console.error);
	// 	if (onBlur) onBlur(event);
	// }

	function focusInput(event: React.MouseEvent<HTMLDivElement>) {
		let element = event.target as HTMLDivElement | HTMLSpanElement;
		let inputElement: HTMLInputElement | null = null;
		if (!!element.childElementCount && !!element.querySelector('input')) {
			inputElement = element.querySelector('input')!;
		} else if (element.parentElement?.className.includes('inputContainer')) {
			inputElement = element.parentElement.querySelector('input')!;
		}

		if (inputElement) inputElement.focus();
	}

	return (
		<Box id={id} className={classNames('rsInputPhone')} {...marginProps}>
			<Box className={'inputContainer'} onClick={focusInput}>
				{renderInput()}
			</Box>
			{!!helperText && <Box className={'helperText'}>{helperText}</Box>}
			{renderErrors(control)}
		</Box>
	);
};

export { InputPhone };
