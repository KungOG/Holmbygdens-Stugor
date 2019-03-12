<template>
    <main class="cabin">
        <thead>
            <tr>
                <th>Stuga</th>
                <th>Stugområde</th>
                <th>Stugo adress</th>
                <th>Information</th>
                <th>Pris</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="cabins">
                <td>{{cabins.name}}</td>
                <td>{{cabins.where.city}}</td>
                <td>{{cabins.where.adress}}</td>
                <td>{{cabins.info}}</td>
                <td>{{cabins.price}}</td>
                <button @click="deleteCabin(index)">X</button>
            </tr>
        </tbody>
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

<style lang="scss">
.cabin {
    background : lightgrey;
}
</style>
