const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/lettersets', (req, res) => {
  db.Letterset.findAll({
    // INNER JOIN on scores
    //include: [db.Score]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.get('/api/letterset/:id', (req, res) => {
  db.Letterset.findAll({
    where: {
      id: req.params.id
    },
    // INNER JOIN on 
   // include: [db.Book]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.post('/api/letterset', (req, res) => {
  // I uncommented this with Erik
    // req.body = {
    //   email: 'J.K.',
    //   password: 'Rowling'
    // }
   
  db.Letterset.create(req.body)
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})

module.exports = router;