function makeCounterLogger(start) {
  return function(finish) {
    if (start < finish) {
      for (var i = start; i <= finish; i++) {
        console.log(i);
      }
    } else {
      for (var i = start; i >= finish; i--) {
        console.log(i);
      }
    }

  };
}

var counterlog = makeCounterLogger(5);
counterlog(10);
counterlog(2);
