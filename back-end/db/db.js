const mysql = require("mysql2");
let path2 =__dirname.split("\\")
path2.pop()
path2 =path2.join("\\");
path2=(path2+'\\.env')
require("dotenv").config({ path:path2});

const connection = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASS,
database: process.env.DB_NAME,
timezone: process.env.TIME_ZONE,
multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
