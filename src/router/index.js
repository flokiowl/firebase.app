import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from '@/router/auth-guard'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/resume',
		name: 'resume',
		component: () => import('../views/Resume.vue')
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: () => import('../views/Portfolio.vue')
	},
	{
		path: '/portfolio/:id',
		name: 'work',
		props:true,
		component: () => import('../views/Work.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('../views/Blog.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/Contact.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	},
	// {
	// 	path: '/registration',
	// 	name: 'registration',
	// 	component: () => import('../views/Registration.vue')
	// },
	{
		path: '/profile',
		name: 'profile',
		component: () => import('../views/Profile.vue'),
		beforeEnter: AuthGuard
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
