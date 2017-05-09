var shape = {
  type: '',
  getType: function() {
    return this.type;
  }
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"
console.log(Triangle.prototype.constructor === Triangle);