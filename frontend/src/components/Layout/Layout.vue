<template>
	<div class="h-screen grid grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
		<Sidebar />
		<div class="row-start-2 p-5 row-col-2 relative">
			<Header></Header>
			<main class="absolute top-28 w-full max-w-[calc(100%-2.50rem)]">
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>

<script setup>
import Header from '../Common/Header.vue'
import Sidebar from '../Common/Sidebar.vue'

// export default {
// 	components: { Header, Sidebar },
// }
</script>
