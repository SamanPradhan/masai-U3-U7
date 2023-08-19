export class Vehicle {
  constructor(public registrationNumber: number, public color: string) {}
}

export class Bike extends Vehicle {
  constructor(registrationNumber: number, color: string) {
    super(registrationNumber, color);
  }
}

export class Bus extends Vehicle {
  constructor(registrationNumber: number, color: string) {
    super(registrationNumber, color);
  }
}

export class Car extends Vehicle {
  constructor(registrationNumber: number, color: string) {
    super(registrationNumber, color);
  }
}

export class Slot {
  constructor(public type: string, public isBooked: boolean = false) {}
}

export class ParkingSlot {
  maxLimit: number;
  parkingSpots: Slot[];

  constructor(maxLimit: number) {
    this.maxLimit = maxLimit;
    this.parkingSpots = [];
  }

  addSlots(slot: Slot): number {
    if (this.parkingSpots.length < this.maxLimit) {
      this.parkingSpots.push(slot);
    }
    return this.parkingSpots.length;
  }

  availableSlot(vehicleType: string): number {
    let count = 0;
    for (const slot of this.parkingSpots) {
      if (slot.type === vehicleType && !slot.isBooked) {
        count++;
      }
    }
    return count;
  }

  bookSlot(vehicle: Car | Bike | Bus): boolean {
    for (const slot of this.parkingSpots) {
      if (slot.type === vehicle.constructor.name && !slot.isBooked) {
        slot.isBooked = true;
        return true;
      }
    }
    return false;
  }
}
