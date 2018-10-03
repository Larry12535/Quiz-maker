<template>
    <section class='signup' v-on:keyup.13='signup'>
        <h1 class='createAccount'>Create a New Account</h1>
        <input placeholder='Email' name='username' v-model='email' :maxlength='maxLength'>
        <input placeholder='Name' v-model='name' :maxlength='maxLength'>
        <input placeholder='Password' type='password' v-model='password' :maxlength='maxLength'>
        <input placeholder='Re-enter Password' type='password' v-model='reenterPassword' :maxlength='maxLength'>
        <button class='signupButton' v-on:click='signup()'>Signup</button>
        <button class='passwordsNotMatch' v-if='notMatch' v-on:click='match'>Passwords Do Not Match!</button>
        <button class='emailTaken' v-if='emailTaken' v-on:click='taken'>Email Is Taken</button>
        <button class='errorMsg' v-if='error' v-on:click='removeErrorMsg'>{{error}}</button>
    </section>
</template>

<script>
    import API from '@/Config/API'
    import constants from '@/Config/Constants'

    export default {
        data() {
            return {
                email:'',
                name:'',
                password:'',
                reenterPassword:'',
                notMatch:false,
                emailTaken:false,
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
            async signup() {
                const { email, name, password, reenterPassword } = this
                if (password === reenterPassword) {
                    let rawResponse = await fetch(API.signup, {
                        method:'POST',
                        headers: {
                            'Content-Type':'application/json',
                            'Accept':'application/json'
                        },
                        body: JSON.stringify({
                            email,
                            name,
                            password
                        })
                    })
                    let response = await rawResponse.json()
                    if (response.success) {
                        this.setAccount(response.account)
                        this.$router.push({ path:`/user/${this.id}/dashboard` })
                    } else {
                        this.error = response.error
                    }
                } else {
                    this.notMatch = true
                }
            },
            match() {
                this.notMatch = false
            },
            taken() {
                this.emailTaken = false
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
    .signup {
        margin-top:100px;
        margin-bottom:100px;
        width:600px;
        height:600px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 3px 6px #BD9E65;
        background:#FFBE47;
    }

    .createAccount {
        font-family: sans-serif;
        font-weight:600;
        font-size:28px;
        color:#751B00;
    }

    .signup > input {
        width:400px;
        margin-top:20px;
        margin-bottom:20px;
        padding:10px;
        font-family: sans-serif;
        font-size:16px;
        box-sizing:border-box;
        border:1px solid #DDDDDD;
    }

    .signupButton {
        margin-top:15px;
        width:400px;
        padding:10px;
        background:#FF5151;
        color:white;
        font-size:20px;
        font-family: sans-serif;
        font-weight:600;
    }

    .signupButton:hover {
        background:red;
    }

    .passwordsNotMatch, .emailTaken, .errorMsg {
        margin-top:10px;
        color:red;
        font-family: sans-serif;
        font-size:16px;
    }
</style>
