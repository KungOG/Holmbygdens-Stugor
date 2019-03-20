<!-- Detta är i början av bokningsprocessen där du i steg fixar din bokning. Steg 1 av 4 -->
<template>
  <main>
    <section class="addCabin">
      <h1>Val av Stuga</h1>
      <select v-model="author" @change="handlePlace">
        <option v-for="cabin in cabins" :key="cabin._id" :value="cabin._id"> {{ cabin.where.city }} </option>
      </select>
      <input type="text" v-model="search" placeholder="Filtrera sökning: " />
      <tr v-for="cabin in filteredCabins" 
      :key="cabin._id" :cabin="cabin" 
      @click="$router.push(`/booking/${cabin._id}`)"
      class="availableCabins">
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
        search: "",
        author: "",
        cabin: ""
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
            let results = cabin.name.match(this.search);
              this.cabin = results;
              return results;
            })
          }
    },
    methods: {
    handlePlace(){
      this.$router.push(`/booking/${this.cabin}`);
    }
    }
}
</script>