const csv = require('csv-parser');
const fs = require('fs');
const { Answer} = require('./mongodb.js')
const path = require('path');

fs.createReadStream(path.join(__dirname, '..', '/data/answers.csv'))
  .pipe(csv())
  .on('data', (data) => {
      // const newModel= new Answer({
      //   answer_id: data.id,
      //   question_id: data.question_id,
      //   answer_body: data.body,
      //   answerer_name: data.answerer_name,
      //   answerer_email: data.answerer_email,
      //   date_written: data.date_written,
      //   reported: data.reported,
      //   photos: []
      // })
      const newModel = {
        answer_id: data.id,
        question_id: data.question_id,
        answer_body: data.body,
        answerer_name: data.answerer_name,
        answerer_email: data.answerer_email,
        date_written: data.date_written,
      }
      Answer.create(newModel)
         .then(() => {
         })
         .catch(()=> {

         })
      // newModel.save();

})