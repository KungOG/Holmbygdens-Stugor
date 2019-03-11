<template>
    <main class="cabin">
        <tr>
            <td>{{cabins.name}}</td>
            <td>{{cabins.where.city}}</td>
            <td>{{cabins.where.adress}}</td>
            <td>{{cabins.info}}</td>
            <td>{{cabins.price}}</td>
            <button @click="deleteCabin(index)">X</button>
        </tr>
    </main>
</template>

<script>
export default {
    name : 'cabins',
    methods : {
        deleteCabin (index) {
            this.cabins.splice(index, 1);
        }
    },
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
