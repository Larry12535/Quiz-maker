const Getters = {
    // account
    id: state => state.account.id,
    name: state => state.account.name,
    email: state => state.account.email,
    
    // newQuiz
    questions: state => state.newQuiz.questions,
    randomizeChoices: state => state.newQuiz.randomizeChoices,
    randomizeQuestions: state => state.newQuiz.randomizeQuestions
}

export default Getters