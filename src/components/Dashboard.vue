<template>
    <section class='panel'>
        <router-link :to='newQuiz' class='new'>New Quiz</router-link>
        <router-link :to='myQuizzes' class='myQuizzes'>My Quizzes</router-link>
        <router-link :to='settings' class='settings'>Account Settings</router-link>
        <h1>{{id}}</h1>
    </section>
</template>

<script>
export default {
    computed: {
        id() {
            return this.$store.getters.id
        },
        newQuiz() {
            return `/user/${this.id}/new`
        },
        myQuizzes() {
            return `/user/${this.id}/myQuizzes`
        },
        settings() {
            return `/user/${this.id}/settings`
        }
    }
}
</script>

<style scoped>
    .panel {
        margin-top:100px;
        margin-bottom:100px;
        width:400px;
        height:500px;
        box-shadow: 3px 3px 6px #48a3ff;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background:#48a3ff;
    }

    a {
        box-sizing: border-box;
        font-family: sans-serif;
        font-size:22px;
        width:250px;
        margin-top:25px;
        margin-bottom:25px;
        padding:8px;
    }

    a:hover {
        background:orangered;
        color:white;
    }

    .new {
        background:lime;
    }

    .myQuizzes {
        background:aquamarine;
    }

    .settings {
        background:yellow;
    }
</style>
