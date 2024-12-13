<template>
	<div class="flex justify-center items-center mt-52">
		<div class="w-full max-w-xs g-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<div class="flex py-8 justify-center"><h1 class="font-bold">Campus Credit</h1></div>
			<form @submit.prevent="handleLogin">
				<div class="identity-input mb-4">
					<label for="username" class="block text-gray-700 text-sm font-bold mb-2">
						Username</label
					>
					<input
						id="username"
						class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Email"
						aria-describedby="emailHelp"
						v-model="username"
					/>
					<span class="text-xs text-red-700" id="emailHelp"></span>
				</div>

				<div class="password-input mb-6">
					<label for="identity" class="block text-gray-700 text-sm font-bold mb-2"
						>Password</label
					>

					<input
						aria-describedby="passwordHelp"
						v-model="password"
						class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="*******"
					/>

					<span class="text-xs text-red-700" id="passwordHelp"></span>
				</div>

				<div class="flex items-center justify-center">
					<button
						class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign In
					</button>
					<!-- <a
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						href="#"
					>
						Forgot Password?
					</a> -->
				</div>
			</form>
			<p v-if="error" class="error">{{ error }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store'
import { useRouter } from 'vue-router'

// export default {
// 	setup() {
const authStore = useAuthStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref(null)

const handleLogin = () => {
	const success = authStore.login(username.value, password.value)
	if (success) {
		router.push('/app')
	} else {
		error.value = 'Invalid username or password!'
	}
}

// 		return { username, password, error, handleLogin }
// 	},
// }
</script>

<style>
.error {
	color: red;
}
</style>
