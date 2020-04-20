// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require('express');
const router = express.Router();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
  // If the user already has an account send them to the wordgame page
  if (req.user) {
    res.redirect("/wordgame");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

// router.get("/login", function(req, res) {
//   // If the user already has an account send them to the login (index) page
//   if (req.user) {
//     res.redirect("/wordgame");
//   }
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });

router.get("/wordgame", function(req, res) {
  // If the user already has an account send them to the login (index) page
  res.sendFile(path.join(__dirname, "../public/wordgame.html"));
});

router.get("/signup", function(req, res) {
  // If the user already has an account send them to the login (index) page
  res.sendFile(path.join(__dirname, "../public/signUp.html"));
});

router.get("/done", function(req, res) {
  // Route to done html.
  // when user click on done button
  res.sendFile(path.join(__dirname, "../public/done.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/index", isAuthenticated, function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signUp.html"));
});

module.exports = router;