function Vehicle() {}

Vehicle.prototype.doors = 4;
Vehicle.prototype.wheels = 4;

function Coupe() {}
Coupe.prototype = new Vehicle();
Coupe.prototype.constructor = Coupe;

function Motorcycle() {}
Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.constructor = Motorcycle;

function Sedan() {}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;


var sedan = new Sedan();
var coupe = new Coupe();
var motorcycle = new Motorcycle();
console.log(coupe instanceof Coupe);
console.log(motorcycle instanceof Motorcycle);
console.log(sedan instanceof Sedan);
console.log(sedan instanceof Vehicle);
