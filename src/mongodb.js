const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema {
  answer_id: {type: Number, Unique: true},
  answer_body: String,
  answerer_name: String,
  answerer_email: String
  date_written: {type: Date, Default: date.now},
  helpfulness: Number,
  //reported: {type: Boolean, default: false},
  Photos:  [String]
}
const questionSchema = new mongoose.Schema {
  question_id: {type: Number, Unique: true},
  question_body: String,
  asker_name: String,
  asker_email: String,
  date_written: {type: Date, default: date.now}
  helpfulness: Number,
  //reported: {type: Boolean, default: false}
  answers: [type: answerSchema],
}
const productschema = new mongoose.schema {
  product_id: {type: Number, Unique: true},
  questions: [{type: questionSchema}]
}

const ProductQuestions = mongoose.model('ProductQueastions', productschema);

module.exports = ProductQueastions;