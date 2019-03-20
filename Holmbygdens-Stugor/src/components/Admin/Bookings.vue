<!-- Detta är admin bokningssidan där du ser de aktiva bokningarna -->
<template>
    <main>
        <section class="addCabin">
            <h1>Bokningar</h1>
               <ul>
                    <li v-for="booking in bookings" 
                    :key="booking._id" 
                    :booking="booking">
                    {{booking.code}} 

                    <a href="#" class="btn deletebtn"
                     @click="id = booking._id; 
                     deleteBooking()">Ta bort bokningen</a>
                    <a href="#" class="btn custombtn"
                     @click="id = booking._id; 
                     customBooking()">Ändra bokningen</a>
                    </li>
               </ul>
        </section>
        <section>
            <h1>Historik</h1>
        </section>
    </main>
</template>

<script>
export default {
    name : 'booking',
    beforeMount () {
        /* Innan sidan laddas, ska den först hämta våra bokade stugor */
        this.$store.dispatch('bookedCabins');
    },
    data () {
        return {
            id : ''
        }
    },
    computed : {
        bookings () {
            return this.$store.state.bookings;
        }
    },
    methods : {
        /* Ta bort en bokning */
        deleteBooking () {
           this.$store.dispatch('deleteBooking', this.id);
        }
    }
}
</script>
