'use strict';
// //reading the DOM
// console.log(document.querySelector('.message').textContent);
// //manipulating the targeted DOM
// document.querySelector('.message').textContent = 'Wagwan my G, stay jiggy';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 25;
// document.querySelector('.score').textContent = 30;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//creating the secret number to guess between 1 to 20 using the math random method
const secretNumberGuess = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumberGuess);

//creating our score inintal value and setting it to 20 using let to makeit changable
let initialScore = 20;

document.querySelector('.score').textContent = initialScore;

//assigning the secret number to the "number" on the html document
document.querySelector('.number').textContent = secretNumberGuess;

//adding an event to react to a click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number, try again ⛔';
  } else if (guess === secretNumberGuess) {
    document.querySelector('.message').textContent = 'WOOW!! you got it 👌 !!';
    initialScore = secretNumberGuess;
    document.querySelector('.highscore').textContent = initialScore;
  } else if (guess > secretNumberGuess) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent =
        'iish, your guess is too high';
      initialScore = initialScore - 1; //or initialScore = initialScore-- ;
      document.querySelector('.score').textContent = initialScore;
    } else {
      document.querySelector('.message').textContent =
        'Sorry, you lost the game 😥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumberGuess) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent =
        'ouch, your guess is too low';
      initialScore = initialScore - 1; //or initialScore = initialScore-- ;
      document.querySelector('.score').textContent = initialScore;
    } else {
      document.querySelector('.message').textContent =
        'Sorry, you lost the game 😥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
