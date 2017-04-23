document.addEventListener("DOMContentLoaded", function() {
  var x = document.querySelector('.x');
  var horizontal = x.querySelector('.horizontal');
  var vertical = x.querySelector('.vertical');

  document.addEventListener("mousemove", function(event) {
    x.style.top = String(event.clientY) + 'px';
    x.style.left = String(event.clientX) + 'px';
  });

  document.addEventListener("keypress", function(event) {
    if (event.key === 'g') {
      horizontal.style.background = 'green';
      vertical.style.background = 'green';
    }

    if (event.key === 'b') {
      horizontal.style.background = 'blue';
      vertical.style.background = 'blue';
    }

    if (event.key === 'r') {
      horizontal.style.background = 'red';
      vertical.style.background = 'red';
    }
  });
});