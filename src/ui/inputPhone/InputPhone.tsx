import * as React from 'react';
import './InputPhone.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { extractMarginProps, renderErrors } from '../../utils/internal';
import classNames from 'classnames';
import { RsFormControl } from '../form/FormControl';
import { useEffect, useRef, useState } from 'react';
import PhoneInput, { Props as PhoneInputProps } from 'react-phone-number-input/input';
import clone from 'lodash.clone';
import { Icon } from '../icon/Icon';
import { getCountryCallingCode } from 'react-phone-number-input';
import { CountryCode } from 'libphonenumber-js/core';
import { StringUtils } from '../../utils';

//github docs: https://www.npmjs.com/package/react-phone-number-input

export interface InputPhoneProps
	extends Omit<PhoneInputProps<Partial<HTMLInputElement>>, 'onChange' | 'country'>,
		ICommon.MarginProps {
	control?: RsFormControl<string>;
	updateControl?: (control: RsFormControl<string>) => void;
	immediateValidate?: boolean; // Begins checking the input as soon as it changes
	onChange?: (value: string) => void;
	helperText?: string | React.ReactNode;
	country: CountryCode;
	icon?: ICommon.NewIconProps[];
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
		...phoneProps
	} = remaining;
	const [hasBeenBlurred, setHasBeenBlurred] = useState<boolean>(immediateValidate || false);
	const [formControl, setFormControl] = useState<RsFormControl<string> | undefined>(control);
	const boxRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!boxRef.current) return;
		let element = boxRef.current;
		element.addEventListener('focusout', focusOutEvent);

		function focusOutEvent(value: FocusEvent) {
			let phoneNumber = `+${getCountryCallingCode(phoneProps.country)}${StringUtils.removeAllExceptNumbers(
				(value.target as HTMLInputElement).value
			)}`;
			validateTarget(phoneNumber, true, true).catch(console.error);
			setHasBeenBlurred(true);
		}

		return () => {
			element.removeEventListener('focusout', focusOutEvent);
		};
	}, [boxRef]);

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
			<PhoneInput {...phoneProps} onChange={changeHandler} value={!!formControl ? formControl.value : value} />
		);

		if (!icon) return inputStyled;

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

	function focusInput() {
		if (boxRef && boxRef.current) {
			(boxRef.current?.querySelector('.rsBox.inputContainer input') as HTMLInputElement).focus();
		}
	}

	return (
		<Box id={id} className={classNames('rsInputPhone')} {...marginProps} elementRef={boxRef}>
			<Box className={'inputContainer'} onClick={focusInput}>
				{renderInput()}
			</Box>
			{!!helperText && <Box className={'helperText'}>{helperText}</Box>}
			{renderErrors(control)}
		</Box>
	);
};

export { InputPhone };
