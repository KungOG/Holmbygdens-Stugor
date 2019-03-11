<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/booking">Booking</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/admin">Admin</router-link> 
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name : 'app',
  beforeMount () {
    /* Innan sidan laddas, ska den först hämta våra stugor */
    this.$store.dispatch('getCabin');
    }
}
</script>


<style lang="scss">
@import './scss/main.scss';

</style>
