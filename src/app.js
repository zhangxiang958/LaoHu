import Vue 			from 'vue';
import VueRouter 	from 'vue-router';
import VueResource 	from 'vue-resource';
import VueMdl   	from 'vue-mdl';

import store		from './vuex/store';
import routers 		from './router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueMdl);


const router = new VueRouter({
	base: __dirname,
	routes: routers,
	linkActiveClass: 'active'
});

router.beforeEach(({meta, path}, from, next) => {
    // var {auth = true} = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (!isLogin && path !== '/login') {
        return next({ path: '/login' })
    } else {
    	next();
    }
});

const app = new Vue({
	store,
	router
}).$mount('#app');
