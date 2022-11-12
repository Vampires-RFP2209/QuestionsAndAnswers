const express = require('express');
const {Question, Answer, Photo} = require('./mongodb.js')

const app = express();
app.use(express.json())

app.get('/qa/questions/:id', (req, res) => {
  const {id} = req.params;
  var resArr = {
    product_id: id,
    results: []
  };
  return Question.find({product_id: id, reported: false})
    .then((data) => {
      resArr.results = data;
      res.json(resArr);
      })

})

app.post('qa/questions/', (req,res) => {
  Question.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
})
app.post('qa/questions/:question_id/answers', (req,res) => {
  var ansObj = req.body;
  ansObj.question_id = req.params;
  Answer.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
})
app.put('/qa/questions/:question_id/helpful', (req,res) => {
  const {id} = req.params;
  Question.findOneAndUpdate({question_id: id}, { $inc: {helpfulness: 1}})
    .then(() =>{
      res.sendStatus(204);
    })
})
app.put('/qa/questions/:question_id/report', (req,res) => {
  const {id} = req.params;
  Question.findOneAndUpdate({question_id: id}, {reported: true})
    .then(() =>{
      res.sendStatus(204);
    })
})
app.put('/qa/answers/:answer_id/helpful', (req,res) => {
  const {id} = req.params;
  Answer.findOneAndUpdate({answer_id: id}, { $inc: {helpfulness: 1}})
    .then(() =>{
      res.sendStatus(204);
    })
})
app.put('/qa/answers/:answer_id/report', (req,res) => {
  const {id} = req.params;
  Answer.findOneAndUpdate({answer_id: id}, {reported: true})
    .then(() =>{
      res.sendStatus(204);
    })
})
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})