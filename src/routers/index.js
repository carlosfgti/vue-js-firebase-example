import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import routes from './routes.map'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  setTitle(to.meta.title)

  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser)
    return router.push({name: 'auth.login'})
  else if (!requireAuth && currentUser)
    return router.push({name: 'chat'})

  next()
})

const setTitle = (title) => {
  document.title = title
}

export default router
