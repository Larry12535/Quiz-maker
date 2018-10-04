import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Home, Signup, Login, Dashboard, QuizMaker } from '@/Pages'

export default new VueRouter({
	mode:'history',
	routes: [
		{
			path:'/',
			component:Home
		},
		{
			path:'/signup',
			component:Signup
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/user/:id/dashboard',
			component:Dashboard
		},
		{
			path:'/user/:id/quizmaker',
			component:QuizMaker
		}
	]
})