function makeLogger(number) {
  return function() {
    console.log(number);
  }
}

function delayLog() {
  for (var i = 1; i <= 10; i++) {
    var logger = makeLogger(i);
    setTimeout(logger, i * 1000);
  }
}

delayLog();