# Website Name: Pig Dice Game
By: **Ron Onyonka**
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


## Known Bugs
There are no known bugs.

## Behaviour Driven Development
| Behaviour                            | Input |           | Output |
|-----------------------------------|----------------|--------------------------------------------------|
| When player press roll | Player hits roll |generates random number between 1-6|
| Web app will add roll to current score| Player hits Roll |current score will be initial rolled number|
| Web app will add second rolls to current score| Player hits Roll |current score = initial rolled number + new rolled number|
| Web app allows player to roll and return total score| player hits hold |total score = current score|
| Web app will clear current score when player hits hold| Player hits hold |total score = 0|
| Web app will clear current score if rolled random number = 1| Player rolled 1 |current score = 0 and the total score remains unchanged|
| web app will initialize other player's turn when running total is cleared| other play now hits roll |a random number between 1 - 6 is generated|
| Game ends when either of the players gets to a total score of 100| total score equals 100 |Player 1 wins player!|


## Technologies Used

I Used HTML, JavaScript and CSS. Using JavaScript I was able to get user input from HTML forms.
I also utilized jquery to display results on HTML.

## Contact Information

reach me on email rononyonka@gmail.com

## License

Copyright (c) 2018 **Ron Onyonka**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
