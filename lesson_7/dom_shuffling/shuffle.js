$(function() {
  $('body').prepend($('header').eq(-1));
  $('header').eq(0).prepend($('h1').eq(0));
  $('article').append($('figure'));

  var $babyMop = $('[src="images/baby_mop.jpg"]');
  var $chinStick = $('[src="images/chin_stick.jpg"]');
  var $babyMopClone = $babyMop.clone();
  var $chinStickClone = $chinStick.clone();

  $babyMop.replaceWith($chinStickClone);
  $chinStick.replaceWith($babyMopClone);
});