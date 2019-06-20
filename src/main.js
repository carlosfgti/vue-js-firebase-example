import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'
import router from './routers'
import store from './store/'
import { firebase } from './plugins'

Vue.config.productionTip = false
Vue.use(Buefy)

let app = ''
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
