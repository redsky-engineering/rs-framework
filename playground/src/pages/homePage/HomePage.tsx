import * as React from 'react';
import { Link, Page } from '../../../../src/996';
import { Button } from '../../../../src/ui';
import { Label } from '../../../../src/ui';

const HomePage: React.FC<{}> = (props) => {
	return (
		<Page
			className={'rsHomePage'}
			title={'Framework - Home Page'}
			description={'A nice long SEO description about this page specific page.'}
			opg={{
				title: 'Framework - Home Page',
				type: 'website',
				image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
				url: 'https://www.google.com',
				'video.movie': 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
			}}
			structuredDataJsonLd={{
				'@context': 'https://schema.org',
				'@type': 'Organization',
				url: 'https://wow.com',
				logo: 'https://wow.com/logo.png'
			}}
		>
			<Label variant={'h3'} weight={'medium'}>
				Click a button to go to the sandbox pages
			</Label>
			<Button path={'/component-demo'} mt={24} look={'containedPrimary'}>
				Components Sandbox
			</Button>
			<Button path={'/router'} mt={24} look={'containedPrimary'}>
				Router (996) Sandbox
			</Button>
			<Button path={'/data-table'} mt={24} look={'containedPrimary'}>
				RsDataTable
			</Button>
		</Page>
	);
};

export default HomePage;
