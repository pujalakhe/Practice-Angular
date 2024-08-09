//generating random number
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
let userPreGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
let hint = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let preGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number.');
  } else if (guess < 1) {
    alert('please enter a number greater than one.');
  } else if (guess > 100) {
    alert('please enter a  number less than 100.');
  } else {
    preGuess.push(guess);
    if (numGuess ===10) {
      displayGuess(guess);
      displayMsg(`Game over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You guess it right!The Random number was ${guess}.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`your guess ${guess} is too low`);
  } else if (guess > randomNumber) {
    displayMsg(`your guess ${guess} is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  userPreGuess.innerHTML += `${guess} ,`;
  numGuess++;
  //console.log(numGuess);
  remaining.innerHTML = `${11- numGuess}`;
  //console.log(remaining.innerHTML);
}

function displayMsg(msg) {
  hint.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  //clearing the value
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame" style ="cursor:pointer">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (event){
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    userPreGuess.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    hint.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    //console.log(randomNumber);
  });
}
