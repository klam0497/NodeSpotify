const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '206.189.202.184',
    user: 'root',
    password: 'Klam123456Carlos',
    database: 'BSpotify',
    port: 3306
  });
}
