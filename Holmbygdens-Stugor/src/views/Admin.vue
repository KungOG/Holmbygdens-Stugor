<template>
    <main class="content">
    <section class="cabin">
        <h1>Admin site</h1>
    </section>
    <section class="addCabin">
        <input type="text" placeholder="namn" v-model="newCabin.name">
        <input type="number" placeholder="pris" v-model="newCabin.price">
        <input type="text" placeholder="stugområde" v-model="newCabin.where.city">
        <input type="text" placeholder="var adress" v-model="newCabin.where.adress">
        <input type="text" placeholder="datum från" v-model="newCabin.date.from">
        <input type="text" placeholder="datum till" v-model="newCabin.date.to">
        <input type="text" placeholder="otillgänliga" v-model="newCabin.cabins.available">
        <input type="text" placeholder="tillgängliga" v-model="newCabin.cabins.unavailable">
        <input type="text" placeholder="info" v-model="newCabin.info">
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
    methods : {
        makeCabin () {
            this.$store.dispatch('makeCabin', this.newCabin);
            this.$store.dispatch('getCabin');
        }
    },
    computed : {
        cabins () {
            return this.$store.state.cabins;
        }
    }
}
</script>


<style lang="scss">

</style>