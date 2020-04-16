const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/users', (req, res) => {
  db.User.findAll({
    // INNER JOIN on scores
    //include: [db.Score]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.post('/api/login', (req, res) => {
  db.User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    },
  
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.post('/api/user', (req, res) => {
  // I uncommented this with Erik
    // req.body = {
    //   email: 'J.K.',
    //   password: 'Rowling'
    // }
   
  db.User.create(req.body)
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})

module.exports = router;