import * as React from 'react';
import './Accordion.scss';
import { useEffect, useState } from 'react';
import { Icon, IconProps } from '../icon/Icon';
import { rippleEffect, transformProps } from '../../utils/internal';
import { Box } from '../box/Box';
import classNames from 'classnames';
import { ICommon } from '../../common/Interfaces';
import { Label, LabelProps } from '../label/Label';

export interface MixedStyleProps
	extends ICommon.SpacingProps,
		ICommon.BorderProps,
		ICommon.DimensionProps,
		ICommon.PaletteProps {}

export interface IExpandIconProps {
	openedIcon?: IconProps;
	closedIcon?: IconProps;
	defaultIcon?: Omit<IconProps, 'iconImg' | 'className' | 'onClick'>;
}
export interface IContainerStyleProps extends ICommon.MarginProps {
	width?: string | number;
	maxWidth?: string | number;
	minWidth?: string | number;
}

export interface AccordionProps extends Omit<ICommon.HtmlElementProps, 'display'> {
	title: LabelProps | React.ReactNode;
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLElement>, isOpen: boolean) => void;
	headerStyles?: MixedStyleProps;
	drawerStyles?: MixedStyleProps;
	containerStyles?: IContainerStyleProps;
	expandIcon?: IExpandIconProps;
	disableRipple?: boolean;
	hideExpandIcon?: boolean;
	isOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const [isOpened, setIsOpened] = useState<boolean>(props.isOpen || false);
	const containerRef = React.createRef<HTMLDivElement>();
	const drawerRef = React.createRef<HTMLDivElement>();

	useEffect(() => {
		accordionButtonHandler(containerRef, drawerRef);
	}, [isOpened]);

	useEffect(() => {
		if (props.isOpen) setIsOpened(props.isOpen);
		else setIsOpened(false);
	}, [props.isOpen]);

	function accordionButtonHandler(
		buttonRef: React.RefObject<HTMLDivElement>,
		divRef: React.RefObject<HTMLDivElement>
	) {
		const container = buttonRef.current;
		const drawer = divRef.current;
		if (!container || !drawer) return;
		if (isOpened) {
			container.classList.add('active');
			drawer.classList.add('opened');
		} else {
			container.classList.remove('active');
			drawer.classList.remove('opened');
		}
		if (drawer.classList.value.includes('opened')) setIsOpened(true);
		else setIsOpened(false);

		if (drawer.style.height || !isOpened) {
			drawer.style.height = drawer.scrollHeight + 'px';
			//We need to have a slight delay so that the height can have a pixel value before removing.
			setTimeout(() => {
				drawer.style.height = '';
			}, 50);
		} else {
			drawer.style.height = drawer.scrollHeight + 'px';
			//This Time out is set to 300ms which is the transition time for height.
			setTimeout(() => {
				drawer.style.height = 'auto';
			}, 300);
		}
	}

	function isLabel(possibleLabel: any): possibleLabel is LabelProps {
		return typeof possibleLabel === 'object' && possibleLabel.hasOwnProperty('variant');
	}

	function renderIcon() {
		if (props.hideExpandIcon) return;
		if (!props.expandIcon)
			return <Icon className={isOpened ? 'iconSpinUp' : 'iconSpinDown'} iconImg={'icon-chevron-up'} />;
		const { openedIcon, closedIcon, defaultIcon } = props.expandIcon;

		if (defaultIcon) {
			return (
				<Icon
					className={isOpened ? 'iconSpinUp' : 'iconSpinDown'}
					iconImg={'icon-chevron-up'}
					{...defaultIcon}
				/>
			);
		}
		if (openedIcon && closedIcon) {
			if (isOpened) return <Icon {...openedIcon} />;
			else return <Icon {...closedIcon} />;
		}
	}

	function renderTitle() {
		let icon = [renderIcon()];

		if (isLabel(props.title)) {
			return [<Label {...props.title} />, ...icon];
		}

		return [props.title, ...icon];
	}

	return (
		<Box
			className={classNames('rsAccordion', props.className)}
			elementRef={containerRef}
			style={transformProps(props.containerStyles)}
		>
			<Box
				className={'header'}
				style={transformProps(props.headerStyles)}
				onClick={(event) => {
					if (!props.disableRipple) rippleEffect(event as React.MouseEvent<HTMLElement>);
					setIsOpened(!isOpened);
					if (props.onClick) props.onClick(event as React.MouseEvent<HTMLElement>, !isOpened);
				}}
			>
				{renderTitle()}
			</Box>
			<Box className={'drawer'} elementRef={drawerRef} style={transformProps(props.drawerStyles)}>
				{props.children}
			</Box>
		</Box>
	);
};

export { Accordion };
