import { IRsFormControl, RsFormControl } from './FormControl';

/** Validator enumeration */
export enum RsValidatorEnum {
	REQ = 'required',
	MIN = 'minLength',
	MAX = 'maxLength',
	EMAIL = 'email',
	NUM = 'numeric',
	REG = 'regexp',
	CUSTOM = 'custom'
}

/** Supports form control validation. */
export class RsValidator {
	/**
	 * Creates a new `RsValidator` instance.
	 * @param _validator Validator enumeration from `RsValidatorEnum`.
	 * @param _errorMessage Error message for invalid state.
	 * @param _value Value for comparison validator, e.g. min, max,
	 * if putting a value of 3 here, validator will validate if the value lenght is smaller or greater than 3.
	 */
	constructor(
		private _validator: RsValidatorEnum,
		private _errorMessage: string,
		private _value?:
			| string
			| number
			| RegExp
			| ((control: RsFormControl<IRsFormControl>) => boolean | Promise<boolean>)
	) {}

	get validator() {
		return this._validator;
	}

	get errorMessage() {
		if (this._errorMessage.indexOf('$val') > -1) return this._errorMessage.replace(/\$val/g, this._value as string);
		else return this._errorMessage;
	}

	get value() {
		return this._value;
	}
}
