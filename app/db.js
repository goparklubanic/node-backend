const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'rootpassword',
  database: 'stones'
});

module.exports = pool.promise();
