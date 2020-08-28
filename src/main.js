import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import logo from './components/logo.vue'
import 'vant/lib/index.css'
import './styles/base.less'
import './styles/iconfont.css'
import 'amfe-flexible'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.use(Vant)
Vue.component('logo', logo)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
