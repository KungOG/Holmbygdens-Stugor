<template>
    <main class="content">
    <h1>Verifiera bokningen</h1>
    <section class="verification" v-if="verificaton">
      <h1 v-if="verificaton.verified">Giltlig!</h1>
​      <h1 v-if="!verificaton.verified">Ej giltlig bokning</h1>
    </section>
    <section class="addCabin">
        <input type="text" name="code" class="verifyinput"
        :value="code.toUpperCase()" 
        @input="code = $event.target.value.toUpperCase()" 
        :maxlength="codeLength"
        :class="{valid :validCode}"/>

        <a href="#" class="verifybtn" 
        @click="verifyBooking" 
        :class="{ready :validCode}">Verifera Koden</a>
    </section>
    </main>
</template>

<script>
export default {
    name : 'verify',
    data(){
        return{
            code: '',
            codeLength: 5,
            validCode : false
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
    },
    watch : {
        code (val) {
            if (val.length > 4) {
                this.validCode = true;
            } else {
                this.validCode = false;
            }
        }
    }
}

</script>
<style lang="scss">
@import '../../scss/variables.scss';
@import '../../scss/special.scss';
</style>
