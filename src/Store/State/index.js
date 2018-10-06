const state = {
    account: {
        id:'',
        name:'',
        email:'',
    },
    newQuiz: {
        questions:[{ choices:[] }, { choices:[] }, { choices:[] }], // {image, description, choices:[], answer}
        randomizeChoices:false,
        randomizeQuestions:false
    },
    quizzes: []
}

export default state