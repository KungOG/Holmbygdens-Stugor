<!-- Detta är i början av bokningsprocessen där du i steg fixar din bokning -->
<template>
    <main class='content'>
        <h1>Val av Stuga</h1>
        <tr v-for="cabin in cabins" :key="cabin._id" :cabin="cabin" @click="$router.push(`/booking/${cabin._id}`)">
            <td>{{cabin.name}}</td>
            <td>{{cabin.price}}</td>
            <td>{{cabin.info}}</td>
        </tr>
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
