import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: null,
	}),
	actions: {
		login(username, password) {
			// Temporary credentials
			const tempUser = { username: 'testuser', password: '123456' }

			if (username === tempUser.username && password === tempUser.password) {
				this.user = { username } // Store user in state
				return true // Login successful
			} else {
				return false // Login failed
			}
		},
		logout() {
			this.user = null // Clear user data
		},
	},
})
