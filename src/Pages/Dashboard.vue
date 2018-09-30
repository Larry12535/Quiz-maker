<template>
    <section class='dashboard'>
        <Navbar/>
        <div class='dashboardWrapper'>
            <Dashboard/>
        </div>
    </section>
</template>

<script>
import { Navbar, Dashboard } from '@/components'

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
        min-height:calc(100vh - 65px);
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>
