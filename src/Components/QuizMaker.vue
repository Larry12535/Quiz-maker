<template>
    <section class='quiz'>
        <QuestionMaker :currentQuestion='currentQuestion'/>
        <div class='divider'></div>
        <div class='questions'>
            <button v-for='(question, index) in newQuiz.questions' :key='index' class='box' v-on:click='goTo(index)'>
                {{index + 1}}
            </button>
        </div>
    </section>
</template>

<script>
import QuestionMaker from './QuizMaker/QuestionMaker.vue'

export default {
    components: {
        QuestionMaker
    },
    computed: {
        newQuiz() {
            return this.$store.getters.newQuiz
        }
    },
    data() {
        return {
            currentQuestion:0
        }
    },
    methods: {
        goTo(question) {
            this.currentQuestion = question
        },
        next() {
            if (this.currentQuestion < this.newQuiz.questions.length) {
                this.currentQuestion++
            }
        },
        previous() {
            if (this.currentQuestion > 0) {
                this.currentQuestion--
            }
        },
        addChoice() {
            this.newQuiz.questions[this.currentQuestion].choices.push('')
        }
    }
}
</script>

<style scoped>
    .quiz {
        margin-top:100px;
        margin-bottom:100px;
        padding:30px;
        width:600px;
        min-height:600px;
        box-shadow: 3px 3px 6px lightskyblue;
        display:flex;
        flex-direction: column;
        align-items: center;
        background:lightskyblue;
    }

    .questions {
        margin-top:20px;
        width:80%;
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
    }

    .box {
        margin:7px;
        width:40px;
        height:30px;
        background:orange;
        font-family: sans-serif;
        color:#383838;
    }

    .divider {
        width:100%;
        border:1px solid #636363;
    }
</style>
