DROP DATABASE IF EXISTS productquestions;

DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS answerphotos;

CREATE DATABASE productquestions;

CREATE TABLE questions (
  questions_id: INT NOT NULL,
  product_id: INT NOT NUll,
  question_body: TEXT NOT NULL,
  asker_name: VARCHAR(255) NOT NULL,
  asker_email: VARCHAR(255) NOT NULL,
  date_written: DATE DEFAULT CURRENT_TIMESTAMP,
  helpfulness: INT DEFAULT 0,
  PRIMARY KEY ('questions_id')
)

CREATE TABLE answers (
  questions_id: INT NOT NULL,
  answer_id: INT NOT NUll,
  answer_body: TEXT NOT NULL,
  answerer_name: VARCHAR(255) NOT NULL,
  answerer_email: VARCHAR(255) NOT NULL,
  date_written: DATE DEFAULT CURRENT_TIMESTAMP,
  helpfulness: INT DEFAULT 0,
  PRIMARY KEY('answer_id'),
  FOREIGN KEY ('questions_id') REFERENCES questions('questions_id')
)

CREATE TABLE photos (
  id: INT NOT NULL,
  answer_id: INT NOT NULL,
  url: text,
  PRIMARY KEY ('id'),
  FOREIGN KEY ('anser_id') REFERENCES answers('answer_id')
)