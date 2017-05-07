$(function() {
  var shape = null;
  var size = 30;
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext('2d');
  var $color = $('input');

  function drawCircle(e) {
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, size / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function drawSquare(e) {
    ctx.fillRect(e.offsetX - size / 2, e.offsetY - size / 2, size, size);
  }

  function drawTriangle(e) {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY - size / 2);
    ctx.lineTo(e.offsetX + size / 2, e.offsetY + size / 2);
    ctx.lineTo(e.offsetX - size / 2, e.offsetY + size / 2);
    ctx.fill();
    ctx.closePath();
  }

  $('.drawing_method').on('click', function(e) {
    e.preventDefault();
    shape = $(this).html();
    $('.drawing_method.active').removeClass('active');
    $(this).addClass('active');
  });

  $('#clear').on('click', function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  $(canvas).on('click', function(e) {
    ctx.fillStyle = $color.val();
    if (shape === 'Circle') {
      drawCircle(e);
    } else if (shape === 'Square') {
      drawSquare(e);
    } else if (shape == 'Triangle') {
      drawTriangle(e);
    }
  });
});