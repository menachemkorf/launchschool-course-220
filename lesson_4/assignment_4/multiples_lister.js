function makeMultipleLister(number) {
  return function() {
    for (var i = number; i <= 100; i += number) {
      console.log(i);
    }
  };
}



var lister = makeMultipleLister(13);
lister();