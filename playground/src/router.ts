import HomePage from './pages/homePage/HomePage';
import ComponentDemoPage from './pages/componentDemoPage/ComponentDemoPage';
import { I996 } from '../../src/common/Interfaces';
import { Router } from '../../src/996';
import RouterDemoPage from './pages/routerDemoPage/RouterDemoPage';

export type RoutePaths = '/' | '/component-demo' | '/router' | '/router/:path1' | '/router/:path1/:path2';

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
	}
];

const router = new Router();
router.loadStaticRoutes(routes);
export default router;
