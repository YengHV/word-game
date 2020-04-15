const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/scores', (req, res) => {
  db.Score.findAll({
    // INNER JOIN on both
      include: [db.User],
      include: [db.Letterset]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.get('/api/score/:id', (req, res) => {
  db.Score.findAll({
    where: {
      id: req.params.id
    },
    // INNER JOIN on both
      include: [db.User],
      include: [db.Letterset]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.post('/api/score', (req, res) => {
  // I uncommented this with Erik
    // req.body = {
    //   email: 'J.K.',
    //   password: 'Rowling'
    // }
   
  db.Score.create(req.body)
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})

module.exports = router;