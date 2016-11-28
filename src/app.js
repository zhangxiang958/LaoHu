import Vue 			from 'vue';
import VueRouter 	from 'vue-router';
import VueResource 	from 'vue-resource';
import routers 		from './router';

Vue.use(VueRouter);
Vue.use(VueResource);


var router = new VueRouter({
	base: __dirname,
	routes: routers
});

var app = new Vue({
	router
}).$mount('#app');
