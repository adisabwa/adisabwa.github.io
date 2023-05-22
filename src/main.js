import { createApp } from 'vue'
import App from "./App.vue"
let app = createApp(App)

//Modules
import router from './router'
app.use(router)

//Styling
import '@/styles/tailwind.css'
import '@/styles/app.scss'
import ElementPlus from 'element-plus'
import GetIcon from '@/components/Icon.vue'
app.component('icons', GetIcon)
//Variables
import config from '@/helpers/config';
app.config.globalProperties.$baseUrl = config.baseUrl; 

app.mount('#app')
