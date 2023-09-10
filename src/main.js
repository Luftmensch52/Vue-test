import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './router'
// import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/less/index.less'
import { createPinia } from 'pinia'
import './api/mock.js'
import api from './api/api.js'
import { useStoreWithout } from './store';
import { useRoute } from 'vue-router'

const pinia = createPinia()
const app = createApp(App)

// app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$api = api
const store = useStoreWithout(pinia)
store.addMenu(router)
app.use(router)
app.use(pinia)

app.mount('#app')



