<template>
    <main class="cabin">
        <p>adoiadiohadih</p>
        <h1>Im this {{cabin.name}}</h1>
    </main>
</template>

<script>
export default {
    name : 'cabins',
    computed : {
        cabins () {
            return this.$store.getters.getCabinsByCabinId(
                this.$route.params.id
            );
        }
    }
}
</script>

<style>
.cabin {
    background : lightgrey;
}
</style>
