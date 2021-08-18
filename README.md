# Nokia 3310 Snake 

Heyo, Here I re-created the old but famous Nokia 3310 snake game of the early 2000s. In this project my focus was principally on building additional experience in ___javascript___ and having fun too. This is a mono-player version of the game. 

I give all the credit to <a href="https://scrimba.com/playlist/pkrr5S9">Scrimba</a> for helping me through creating this game app.  

I took a step further persisting my app's data like a player's highest score using the browser's local storage.

### Fonts

I used google web font-family ___Bangers___, you can notice 
```<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers"> ``` in the html file. This link permets me to use the ___Bangers___ font-family in my game app.

### Game Logic

- The game consists of a grid(an array) of 15 * 15, that's the snake's playing/movement area. 

- A snake(an array) that increases upon eating an apple. New apples are generated randomly when an apple is eaten.

- To implement the snake movement I created a mutatable timer using ``` setInterval ``` a built-in javascript function, upon eating an apple the timer is mutated and the speed increases.

### How to play
- Start the game by clicking on the Start/Restart button
    <br>
    <img src="./images/start-btn.png" alt="start button">

- Control the snake using
    <ul>
        <li>Keyboard <strong>UP</strong>: Move snake up </li>
        <li>Keyboard <strong>DOWN</strong>: Move snake down </li>
        <li>Keyboard <strong>LEFT</strong>: Move snake to the left </li>
        <li>Keyboard <strong>RIGHT</strong>: Move snake to the right </li>
    </ul>


---
## Preview

<img src="./images/game-preview.png" alt="Game preview image">

---

## Contributors
 <a href="https://github.com/tchassijordan">
 tchassi jordan</a>

---

## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

<h3 align="left">Languages and tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>
