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
@import '../scss/variables';
   #login {
        @extend %center;

        .modal {
            background: white;
            border-radius: 3px;
            width: $baseline * 10;
            display: grid;
            grid-template-columns: 1fr;
            box-shadow: 0 0 2rem rgba($color: #000000, $alpha: .2);

            @keyframes shake {
                0%       { transform: translateX(0);     }
                25%, 50% { transform: translateX(-.5rem); }
                75%, 100% { transform: translateX(.5rem);  }
            }

            &.rejected {
                animation: shake .2s ease;
                animation-iteration-count: 4;                
            }

            figure {
                height: $baseline * 6;
                @extend %center;
                flex-direction: column;

                img {
                    width: 60%;
                }

                figcaption {
                    font-weight: 700;
                    font-size: 1.2rem;
                    color: rgba($color: #000000, $alpha: .8);
                    margin: .25rem 0;
                }
            }

            input {
                border: none;
                padding: 1rem;
                font-size: 1rem;
                height: $baseline * 2;
                box-sizing: border-box;
                background: rgba($color: #000000, $alpha: .05);
                border-top: 1px solid rgba($color: #000000, $alpha: .2);
                transition: background .2s ease;

                &:focus {
                    outline: none;
                    background: rgba($color: $red, $alpha: .2);
                }

                &.valid {
                    background: rgba($color: $green, $alpha: .2);
                }

            }

            .btn {
                @extend %center;
                height: $baseline *3;
                background: $red;
                color: rgba($color: #FFF, $alpha: .6);
                font-weight: 700;
                text-decoration: none;
                font-size: 1.2rem;
                border-bottom-left-radius: 3px;
                border-bottom-right-radius: 3px;
                transition: background .2s ease;

                &.ready {
                    background: $green;
                    color: rgba($color: #FFF, $alpha: 1);
                }

            }
        }
    }
</style>
