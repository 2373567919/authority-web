import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import './permission'
import '@/assets/styles/index.scss'
import SvgIcon from '@/components/SvgIcon/SvgIcon'

createApp(App).use(store).use(router).use(ElementPlus).use(SvgIcon).mount('#app')
