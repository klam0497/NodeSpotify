const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view2', (req, res) => {
    connection.query('SELECT * FROM REVISION ARTISTAS', (err, result) => {
      res.render('views/view2', {
        view2: result
      });
    });
  });

};
