import * as React from 'react';
import './Page.scss';
import { Box } from '../../ui';
import classNames from 'classnames';
import { useEffect } from 'react';
import { Router } from '../Router';

export interface PageProps {
	className?: string;
	title?: string;
	description?: string;
	// Open Graph
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
}

const Page: React.FC<PageProps> = (props) => {
	useEffect(() => {
		const globalRouterInstance = Router.getInstance();
		document.title = props.title || globalRouterInstance.initialSiteTitle;
	}, [props.title]);

	useEffect(() => {
		const globalRouterInstance = Router.getInstance();
		const newDescription = props.description || globalRouterInstance.initialSiteDescription;

		const metaTags = document.getElementsByTagName('meta');
		for (let i = 0; i < metaTags.length; i++) {
			if (!metaTags[i].getAttributeNames().includes('name')) continue;
			if (metaTags[i].getAttribute('name') !== 'description') continue;

			metaTags[i].setAttribute('content', newDescription);
			return;
		}

		// If we got here there was no meta tag found with description
		const meta = document.createElement('meta');
		meta.name = 'description';
		meta.content = newDescription;
		document.getElementsByTagName('head')[0].appendChild(meta);
	}, [props.description]);

	useEffect(() => {
		// First go through and delete all Open Graph tags
		const metaToRemove: HTMLMetaElement[] = [];
		const metaTags = document.getElementsByTagName('meta');
		for (let i = 0; i < metaTags.length; i++) {
			if (!metaTags[i].getAttributeNames().includes('property')) continue;
			if (!['og:title', 'og:description', 'og:image'].includes(metaTags[i].getAttribute('property') || ''))
				continue;

			metaToRemove.push(metaTags[i]);
		}
		const head = document.getElementsByTagName('head')[0];
		metaToRemove.forEach((meta) => {
			head.removeChild(meta);
		});

		if (props.ogTitle) {
			const meta = document.createElement('meta');
			meta.setAttribute('property', 'og:title');
			meta.content = props.ogTitle;
			document.getElementsByTagName('head')[0].appendChild(meta);
		}

		if (props.ogDescription) {
			const meta = document.createElement('meta');
			meta.setAttribute('property', 'og:description');
			meta.content = props.ogDescription;
			document.getElementsByTagName('head')[0].appendChild(meta);
		}

		if (props.ogImage) {
			const meta = document.createElement('meta');
			meta.setAttribute('property', 'og:image');
			meta.content = props.ogImage;
			document.getElementsByTagName('head')[0].appendChild(meta);
		}
	}, [props.ogTitle, props.ogDescription, props.ogImage]);

	return <Box className={classNames('rsPage', props.className)}>{props.children}</Box>;
};

export { Page };
