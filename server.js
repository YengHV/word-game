var express = require("express");
var db = require("./models");
// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
 const apiRoutes = require("./controllers/userController.js")

app.use(apiRoutes);

// Starts the server to begin listening, force true means drop database
db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});