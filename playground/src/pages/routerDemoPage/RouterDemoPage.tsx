import * as React from 'react';
import { Link, Page } from '../../../../src/996';
import { Button, Label } from '../../../../src/ui';
import router, { RoutePaths } from '../../router';

const RouterDemoPage: React.FC<{}> = (props) => {
	const pathParams = router.getPathParams([
		{
			key: 'path1',
			default: '',
			type: 'string'
		},
		{
			key: 'path2',
			default: '',
			type: 'string',
			alias: 'renamedPath2'
		}
	]);

	const queryParams = router.getQueryParams([
		{
			key: 'query1',
			default: '',
			type: 'string'
		},
		{
			key: 'query2',
			default: 666,
			type: 'integer',
			alias: 'renamedQuery2'
		}
	]);
	return (
		<Page className={'rsRouterDemoPage'}>
			<Label variant={'h4'} weight={'regular'} mb={8}>
				Path Params
			</Label>
			{JSON.stringify(pathParams)}
			<Label variant={'h4'} weight={'regular'} mt={16} mb={8}>
				Query Params
			</Label>
			{JSON.stringify(queryParams)}
			<Button
				mt={40}
				look={'containedPrimary'}
				onClick={() => {
					router.navigate<RoutePaths | string>('/router/with/button');
				}}
			>
				Navigate Using Router.Navigate
			</Button>
			<Link path={'/router/with/link'}>
				<Button
					mt={24}
					look={'containedPrimary'}
					onClick={() => {
						router.navigate<RoutePaths | string>('/router/with/link');
					}}
				>
					Navigate Using Link
				</Button>
			</Link>
		</Page>
	);
};

export default RouterDemoPage;
