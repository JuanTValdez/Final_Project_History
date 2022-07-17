// -- routes/catRoutes.js
const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const factDate = req.query.date;

    const command = `SELECT * FROM facts WHERE fact_date = $1`;
    db.query(command, [factDate]).then((data) => {
      res.json(data.rows);
    });
  });

  // module.exports = (db) => {
  // all routes will go here
  // router.get('/', (req, res) => {
  //   const command = 'SELECT * FROM facts';
  //   db.query(command).then((data) => {
  //     res.json(data.rows);
  //   });
  // });

  return router;
};
