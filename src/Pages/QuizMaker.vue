<template>
    <section class='main'>
        <Navbar/>
        <div class='quizMakerWrapper'>
            <QuizMaker/>
        </div>
    </section>
</template>

<script>
import { Navbar, QuizMaker } from '@/Components'

export default {
    components: {
        Navbar,
        QuizMaker
    }
}
</script>

<style scoped>
    .quizMakerWrapper {
        width:100%;
        min-height:calc(100vh - 75px);
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>
