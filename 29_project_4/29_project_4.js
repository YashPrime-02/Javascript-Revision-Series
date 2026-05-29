let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {

  submit.addEventListener('click', function (e) {

    e.preventDefault();

    const guess = parseInt(userInput.value);

    validateGuess(guess);

  });

}

function validateGuess(guess) {

  if (isNaN(guess)) {

    displayMessage(`❌ Please enter a valid number`);

    lowOrHi.style.color = "#ef4444";

  } else if (guess < 1) {

    displayMessage(`⚠️ Please enter a number more than 1`);

    lowOrHi.style.color = "#f59e0b";

  } else if (guess > 100) {

    displayMessage(`⚠️ Please enter a number less than 100`);

    lowOrHi.style.color = "#f59e0b";

  } else {

    prevGuess.push(guess);

    if (numGuess === 11) {

      displayGuess(guess);

      displayMessage(
        `💀 Game Over. Random number was ${randomNumber}`
      );

      lowOrHi.style.color = "#ef4444";

      endGame();

    } else {

      displayGuess(guess);

      checkGuess(guess);

    }

  }

}

function checkGuess(guess) {

  if (guess === randomNumber) {

    displayMessage(`🎉 You guessed it right`);

    lowOrHi.style.color = "#22c55e";

    endGame();

  } else if (guess < randomNumber) {

    displayMessage(`📉 Number is TOO low`);

    lowOrHi.style.color = "#f59e0b";

  } else if (guess > randomNumber) {

    displayMessage(`📈 Number is TOO high`);

    lowOrHi.style.color = "#ef4444";

  }

}

function displayGuess(guess) {

  userInput.value = '';

  guessSlot.innerHTML +=
    `<span class="guess-badge">${guess}</span>`;

  numGuess++;

  remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) {

  lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame() {

  userInput.value = '';

  userInput.setAttribute('disabled', '');

  p.classList.add('button');

  p.innerHTML =
    `<h2 id="newGame">Start New Game</h2>`;

  startOver.appendChild(p);

  playGame = false;

  newGame();

}

function newGame() {

  const newGameButton =
    document.querySelector('#newGame');

  newGameButton.addEventListener('click', function () {

    randomNumber =
      parseInt(Math.random() * 100 + 1);

    prevGuess = [];

    numGuess = 1;

    guessSlot.innerHTML = '';

    remaining.innerHTML = `${11 - numGuess}`;

    userInput.removeAttribute('disabled');

    userInput.value = '';

    lowOrHi.innerHTML =
      `<h2>Start Guessing...</h2>`;

    lowOrHi.style.color = "white";

    startOver.removeChild(p);

    playGame = true;

  });

}

