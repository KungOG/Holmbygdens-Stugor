<!-- Nybyggd stuga eller nyinköpt stuga, så finns denna för att lägga till den nya stugan -->
<template>
<article>
    <section class="addCabin">
        <!-- Detta är våran information och våran mall som
             vi skickar för att skapa en ny stuga till våran databas. -->
        <input type="text" placeholder="Namn" v-model="newCabin.name">
        <input type="number" placeholder="Pris per natt" v-model="newCabin.price">
        <input type="text" placeholder="Bild länk" v-model="newCabin.picture">
        <input type="text" placeholder="Stad" v-model="newCabin.where.city">
        <input type="text" placeholder="Adress till Stugan" v-model="newCabin.where.adress">
        <input type="text" placeholder="Från datum" v-model="newCabin.date.from">
        <input type="text" placeholder="Till datum" v-model="newCabin.date.to">
        <input type="text" placeholder="Antal otillgänliga stugor" v-model="newCabin.cabin.available">
        <input type="text" placeholder="Antal tillgängliga Stugor" v-model="newCabin.cabin.unavailable">
        <input type="text" placeholder="Mer information om stugan" v-model="newCabin.info">
        <a href="#" class="btn custombtn" @click="makeCabin">Lägg till Stuga</a>
    </section>
</article>
</template>

<script>
export default {
    name : 'add-cabin',
    data () {
        return {
            /* Våran mall fyller sedan detta för att sedan skickas till DB:n */
            newCabin : {
                name : '',
                picture : '',
                info : '',
                price  : '',
                where : {
                    city : '',
                    adress : '',
                },
                date : {
                    from : '',
                    to : '',
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
