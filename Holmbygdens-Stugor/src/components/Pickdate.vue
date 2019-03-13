<template>
    <main>
        <p v-if="cabin">Du har just nu valt den här: {{cabin.name}} stugan.</p>
        <p>Var vänlig och fyll i datum du vill boka</p>
        <p>Incheckning</p><date-pick v-model="from"></date-pick>
        <p>Utcheckning</p><date-pick v-model="to"></date-pick>
    </main>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
    name : 'pickdate',
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
    components : {
        DatePick
    },
    data : () => ({
        from : '2019-01-01',    
        to : '2019-01-02'    
    })

}
</script>

<style>

</style>
