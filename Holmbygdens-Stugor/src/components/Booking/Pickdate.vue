<!-- Detta är bokningsprocessen där du kommer att bekräfta ditt datum -->
<template>
    <article class="addCabin">
        <p v-if="cabin" :cabin="cabin">Du har just nu valt: <strong>{{cabin.name}}</strong> stugan.</p>
        <a href="#" class="custombtn" @click="setCabin(cabin)">Boka Stuga</a>
    </article>
</template>

<script>

export default {
    name : 'pickdate',
    computed : {
        cabin () {
            return this.$store.getters.getCabinsByCabinId(
                this.$route.params.id
            );
        }
    },
    methods : {
        setCabin (cabin) {
            this.$store.commit('setCabin', cabin);
            this.$router.push(`/book/${cabin._id}`);
        }
    }
}
</script>