<template>
    <main class="content">
    <section class="cabin">
        <h1>Admin site</h1>
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
            <tr v-for="(cabin, index) in cabins" :key="cabin._id" :cabin="cabin" @click="$router.push(`/${cabin._id}`)">
                <td>{{cabin.name}}</td>
                <td>{{cabin.where.city}}</td>
                <td>{{cabin.where.adress}}</td>
                <td>{{cabin.info}}</td>
                <td>{{cabin.price}}</td>
                <button @click="deleteCabin(index)">X</button>
            </tr>
        </tbody>
    </section>
    <section class="addCabin">
        <!-- Detta är våran information och våran mall som 
             vi skickar för att skapa en ny stuga till våran databas. -->
        <input type="text" placeholder="namn" v-model="newCabin.name">
        <input type="number" placeholder="pris" v-model="newCabin.price">
        <input type="text" placeholder="stugområde" v-model="newCabin.where.city">
        <input type="text" placeholder="var adress" v-model="newCabin.where.adress">
        <input type="text" placeholder="datum från" v-model="newCabin.date.from">
        <input type="text" placeholder="datum till" v-model="newCabin.date.to">
        <input type="text" placeholder="otillgänliga" v-model="newCabin.cabin.available">
        <input type="text" placeholder="tillgängliga" v-model="newCabin.cabin.unavailable">
        <input type="text" placeholder="info" v-model="newCabin.info">
        <a href="#" class="btn" @click="makeCabin">Lägg till Stuga</a>
    </section>
    <router-view />
    </main>
</template>

<script>
export default {
    name : 'admin',
    beforeMount () {
        /* Innan sidan laddas, ska den först hämta våra stugor */
        this.$store.dispatch('getCabin');
    },
    data () {
        return {
            /* Våran mall fyller sedan detta för att sedan skickas till DB:n */
            newCabin : {
                name : '',
                info : '',
                price  : '',
                where : {
                    city : '',
                    adress : '',
                },
                date : {
                    from : '',
                    to : '',
                    checkin : "15:00",
                    checkout : "10:00"
                },
                cabin : {
                    available : '',
                    unavailable : '',
                }
            }
        }
    },
    methods : {
        makeCabin () {
            /* Här skickar vi den nya stugan och därefter 
            * hämtar vi den nya infon för att kunna uppdatera våran lista */
            this.$store.dispatch('makeCabin', this.newCabin);
            this.$store.dispatch('getCabin');
        },
        deleteCabin (index) {
            this.cabins.splice(index, 1);
        }
    },
    computed : {
        cabins () {
            return this.$store.getters.cabins;
        }
    }
}
</script>


<style lang="scss">

</style>