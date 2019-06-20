<template>
  <div id="app">
    <div id="nav">
      <div v-if="!me">
        <router-link :to="{name: 'auth.login'}">
          Login
        </router-link>
        <router-link :to="{name: 'auth.register'}">
          Registrar  
        </router-link>
      </div>
      <a href="#" v-else @click.prevent="logout">Sair</a>
    </div>

    <div class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  updated () {
    this.me = firebase.auth().currentUser
  },

  data () {
    return {
      me: null
    }
  },

  methods: {
    logout () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({name: 'auth.login'})
        })
    }
  }
}
</script>
