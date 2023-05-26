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
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';

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

const ToastMessage: React.FC<ToastMessageProps> = (props) => {
	const { toasts } = React.useContext(FrameworkContext);
	const { icons, labelVariants } = toasts;
	const { title, message } = labelVariants;

	function renderIconAndTitle() {
		let icon: React.ReactNode;
		let messageTitle = '';

		switch (props.type) {
			case ToastifyType.ERROR:
				icon = <Icon iconImg={icons.error} />;
				messageTitle = 'Uh oh, something went wrong.';
				break;
			case ToastifyType.SUCCESS:
				icon = <Icon iconImg={icons.success} />;
				messageTitle = 'Success!';
				break;
			case ToastifyType.INFO:
				icon = <Icon iconImg={icons.info} />;
				messageTitle = 'Did you know?';
				break;
			case ToastifyType.WARNING:
				icon = <Icon iconImg={icons.warning} />;
				messageTitle = 'Warning';
				break;
			default:
				icon = <Icon iconImg={icons.custom} />;
				break;
		}

		return (
			<>
				{icon}
				<Box className={'titleMessage'}>
					<Label variant={title} weight={'regular'} className={'title'}>
						{props.title || messageTitle}
					</Label>
					<Label variant={message} weight={'regular'} className={'message'}>
						{props.message}
					</Label>
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
	}
};

export { ToastContainer };
