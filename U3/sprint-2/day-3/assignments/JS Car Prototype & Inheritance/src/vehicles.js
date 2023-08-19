// Function constructor
function FourWheeler(model, color, speed, fuel) {
  this.model = model;
  this.color = color;
  this.speed = speed;
  this.fuel = fuel;
}

FourWheeler.prototype.setSpeed = function (new_speed) {
  this.speed = new_speed;
  return this.speed;
};
FourWheeler.prototype.updateColor = function (new_color) {
  this.color = new_color;
  return this.color;
};
FourWheeler.prototype.updateFuel = function (new_fuel) {
  this.fuel = new_fuel;
  return this.fuel;
};

// Parent object for Object.create
let FourWheelerObject = {};

// Store function contructor object here
var car1 = new FourWheeler("Maruti", "Red", 100, 50);

// Store Object.create here
var car2 = Object.create(new FourWheeler("Honda", "Blue", 200, 20));
console.log(car2);
export { car1, car2 };
