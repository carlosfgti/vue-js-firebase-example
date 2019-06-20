<template>
  <div id="app">
    <div class="navbar">

      <div class="navbar-brand">
        <router-link :to="{name: 'home'}" class="navbar-item">
          <img src="./assets/imgs/logo-especializati-branca.png" alt="ESPECIALIZATI EAD">
        </router-link>
        <span class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      
      <div v-if="!me" class="navbar-menu">
        <router-link :to="{name: 'auth.login'}" class="navbar-item">
          Login
        </router-link>
        <router-link :to="{name: 'auth.register'}" class="navbar-item">
          Registrar  
        </router-link>
      </div>

      <div class="navbar-end" v-else>
        <a href="#" @click.prevent="logout" class="navbar-item">Sair</a>
      </div>
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

<style>
.navbar{background-color: #399e8c;}
.navbar a{color: #ffffff;}
.navbar a:hover{color: #399e8c;}
button{
    background: #399e8c;
    border: none;
    color: #FFFFFF;
}
.dropdown-menu{
  padding-top: 0;
}
.dropdown-content{
  background-color: #399e8c;
  color: #FFFFFF;
  border-radius: 0;
}
.navbar-item, .navbar-link {
  color: #ffffff;
}
</style>
