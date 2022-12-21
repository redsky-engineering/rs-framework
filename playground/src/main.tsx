import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FrameworkSettings, IFrameworkSettings } from '../../src/ui/frameworkSettings/FrameworkSettings';

const frameworkSettings: Partial<IFrameworkSettings> = {
	labelInputText: { color: 'blue', variant: 'body1', weight: 'regular' },
	toasts: {
		icons: {
			error: 'icon-close',
			info: 'icon-person',
			success: 'icon-check',
			warning: 'icon-logout',
			custom: 'icon-send'
		},
		labelVariants: {
			title: 'subtitle1',
			message: 'body1'
		}
	}
};

ReactDOM.render(
	<React.StrictMode>
		<FrameworkSettings overrides={frameworkSettings}>
			<App />
		</FrameworkSettings>
	</React.StrictMode>,
	document.getElementById('root')
);
