const mongoose = require('mongoose');

const answerSchema = new Schema {
  answer_id: {type: Number, Unique: true},
  answer_body: String,
  Answerer: String,
  date {type: Date, Default: date.now},
  helpfulness: Number,
  reported {type: Boolean, default: false},
  Photos:  [String]
}
const questionSchema = new Schema {
  question_id: {type: Number, Unique: true},
  Question_body: String,
  Question_asker: String,
  date: {type: Date, default: date.now}
  helpfulness: Number,
  reported {type: Boolean, default: false}
  answers: [type: answerSchema],
}
const productschema = new schema {
  product_id: {type: Number, Unique: true},
  questions: [{type: questionSchema}]
}

const ProductQuestions = mongoose.model('ProductQueastions', productschema);
