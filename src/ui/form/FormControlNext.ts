import { RsValidatorNext, RsValidatorNextEnum } from './ValidatorNext';
import { StringUtils } from '../../utils';

export type IRsFormControlNext = string | number | boolean | string[] | number[];

/** Tracks the value and validation status of an individual form control. */
export class RsFormControlNext<T extends IRsFormControlNext> {
	/** @internal */
	private _errors: number[] = [];
	private _initialValue: T;
	/**
	 * Creates a new `RsFormControl` instance.
	 * @param _key Form control key which should match your form model property.
	 * @param _value Initializes the control with an initial value.
	 * @param _validators Array of validators applied to this form control
	 */
	constructor(private _key: string, private _value: T, private _validators?: RsValidatorNext[]) {
		this._initialValue = _value;
	}

	get key() {
		return this._key;
	}

	get value() {
		return this._value;
	}
	set value(value: T) {
		this._value = value;
	}

	get errors() {
		return this._errors;
	}

	resetToInitial() {
		this._value = this._initialValue;
		this._errors = [];
	}

	isAtInitialValue(): boolean {
		return this._value === this._initialValue;
	}

	/**
	 * Get error message by searching validator string
	 * @param index
	 * @returns {string}
	 */
	getErrorMessage(index: number) {
		if (!this._validators) return '';
		return this._validators[index].errorMessage;
	}

	/**
	 * Updates the initial value with the current value
	 */
	updateInitialValue() {
		this._initialValue = this._value;
	}

	/**
	 * Used to clear the error fields. Should only be called if you know what you are doing
	 */
	clearErrors() {
		this._errors = [];
	}

	/**
	 * Validates current value of control, based on the validators applied.
	 * @returns {boolean} True if control passes all validation test, false otherwise.
	 */
	async validate(): Promise<boolean> {
		this._errors = [];
		if (this._validators) {
			for (let index = 0; index < this._validators.length; index++) {
				const validator: RsValidatorNext = this._validators[index];
				const validatorRule = validator.validator;
				switch (validatorRule) {
					case RsValidatorNextEnum.REQ:
						if (this._value === undefined || this._value === null) {
							this._errors.push(index);
							continue;
						}

						if (typeof this._value === 'string' && this._value.trim() === '') {
							this._errors.push(index);
							continue;
						}

						if (Array.isArray(this._value) && this._value.length === 0) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorNextEnum.MIN:
						const min = parseInt(validator.value as string) || 0;
						if ((this._value as string).length < min) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorNextEnum.MAX:
						const max = parseInt(validator.value as string) || 0;
						if ((this._value as string).length > max) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorNextEnum.NUM:
						if (isNaN(Number(this._value))) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorNextEnum.EMAIL:
						// Although you can technically have a number of other characters according to RFC, they can
						// be considered dangerous. See this site for recommended values to allow.
						// https://www.jochentopf.com/email/chars.html
						// domain names can have: letters, numbers, and hyphens
						const isEmail = StringUtils.validateEmail(this._value.toString());
						if (!isEmail) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorNextEnum.REG:
						if (!(validator.value as RegExp).test(this._value as string)) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorNextEnum.CUSTOM:
						const result = await (
							validator.value as (control: RsFormControlNext<T>) => boolean | Promise<boolean>
						)(this);
						if (!result) {
							this._errors.push(index);
							continue;
						}
						break;
				}
			}
		}
		return true;
	}
}
