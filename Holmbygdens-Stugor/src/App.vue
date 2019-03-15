<template>
  <div id="app">
     
     <Slide>
      <div id="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/booking">Booking</router-link> 
        <router-link to="/profile">Profile</router-link> 
        <router-link to="/admin">Admin</router-link>        
      </div>
      </Slide>
        <img alt="stuga i skogen" src="@/assets/cabin.jpg">
      <router-view/>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'

export default {
  name : 'app',
  components : {
    Slide
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';


</style>
