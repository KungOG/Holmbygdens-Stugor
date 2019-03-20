<!-- Här ser du mer info ang den stugan du klickar på inne i Cabins.vue -->
<template>
    <article>
        <section class="addCabin" v-if="cabin">
            <input type="text" placeholder="Name" v-model="cabin.name">
            <input type="text" placeholder="Pris per natt" v-model="cabin.price">
            <input type="text" placeholder="Bild länk" v-model="cabin.picture">
            <input type="text" placeholder="Stad" v-model="cabin.where.city">
            <input type="text" placeholder="Adress till stugan" v-model="cabin.where.adress">
            <input type="text" placeholder="Från datum" v-model="cabin.date.from">
            <input type="text" placeholder="Till datum" v-model="cabin.date.to">
            <input type="text" placeholder="Antal otillgänliga stugor" v-model="cabin.cabin.available">
            <input type="text" placeholder="Antal tillgänliga stugor" v-model="cabin.cabin.unavailable">
            <input type="text" placeholder="Mer information om stugan" v-model="cabin.info">
            <a href="#" class="btn custombtn" @click="redoCabin(cabin, cabin._id)">Redigera Stuga</a>
            <a href="#" class="btn deletebtn" @click="id = cabin._id; deleteCabin()">Ta bort Stuga</a>         
        </section>
    </article>
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