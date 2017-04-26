$(function() {
  var $ul = $('ul');

  $('form').submit(function(e) {
    e.preventDefault();

    var name = $(this).find('#name').val();
    var quantity = $(this).find('#quantity').val() || 1;

    $ul.append('<li>' + quantity + ' ' + name + '</li>');
    this.reset();
  });
});