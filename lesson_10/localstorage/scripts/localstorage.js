$(function() {
  var $tabs = $('nav a');
  var $articles = $('#tabs article');
  var tab = localStorage.getItem('tab');
  var color = localStorage.getItem('color');
  var note = localStorage.getItem('note');

  function showActiveTab(tab) {
    $tabs.removeClass('active').eq(tab).addClass('active');
    $articles.hide().eq(tab).show();
  }

  function colorBody(color) {
    $('body').css('background-color', color);
  }

  showActiveTab(tab);
  colorBody(color);
  $('[value="'+ color +'"]').prop('checked', true);
  $('textarea').val(note);

  $('nav').on('click', 'a', function(e) {
    e.preventDefault();

    tab = $(this).closest('li').index();
    showActiveTab(tab);
    localStorage.setItem('tab', tab);
  });

  $(':radio').on('change', function(e) {
    color = $(this).val();
    colorBody(color);
    localStorage.setItem('color', color);
  });

  $(window).on('unload', function(e) {
    localStorage.setItem('note', $('textarea').val());
  });

});