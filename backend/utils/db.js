const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "s3kreee7",
  database: "my_db",
});

db.connect();

module.exports = db;
