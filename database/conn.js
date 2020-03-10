// mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.SERVER_NAME,
  user:  process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});
// mysql

module.exports = connection;
