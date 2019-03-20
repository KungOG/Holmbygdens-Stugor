<template>
    <main class="content">
        <article class="addCabin">
            <input v-model="username" 
            type="text" 
            placeholder="username" class="verifyinput" 
            :class="{ valid : validUsername, rejected : rejected}">

            <input v-model="password" class="verifyinput"
            type="password" placeholder="password" 
            :class="{ valid : validPassword }">

            <a href="#" class="verifybtn" @click="login" 
            :class="{ ready : validPassword && validUsername }">Login</a>
        </article>
    </main>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            username: 'Alexandra',
            password: '123',
            validUsername: true,
            validPassword: true
        }
    },
    methods: {
        login(){
            if(this.validUsername && this.validPassword){
                this.$store.dispatch('login', {
                    username: this.username, 
                    password: this.password });

                this.$router.push('/admin');
            }
        }
    },
    watch: {
        username(val){
            if(val.length >= 5 ){
                this.validUsername = true;
            } else {
                this.validUsername = false;
            }
        },
        password(val){
            if(val.length > 4 ){
                this.validPassword = true;
            } else {
                this.validPassword = false;
            }
        }
    }

}
</script>
<style lang="scss">
@import '../../scss/variables';
@import '../../scss/special';
</style>
