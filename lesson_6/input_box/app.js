var cursorInterval;
var focusedTextField;

document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');

    cursorInterval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);

    focusedTextField = true;
  });
});

document.addEventListener('keyup', function(event) {
  if (focusedTextField) {
    var contentElement = document.querySelector('.content');
    if (event.which === 8) {
      contentElement.textContent = contentElement.textContent.slice(0, -1);
    } else if (event.key.length === 1) {
      contentElement.textContent = contentElement.textContent + event.key;
    }
  }
});

document.addEventListener('click', function(event) {
  clearInterval(cursorInterval);
  var textField = document.querySelector('.text-field');
  textField.classList.remove('focused', 'cursor');
  focusedTextField = false;
});