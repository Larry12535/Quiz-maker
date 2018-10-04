const Getters = {
    id: state => state.account.id,
    name: state => state.account.name,
    email: state => state.account.email,
    quizzes: state => state.quizzes,
    newQuiz: state => state.newQuiz
}

export default Getters