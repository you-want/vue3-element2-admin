import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from '@/router'
import pinia from '@/stores'
// custom directives
import directives from '@/directives/index'
// vue i18n
import I18n from '@/languages/index'
// errorHandler
import errorHandler from '@/utils/errorHandler'

// reset style sheet
import '@/styles/reset.scss'
// CSS common style sheet
import '@/styles/common.scss'
// iconfont css
import '@/assets/iconfont/iconfont.scss'
// element css
import 'element-plus/dist/index.css'
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css'
// custom element dark css
import '@/styles/element-dark.scss'
// custom element css
import '@/styles/element.scss'
// svg icons
import 'virtual:svg-icons-register'
// unocss
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(directives)
app.use(I18n)

app.config.errorHandler = errorHandler

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
