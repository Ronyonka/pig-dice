## Website Name: Quizz
By: Ron Onyonka
Date: 17th December 2018

## Description
The website allows two users to play a game of dice while awarding them points corresponding to the side which shows.

website url: https://Ronyonka.github.io/pig-dice/

## Setup/Installation Requirements
-   Have a basic knowledge of HTML, CSS, JavaScript and Github.
-   Install a texteditor (e.g atom, sublime, vs code), Git version control and a browser. Preferebly Chrome.
-   Git clone the repository at <https://github.com/Ronyonka/pig-dice>
-   change the directory on your terminal to open the folder; cd quiz-board
-   open index.html on text editor.
-   You  can open the index.html page on your Chrome browser to check the functionality.


# Known Bugs
There are no known bugs.

# Behaviour Driven Development
|Behaviour                            |Input|           |Output|
|:-----------------------------------|:-----------------|:-------------------------------------------------|
|When player press roll |Player hits roll |generates random number between 1-6|
|Web app will add roll to current score| Player hits Roll |current score will be initial rolled number|
|Web app will add second rolls to current score|Player hits Roll |current score = initial rolled number + new rolled number|
|Web app allows player to roll and return total score|player hits hold |total score = current score|
|Web app will clear current score when player hits hold|Player hits hold |total score = 0|
|Web app will clear current score if rolled random number = 1|Player rolled 1 |current score = 0 and the total score remains unchanged|
|web app will initialize other player's turn when running total is cleared|other play now hits roll |a random number between 1 - 6 is generated|
|Game ends when either of the players gets to a total score of 100|total score equals 100 |Player 1 wins player!|


## Technologies Used
* HTML was used in making the skeleton of the website.
* CSS was used in styling the document.
* Javascript was used in making the webpage responsive.
* Atom was the source code editor of choice.
* Git and Github were used as my local and online repositories respectively.

## Support and contact details
* Contact me through my email: wahomekelving@gmail.com
* Telephone: +254740773391
