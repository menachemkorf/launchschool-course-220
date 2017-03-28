function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate: rate,
    brakeRate: brakeRate,
    accelerate: function() {
      this.speed += this.rate;
    },
    brake: function() {
      this.speed -= brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}


var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);

var coupe = makeCar(12, 9);
coupe.accelerate();
console.log(coupe.speed);

var hatckback = makeCar(9, 7);
hatckback.accelerate();
console.log(hatckback.speed);