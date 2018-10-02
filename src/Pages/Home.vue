<template>
    <section class='main'>
        <Navbar/>
        <Overview/>
    </section>
</template>

<script>
import { Navbar, Overview } from '@/Components'

export default {
    components: {
        Navbar, 
        Overview
    }
}
</script>

<style scoped>
    .main {
        width:100%;
        min-height:100%;
    }
</style>
