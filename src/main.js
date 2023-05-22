import { createApp } from 'vue'
import App from './App.vue'

import './index.css'

import router from './router/index'
import store from './store/index'

// Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-blue/theme.css";  
// import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from 'primevue/toastservice';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(store).use(PrimeVue).use(ToastService).mount('#app')
