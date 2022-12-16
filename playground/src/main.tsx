import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FrameworkSettings, { IFrameworkSettings } from '../../src/ui/frameworkSettings/FrameworkSettings';

const frameworkSettings: Partial<IFrameworkSettings> = {
	labelInputText: { color: 'blue', variant: 'body1', weight: 'regular' },
	toasts: {
		icons: {
			error: 'icon-edit',
			info: 'icon-edit',
			success: 'icon-edit',
			warning: 'icon-edit',
			custom: 'icon-edit'
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
