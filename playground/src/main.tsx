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
	},
	opg: {
		title: 'RedSky Playground',
		type: 'website',
		image: '',
		url: 'https://redskyeng.com'
	},
	structuredDataJsonLd: {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		url: 'https://redskyeng.com',
		logo: 'https://redskyeng.com/logo.png'
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
