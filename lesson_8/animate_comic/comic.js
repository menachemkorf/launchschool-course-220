$(function() {
  var $blinds = $('[id^=blind]');

  function startAnimation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      var delay = 1500;
      var speed = 250;

      $blind.delay(delay * i + speed).animate({
        top: '+=' + $blind.height(),
        height: 0
      }, speed);
    });
  }

  $('a').click(function(e) {
    e.preventDefault();

    $blinds.finish();
    $blinds.removeAttr('style');
    startAnimation();
  });

  startAnimation();
});