import * as React from 'react';
import './InputPhone.scss';
import { Box } from '../box/Box';
import { ICommon } from '../../common/Interfaces';
import { extractMarginProps, renderErrors } from '../../utils/internal';
import classNames from 'classnames';
import { RsFormControl } from '../form/FormControl';
import { useEffect, useState } from 'react';
import PhoneInput, { Props as PhoneInputProps } from 'react-phone-number-input/input';
import clone from 'lodash.clone';

//github docs: https://www.npmjs.com/package/react-phone-number-input

export interface InputPhoneProps
	extends Omit<PhoneInputProps<Partial<HTMLInputElement>>, 'onChange'>,
		ICommon.MarginProps {
	control?: RsFormControl<string>;
	updateControl?: (control: RsFormControl<string>) => void;
	immediateValidate?: boolean; // Begins checking the input as soon as it changes
	showFlags?: boolean;
	onChange?: (value: string) => void;
	helperText?: string | React.ReactNode;
}

const InputPhone: React.FC<InputPhoneProps> = (props) => {
	const { marginProps, remaining } = extractMarginProps(props);
	const { className, id, control, value, onChange, updateControl, immediateValidate, helperText, ...phoneProps } =
		remaining;
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

	return (
		<Box id={id} className={classNames('rsInputPhone')} {...marginProps}>
			<PhoneInput {...phoneProps} onChange={changeHandler} value={!!formControl ? formControl.value : value} />
			{!!helperText && <Box className={'helperText'}>{helperText}</Box>}
			{renderErrors(control)}
		</Box>
	);
};

export { InputPhone };
