import HomePage from './pages/homePage/HomePage';
import ComponentDemoPage from './pages/componentDemoPage/ComponentDemoPage';
import { I996 } from '../../src/common/Interfaces';
import { Router } from '../../src/996';
import RouterDemoPage from './pages/routerDemoPage/RouterDemoPage';
import DataTableDemoPage from './pages/dataTableDemoPage/DataTableDemoPage';

export type RoutePaths =
	| '/'
	| '/component-demo'
	| '/router'
	| '/router/:path1'
	| '/router/:path1/:path2'
	| '/data-table';

export const routes: I996.RouteDetails<RoutePaths>[] = [
	{
		path: '/',
		page: HomePage
	},
	{
		path: '/component-demo',
		page: ComponentDemoPage
	},
	{
		path: '/router',
		page: RouterDemoPage
	},
	{
		path: '/router/:path1',
		page: RouterDemoPage
	},
	{
		path: '/router/:path1/:path2',
		page: RouterDemoPage
	},
	{
		path: '/data-table',
		page: DataTableDemoPage
	}
];

const router = new Router();
router.loadStaticRoutes(routes);
export default router;
