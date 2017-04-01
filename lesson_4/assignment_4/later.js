function later(func, arg) {
  return function() {
    func(arg);
  };
}

var logWarning = later(console.log, 'The system is shutting down!');
logWarning()