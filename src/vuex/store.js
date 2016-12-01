import Vue 			from 'vue';
import Vuex 		from 'vuex';
// import actions 		from './actions'
// import mutations 	from './mutations'
// import state 		from "./state"
import user			from './modules/User';

Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== 'production'
// Vue.config.debug = debug


export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // strict: debug
    state: {
    	count: 0
    },
    mutations: {
    	increment: function(state){
    		state.count ++;
    		console.log(state.count);
    	},
    	decrement: state => state.count --
    },

    modules: {
    	user: user
    }
})