'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

const calcRandomNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highScore = 0;
let secretNumber = calcRandomNum();
console.log(secretNumber);

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is wrong input
  if (guess <= 0 || guess > 20 || !guess) {
    displayMessage('🛑 Wrong number !');
  } else {
    if (score > 1) {
      //When player wins the game
      if (guess === secretNumber) {
        displayMessage('🏆 Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
        //When guess is too high or too low
      } else if (guess !== secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > secretNumber ? '↖️ Too high!' : '↙️ Too low!');
      }
    } else {
      //When player lost the game
      displayMessage('You lost the game ...');
      document.querySelector('.score').textContent = 0;
    }
  }
});

againButton.addEventListener('click', function () {
  secretNumber = calcRandomNum();
  console.log(secretNumber);

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
