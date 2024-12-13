<template>
	<div class="dashboard">
		<h1>
			Welcome,
			<!-- {{ user?.username }} -->
			Dashboard
		</h1>

		<!-- <button @click="logout">Logout</button> -->
	</div>
</template>

<!-- <script> 
import { useAuthStore } from '../store'
import { useRouter } from 'vue-router'

export default {
	setup() {
		const authStore = useAuthStore()
		const router = useRouter()

		const logout = () => {
			authStore.logout()
			router.push('/login')
		}

		return { user: authStore.user, logout }
	},
}
</script>

<style> 
.dashboard {
	text-align: center;
	margin-top: 50px;
}
</style>
-->
