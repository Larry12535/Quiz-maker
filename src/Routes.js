import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Signup, Login } from '@/Pages'

export default new VueRouter({
	mode:'history',
	routes: [
		{
			path:'/Signup',
			name:'Signup',
			component:Signup
		},
		{
			path:'/Login',
			name:'Login',
			component:Login
		}
	]
})