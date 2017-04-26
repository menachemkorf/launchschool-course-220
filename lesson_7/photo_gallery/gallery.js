$(function() {
  var $lis = $('li');

  $lis.click(function(e) {
    var index = $(this).index();

    if ($(this).hasClass('active')) {
      return;
    }

    $('li.active').removeClass('active');
    $(this).addClass('active');

    $('figure.active').removeClass('active');
    $('figure').eq(index).addClass('active');
  });

  $('a').click(function(e) {
    e.preventDefault();

    var $active = $('li.active');

    if ($(this).hasClass('next')) {
      var index = $lis.index($active) + 1;
      index = index < $lis.length ? index : 0;
    } else if ($(this).hasClass('back')) {
      var index = $lis.index($active) - 1;
      index = index >= 0 ? index : $lis.length - 1;
    }

    $lis.eq(index).trigger('click');
  });
});