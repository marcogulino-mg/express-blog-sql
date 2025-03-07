// IMPORT mysql2
const mysql = require("mysql2");

// DB Base Configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "y38T*aqC2lPkJp",
  database: "blog",
});

// Connection to DB
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// EXPORT DB Module
module.exports = connection;
