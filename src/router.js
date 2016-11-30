const index = require('./views/app.vue');

const router = [
	{
		path: '/',
		name: 'index',
		component: index
		// children: [
		// 	{
		// 		path: '/login',
		// 		name: 'login',
		// 		component:  function(resolve) {
 	// 				require.ensure(['./views/login/login.vue'], function(){
 	// 					resolve(require('./views/login/login.vue'));
 	// 				}, 'Login');
		// 		}
		// 	}
		// ]
	},
	{
		path: '/login',
		name: 'login',
		component:  function(resolve) {
			require.ensure(['./views/login/login.vue'], function(){
				resolve(require('./views/login/login.vue'));
			}, 'Login');
		}
	}

];

export default router;