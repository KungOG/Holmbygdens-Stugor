<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/booking">Booking</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/admin">Admin</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './scss/main.scss';

</style>
