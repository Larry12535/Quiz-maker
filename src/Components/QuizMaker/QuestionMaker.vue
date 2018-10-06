<template>
    <section class='quizMaker'>
        <div class='pic'>Add a picture</div>
        <textarea class='description'></textarea>
        <div class='choices'>
            <button v-on:click='addChoice()'>New Choice</button>
            <input placeholder='Enter Choice' v-for='(choice, index) in questions[currentQuestion].choices' :key='index'>
        </div>
    </section>
</template>

<script>
export default {
    props:['currentQuestion'],
    computed: {
        questions() {
            return this.$store.getters.questions
        }
    },
    methods: {
        addChoice() {
            this.questions[this.currentQuestion].choices.push('')
        }
    }
}
</script>

<style scoped>
    .quizMaker {
        width:100%;
        min-height:500px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    
    .quizMaker > * {
        margin-top:15px;
        margin-bottom:15px;
    }

    .pic {
        width:300px;
        height:300px;
        box-sizing:border-box;
        border:1px solid black;
    }

    .description {
        width:80%;
        height:200px;
        resize:none;
    }

    .choices {
        width:100%;
    }

    .choices > * {
        margin-top:6px;
        margin-bottom:6px;
    }

    .choices > input {
        padding:5px;
        font-family: sans-serif;
        font-size: 14px;
        width:90%;
        background:transparent;
    }

    .choices > input:focus {
        background:white;
    }
</style>
