<!-- Detta är admin bokningssidan där du ser de aktiva bokningarna -->
<template>
    <main>
        <section>
            <h1>Aktiva bokningar</h1>
            
        </section>
        <section>
            <h1>Historik bokningar</h1>
        </section>
    </main>
</template>

<script>
export default {
    name : 'booking',
    computed : {
        bookings () {
            return this.$store.state.bookings;
        }
    }
}
</script>

<style lang="scss">

</style>
