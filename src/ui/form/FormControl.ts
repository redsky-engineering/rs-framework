import { RsValidator, RsValidatorEnum } from './Validator';
import { StringUtils } from '../../utils';

export type IRsFormControl = string | number | boolean | string[] | number[];

/** Tracks the value and validation status of an individual form control. */
export class RsFormControl<T extends IRsFormControl> {
	/** @internal */
	private _errors: number[] = [];
	private _initialValue: T | null;
	/**
	 * Creates a new `RsFormControl` instance.
	 * @param _key Form control key which should match your form model property.
	 * @param _value Initializes the control with an initial value.
	 * @param _validators Array of validators applied to this form control
	 */
	constructor(private _key: string, private _value: T | null, private _validators?: RsValidator[]) {
		this._initialValue = _value;
		this._value = _value;
	}

	get key(): string {
		return this._key;
	}

	get value(): T | null {
		return this._value;
	}
	set value(value: T | null) {
		this._value = value;
	}

	get errors(): number[] {
		return this._errors;
	}

	resetToInitial(): void {
		this._value = this._initialValue;
		this._errors = [];
	}

	isAtInitialValue(): boolean {
		if (Array.isArray(this._value) && Array.isArray(this._initialValue))
			return JSON.stringify(this._value) === JSON.stringify(this._initialValue);

		return this._value === this._initialValue;
	}

	/**
	 * Get error message by searching validator string
	 * @param index
	 * @returns {string}
	 */
	getErrorMessage(index: number): string {
		if (!this._validators) return '';
		return this._validators[index].errorMessage;
	}

	/**
	 * Updates the initial value with the current value
	 */
	updateInitialValue(): void {
		this._initialValue = this._value;
	}

	/**
	 * Used to clear the error fields. Should only be called if you know what you are doing
	 */
	clearErrors(): void {
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
				const validator: RsValidator = this._validators[index];
				const validatorRule = validator.validator;
				switch (validatorRule) {
					case RsValidatorEnum.REQ:
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
					case RsValidatorEnum.MIN_LENGTH:
						const min = parseInt(validator.value as string) || 0;
						if ((this._value as string).length < min) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorEnum.MAX_LENGTH:
						const max = parseInt(validator.value as string) || 0;
						if ((this._value as string).length > max) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorEnum.NUM:
						if (isNaN(Number(this._value))) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorEnum.EMAIL:
						// Although you can technically have a number of other characters according to RFC, they can
						// be considered dangerous. See this site for recommended values to allow.
						// https://www.jochentopf.com/email/chars.html
						// domain names can have: letters, numbers, and hyphens
						const isEmail = StringUtils.validateEmail(this._value?.toString() || '');
						if (!isEmail) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorEnum.REG:
						if (!(validator.value as RegExp).test(this._value as string)) {
							this._errors.push(index);
							continue;
						}
						break;
					case RsValidatorEnum.CUSTOM:
						const result = await (
							validator.value as (control: RsFormControl<T>) => boolean | Promise<boolean>
						)(this);
						if (!result) {
							this._errors.push(index);
							continue;
						}
						break;
				}
			}
		}
		return this._errors.length === 0;
	}
}
