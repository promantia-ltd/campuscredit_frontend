export default [
	{
		path: '/login',
		name: 'Login',
		component: () => import('./views/Login.vue'),
	},
	// {
	// 	path: '/dashboard',
	// 	name: 'Dashboard',
	// 	component: () => import('./views/Dashboard.vue'),
	// 	meta: { requiresAuth: true },
	// },
]
