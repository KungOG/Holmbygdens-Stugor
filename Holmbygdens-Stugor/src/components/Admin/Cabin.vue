<!-- Här ser du mer info ang den stugan du klickar på inne i Cabins.vue -->
<template>
    <main class="cabin">
        <section class="addCabin" v-if="cabin">
            <input type="text" placeholder="name" v-model="cabin.name">
            <input type="text" placeholder="pris" v-model="cabin.price">
            <input type="text" placeholder="stugområde" v-model="cabin.where.city">
            <input type="text" placeholder="var adress" v-model="cabin.where.adress">
            <input type="text" placeholder="datum från" v-model="cabin.date.from">
            <input type="text" placeholder="datum till" v-model="cabin.date.to">
            <input type="text" placeholder="otillgänliga" v-model="cabin.cabin.available">
            <input type="text" placeholder="tillgängliga" v-model="cabin.cabin.unavailable">
            <input type="text" placeholder="info" v-model="cabin.info">
            <a href="#" class="btn" @click="redoCabin(cabin, cabin._id)">Redigera Stuga</a>
            <a href="#" class="btn" @click="id = cabin._id; deleteCabin()">Ta bort Stuga</a>         
        </section>
    </main>
</template>

<script>

export default {
    name : 'cabin',
    data () {
        return {
            id : ''
        }
    },
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
    methods : {
        /* Skicka iväg till Actions för att ta bort en bokning*/
        deleteCabin () {
           this.$store.dispatch('deleteCabin', this.id);
        },
        /* Skicka iväg till Actions ifall du behöver redigera en bokning */
        redoCabin (cabin, id) {
            this.$store.dispatch('redoCabin', {cabin : cabin, id : id})
        }
    }
}
</script>

<style>

</style>
