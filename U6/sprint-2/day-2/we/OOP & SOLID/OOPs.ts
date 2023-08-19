// !
abstract class Vehicle {
  engine: string;
  wheel: number;
  constructor(engine: string, wheel: number) {
    this.engine = engine;
    this.wheel = wheel;
  }
  startEngine() {
    // Complex Code
    console.log(this.engine, "Started");
  }
}

class Car extends Vehicle {
  isAC: boolean;
  price: number;
  constructor(engine: string, wheel: number, isAC: boolean, price: number) {
    super(engine, wheel);
    this.isAC = isAC;
    this.price = price;
  }
}
const c = new Car("uuu", 4, true, 2000);
class Bus extends Vehicle {
  no_of_seats: number;
  ticket: number;
  constructor(
    engine: string,
    wheel: number,
    no_of_seats: number,
    ticket: number
  ) {
    super(engine, wheel);
    this.no_of_seats = no_of_seats;
    this.ticket = ticket;
  }
  startEngine() {
    // Totally new Complex Code
    alert(this.engine + "Started");
  }
}
class Students {
  name: string;
  age: number;
  private id: number;
  static id_counter: number = 1;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = Students.id_counter;
    Students.id_counter++;
  }
  get ID() {
    return `FW23_${this.id}`;
  }
}

const s = new Students("a", 20);
console.log(s.ID);
const t = new Students("b", 30);
