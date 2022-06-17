import * as React from 'react';
import './ToastMessage.scss';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { Icon } from '../icon/Icon';
import { Box } from '../box/Box';
import { Label, LabelProps } from '../label/Label';
import { ToastProps } from 'react-toastify/dist/types';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export enum ToastifyType {
	ERROR = 'error',
	SUCCESS = 'success',
	INFO = 'info',
	WARNING = 'warning',
	CUSTOM = 'custom'
}

export interface ToastMessageProps {
	message: string;
	title?: string;
	type: ToastifyType;
	toastProps?: ToastProps;
}

let icons: { [key in 'error' | 'info' | 'success' | 'warning' | 'custom']: string } = {
	error: 'icon-warning',
	info: 'icon-information',
	success: 'icon-checkmark',
	warning: 'icon-warning',
	custom: 'icon-flag'
};

let labelVariants = {
	title: 'subtitle1',
	message: 'body1'
};

const ToastMessage: React.FC<ToastMessageProps> = (props) => {
	function renderIconAndTitle() {
		let icon: React.ReactNode;
		let messageTitle = '';

		switch (props.type) {
			case ToastifyType.ERROR:
				icon = <Icon iconImg={icons.error} fontSize={21} />;
				messageTitle = 'Uh oh, something went wrong.';
				break;
			case ToastifyType.SUCCESS:
				icon = <Icon iconImg={icons.success} fontSize={21} />;
				messageTitle = 'Success!';
				break;
			case ToastifyType.INFO:
				icon = <Icon iconImg={icons.info} fontSize={21} />;
				messageTitle = 'Did you know?';
				break;
			case ToastifyType.WARNING:
				icon = <Icon iconImg={icons.warning} fontSize={21} />;
				messageTitle = 'Warning';
				break;
			default:
				icon = <Icon iconImg={icons.custom} fontSize={21} />;
				break;
		}
		const { title, message } = labelVariants;
		return (
			<>
				{icon}
				<Box marginLeft={16}>
					<Label variant={title}>{props.title || messageTitle}</Label>
					<Label variant={message}>{props.message}</Label>
				</Box>
			</>
		);
	}

	return (
		<Box className={classNames('rsToastMessage', props.type)} display={'flex'} alignItems={'center'}>
			{renderIconAndTitle()}
		</Box>
	);
};
export default ToastMessage;

export const rsToastify = {
	error: (message: string, title?: string, toastOptions?: ToastOptions) => {
		toast.error(<ToastMessage message={message} title={title} type={ToastifyType.ERROR} />, toastOptions);
	},
	info: (message: string, title?: string, toastOptions?: ToastOptions) => {
		toast.info(<ToastMessage message={message} title={title} type={ToastifyType.INFO} />, toastOptions);
	},
	success: (message: string, title?: string, toastOptions?: ToastOptions) => {
		toast.success(<ToastMessage message={message} title={title} type={ToastifyType.SUCCESS} />, toastOptions);
	},
	warning: (message: string, title?: string, toastOptions?: ToastOptions) => {
		toast.warning(<ToastMessage message={message} title={title} type={ToastifyType.WARNING} />, toastOptions);
	},
	custom: (message: string, title?: string, toastOptions?: ToastOptions) => {
		toast(<ToastMessage message={message} title={title} type={ToastifyType.CUSTOM} />, toastOptions);
	},
	setIcons: (newIcons: { [key in 'error' | 'info' | 'success' | 'warning' | 'custom']: string }) => {
		icons = newIcons;
	},
	setLabelVariants: (title: LabelProps['variant'], message: LabelProps['variant']) => {
		labelVariants.title = title;
		labelVariants.message = message;
	}
};

export { ToastContainer };
