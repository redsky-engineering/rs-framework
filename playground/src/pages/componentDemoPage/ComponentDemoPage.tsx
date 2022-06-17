import * as React from 'react';
import { Page } from '../../../../src/996';
import { Box, Button, Chip, Icon, Label, rsToastify } from '../../../../src/ui';
import router, { RoutePaths } from '../../router';

const ComponentDemoPage: React.FC<{}> = (props) => {
	// rsToastify.setLabelVariants('h1', 'h2');

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
			<Button
				mt={20}
				look={'containedPrimary'}
				small
				onClick={() => {
					rsToastify.error('Hello Bitches');
					rsToastify.success('success Hello Bitches');
					rsToastify.custom('custom Hello Bitches');
					rsToastify.warning('warning Hello Bitches', 'Cheese');
					rsToastify.info('info Bitches', 'Cheese', { autoClose: false });
				}}
			>
				<Box display={'flex'} alignItems={'center'}>
					<p>Hello World</p>
					<Icon iconImg={'icon-close'} />
				</Box>
			</Button>
		</Page>
	);
};

export default ComponentDemoPage;
