const index = require('./views/app.vue');

const router = [
	{
		path: '/',
		name: 'index',
		component: index,
		children: [
			{
				path: '/',
				name: 'dashboard',
				component:  function(resolve) {
 					require.ensure(['./views/dashboard/dashboard.vue'], function(){
 						resolve(require('./views/dashboard/dashboard.vue'));
 					}, 'Dashboard');
				}
			},
			{
				path: '/addData',
				name: 'dataForm',
				component:  function(resolve) {
 					require.ensure(['./views/addDataFrom/addData.vue'], function(){
 						resolve(require('./views/addDataFrom/addData.vue'));
 					}, 'DataForm');
				}
			},
			{
				path: '/admin',
				name: 'admin',
				component:  function(resolve) {
 					require.ensure(['./views/admin/admin.vue'], function(){
 						resolve(require('./views/admin/admin.vue'));
 					}, 'Admin');
				}
			},
			{
				path: '/article',
				name: 'article',
				component:  function(resolve) {
 					require.ensure(['./views/article/article.vue'], function(){
 						resolve(require('./views/article/article.vue'));
 					}, 'Article');
				}
			},
			{
				path: '/user',
				name: 'user',
				component:  function(resolve) {
 					require.ensure(['./views/user/user.vue'], function(){
 						resolve(require('./views/user/user.vue'));
 					}, 'User');
				}
			},
			{
				path: '/comment',
				name: 'comment',
				component:  function(resolve) {
 					require.ensure(['./views/comment/comment.vue'], function(){
 						resolve(require('./views/comment/comment.vue'));
 					}, 'Comment');
				}
			}
		]
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