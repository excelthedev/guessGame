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
let secretNumberGuess = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumberGuess);

//creating our score inintal value and setting it to 20 using let to makeit changable
let initialScore = 20;
console.log(initialScore);

//creating our highscore
let highScore = 0;

document.querySelector('.score').textContent = initialScore;

//creating a function for the display message, refactoring the code using the DRY principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

//assigning the secret number to the "number" on the html document

//adding an event to react to a click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input and the check is clicked
  if (!guess) {
    displayMessage('no number,Please try again ⛔');

    // document.querySelector('.message').textContent = 'no number, try again ⛔';
  }
  //when the guess number is equal to the secretNumberGuess
  else if (guess === secretNumberGuess) {
    displayNumber(secretNumberGuess);

    // document.querySelector('.number').textContent = secretNumberGuess;

    displayMessage('WOW! you got it , HURRAY👌 !!');
    // document.querySelector('.message').textContent = 'WOOW!! you got it 👌 !!';
    // initialScore = secretNumberGuess;

    displayBody(' #60b347');
    // document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    //checking and assigning the initial score to  the high score if player gets the guess right
    if (initialScore > highScore) {
      highScore = initialScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //REFACTORING THE ELSE IF HIGH AND LOW GUESS CODES using the Tenary Operator
  else if (guess !== secretNumberGuess) {
    if (initialScore > 1) {
      displayMessage(
        guess > secretNumberGuess
          ? 'iish, your guess is too high 🤷‍♂️'
          : 'ouch, your guess is too low 🤦‍♂️'
      );

      // document.querySelector('.message').textContent =
      //   guess > secretNumberGuess
      //     ? 'iish, your guess is too high 🤷‍♂️'
      //     : 'ouch, your guess is too low 🤦‍♂️';
      initialScore = initialScore - 1; //or initialScore = initialScore-- ;
      document.querySelector('.score').textContent = initialScore;
    } else {
      displayMessage('Sorry, you lost the game 😥');

      // document.querySelector('.message').textContent =
      //   'Sorry, you lost the game 😥';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when the guess is too high
  // else if (guess > secretNumberGuess) {
  //   if (initialScore > 1) {
  //     document.querySelector('.message').textContent =
  //       'iish, your guess is too high';
  //     initialScore = initialScore - 1; //or initialScore = initialScore-- ;
  //     document.querySelector('.score').textContent = initialScore;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Sorry, you lost the game 😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //when the guess is too low
  // else if (guess < secretNumberGuess) {
  //   if (initialScore > 1) {
  //     document.querySelector('.message').textContent =
  //       'ouch, your guess is too low';
  //     initialScore = initialScore - 1; //or initialScore = initialScore-- ;
  //     document.querySelector('.score').textContent = initialScore;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Sorry, you lost the game 😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //resetting the inital value and the guss value
  initialScore = 20;
  secretNumberGuess = Math.trunc(Math.random() * 20) + 1;

  // console.log(initialScore);
  // console.log(secretNumberGuess);

  //resetting the values back to inintal default
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayNumber('?');
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = initialScore;

  //resetting the guess input back to an empty space
  document.querySelector('.guess').value = '';

  //resetting the body back to the way it was
  displayBody(' #222');
  // document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
