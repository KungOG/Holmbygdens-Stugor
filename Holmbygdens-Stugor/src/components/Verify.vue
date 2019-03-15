<template>
    <main class="addCabin">
    <h1>Verifiera bokningen</h1>
    <section class="verification" v-if="verificaton">
        <h1 v-if="verificaton.verified">Giltlig!</h1>
        <h1 v-if="!verificaton.verified">Ej giltlig bokning</h1>
        {{ verificaton.msg}}
    </section>
    <section class="form">
        <input type="text" name="code" 
        :value="code.toUpperCase()" 
        @input="code = $event.target.value.toUpperCase()" 
        :maxlength="codeLength"/>

        <br><br>
        <a href="#" class="btn" @click="verifyBooking">Verifera Koden</a>
    </section>
    </main>
</template>

<script>
export default {
    name : 'verify',
    data(){
        return{
            code: '',
            codeLength: 5
        }
    },
    computed: {
        verificaton(){
            return this.$store.state.verifyData;
        }
    },
    methods: {
        verifyBooking(){
            this.$store.dispatch('verifyBooking',
            this.code);
        }
    }
}
</script>
<style lang="scss">
.verification {
        margin: auto;
        font-size: 1.2rem;
        font-style: italic;
        padding: 2rem;
        color: black;
        text-align: center;

}

</style>
