<template>
    <section class='dashboard'>
        <Navbar/>
        <div class='dashboardWrapper'>
            <Dashboard/>
        </div>
    </section>
</template>

<script>
import { Navbar, Dashboard } from '@/Components'

export default {
    components: {
        Navbar,
        Dashboard
    }
}
</script>

<style scoped>
    .dashboardWrapper {
        width:100%;
        min-height:calc(100vh - 75px);
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>
