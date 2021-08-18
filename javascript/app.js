const scoreDisplay = document.querySelector('#score');
const grid = document.querySelector('.container');
const startBtn = document.querySelector('#start-btn');
var squares = [];
let currentSnake = [2,1,0]
let direction = 1;
const width = 15;
let appleIndex = 0;
let score = 0;
let timer = 0;
let speed = 1000;
const stepLength = 0.86;
let highestScore = localStorage.getItem('highest score');
const scoreHigh = document.querySelector('#score-high');

const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);
const animation = rootStyle.getPropertyValue('--animation');
//second eatApple is the css keyframe
const eatApple = `eatApple ${speed}ms ease`;

function createGrid() {
    for(let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        squares.push(square);
        grid.appendChild(square);
    }

    // At the beginning put the mouth on the initial snake head
    squares[currentSnake[0]].classList.add('mouth');

    scoreHigh.textContent = highestScore ? highestScore : 0;
}

createGrid();

function generateSnake() {
    currentSnake.forEach(index => {squares[index].classList.add('snake')});
}

generateSnake();

function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(timer);
    currentSnake = [2,1,0];
    direction = 1;
    score = 0;
    speed = 1000;
    scoreDisplay.textContent = score;
    generateApple();
    generateSnake();
    timer = setInterval(move, speed);
}


function move() {
    //remove the mouth from the old heads
    squares[currentSnake[0]].classList.remove('mouth');

    if(
        (currentSnake[0] % width === width - 1 && direction === 1) || 
        (currentSnake[0] % width === 0 && direction === -1) || 
        (currentSnake[0] - width < 0 && direction === -width) || 
        (currentSnake[0] + width >= width * width && direction === width) || 
        (squares[currentSnake[0] + direction].classList.contains('snake'))
    )
    return clearInterval(timer);

    const tail = currentSnake.pop();
    squares[tail].classList.remove('snake');
    squares[currentSnake[0] + direction].classList.add('snake');
    currentSnake.unshift(currentSnake[0]+ direction);  
    
    if(currentSnake[0] === appleIndex) {
    // alternative if(squares[current[0]].classList.contains('snake'))
        //add eating apple animation to mouth
        document.documentElement.style.setProperty('--animation', eatApple);
        squares[appleIndex].classList.remove('apple');
        score++;
        scoreDisplay.textContent = score;
        squares[tail].classList.add('snake');
        currentSnake.push(tail);
        generateApple();
        clearInterval(timer);
        speed *= stepLength;
        timer = setInterval(move, speed);
        
    } else if (!(currentSnake[0] === appleIndex)) {
        //remove eating apple animation from head 
        document.documentElement.style.setProperty('--animation', 'none');
    }
    
    squares[currentSnake[0]].classList.add('snake');
    //add a mouth to the new head
    squares[currentSnake[0]].classList.add('mouth');  

    if(highestScore <= score) {
        localStorage.setItem('highest score', score);
        //get the most recent highest score from storage
        highestScore = localStorage.getItem('highest score');
    }
    scoreHigh.textContent = highestScore;
}

function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() *squares.length) 
    } while (squares[appleIndex].classList.contains('snake'))
    return squares[appleIndex].classList.add('apple');
}


function control(e) {
    if(e.keyCode === 38) {
        //pressed up
        direction = -width;
        document.documentElement.style.setProperty('--angle', 'rotate(50deg)');
    } else if(e.keyCode === 40) {
        //pressed down
        direction = width;
        document.documentElement.style.setProperty('--angle', 'rotate(220deg)');
    } else if(e.keyCode === 37) {
        //pressed left
        direction = -1;
        document.documentElement.style.setProperty('--angle', 'rotate(315deg)');
    } else if(e.keyCode === 39) {
        //pressed right
        direction = 1;
        document.documentElement.style.setProperty('--angle', 'rotate(130deg)');
    }
}



document.addEventListener('keydown', control)
startBtn.addEventListener('click', startGame)
