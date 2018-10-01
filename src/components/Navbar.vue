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
        NewUser, 
        Account
    },
    data() {
        return {
            a:false,
        }
    }
}
</script>

<style scoped>
    .nav {
        width:100%;
        height:75px;
        box-sizing:border-box;
        border-bottom:1px solid #A8A8A8;
        background-color:white;
    }
</style>
