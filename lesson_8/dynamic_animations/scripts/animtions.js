$(function() {
  var $canvas = $('#canvas');

  function getFormObject($form) {
    var obj = {};

    $form.serializeArray().forEach(function(input) {
      obj[input.name] = input.value;
    });

    return obj
  }

  function createElement(data) {
    var $div = $('<div />', {
      'class': data.shape_type,
      data: data
    });

    resetElement($div);

    return $div;
  }

  function getStartPositions($div) {
    return {
      left: +$div.data('start_x'),
      top: +$div.data('start_y')
    };
  }

  function animateElement() {
    var $e = $(this);
    var data = $e.data();

    resetElement($e);

    $e.animate({
      left: +data.end_x,
      top: +data.end_y
    }, 1000);
  }

  function resetElement($e) {
    var data = $e.data();

    $e.stop();
    $e.css({
      left: +data.start_x,
      top: +data.start_y
    });
  }

  function stopAnimation() {
    $canvas.find('div').stop();
  }

  $('form').submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    var data = getFormObject($form);
    $canvas.append(createElement(data));
  });

  $('#start').click(function(e) {
    e.preventDefault();

    $canvas.find('div').each(animateElement);
  });

  $('#stop').click(function(e) {
    e.preventDefault();

    stopAnimation();
  });
});