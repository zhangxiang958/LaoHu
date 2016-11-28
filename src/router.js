const index = require('./views/app.vue');

const router = [
	{
		path: '/',
		name: 'index',
		component: index,
		children: [
			{
				path: '/test',
				component: index
			}
		]
	}

];

export default router;