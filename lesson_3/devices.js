var iPad   = {
  name: 'iPad',
  price: 40000,
};
var kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + ' dollars' + punctuation);
}

printLine.apply(iPad, [1, ';']);        // "1: iPad, 400 dollars;"
printLine.call(kindle, 2, '.');      // "2: kindle, 300 dollars."
