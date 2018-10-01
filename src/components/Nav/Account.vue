<template>
    <section class='account'>
        <div class='left'>
            <router-link to='/User/randomId/Dashboard' class='dashboard'>Dashboard</router-link>
        </div>
        <div class='right'>
            <router-link to='/' class='logout'>Logout</router-link>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .account {
        width:100%;
        height:100%;
        display:flex;
    }

    .left {
        flex:1;
        display:flex;
        justify-content: flex-start;
    }

    .right {
        flex:1;
        display:flex;
        justify-content: flex-end;
    }

    .dashboard {
        margin-left:50px;
        font-family: sans-serif;
        font-size:24px;
        font-weight: 600;
    }

    .logout {
        margin-right:50px;
        font-family: sans-serif;
        font-size:16px;
    }
</style>
