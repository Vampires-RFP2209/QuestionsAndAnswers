const pg = require(pg);
require('dotenv').config()

const postgesdb = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: PORT,
  password: process.env.DB_PASS,
  database: DB_DATABASE,
})

postgesdb.connect((err) => {
  if(err) {
    console.log(err);
    return
  }
  console.log(`Successfully connected to ${process.env.DB_DATABASE} database on port ${PORT}`)
})

module.exports = {
  postgesdb,
}