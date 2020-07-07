const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '111.111.11.11',
    user: '111**',
    password: 'pass****',
    database: '1111',
    port: 3306
  });
}
