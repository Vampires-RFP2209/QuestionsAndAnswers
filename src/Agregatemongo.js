const {Question, Answer, Photo} = require('./mongodb.js')

let questions = [];
// const questions = Question.findOne({question_id: 1});
// console.log('1: ',questions);
Question.find().skip(1).limit(3)
  .then(data =>{
    questions = data;
    // const questionMap = Promise.all(
    data.map(question => {
      return Answer.find({question_id: question.question_id})
        .then(data2 => {
          //question.update({answers: data2});
          question.answers = data2;

          console.log('answers: ', data2)

        })
    })
    console.log('finale: ', question);
    // .then((arr)=>{
    //   for(let i = 0; i < questions.length; i++) {
    //     questions[i].answers = arr[i];
    //   }
    //   console.log(questions);
    // }
    // )
  })