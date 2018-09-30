import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Home, Signup, Login, Dashboard } from '@/Pages'

export default new VueRouter({
	mode:'history',
	routes: [
		{
			path:'/',
			component:Home
		},
		{
			path:'/Signup',
			component:Signup
		},
		{
			path:'/Login',
			component:Login
		},
		{
			path:'/User/:id/Dashboard',
			component:Dashboard
		}
	]
})