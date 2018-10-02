<template>
    <section class='main'>
        <Navbar/>
        <div class='componentWrapper'>
            <Login/>
        </div>
    </section>
</template>

<script>
import { Navbar, Login } from '@/Components'

export default {
    components: {
        Navbar,
        Login,
    }
}
</script>

<style scoped>
    .main {
        width:100%;
        min-height:100%;
    }

    .componentWrapper {
        width:100%;
        min-height:calc(100vh - 75px);
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>

