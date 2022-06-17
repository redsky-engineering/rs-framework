import * as React from 'react';
import './Checkbox.scss';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ICommon } from '../../common/Interfaces';
import { RsFormControl, IRsFormControl } from '../form/FormControl';

import { Box } from '../box/Box';
import { Label } from '../label/Label';
import clone from 'lodash.clone';

export interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'>,
		ICommon.PaletteProps,
		ICommon.SpacingProps,
		ICommon.TextProps,
		ICommon.HtmlElementProps {
	boxRef?: React.RefObject<HTMLDivElement>;
	elementRef?: React.RefObject<HTMLInputElement>;

	disabled?: boolean;

	//Checkbox Label properties, brings in and uses RS Label Component
	labelVariant?:
		| 'display1'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'link1'
		| 'link2'
		| 'subtitle1'
		| 'subtitle2'
		| 'subheader1'
		| 'subheader2'
		| 'body1'
		| 'body2'
		| 'caption1'
		| 'button'
		| 'overline'
		| string;
	labelText: string;
	labelPosition?: 'TOP' | 'RIGHT';

	look:
		| 'containedPrimary'
		| 'containedSecondary'
		| 'containedTertiary'
		| 'outlinedPrimary'
		| 'outlinedSecondary'
		| 'outlinedTertiary'
		| 'textPrimary'
		| 'textSecondary'
		| 'textTertiary'
		| string;

	//Form Control
	control?: RsFormControl<boolean>;
	updateControl?: (control: RsFormControl<boolean>) => void;
	checked?: boolean | undefined;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>, control?: RsFormControl<IRsFormControl>) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
	const {
		id,
		elementRef,
		control,
		updateControl,
		className,
		disabled,
		checked,
		labelVariant,
		labelText,
		labelPosition,
		look,
		onChange,

		...checkboxProps
	} = props;

	const checkboxRef = useRef<HTMLInputElement | null>(null);

	const [formControl, setFormControl] = React.useState<RsFormControl<boolean> | undefined>(control);
	useEffect(() => {
		setFormControl(control);
	}, [control]);

	async function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		event.persist();
		const target = event.target;
		const updated = clone(control);

		if (updated) {
			updated.value = target.checked;

			await updated.validate();
			setFormControl(updated);
			if (updateControl) updateControl(updated);
		}
		if (onChange) onChange(event, updated);
	}

	function getCheckboxStyle() {
		let checkbox = (
			<input
				type={'checkbox'}
				className={classNames('checkbox', className)}
				ref={checkboxRef}
				onChange={changeHandler}
				checked={!!formControl ? formControl.value : checked}
				disabled={disabled}
				{...checkboxProps}
			/>
		);
		return <Box className={'checkboxContainer'}>{checkbox}</Box>;
	}

	function renderCheckboxLabel() {
		let label = <Label variant={labelVariant || 'h1'}>{labelText}</Label>;
		let labelPlaced;
		if (!labelPosition || labelPosition === 'RIGHT') {
			labelPlaced = (
				<Box className={'checkboxContainer'}>
					{getCheckboxStyle()}
					{label}
				</Box>
			);
		} else {
			labelPlaced = (
				<Box className={'checkboxContainer'}>
					{label}
					{getCheckboxStyle()}
				</Box>
			);
		}
		return labelPlaced;
	}

	return (
		<Box id={id} className={classNames('rsCheckbox', className, look)} color={props.color} bgColor={props.bgColor}>
			{renderCheckboxLabel()}
		</Box>
	);
};

export { Checkbox };
