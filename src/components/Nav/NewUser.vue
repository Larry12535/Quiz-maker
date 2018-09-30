<template>
    <section class="newUser">
        <div class='buttonWrapper'>
            <router-link to='/Login' class='login'>Login</router-link>
        </div>
        <div class='buttonWrapper'>
            <router-link to='/Signup' class='signup'>Sign Up</router-link>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .newUser {
        width:100%;
        height:100%;
        box-sizing:border-box;
        border-bottom:1px solid #A8A8A8;
        background-color:white;
        display:flex;
        justify-content: center;
    }

    .buttonWrapper {
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .signup {
        padding:10px;
        box-sizing:border-box;
        border:2px solid orangered;
        color:orangered;
        font-size:20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
    }

    .signup:hover {
        background:orangered;
        color:white;
    }

    .login {
        padding:10px;
        font-size:20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
    }

    .login:hover {
        color:orangered;
    }
</style>
