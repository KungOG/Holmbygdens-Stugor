<!-- Detta är bokningsprocessen där du kommer att bekräfta din bokning. Steg 3 av 4 -->
<template>
    <main id="book">
    <section class="content" v-if="cabin">
        <h1>{{ cabin.name }}</h1>
        <article class="price">{{ cabin.price * amount }} sek</article><br>
        <p>Var vänlig och fyll i datum du vill boka</p>
        <em><strong>OBS! Ni måste minst boka 3 nätter.</strong></em>
        <input type="date" :min="today" v-model="checkIn"/>
        <input type="date" :min="checkIn" v-model="checkOut"/>

        <div id="app">
      <p v-if="seen"><a v-if="seen" href="#" class="btn" @click="booked">Booka din Stuga</a>
      <br> Är du säker på att du vill boka?</p>
      <a href="#" v-if="!seen" v-on:click="seen = !seen">Booka din Stuga</a>
      </div>

    </section>
    <section class="content" v-if="!cabin">
      <p>Ingen bokning vald.</p>
      <a href="#" class="btn" @click="$router.push('/booking')">Gå tillbaka</a>
    </section>
  </main>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker'
export default {
    name : 'book',
    components : {
        HotelDatePicker
    },

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
        booked () {
            this.$store.dispatch('booked', {
                cabin : this.cabin._id,
                amount : this.amount
            })
            this.$router.push('/booked')
        },
        getDate (e) {
            console.log(e);
        },
        handleDate(){
            console.log(this);
        }
    }
}
</script>

<style lang="scss">

</style>
