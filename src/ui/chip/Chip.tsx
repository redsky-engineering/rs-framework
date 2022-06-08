import * as React from 'react';
import './Chip.scss';
import { rippleEffect, transformProps } from '../../utils/internal';
import { Icon, IconProps } from '../icon/Icon';
import classNames from 'classnames';
import Box from '../box/Box';
import Label, { LabelProps } from '../label/Label';
import { ICommon } from '../../common/Interfaces';

interface ChipStyles extends ICommon.BorderProps, ICommon.PaddingProps, ICommon.MarginProps, ICommon.PaletteProps {}

export interface NewIconProps extends IconProps {
	position: 'LEFT' | 'RIGHT';
	isHidden?: boolean;
}

export interface ChipProps {
	labelVariant: LabelProps['variant'];
	label: string;
	look: 'outlined' | 'standard';

	icon?: NewIconProps[];
	chipStyles?: ChipStyles;

	disabled?: boolean;
	avatarImg?: string;
	avatarInitials?: string;
	onClick?: (event?: React.MouseEvent) => void;
	className?: string;
}

const Chip: React.FC<ChipProps> = (props) => {
	let cssProperties = transformProps(props.chipStyles);

	function renderIcons() {
		let label = [<Label variant={props.labelVariant}>{props.label}</Label>];

		if (!props.icon) return label;

		props.icon.forEach((item, index) => {
			const { position, isHidden, onClick, ...iconProps } = item;

			if (isHidden) return;
			const icon = (
				<Icon
					key={`${item.iconImg}${index}`}
					{...iconProps}
					onClick={(event) => {
						if (onClick) onClick(event);
						event?.stopPropagation();
					}}
				/>
			);

			if (position === 'LEFT') {
				label = [icon, ...label];
			} else {
				label = [...label, icon];
			}
		});
		return label;
	}

	return (
		<span
			className={classNames('rsChip', props.look, props.disabled, props.className, { onClick: !!props.onClick })}
			style={cssProperties}
			onClick={(event) => {
				if (props.onClick) {
					rippleEffect(event as React.MouseEvent<HTMLElement>);
					props.onClick(event);
				}
			}}
		>
			{renderIcons()}
		</span>
	);
};

export { Chip };
