<template>
    <main class='content'>
        <h1>Val av Stuga</h1>
        <ul>
            <li v-for="cabin in cabins" :key="cabin._id" :cabin="cabin" @click="$router.push(`/booking/${cabin._id}`)">
            {{cabin.name}} <em>Klicka för mer info</em></li>
        </ul>
        <router-view />
    </main>
</template>

<script>


export default {
    name : 'booking',
    beforeMount () {
        /* Innan sidan laddas, ska den först hämta våra stugor */
        this.$store.dispatch('getCabin');
    },
    computed : {
        cabins () {
            /* Hämta alla stugor */
            return this.$store.state.cabins;
        }
    }
}
</script>

<style lang="scss">

</style>
