import * as React from 'react';
import { createContext } from 'react';
import { LabelProps } from '../label/Label';

const defaultSettings: IFrameworkSettings = {
	labelInputText: { variant: 'body1', weight: 'regular', mb: 4 },
	labelInputTextArea: { variant: 'body1', weight: 'regular', mb: 4 },
	labelSelect: { variant: 'body1', weight: 'regular', mb: 4 },
	toasts: {
		icons: {
			error: 'icon-exclamation-circle',
			info: 'icon-solid-info-circle',
			success: 'icon-check',
			warning: 'icon-exclamation-circle',
			custom: 'icon-flag'
		},
		labelVariants: {
			title: 'subtitle1',
			message: 'body1'
		}
	}
};

export const FrameworkContext = createContext<IFrameworkSettings>(defaultSettings);

export interface ILabelSettingsProps extends Omit<LabelProps, 'children' | 'className' | 'id'> {}

export interface IFrameworkSettings {
	labelInputText: ILabelSettingsProps;
	labelInputTextArea: ILabelSettingsProps;
	labelSelect: ILabelSettingsProps;
	toasts: {
		icons: { [key in 'error' | 'info' | 'success' | 'warning' | 'custom']: string };
		labelVariants: { title: 'subtitle1'; message: 'body1' };
	};
}

interface FrameworkSettingsProps {
	overrides: Partial<IFrameworkSettings>;
}

const FrameworkSettings: React.FC<FrameworkSettingsProps> = (props) => {
	let settings = defaultSettings;
	let key: keyof IFrameworkSettings;
	for (key in props.overrides) {
		if (Object.hasOwn(props.overrides, key)) {
			if (key !== 'toasts') {
				settings[key] = { ...settings[key], ...props.overrides[key] };
			} else {
				let toastKey: keyof IFrameworkSettings['toasts'];
				for (toastKey in props.overrides.toasts) {
					if (!props.overrides.toasts) continue;
					// @ts-ignore
					settings.toasts[toastKey] = { ...settings.toasts[toastKey], ...props.overrides.toasts[toastKey] };
				}
			}
		}
	}
	return <FrameworkContext.Provider value={settings}>{props.children}</FrameworkContext.Provider>;
};

export { FrameworkSettings };
