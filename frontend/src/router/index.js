import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from '../modules/auth/routes'
import { useAuthStore } from '../modules/auth/store'

const routes = [
	...authRoutes,
	{
		path: '/app',
		component: () => import('../components/Layout/Layout.vue'), // Persistent Layout
		meta: { requiresAuth: true },
		children: [
			{
				// name: 'App',
				path: '/', // Default child route
				redirect: 'dashboard', // Redirect to 'dashboard'
			},
			{
				name: 'Dashboard',
				path: 'dashboard', // Child path (relative to /app)
				component: () => import('../modules/dashboard/views/Dashboard.vue'),
			},
			{
				name: 'Enrollment',
				path: 'enrollment', // Child path (relative to /app)
				component: () => import('../modules/enrollment/views/Enrollment.vue'),
			},
		],
	},
	{ path: '/:pathMatch(.*)*', redirect: '/login' }, // Fallback route
]

const router = createRouter({
	history: createWebHistory('/Campus_Credit'),
	routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
	const authStore = useAuthStore()

	if (to.meta.requiresAuth && !authStore.user) {
		next('/login')
	} else {
		next()
	}
})

export default router
