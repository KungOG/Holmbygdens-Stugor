<template>
    <main class="cabin">
        <tbody>
            <tr v-if="cabin">
                <td>{{cabin.name}}</td>
                <td>{{cabin.where.city}}</td>
                <td>{{cabin.where.adress}}</td>
                <td>{{cabin.info}}</td>
                <td>{{cabin.price}}</td>
                <button @click="deleteCabin(cabin)">X</button>
            </tr>
        </tbody>
    </main>
</template>

<script>
export default {
    name : 'cabin',
    computed : {
        cabin () {
            return this.$store.getters.getCabinsByCabinId(
                this.$route.params.id
            );
        }
    },
    methods : {
        deleteCabin (cabin) {
            console.log(cabin);
            this.cabins.splice(cabin, 1);
        }
    }
}
</script>

<style>

</style>
