<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'auth.login'}">
        Login
      </router-link>
      <router-link :to="{name: 'auth.register'}">
        Registrar  
      </router-link>
    </div>

    <router-view/>
    
  </div>
</template>
