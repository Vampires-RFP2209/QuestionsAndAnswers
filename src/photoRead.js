const csv = require('csv-parser');
const fs = require('fs');
const {Photo} = require('./mongodb.js')
const path = require('path');

fs.createReadStream(path.join(__dirname, '..', '/data/answers_photos.csv'))
  .pipe(csv())
  .on('data', (data) => {

      const newModel = {
        id: data.id,
        answer_id: data.answer_id,
        url: data.url,
      }
      Photo.create(newModel)
      .then(() => {
      })
      .catch(()=> {

      })
})