<template>
    <section class='mainPage'>
        <Navbar/>
        <div class='loginWrapper'>
            <Login/>
        </div>
    </section>
</template>

<script>
import { Navbar } from '../components'
import { Login } from '../components'

export default {
    components: {
        Navbar,
        Login
    }
}
</script>

<style scoped>
    .mainPage {
        width:100%;
        min-height:100%;
    }

    .loginWrapper {
        width:100%;
        min-height:calc(100vh - 65px);
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>

