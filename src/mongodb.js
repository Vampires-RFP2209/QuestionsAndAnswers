const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/questions`);

const photoSchema = new mongoose.Schema({
  id: {type: Number, Unique: true},
  answer_id: Number,
  url: String
});
const answerSchema = new mongoose.Schema ({
  answer_id: {type: Number, Unique: true},
  question_id: Number,
  answer_body: String,
  answerer_name: String,
  answerer_email: String,
  date_written: {type: Date, default: Date.now},
  helpfulness: Number,
  reported: {type: Boolean, default: false},
  //photos:  [{type: photoSchema}]
});
const questionSchema = new mongoose.Schema ({
  question_id: {type: Number, Unique: true},
  product_id: Number,
  question_body: String,
  asker_name: String,
  asker_email: String,
  date_written: {type: Date, default: Date.now},
  helpfulness: Number,
  reported: {type: Boolean, default: false},
  //answers: [{type: answerSchema}]
});

const Question = mongoose.model('Question', questionSchema);
const Answer = mongoose.model('Answer', answerSchema);
const Photo = mongoose.model('Photo', photoSchema);
module.exports = { Question, Answer, Photo};
