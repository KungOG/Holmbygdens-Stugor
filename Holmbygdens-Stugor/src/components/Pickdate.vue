<template>
    <main class="content">
        <p v-if="cabin">Du har just nu valt: {{cabin.name}} stugan.</p>
        <p>Var vänlig och fyll i datum du vill boka</p>
        <HotelDatePicker
        :disabledDaysOfWeek="['Saturday', 'Tuesday', 'Wednesday', 'Friday', 'Sunday']"
        :enableCheckout="true"
        :minNights="3"
        ></HotelDatePicker>
        <button @click="selectedCabin(cabin)">Boka Stuga</button>
    </main>
</template>

<script>
import DatePick from 'vue-date-pick';
import HotelDatePicker from 'vue-hotel-datepicker'

export default {
    name : 'pickdate',
    computed : {
        cabin () {
            return this.$store.getters.getCabinsByCabinId(
                this.$route.params.id
            );
        },
        cabins () {
            return this.$store.state.cabins;
        }
    },
    components : {
         HotelDatePicker
    }
}
</script>

<style>

</style>
