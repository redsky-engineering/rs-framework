import * as React from 'react';
import './Chip.scss';
import { rippleEffect } from '../../utils/internal';
import { Icon } from '../icon/Icon';
import classNames from 'classnames';
import Box from '../box/Box';
import Label, { LabelProps } from '../label/Label';
import { ICommon } from '../../common/Interfaces';

interface ChipStyles extends ICommon.BorderProps, ICommon.PaddingProps, ICommon.MarginProps, ICommon.PaletteProps {}

export interface ChipProps {
	labelVariant: LabelProps['variant'];
	label: string;
	look: 'outlined' | 'filled';

	chipStyles: ChipStyles;

	disabled?: boolean;
	icon?: string;
	avatarImg?: string;
	avatarInitials?: string;
	onClick?: (event?: React.MouseEvent) => void;
	onDelete?: (event?: React.MouseEvent) => void;
	className?: string;
}

const Chip: React.FC<ChipProps> = (props) => {
	function renderLabelClasses() {
		let classes = 'label';
		if (props.icon || props.avatarImg || props.avatarInitials) classes += ' ml';
		if (props.onDelete) classes += ' mr';
		return classes;
	}

	return (
		<Box
			className={classNames('rsChip', props.onClick, props.look, props.disabled, props.className)}
			{...props.chipStyles}
			onClick={(event) => {
				if (props.onClick) {
					rippleEffect(event as React.MouseEvent<HTMLElement>);
					props.onClick(event);
				}
			}}
		>
			<Label variant={props.labelVariant}>{props.label}</Label>
		</Box>

		// <span
		// 	className={classNames('rsChip', props.onClick, props.look, props.disabled, props.className)}
		// 	onClick={(event) => {
		// 		if (props.onClick) {
		// 			rippleEffect(event);
		// 			props.onClick(event);
		// 		}
		// 	}}
		// 	style={props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}}
		// >
		// 	{(props.icon || props.avatarImg || props.avatarInitials) && (
		// 		<>
		// 			{/*{!!props.icon && !props.avatarImg && !props.avatarInitials && <Icon iconImg={props.icon} />}*/}
		// 			{/*{!!props.avatarImg && !props.icon && !props.avatarInitials && (*/}
		// 			{/*	// <Avatar widthHeight={25} backgroundColor={'#8a8a8a'} image={props.avatarImg} />*/}
		// 			{/*)}*/}
		// 			{/*{!!props.avatarInitials && !props.icon && !props.avatarImg && (*/}
		// 			{/*	<Avatar widthHeight={25} backgroundColor={'#8a8a8a'} name={props.avatarInitials} />*/}
		// 			{/*)}*/}
		// 		</>
		// 	)}
		// 	<div className={renderLabelClasses()}>{props.label}</div>
		// 	{props.onDelete && (
		// 		<Icon
		// 			iconImg={'chip-x'}
		// 			size={22}
		// 			color={'#8a8a8a'}
		// 			onClick={(event) => {
		// 				if (props.onDelete) props.onDelete(event);
		// 				event?.stopPropagation();
		// 			}}
		// 		/>
		// 	)}
		// </span>
	);
};

export { Chip };
