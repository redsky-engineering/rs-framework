import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';
import classNames from 'classnames';
import { rippleEffect, transformProps } from '../../utils/internal';
import { ICommon } from '../../common/Interfaces';

export interface ButtonProps
	extends ICommon.PaletteProps,
		Omit<ICommon.HtmlElementProps, 'display'>,
		ICommon.SpacingProps,
		ICommon.BorderProps,
		ICommon.InteractProps<HTMLButtonElement>,
		Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
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
	small?: boolean;
	disableRipple?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		id,
		className,
		look,
		disableRipple,
		small,
		onClick,
		elementRef,
		autoFocus,
		disabled,
		form,
		formAction,
		formEncType,
		formMethod,
		formNoValidate,
		formTarget,
		name,
		type,
		value,
		...styleProps
	} = props;

	const buttonProps = {
		autoFocus,
		disabled,
		form,
		formAction,
		formEncType,
		formMethod,
		formNoValidate,
		formTarget,
		name,
		value
	};

	return (
		<button
			id={id}
			className={classNames('rsButton', className, look, small)}
			type={type || 'button'}
			onClick={(event) => {
				if (!disableRipple) rippleEffect(event);
				if (onClick) onClick(event);
			}}
			ref={elementRef}
			style={transformProps(styleProps)}
			{...buttonProps}
		>
			{props.children}
		</button>
	);
};

export { Button };
