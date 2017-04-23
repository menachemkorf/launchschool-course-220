document.addEventListener("DOMContentLoaded", function() {
  var composer = document.querySelector('.composer');
  var textarea = composer.querySelector('textarea');
  var counterElement = composer.querySelector('.counter');
  var button = composer.querySelector('button');


  function updateCounter() {
    var length = textarea.value.length;
    var remaining = 140 - length;
    var message = remaining.toString() + ' characters remaining';
    var invalid = remaining < 0;

    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;

    counterElement.textContent = message;
  }

  textarea.addEventListener("keyup" , updateCounter);

  updateCounter();
  // var max = 140;
  // var message;

  // textarea.addEventListener("keyup" , function(event) {
  //   message = (max - textarea.value.length) + ' characters remaining';
  //   counterElement.innerHTML = message;

  //   if (max - textarea.value.length < 0) {
  //     textarea.classList.add('invalid');
  //     button.disabled = true;
  //   } else {
  //     textarea.classList.remove('invalid');
  //     button.disabled = false;
  //   }
  // });
});