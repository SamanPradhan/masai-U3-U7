//! S -> Single Responsibility
class Student {
  constructor() {
    // Define the keys here
  }
  register() {}
  sendEmail() {}
  give_assignments() {}
}

// ! O -> Open Close Principle(Code should be open for extension but closed for modification)

// class Player {
//   constructor() {
//     // Define the keys here
//   }
//   // swords man
//   slash() {}
//   // Archer
//   snipe() {}
//   // Assasin
//   poison() {}
//   // mage
// }

class Player {
  constructor() {}
}

class Swordsman extends Player {
  constructor() {
    super();
  }

  slash() {}
}

// ! L -> Liscov Substitution Principle(If you can't replace the child class with the parent class you shouldn't make that inheritance)
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number) {
    this.width = width;
  }
  setHeight(height: number) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Squere extends Rectangle {
  constructor(width: number) {
    super(width, width);
  }

  setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number): void {
    this.height = height;
    this.width = height;
  }
}

const sq = new Squere(5);
sq.setWidth(6);
console.log(sq.area()); // 36

const rec = new Rectangle(5, 5);
rec.setWidth(6);
console.log(rec.area()); // 30

// ! I -> Interface Segrigation Principle
