$(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    var numerator = Number($('#numerator').val());
    var denominator = Number($('#denominator').val());
    var operator = $(this).find('select').val();
    var result;

    if (operator === '+') {
      result = numerator + denominator;
    } else if ((operator === '-')) {
      result = numerator - denominator;
    } else if ((operator === '*')) {
      result = numerator * denominator;
    } else if ((operator === '/')) {
      result = numerator / denominator;
    }

    $('h2').text(result);
  });
});