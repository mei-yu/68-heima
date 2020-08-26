import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]

const router = new VueRouter({
  routes
})

export default router
