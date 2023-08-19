type VehicleType = "Car" | "Bike" | "Bus";

export class Vehicle {
  registrationNumber: number;
  color: string;
  VehicleType: VehicleType;
  constructor(
    VehicleType: VehicleType,
    registrationNumber: number,
    color: string
  ) {
    this.VehicleType = VehicleType;
    this.registrationNumber = registrationNumber;
    this.color = color;
  }
}

export class Bike extends Vehicle {
  constructor(registrationNumber: number, color: string) {
    super("Bike", registrationNumber, color);
  }
}
export class Bus extends Vehicle {
  constructor(registrationNumber: number, color: string) {
    super("Bus", registrationNumber, color);
  }
}
export class Car extends Vehicle {
  constructor(registrationNumber: number, color: string) {
    super("Car", registrationNumber, color);
  }
}

export class Slot {
  type: "Car" | "Bike" | "Bus";
  isBooked: boolean;

  constructor(type: "Car" | "Bike" | "Bus") {
    this.type = type;
    this.isBooked = false;
  }
}

export class ParkingSlot {
  addSlots() {}

  availableSlot() {}

  bookSlot() {}
}
