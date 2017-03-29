var tempertures = [53, 86, 12, 43];

function average() {
  var total = 0;

  for (var i = 0; i < this.length; i++) {
    total += this[i];
  }

  return total / this.length;
}

console.log(average()); // NaN

// using apply
console.log(average.apply(tempertures)); //48.5

// using call
console.log(average.call(tempertures)); //48.5

// using bind
var averageTempertures = average.bind(tempertures);
console.log(averageTempertures());

tempertures.average = average;
console.log(tempertures.average());
