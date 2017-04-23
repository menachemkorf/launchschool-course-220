document.addEventListener('DOMContentLoaded', function() {
  var answer;
  var guesses;

  var input = document.querySelector('#guess');
  var form = document.querySelector('form');
  var link = document.querySelector('a');
  var paragraph = document.querySelector('p');
  var guessBtn = document.querySelector('[type=submit]');

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    guessBtn.disabled = false;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var guess = parseInt(input.value, 10);
    var message;

    if (isNaN(guess)) {
      message = 'Please enter a number';
    } else if (guess === answer) {
      message = 'You guessed it in ' + String(guesses) + ' guesses!'
      guessBtn.disabled = true;
    } else if (guess > answer) {
      message = 'My number is lower than ' + guess;
      guesses++;
    } else {
      message = 'My number is higher than ' + guess;
      guesses++;
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', function(event) {
    event.preventDefault();

    newGame();
  });

  newGame();

});