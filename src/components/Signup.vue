<template>
    <section class='signup'>
        <h1 class='createAccount'>Create a New Account</h1>
        <input placeholder='Email' v-model='registration.email'>
        <input placeholder='Name' v-model='registration.name'>
        <input placeholder='Password' type='password' v-model='registration.password'>
        <input placeholder='Re-enter Password' type='password' v-model='registration.reenterPassword'>
        <button class='signupButton' v-on:click='Signup'>Signup</button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                registration: {
                    email:'',
                    name:'',
                    password:'',
                    reenterPassword:''
                }
            }
        },
        methods: {
            Signup() {
                console.log(this.registration.email)
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
</style>
