<template>
  <div id="app">
     <Slide id="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/booking">Booking</router-link> 
        <router-link to="/admin">Admin</router-link>               
        <router-link to="/about">About</router-link> 
      </Slide>
      <section class="home-picture" > 
        <img class="home-picture" alt="stuga i skogen" src="@/assets/cabin.png">
      </section>
      <router-view/>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'

export default {
  name : 'app',
  components : {
    Slide
  },
  computed: {
    user(){
      return this.$store.state.activeUser;
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>