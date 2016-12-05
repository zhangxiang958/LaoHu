import Vue from 'vue';

export const SIGNIN = 'USER_SIGININ';
export const SIGNOUT = 'USER_SIGINOUT';

export default {
	state: {
		id: '1',
		accouns: ''
	},
	mutations: {
		[SIGNIN](state, data){
			state.id = data.id;
			state.account = data.account;
		},
		[SIGNOUT](){
			state.id = '';
			state.account = '';
		}
	},
	actions: {
		[SIGNIN](){

		},
		[SIGNOUT](){

		}
	}
}