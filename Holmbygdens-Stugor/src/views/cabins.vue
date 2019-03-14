<template>
  <main id= "cabin">
    <header>
      <h1>CabinS</h1>
    </header>
    <section id="input">
      <input type="text" v-model="search" placeholder="find cabin">
    </section>
    <section class="cabin scrolling-box">
      <cabin-item v-for="item in filteredCabins" :key="item.id" :item="item"/>
    </section>
  </main>
</template>

<script>
import cabinItem from '@/components/cabin-item';

export default {
    name: 'cabins',
    data(){
      return {
        search: ""
      }
    },
    components: {
      cabinItem
    },
    computed: {
      cabins(){
        return this.$store.state.cabins;
      },
      filteredCabins(){
        return this.cabins.filter((cabin) => {
          return cabin.name.match(this.search);
        })
      }
    }
  }
</script>

<style>

  .scrolling-box {
    display: block;
    overflow-y: scroll;
    height: 510px;
    background: rgb(199,21,133);
    width: 100vw;

  }


</style>
