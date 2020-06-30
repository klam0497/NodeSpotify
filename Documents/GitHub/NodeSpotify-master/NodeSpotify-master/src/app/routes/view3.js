const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view3', (req, res) => {
    connection.query('SELECT * FROM REVISION PLAYLIST', (err, result) => {
      res.render('views/view3', {
        view3: result
      });
    });
  });

};
