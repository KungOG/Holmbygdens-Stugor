<!-- Detta är i början av bokningsprocessen där du i steg fixar din bokning -->
<template>
    <main class="content">
        <section class="cabin">
        <h1>Val av Stuga</h1>

        <section id="input">
      <input type="text" v-model="search" placeholder="Filter results" />
    </section>


        <tr v-for="cabin in filteredCabins" :key="cabin._id" :cabin="cabin" @click="$router.push(`/booking/${cabin._id}`)">
            <td>{{cabin.name}}</td>
            <td>{{cabin.price}}</td>
            <td>{{cabin.info}}</td>
        </tr>
        </section>
        <router-view />
    </main>
</template>

<script>
export default {
    name : 'booking',
    data(){
      return {
        search: ""
      }
    },
    beforeMount () {
        /* Innan sidan laddas, ska den först hämta våra stugor */
        this.$store.dispatch('getCabin');
    },
    computed : {
        cabins () {
            /* Hämta alla stugor */
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

<style lang="scss">

.choose {
border-style: solid;
}

</style>
