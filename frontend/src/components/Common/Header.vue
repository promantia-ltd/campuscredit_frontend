<template>
	<div class="row-span-1 col-span-2 row-start-1">
		<header
			class="flex flex-row h-24 justify-between gap-6 items-center fixed top-0 border-gray-100 border-b bg-white text-black py-4 px-4 z-10 max-w-[calc(100%-18.50rem)] min-w-[calc(100%-18.50rem)]"
		>
			<div class="flex flex-1 justify-start">
				<IconField>
					<InputIcon class="pi pi-search" />
					<InputText
						variant="outlined"
						class="!rounded-full !border-gray-300 focus:ring-blue-500 focus:border-blue-500"
						v-model="value1"
						placeholder="Search"
					/>
				</IconField>
			</div>
			<div class="flex flex-row flex-0 gap-8 justify-between items-center">
				<div class="flex justify-center items-center">
					<OverlayBadge severity="warn" class="inline-flex">
						<i class="pi pi-bell"></i>
					</OverlayBadge>
				</div>
				<div class="flex flex-row gap-6">
					<div class="flex flex-col text-sm">
						<p>Hello <span class="font-bold">John!</span></p>
						<p>Good morning!</p>
					</div>
					<div class="h-2 w-8 flex-auto">
						<Avatar
							class="p-overlay-badge"
							image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"
							size="small"
							shape="circle"
							@click="toggleMenu"
						/>
						<Menu v-model="menuVisible" :popup="true" :model="menuItems" ref="menu">
							<template #end>
								<button
									v-ripple
									class="relative overflow-hidden w-full items-center border-0 bg-transparent flex p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"
									@click="goToProfile()"
								>
									<Avatar
										image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"
										class="mr-2"
										shape="circle"
									/>
									<span class="inline-flex flex-col items-start">
										<span class="font-bold">John</span>
										<span class="text-sm">Admin</span>
									</span>
								</button>
							</template>
						</Menu>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script setup>
import { Avatar, IconField, InputIcon, InputText, Menu, OverlayBadge } from 'primevue'
import { ref } from 'vue'

const menuVisible = ref(false)
const menu = ref(null)

const menuItems = [
	{ label: 'Profile', icon: 'pi pi-user', command: () => goToProfile() },
	{ label: 'Settings', icon: 'pi pi-cog', command: () => goToSettings() },

	{ label: 'Logout', icon: 'pi pi-sign-out', command: () => logout() },
	{ separator: true },
]

const toggleMenu = (event) => {
	menu.value.toggle(event)
}

const goToProfile = () => {
	console.log('Navigate to Profile')
}

const goToSettings = () => {
	console.log('Navigate to Settings')
}

const logout = () => {
	console.log('Logging out')
}
</script>
