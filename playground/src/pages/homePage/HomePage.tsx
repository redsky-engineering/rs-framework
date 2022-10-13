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
			ogTitle={'Fancy Title'}
			ogDescription={'A nice description'}
			ogImage={'https://www.placecage.com/c/200/200'}
		>
			<Label variant={'h3'} weight={'medium'}>
				Click a button to go to the sandbox pages
			</Label>
			<Link path={'/component-demo'}>
				<Button mt={24} look={'containedPrimary'}>
					Components Sandbox
				</Button>
			</Link>
			<Link path={'/router'}>
				<Button mt={24} look={'containedPrimary'}>
					Router (996) Sandbox
				</Button>
			</Link>
			<Link path={'/data-table'}>
				<Button mt={24} look={'containedPrimary'}>
					RsDataTable
				</Button>
			</Link>
		</Page>
	);
};

export default HomePage;
