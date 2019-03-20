<!-- Detta är i början av bokningsprocessen där du i steg fixar din bokning. Steg 1 av 4 -->
<template>
  <main>
    <section class="addCabin">
      <h1>Val av Stuga</h1>
      <select v-model="cabin" @change="handlePlace">

      <option v-for="cabin in cabins" 
      :key="cabin._id" 
      :value="cabin._id"> 
      {{ cabin.name }} </option>
      </select>
      <input type="text" 
      v-model="search" 
      placeholder="Filtrera sökning: "/>
      
      <tr v-for="cabin in filteredCabins"
      :key="cabin._id" :cabin="cabin"
      @click="$router.push(`/booking/${cabin._id}`)"
      class="availableCabins">
      <section class="name">
        <p class="name">
          <strong>Namn:</strong> 
          {{cabin.name}}</p>
      </section>
      <section class="price">
        <p class="price">
          <strong>Pris per natt:</strong>
           {{cabin.price}}</p>
      </section>
      <section class="info">
        <p class="info">
          <strong>Information om stugan:</strong>
          {{cabin.info}}</p>
      </section>
      <section class="img">
        <p class="img"><img :src="cabin.picture" @error="ifNoPicture"/></p>
      </section>  
        </tr>
      </section>
      <router-view />
    </main>
</template>

<script>
import noPicture from '@/assets/cabin2.png'
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
    }, 
    ifNoPicture (e) {
      e.target.src = noPicture
    }
  }
}
</script>
