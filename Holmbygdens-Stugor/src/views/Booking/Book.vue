<!-- Detta är bokningsprocessen där du kommer att bekräfta din bokning. Steg 3 av 4 -->
<template>
    <article>
    <section class="addCabin" v-if="cabin">
        <h1>{{ cabin.name }}</h1>
        <article class="price">{{ cabin.price * amount }} sek</article><br>
        <p>Var vänlig och fyll i datum du vill boka</p>
        <input type="date" :min="new Date()" v-model="checkIn"/>
        <input type="date" :min="checkIn" v-model="checkOut"/>
         
        <a href="#" class="custombtn" v-if="!seen" v-on:click="seen = !seen">Booka din Stuga</a>
        <p v-if="seen">Var vänlig att bekräfta din bokning</p>
        <a v-if="seen" href="#" class="custombtn" @click="booked">Bekräfta</a>
    </section>
    <section class="content" v-if="!cabin">
      <p>Ingen bokning vald.</p>
      <a href="#" class="deletebtn" @click="$router.push('/booking')">Gå tillbaka</a>
    </section>
  </article>
</template>

<script>
export default {
    name : 'book',
    data () {
        return {
            amount : 1,
            checkIn: null,
            checkOut: null,
            seen: false,
        }
    },
    computed: {
        cabin () {
            return this.$store.state.cabin;
        }
    },
    methods : {
        /* Skicka med datumen som man får ange för sin bokning */
        booked () {
            let newCabin = this.cabin;
                newCabin.date.from = this.checkIn
                newCabin.date.to = this.checkOut
            /* Skicka sedan iväg till Action för att utföra bokningen*/
            this.$store.dispatch('booked', {
                cabin : newCabin
            })
            /* Skicka vidare där kunden får se sin bokning */
            this.$router.push('/booked')
        }
    }
}
</script>