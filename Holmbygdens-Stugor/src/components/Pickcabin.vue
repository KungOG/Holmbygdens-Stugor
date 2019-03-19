<!-- Detta är bokningsprocessen där du därefter kommer att bekräfta ditt datum. Steg 2 av 4-->
<template>
    <main class="content">

        <p v-if="cabin" :cabin="cabin">Du har just nu valt: {{cabin.name}} stugan.</p>
        <button @click="setCabin(cabin)">Boka Stuga</button>
    </main>
</template>

<script>

export default {
    name : 'pick-cabin',
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

<style>

</style>
