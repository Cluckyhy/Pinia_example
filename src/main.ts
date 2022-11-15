import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'

// 创建pinia实例
const pinia = createPinia()

// 挂载到 Vue 根实例
createApp(App).use(pinia).mount('#app')
