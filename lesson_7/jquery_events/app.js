$(function() {
  // var $input = $('input[type=text]');
  // var key;

  $('form').submit(function(e) {
    e.preventDefault();

    var key = $('#key').val().charCodeAt(0);
    $(document).off('keypress').on('keypress', function(e) {
      if (e.which !== key) {
        return;
      }

      $('a').trigger('click');
    });

  });

  $('a').click(function(e) {
    e.preventDefault();

    $('#accordion').slideToggle();
  });
});