<template>
<main>
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
</main>
</template>

<script>
export default {
    name : 'add-cabin',
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
        }
    }
}
            
</script>
<style lang="scss">
</style>
