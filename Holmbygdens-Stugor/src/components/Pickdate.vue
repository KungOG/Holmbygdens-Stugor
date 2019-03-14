<!-- Detta är bokningsprocessen där du kommer att bekräfta ditt datum -->
<template>
    <main class="content">
        <p v-if="cabin" :cabin="cabin">Du har just nu valt: {{cabin.name}} stugan.</p>
        <p>Var vänlig och fyll i datum du vill boka</p>
        <HotelDatePicker
        :minNights="3"
        ></HotelDatePicker>
        <button @click="setCabin(cabin)">Boka Stuga</button>
    </main>
</template>

<script>
import DatePick from 'vue-date-pick';
import HotelDatePicker from 'vue-hotel-datepicker'

export default {
    name : 'pickdate',
    components : {
         HotelDatePicker
    },
    computed : {
        cabin () {
            return this.$store.getters.getCabinsByCabinId(
                this.$route.params.id
            );
        }
    },
    methods : {
        setCabin (cabin) {
            this.$store.commit('setCabin', cabin);
            this.$router.push(`/book/${{_id}}`);
        }
    }
}

</script>

<style>

</style>
