const mysql = require("mysql2");

const pool = mysql.createPool({
  // host: "mysql" <- docker service,
  host: "10.10.11.11",
  user: "ptven",
  password: "",
  database: "sample",
  port: 3306,
});

module.exports = pool.promise();
