<template>
    <section class='login' v-on:keyup.13='login'>
        <h1 class='welcome'>Welcome To Quiz Maker</h1>
        <input placeholder='Email' name='username' v-model='email' :maxlength='maxLength'>
        <input placeholder='Password' name='password' type='password' v-model='password' :maxlength='maxLength'>
        <button class='loginButton' v-on:click='login'>Login</button>
        <button class='errorMsg' v-if='error' v-on:click='removeErrorMsg'>{{error}}</button>
        <button class='forgotPass'>Forgot your password?</button>
    </section>
</template>

<script> 
    import API from '@/Config/API'
    import constants from '@/Config/Constants'

    export default {
        data() {
            return {
                email:'',
                password:'',
                error:'',
                maxLength: constants.maxLength
            }
        },
        computed: {
            id() {
                return this.$store.getters.id
            }
        },
        methods: {
            async login() {
                const { email, password } = this
                let rawResponse = await fetch(API.login, {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'application/json'
                    },
                    body: JSON.stringify({ email, password })
                })
                let response = await rawResponse.json()
                if (response.success) {
                    this.setAccount(response.account)
                    this.$router.push({ path:`/user/${this.id}/dashboard` })
                } else {
                    this.error = response.error
                }
            },
            removeErrorMsg() {
                this.error = ''
            },
            setAccount(account) {
                this.$store.commit('account', account)
            }
        }
    }
</script>

<style scoped>
    .login {
        margin-top:100px;
        margin-bottom:100px;
        width:600px;
        height:500px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 3px 6px #BD9E65;
        background:#FFBE47;
    }

    .welcome {
        font-family: sans-serif;
        font-weight:600;
        font-size:28px;
        color:#751B00;
    }

    .login > input {
        width:400px;
        margin-top:20px;
        margin-bottom:20px;
        padding:10px;
        font-family: sans-serif;
        font-size:16px;
        box-sizing:border-box;
        border:1px solid #DDDDDD;
    }

    .login > button {
        margin-top:10px;
        margin-bottom:10px;
    }

    .loginButton {
        width:400px;
        padding:10px;
        background:#FF5151;
        color:white;
        font-size:20px;
        font-family: sans-serif;
        font-weight:600;
    }

    .loginButton:hover {
        background:red;
    }

    .forgotPass {
        font-family: sans-serif;
        font-size:16px;
        font-weight:600;
    }

    .errorMsg {
        color:red;
        font-family: sans-serif;
        font-size:16px;
    }
</style>
