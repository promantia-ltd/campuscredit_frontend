<template>
	<aside :class="sidebarClass" class="row-span-2 col-span-1 row-start-1 h-screen col-start-1">
		<div :class="sidebarClass" class="fixed top-0 left-0 h-screen bg-gray-100 rounded-r-2xl">
			<div :class="sidebarClass" class="flex flex-wrap flex-col p-4">
				<!-- Branding -->
				<div
					:class="sidebarClass"
					class="flex flex-wrap w-full flex-row content-around pt-5 mb-12 justify-center"
				>
					<div v-if="isSidebarOpen" class="flex-auto pl-4">
						<h1 class="text">Campus Credit</h1>
					</div>
					<div class="flex flex-none">
						<button @click="toggleSidebar" class="text-black focus:outline-none">
							<svg
								v-if="!isSidebarOpen"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<svg
								v-if="isSidebarOpen"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
				<!-- Branding -->
				<!-- Nav Sidebar -->
				<nav class="flex flex-col flex-wrap">
					<ul class="space-y-5">
						<li>
							<router-link :to="{ name: 'Dashboard' }">
								<a
									class="flex items-center px-4 py-3 space-x-5 hover:bg-white-overlay-700 rounded-full"
								>
									<svg
										width="800px"
										height="800px"
										class="h-5 w-5"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 18V9"
											stroke="#1C274C"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
										<path
											d="M12 18V6"
											stroke="#1C274C"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
										<path
											d="M17 18V13"
											stroke="#1C274C"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
										<path
											d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
											stroke="#1C274C"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
									</svg>
									<span v-if="isSidebarOpen" class="ml-4"> Dashboard </span>
								</a>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Enrollment' }">
								<a
									class="flex items-center px-4 py-3 space-x-5 hover:bg-white-overlay-700 rounded-full"
								>
									<svg
										width="800px"
										height="800px"
										class="h-5 w-5 text-black"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M19.25 7.57692C19.25 7.99114 19.5858 8.32692 20 8.32692C20.4143 8.32692 20.75 7.99114 20.75 7.57692H19.25ZM7.54545 21.75C7.95967 21.75 8.29545 21.4142 8.29545 21C8.29545 20.5858 7.95967 20.25 7.54545 20.25V21.75ZM16.6569 1.29459L17.1885 0.765534L16.6569 1.29459ZM20.75 7.57692V5.06666H19.25V7.57692H20.75ZM20.2404 3.83219L17.1885 0.765534L16.1253 1.82365L19.1772 4.8903L20.2404 3.83219ZM15.9481 0.25H2.50004V1.75H15.9481V0.25ZM0.250041 2.49999L0.250003 19.5L1.75 19.5L1.75004 2.5L0.250041 2.49999ZM2.5 21.75H7.54545V20.25H2.5V21.75ZM0.250003 19.5C0.250001 20.7426 1.25736 21.75 2.5 21.75V20.25C2.08579 20.25 1.75 19.9142 1.75 19.5L0.250003 19.5ZM2.50004 0.25C1.2574 0.25 0.250044 1.25736 0.250041 2.49999L1.75004 2.5C1.75004 2.08579 2.08583 1.75 2.50004 1.75V0.25ZM17.1885 0.765534C16.86 0.435529 16.4136 0.25 15.9481 0.25V1.75C16.0146 1.75 16.0783 1.7765 16.1253 1.82365L17.1885 0.765534ZM20.75 5.06666C20.75 4.60398 20.5668 4.16013 20.2404 3.83219L19.1772 4.8903C19.2239 4.93715 19.25 5.00056 19.25 5.06666H20.75Z"
											fill="#71717A"
										/>
										<path
											d="M5 6H15.5752"
											stroke="#71717A"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
										<path
											d="M5 11H10.2374"
											stroke="#71717A"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
										<path
											d="M5 16H7.24461"
											stroke="#71717A"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
										<circle
											cx="17.5"
											cy="17.5"
											r="5.5"
											stroke="#71717A"
											stroke-width="1.5"
										/>
										<path
											d="M15.5 18L16.5826 19.0826C16.8011 19.3011 17.1635 19.2711 17.3431 19.0197L19.5 16"
											stroke="#71717A"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<span v-if="isSidebarOpen" class="ml-4"> Enrollment </span>
								</a>
							</router-link>
							<!-- <router-link to="/login">Logout</router-link> -->
						</li>
						<li>
							<a
								class="flex items-center px-4 py-3 space-x-5 hover:bg-white-overlay-700 rounded-full"
							>
								<svg
									width="800px"
									height="800px"
									class="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.25 7.57692C19.25 7.99114 19.5858 8.32692 20 8.32692C20.4143 8.32692 20.75 7.99114 20.75 7.57692H19.25ZM7.54545 21.75C7.95967 21.75 8.29545 21.4142 8.29545 21C8.29545 20.5858 7.95967 20.25 7.54545 20.25V21.75ZM16.6569 1.29459L17.1885 0.765534L16.6569 1.29459ZM20.75 7.57692V5.06666H19.25V7.57692H20.75ZM20.2404 3.83219L17.1885 0.765534L16.1253 1.82365L19.1772 4.8903L20.2404 3.83219ZM15.9481 0.25H2.50004V1.75H15.9481V0.25ZM0.250041 2.49999L0.250003 19.5L1.75 19.5L1.75004 2.5L0.250041 2.49999ZM2.5 21.75H7.54545V20.25H2.5V21.75ZM0.250003 19.5C0.250001 20.7426 1.25736 21.75 2.5 21.75V20.25C2.08579 20.25 1.75 19.9142 1.75 19.5L0.250003 19.5ZM2.50004 0.25C1.2574 0.25 0.250044 1.25736 0.250041 2.49999L1.75004 2.5C1.75004 2.08579 2.08583 1.75 2.50004 1.75V0.25ZM17.1885 0.765534C16.86 0.435529 16.4136 0.25 15.9481 0.25V1.75C16.0146 1.75 16.0783 1.7765 16.1253 1.82365L17.1885 0.765534ZM20.75 5.06666C20.75 4.60398 20.5668 4.16013 20.2404 3.83219L19.1772 4.8903C19.2239 4.93715 19.25 5.00056 19.25 5.06666H20.75Z"
										fill="#71717A"
									/>
									<path
										d="M5 6H15.5752"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M5 11H10.2374"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M5 16H7.24461"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<circle
										cx="17.5"
										cy="17.5"
										r="5.5"
										stroke="#71717A"
										stroke-width="1.5"
									/>
									<path
										d="M15.5 18L16.5826 19.0826C16.8011 19.3011 17.1635 19.2711 17.3431 19.0197L19.5 16"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span v-if="isSidebarOpen" class="ml-4">Allocation</span>
							</a>
						</li>
						<li>
							<a
								class="flex items-center px-4 py-3 space-x-5 hover:bg-white-overlay-700 rounded-full"
							>
								<svg
									width="800px"
									height="800px"
									class="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.25 7.57692C19.25 7.99114 19.5858 8.32692 20 8.32692C20.4143 8.32692 20.75 7.99114 20.75 7.57692H19.25ZM7.54545 21.75C7.95967 21.75 8.29545 21.4142 8.29545 21C8.29545 20.5858 7.95967 20.25 7.54545 20.25V21.75ZM16.6569 1.29459L17.1885 0.765534L16.6569 1.29459ZM20.75 7.57692V5.06666H19.25V7.57692H20.75ZM20.2404 3.83219L17.1885 0.765534L16.1253 1.82365L19.1772 4.8903L20.2404 3.83219ZM15.9481 0.25H2.50004V1.75H15.9481V0.25ZM0.250041 2.49999L0.250003 19.5L1.75 19.5L1.75004 2.5L0.250041 2.49999ZM2.5 21.75H7.54545V20.25H2.5V21.75ZM0.250003 19.5C0.250001 20.7426 1.25736 21.75 2.5 21.75V20.25C2.08579 20.25 1.75 19.9142 1.75 19.5L0.250003 19.5ZM2.50004 0.25C1.2574 0.25 0.250044 1.25736 0.250041 2.49999L1.75004 2.5C1.75004 2.08579 2.08583 1.75 2.50004 1.75V0.25ZM17.1885 0.765534C16.86 0.435529 16.4136 0.25 15.9481 0.25V1.75C16.0146 1.75 16.0783 1.7765 16.1253 1.82365L17.1885 0.765534ZM20.75 5.06666C20.75 4.60398 20.5668 4.16013 20.2404 3.83219L19.1772 4.8903C19.2239 4.93715 19.25 5.00056 19.25 5.06666H20.75Z"
										fill="#71717A"
									/>
									<path
										d="M5 6H15.5752"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M5 11H10.2374"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M5 16H7.24461"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<circle
										cx="17.5"
										cy="17.5"
										r="5.5"
										stroke="#71717A"
										stroke-width="1.5"
									/>
									<path
										d="M15.5 18L16.5826 19.0826C16.8011 19.3011 17.1635 19.2711 17.3431 19.0197L19.5 16"
										stroke="#71717A"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span v-if="isSidebarOpen" class="ml-4">Registration</span>
							</a>
						</li>
						<li>
							<a
								class="flex items-center px-4 py-3 space-x-5 hover:bg-white-overlay-700 rounded-full"
							>
								<svg
									width="800px"
									height="800px"
									class="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.713 7.14977C12.1271 7.13953 12.4545 6.79555 12.4443 6.38146C12.434 5.96738 12.0901 5.63999 11.676 5.65023L11.713 7.14977ZM6.30665 12.193H7.05665C7.05665 12.1874 7.05659 12.1818 7.05646 12.1761L6.30665 12.193ZM6.30665 14.51L6.34575 15.259C6.74423 15.2382 7.05665 14.909 7.05665 14.51H6.30665ZM6.30665 17.6L6.26755 18.349C6.28057 18.3497 6.29361 18.35 6.30665 18.35L6.30665 17.6ZM9.41983 18.35C9.83404 18.35 10.1698 18.0142 10.1698 17.6C10.1698 17.1858 9.83404 16.85 9.41983 16.85V18.35ZM10.9445 6.4C10.9445 6.81421 11.2803 7.15 11.6945 7.15C12.1087 7.15 12.4445 6.81421 12.4445 6.4H10.9445ZM12.4445 4C12.4445 3.58579 12.1087 3.25 11.6945 3.25C11.2803 3.25 10.9445 3.58579 10.9445 4H12.4445ZM11.713 5.65023C11.299 5.63999 10.955 5.96738 10.9447 6.38146C10.9345 6.79555 11.2619 7.13953 11.676 7.14977L11.713 5.65023ZM17.0824 12.193L16.3325 12.1761C16.3324 12.1818 16.3324 12.1874 16.3324 12.193H17.0824ZM17.0824 14.51H16.3324C16.3324 14.909 16.6448 15.2382 17.0433 15.259L17.0824 14.51ZM17.0824 17.6V18.35C17.0954 18.35 17.1084 18.3497 17.1215 18.349L17.0824 17.6ZM13.9692 16.85C13.555 16.85 13.2192 17.1858 13.2192 17.6C13.2192 18.0142 13.555 18.35 13.9692 18.35V16.85ZM10.1688 17.6027C10.1703 17.1885 9.83574 16.8515 9.42153 16.85C9.00732 16.8485 8.67034 17.1831 8.66886 17.5973L10.1688 17.6027ZM10.0848 19.3L10.6322 18.7873L10.6309 18.786L10.0848 19.3ZM13.3023 19.3L12.7561 18.786L12.7549 18.7873L13.3023 19.3ZM14.7182 17.5973C14.7167 17.1831 14.3797 16.8485 13.9655 16.85C13.5513 16.8515 13.2167 17.1885 13.2182 17.6027L14.7182 17.5973ZM9.41788 16.85C9.00366 16.85 8.66788 17.1858 8.66788 17.6C8.66788 18.0142 9.00366 18.35 9.41788 18.35V16.85ZM13.9692 18.35C14.3834 18.35 14.7192 18.0142 14.7192 17.6C14.7192 17.1858 14.3834 16.85 13.9692 16.85V18.35ZM11.676 5.65023C8.198 5.73622 5.47765 8.68931 5.55684 12.2099L7.05646 12.1761C6.99506 9.44664 9.09735 7.21444 11.713 7.14977L11.676 5.65023ZM5.55665 12.193V14.51H7.05665V12.193H5.55665ZM6.26755 13.761C5.0505 13.8246 4.125 14.8488 4.125 16.055H5.625C5.625 15.6136 5.95844 15.2792 6.34575 15.259L6.26755 13.761ZM4.125 16.055C4.125 17.2612 5.0505 18.2854 6.26755 18.349L6.34575 16.851C5.95843 16.8308 5.625 16.4964 5.625 16.055H4.125ZM6.30665 18.35H9.41983V16.85H6.30665V18.35ZM12.4445 6.4V4H10.9445V6.4H12.4445ZM11.676 7.14977C14.2917 7.21444 16.3939 9.44664 16.3325 12.1761L17.8322 12.2099C17.9114 8.68931 15.191 5.73622 11.713 5.65023L11.676 7.14977ZM16.3324 12.193V14.51H17.8324V12.193H16.3324ZM17.0433 15.259C17.4306 15.2792 17.764 15.6136 17.764 16.055H19.264C19.264 14.8488 18.3385 13.8246 17.1215 13.761L17.0433 15.259ZM17.764 16.055C17.764 16.4964 17.4306 16.8308 17.0433 16.851L17.1215 18.349C18.3385 18.2854 19.264 17.2612 19.264 16.055H17.764ZM17.0824 16.85H13.9692V18.35H17.0824V16.85ZM8.66886 17.5973C8.66592 18.4207 8.976 19.2162 9.53861 19.814L10.6309 18.786C10.335 18.4715 10.1673 18.0473 10.1688 17.6027L8.66886 17.5973ZM9.53739 19.8127C10.0977 20.4109 10.8758 20.7529 11.6935 20.7529V19.2529C11.2969 19.2529 10.9132 19.0873 10.6322 18.7873L9.53739 19.8127ZM11.6935 20.7529C12.5113 20.7529 13.2894 20.4109 13.8497 19.8127L12.7549 18.7873C12.4739 19.0873 12.0901 19.2529 11.6935 19.2529V20.7529ZM13.8484 19.814C14.4111 19.2162 14.7211 18.4207 14.7182 17.5973L13.2182 17.6027C13.2198 18.0473 13.0521 18.4715 12.7561 18.786L13.8484 19.814ZM9.41788 18.35H13.9692V16.85H9.41788V18.35Z"
										fill="#000000"
									/>
								</svg>
								<span v-if="isSidebarOpen" class="ml-4">Notification</span>
							</a>
						</li>
					</ul>
				</nav>
				<!-- Nav Sidebar -->
			</div>
		</div>
	</aside>
</template>

<script setup>
import { ref, computed } from 'vue'

// Reactive state to manage sidebar open/closed state
const isSidebarOpen = ref(true)

// Computed property to dynamically change the sidebar width based on its open/closed state
const sidebarClass = computed(() => (isSidebarOpen.value ? 'w-64' : 'w-20'))

// Method to toggle the sidebar state
const toggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value
}

// Return properties to be used in the template
// return {
// 	isSidebarOpen,
// 	sidebarClass,
// 	toggleSidebar,
// }
</script>
