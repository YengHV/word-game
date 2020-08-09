# Word Game

## Description

In each game, Word Game displays seven letters. It’s up to you to find as many words as you can, using only those seven letters. You score a point for each word you find.

## Application Goals
The Word Game application is designed to meet these goals. It:

- Is a full-stack (front and back end) using a Node and Express Web Server
- Uses MySQL Database with a Sequelize ORM
- Has both GET and POST routes for retrieving and adding new data
- Is deployed on Heroku with its associated MySQL database
- Has a polished front- end user interface
- Has a folder structure that uses a Model View Controller paradigm
- Meets quality coding standards such as indentation, scoping and naming
- Layout of page elements is responsive to screen size
- Works as a downloadable progressive web application (PWA)

## Motivation
Word Game challenges the player to recognize words in a seven-letter set.  Finding anagrams is a valuable problem task because it involves manipulation of well-understood parts (letters) that results in a logical whole (words). This activity provides spelling practice and is educational as it increases vocabulary when the player discovers new letter combinations.

## Results
We created a full-stack application that, at time of presentation, meets many of our application goals. It is well-designed and fun to play.

## Team Effort
Yeng Vang and I pair-programmed this application. Tom came up with the initial concept for the project. Yeng created a GitHub repository for the project and updated the project board. Tom documented and graphed the database relationships between user table, letterset table, and score table. We then jointly created a MySQL database using a Sequelize ORM. We created and tested API routes using Postman. Once those were working, we created HTML, Javascript and CSS files to define the player view of the application. We deployed it to GitHub and Heroku incrementally as we established improvements to the application.

## Individual Responsibilities
In particular, Tom set up the basic HTML document to use Bootstrap CSS, jQuery, and Popper.js libraries. Tom researched and refined algorithms that shuffle letters in an array and convert strings to arrays (in development).Tom deployed the final application to GitHub and Heroku. Tom documented the application functionality and its remaining improvements.

Yeng assisted Tom in making the MySQL database and researched third party APIs to check validation of words. Yeng worked extensively on the front-end Javascript coding and created the CSS styling.  

## Challenges
We were both frequently challenged by the breadth and depth of this project. First, we successfully created API routes on the server side to add users, lettersets, and scores, ensuring that our front-end development experience would be smooth.

Now, front-end development is nearly complete. We have created a basic interface using Bootstrap, and have used jQuery methods to dynamically create buttons.

## Coding Algorithm
Ongoing improvement to the code is facilitated by clear algorithms to guide coding tasks. Below is an overview of the program logic as I envision it. Detailed function-specific algorithms are developed as coding challenges become clear.

Player is presented with a Welcome Screen describing game play, as follows:

Welcome to Word Game. Click (or tap) the Choose Letterset drop down list and pick the letterset you want to play. The letterset you have chosen will appear as buttons. Click on the letters in order, to spell a word, then press the Submit Word button. If your word is in Merriam-Webster Collegiate Dictionary, it will display in the Correct Word list and a point is added to your score.

## Game Play

![wordgame](https://user-images.githubusercontent.com/61241205/89743173-0eeaa700-da66-11ea-8a49-d43b7ed84025.png)

Words must be at least four letters long. You may use letters more than once. Example: For letterset “blastro”, valid words include last, blast, blasts, lasts, albatross, sort, sorts, stars, toss, bass, etc. Invalid words include tross (not in dictionary) and floss (uses letters not in the letterset).
When you can no longer find new words using that letterset, click the Done button and your score for that letterset is displayed.

At the bottom of the Welcome Screen is an OK button that takes the player to the Login page, which has an option to Sign Up. After Sign Up is completed, the player is taken to the Login page. Player enters an email address and password. (Early versions of the program omit login and sign up options and go directly to game play).

- The player picks a letterset
- The chosen letterset appears as individual buttons
- As the player clicks on a button to form a word, it appears in that order to form a word
- The player can press the delete key to delete the previously guessed letter
- Player presses the Submit Word button when a word guess has been formed.
- The  word guess is checked against the Correct Word list.
- If the submitted word is already in the Correct Word list, a message appears indicating that the word was already found, and the score does not change..
- If the guessed word is not already in the Correct Word list, the submitted word is sent to the Merriam Webster dictionary API to check if it is in the dictionary.
- If the submitted word is in the dictionary then a point is added to the player score
- If the submitted word is not in the dictionary, a message indicates that the word is not in the dictionary, and the score is not changed.
- Play continues until the player can no longer find new words using these seven letters. The player then presses the Done button
- A scoreboard is displayed showing username, letterset, and score.

## Improvements
Basic Game Play
Basic game play coding is nearly complete.
When a valid word is returned from the dictionary it is now added to the Correct Words list and the score is increased.

If the returned word is not valid, the player is now notified that it was not found in the dictionary.

## Database Incorporation 
Word Game is currently in beta and hasn’t been fully tested using the included MySQL database. Incorporating the database will give the player (or an administrator) the ability to add new lettersets to the database and keep track of a player’s score for a letterset.

## Player Login and Password 
Incorporating a player login and password will allow the database to keep track of user scores when playing a particular letterset.

## Developed By
Tom van Deusen and Yeng Vang
