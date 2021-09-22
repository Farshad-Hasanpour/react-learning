import Home from './views/Home';
import Create from './views/Create';
import PostDetails from './views/PostDetails';
import NotFound from './views/404';

const routes = [
	{
		name: 'Home',
		path: '/',
		exact: true,
		component: Home
	},
	{
		name: 'Create',
		path: '/create',
		exact: true,
		component: Create
	},
	{
		name: 'PostDetails',
		path: '/post/:id',
		exact: true,
		component: PostDetails
	},
	{
		name: 'NotFound',
		path: '*',
		exact: false,
		"component": NotFound
	},

];

export default routes;