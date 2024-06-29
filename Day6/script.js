'use strict';

// Selecting elements
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Player scores
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Generating random dice number
const generateDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const switchPlayer = function (player) {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 1 ? 0 : 1;
};

btnRoll.addEventListener('click', function () {
  let dice = generateDice();
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // score sets to zero if dice is one
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  // Score gets added
  else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');

    //switch to next player
  }
});

btnHold.addEventListener('click', function () {
  // check if the score is 100 or not
  // add current score to the player score
  // Switch Player
  if (scores[activePlayer] == 100) {
  } else {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    if (activePlayer == 0) {
      score0El.textContent = scores[0];
    } else {
      score1El.textContent = scores[1];
    }
    activePlayer = activePlayer == 1 ? 0 : 1;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
  }
});
