<template>
    <section class="newUser">
        <div class='left'>
            <router-link to='/' class='home'></router-link>
        </div>
        <div class='right'>
            <router-link to='/login' class='login'>Login</router-link>
            <router-link to='/signup' class='signup'>Sign Up</router-link>
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
        display:flex;
    }

    .left {
        flex:1;
        display:flex;
        justify-content: flex-start;
        align-items: center;
    }

    .right {
        flex:1;
        display:flex;
        justify-content: flex-end;
        align-items: center;
    }

    a {
        font-size:20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        margin-left:30px;
        margin-right:30px;
    }

    .home {
        height:50px;
        width:50px;
        background-image:url('../../Assets/Images/Q.jpg');
        background-size:contain;
    }

    .signup {
        padding:10px;
        box-sizing:border-box;
        border:2px solid orangered;
        color:orangered;
    }

    .signup:hover {
        background:orangered;
        color:white;
    }

    .login {
        padding:10px;
    }

    .login:hover {
        color:orangered;
    }
</style>
