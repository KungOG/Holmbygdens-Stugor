<!-- Detta är i slutet av bokningsprocessen där du ser din bokning. Steg 4 av 4 -->
<template>
    <main class="">
        <bookcabin v-for="(eBooking, index) in eBooking" :key="index" :eBooked="eBooked" />
    </main>
</template>

<script>
import bookcabin from '@/components/BookCabin.vue'

export default {
    name : 'booked',
    components : {
        bookcabin
    },
    computed : {
        eBooking () {
            return this.$store.state.eBooking;
        }
    },
    beforeMount () {
        if (localStorage.getItem('eBooking')) {
            this.$store.dispatch('getBooked');
        }
    }
}
</script>



<style lang="scss">
</style>
