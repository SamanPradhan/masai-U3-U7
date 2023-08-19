// Problem 1.
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
Animal.prototype.makeSound = function () {
  return `Animal is making a sound`;
};

function Mammal(name, type, hasFur) {
  Animal.call(this, name, type);
  this.hasFur = hasFur;
  this.makeSound = function () {
    return "Mammal is making a sound";
  };
}
Object.setPrototypeOf(Mammal.prototype, Animal.prototype);

function Dog(name, type, hasFur, breed) {
  Mammal.call(this, name, type, hasFur);
  this.breed = breed;
  this.makeSound = function () {
    return `Woof Woof!`;
  };
}
Object.setPrototypeOf(Dog.prototype, Mammal.prototype);

class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.attack = function (enemy) {
      enemy.health = enemy.health - this.attackPower;
      return enemy.health;
    };
    this.isAlive = function () {
      return this.health > 0;
    };
  }
}
let character = new Character("John", 100, 20);
let enemy = new Character("Enemy", 100, 20);
class Warrior extends Character {
  constructor(name, health, attackPower, weapon, armor) {
    super(name, health, attackPower);
    this.armor = armor;
    this.weapon = weapon;
    this.attack = function (enemy) {
      if (this.weapon == "sword") {
        enemy.health -= this.attackPower + 10;
      }
      return enemy.health;
    };
    this.defend = function () {
      return (this.health += 10);
    };
  }
}

export { Dog, Mammal, Animal, Character, Warrior };
