import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.map'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
