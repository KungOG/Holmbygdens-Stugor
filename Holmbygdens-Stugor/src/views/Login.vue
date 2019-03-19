<template>
    <main id="login">
        <article class="modal">
            <input v-model="username" type="text" class="username" placeholder="username" :class="{ valid : validUsername, rejected : rejected}">
            <input v-model="password" type="password" placeholder="password" :class="{ valid : validPassword }">
            <a href="#" class="btn" @click="login" :class="{ ready : validPassword && validUsername }">Login</a>
        </article>
    </main>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
        username: '',
        password: '',
        validUsername: true,
        validPassword: true
        }
    },
    methods: {
        login(){
            if(this.validUsername && this.validPassword){

                this.$store.dispatch('login', {username: this.username, password: this.password });
                this.$router.push('/admin');
            }
        }
    },
    watch: {
        username(val){
            if(val.length > 4 /*&& val.includes('@')*/){
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
    },
    computed: {
        rejected(){
            return this.$store.state.rejected;
        }
    }

}
</script>

<style lang="scss">
</style>
