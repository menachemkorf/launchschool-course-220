$(function() {
  $('#team li > a').click(function(e) {
    e.preventDefault();

    var $overlay = $(this).siblings('.overlay');
    var $modal = $(this).siblings('.modal');
    var $close = $modal.find('.close');

    $overlay.fadeIn();
    $modal.css('top', function() {
      return $(document).scrollTop() + 80;
    });
    $modal.fadeIn();

    $close.click(function(e) {
      e.preventDefault();

      $modal.fadeOut();
      $overlay.fadeOut();
    });

    $overlay.click(function() {
      $close.trigger('click');
    });

  });
});