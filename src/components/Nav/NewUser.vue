<template>
    <section class="newUser">
        <div class='buttonWrapper'>
            <button class='login'>Login</button>
        </div>
        <div class='buttonWrapper'>
            <button class='signup'>Sign Up</button>
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

    .buttonWrapper > button {
        margin-left:20px;
        margin-right:20px;
        height:70%;
        font-size:20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
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
        box-sizing:border-box;
    }

    .login:hover {
        color:orangered;
    }
</style>
