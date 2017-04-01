function partial(func, arg1) {
  return function(arg2) {
    func(arg1, arg2);
  };
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function greet(greeting, name) {
  console.log(capitalize(greeting) + ', ' + name + '!');
}

var sayHello = partial(greet, 'hello');
var sayHi = partial(greet, 'hi');

sayHello('Brandon'); // Hello, Brandon!
sayHi('Sarah'); // Hi, Sarah!