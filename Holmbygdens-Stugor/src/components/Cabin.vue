<template>
    <main class="cabin">
        <tbody>
            <tr v-if="cabin">
                <td>{{cabin.name}}</td>
                <td>{{cabin.where.city}}</td>
                <td>{{cabin.where.adress}}</td>
                <td>{{cabin.info}}</td>
                <td>{{cabin.price}}</td>
            </tr>          
            <button @click="deleteCabin(cabin)">Ta bort</button>
            <button @click="redoCabin(cabin)">Redigera</button>
        </tbody>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name : 'cabin',
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
        deleteCabin (cabin, _id) {
            console.log(_id)
           axios.delete('http://localhost:3000/cabins/' + _id)
           .then(response => this.cabin.splice(index, 1));
        }
    }
}
</script>

<style>

</style>
