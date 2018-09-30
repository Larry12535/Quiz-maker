<template>
    <section class='mainPage'>
        <Navbar/>
        <div class='componentWrapper'>
            <Login v-if='login'/>
            <Signup v-else/>
        </div>
    </section>
</template>

<script>
import { Navbar } from '../components'
import { Login, Signup } from '../components'

export default {
    components: {
        Navbar,
        Login,
        Signup
    },
    data() {
        return {
            login:true
        }
    }
}
</script>

<style scoped>
    .mainPage {
        width:100%;
        min-height:100%;
    }

    .componentWrapper {
        width:100%;
        min-height:calc(100vh - 65px);
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>

