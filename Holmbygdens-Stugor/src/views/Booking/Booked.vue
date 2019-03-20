<!-- Detta är i slutet av bokningsprocessen där du ser din bokning. Steg 4 av 4 -->
<template>
    <main class="content">
        <BookCabin v-for="(eBooked, index) in eBookeds" 
        :key="index" 
        :eBooked="eBooked" />
    </main>
</template>

<script>
import BookCabin from '@/components/Booking/BookCabin'

export default {
    name : 'booked',
    components : {
        BookCabin
    },
    computed : {
        eBookeds () {
            return this.$store.state.eBooked;
        }
    },
    beforeMount () {
        if (localStorage.getItem('eBooked')) {
            this.$store.dispatch('getBooked');
        }
    }
}
</script>