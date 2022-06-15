import * as React from 'react';
import { Page } from '../../../../src/996';
import { Button, Chip, Icon } from '../../../../src/ui';
import router, { RoutePaths } from '../../router';

const ComponentDemoPage: React.FC<{}> = (props) => {
	return (
		<Page className={'rsComponentDemoPage'}>
			<Chip
				labelVariant={'subtitle1'}
				label={'Click To Go Back'}
				look={'standard'}
				chipStyles={{ color: 'black' }}
				onClick={() => {
					router.navigate<RoutePaths>('/').catch(console.error);
				}}
			/>
			<Button mt={20} look={'containedPrimary'}>
				<Icon iconImg={'icon-close'} />I am a button
			</Button>
		</Page>
	);
};

export default ComponentDemoPage;
