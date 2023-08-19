function UserInfo(name, location) {
  this.name = name;
  this.location = location;
}

function serveFood(food) {
  Object.setPrototypeOf(serveFood, UserInfo);
  return `Serving ${food} to ${this.name} in ${this.location}`;
}
function serveIn(name, location, food) {
  let obj = new UserInfo(name, location);
  return serveFood.call(obj, food);
}
function billNote(total) {
  return `${this.name}'s bill is INR ${total}`;
}
function generateInVoice(name, location, quantity, price) {
  let newObj = new UserInfo(name, location);
  let total = quantity * price;
  return billNote.apply(newObj, [total]);
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
