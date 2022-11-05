const csv = require('csv-parser');
const fs = require('fs');
const {Question} = require('./mongodb.js')
const path = require('path');

fs.createReadStream(path.join(__dirname, '..', '/data/questions.csv'))
  .pipe(csv())
  .on('data', (data) => {
      // const newModel = new Question({
      //   question_id: data.id,
      //   product_id: data.product_id,
      //   question_body: data.body,
      //   asker_name: data.String,
      //   asker_email: data.asker_email,
      //   date_written: data.date_written,
      //   helpfulness: data.helpful,
      //   reported: data.reported,
      //   answers: []
      // })
      const newModel = {
        question_id: data.id,
        product_id: data.product_id,
        question_body: data.body,
        asker_name: data.String,
        asker_email: data.asker_email,
        date_written: data.date_written,
        helpfulness: data.helpful,
        reported: data.reported,
      }
      Question.create(newModel)
        .then(() => {
          //console.log('succes!');
        })
        .catch((err)=> {
          console.log('failure: ', err);
        })
      // newModel.save();
  })
