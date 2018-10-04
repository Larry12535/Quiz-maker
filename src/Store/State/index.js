const state = {
    account: {
        id:'',
        name:'',
        email:'',
    },
    newQuiz: {
        questions:[{ choices:[] }, { choices:[] }, { choices:[] }], // {image, description, choices:[], answer}
        randomChoiceOrder:false,
        randomQuestionsOrder:false
    },
    quizzes: []
}

export default state