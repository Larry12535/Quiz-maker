<template>
    <section class="nav">
        <NewUser v-if='!a'/>
        <Account v-if='a'/>
    </section>
</template>

<script>
import { NewUser, Account } from './Nav'

export default {
    components: {
        NewUser, Account
    },
    data() {
        return {
            a:0,
        }
    }
}
</script>

<style scoped>
    .nav {
        width:100%;
        height:65px;
    }
</style>
