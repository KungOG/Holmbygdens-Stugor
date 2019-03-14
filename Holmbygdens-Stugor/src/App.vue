<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/booking">Booking</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/cabins">cabinS</router-link> |
      <router-link to="/admin">Admin</router-link>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name : 'app',

}
</script>


<style lang="scss">
@import './scss/main.scss';

</style>
