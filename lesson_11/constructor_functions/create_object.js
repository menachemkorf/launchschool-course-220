function createObject(obj) {
  function Func() {}
  Func.prototype = obj;
  return new Func();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true