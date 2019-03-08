<template>
    <main class="content">
    <section class="cabin">
        <h1>Admin site</h1>
    </section>
    <section class="addCabin">
        <input type="text" placeholder="namn" v-model="">
        <input type="number" placeholder="pris" v-model="">
        <input type="text" placeholder="stugområde" v-model="">
        <input type="text" placeholder="var adress" v-model="">
        <input type="text" placeholder="datum från" v-model="">
        <input type="text" placeholder="datum till" v-model="">
        <input type="text" placeholder="otillgänliga" v-model="">
        <input type="text" placeholder="tillgängliga" v-model="">
        <input type="text" placeholder="info" v-model="">
        <a href="#" class="btn">Lägg till Stuga</a>
    </section>
    <router-view />
    </main>
</template>

<script>
export default {
    name : 'admin',
    beforeMount () {
        this.$store.dispatch('getCabin');
    },
    data () {
        return {
            name: "",
            info: "",
            price: "",
            where: {
                city: "",
                adress: ""
            },
            date: {
                from: "",
                to: "",
                checkin: "15.00",
                checkout: "10.00"
            },
            cabins: {
                available: "",
                unavailable: ""
            }
        }
    },
    methods : {}
}
</script>


<style lang="scss">

</style>