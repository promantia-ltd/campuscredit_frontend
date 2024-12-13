import './styles/tailwind.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import pinia from './store'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(pinia)
app.use(router)
// app.use(PrimeVue)
// app.use(PrimeVue, { unstyled: true }) tailwind-base, tailwind-utilities
app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: 'light',
			cssLayer: false,
		},
	},
})
app.mount('#app')
