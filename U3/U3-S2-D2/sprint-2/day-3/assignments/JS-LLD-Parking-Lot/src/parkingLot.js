class Vehicle {
  constructor(type, registrationNumber, color) {
    this.type = type;
    this.registrationNumber = registrationNumber;
    this.color = color;
  }
}

class Car extends Vehicle {
  constructor(registrationNumber, color) {
    super("Car", registrationNumber, color);
  }
}

class Bike extends Vehicle {
  constructor(registrationNumber, color) {
    super("Bike", registrationNumber, color);
  }
}

class Bus extends Vehicle {
  constructor(registrationNumber, color) {
    super("Bus", registrationNumber, color);
  }
}

class Slot {
  constructor(type, number) {
    this.type = type;
    this.number = number;
    this.isBooked = false;
  }
}

class ParkingFloor {
  constructor(floorNumber, maxLimit) {
    this.floorNumber = floorNumber;
    this.maxLimit = maxLimit;
    this.parkingSpots = [];
    this.vacantParkingSpots = [];

    // we need to have some slot objects in the parking spots
    this.parkingSpots.push(new Slot("Bus", 1)); //0
    this.parkingSpots.push(new Slot("Bike", 2)); // 2
    this.parkingSpots.push(new Slot("Bike", 3)); // 3
    this.parkingSpots.push(new Slot("Car", 4)); // 1
  }

  displayAvailableSlots() {
    this.vacantParkingSpots = this.parkingSpots.filter((slot) => {
      if (slot.isBooked === false) {
        return true;
      } else {
        return false;
      }
    });

    return this.vacantParkingSpots;
  }

  findAndParkVehicle(vehicle) {
    let currentVehicleType = vehicle.type; // Bus, Car, Bike
    for (let parkingSpot of this.parkingSpots) {
      if (parkingSpot.type === currentVehicleType) {
        if (parkingSpot.isBooked === false) {
          parkingSpot.isBooked = true;
          return true; // parking was successful
        }
      }
    }

    return false;
  }

  parkVehicle(vehicleObject) {
    console.log("vehicle *****", vehicleObject);
    let parkingSccessful = this.findAndParkVehicle(vehicleObject);

    if (!parkingSccessful) {
      return `${vehicleObject.type} slots are full`;
    }

    this.displayAvailableSlots();
  }
}

// let pf1 = new ParkingFloor(1, 4);

// let bs1 = new Bus("BUZ 123", "Orange");
// let bk1 = new Bike("BIK 101", "Black");
// let cr1 = new Car("CRR 234", "Red");

// pf1.parkVehicle(bs1);
// pf1.parkVehicle(bk1);
// pf1.parkVehicle(cr1);

// console.log(pf1.parkingSpots);
// console.log("display av ***", pf1.displayAvailableSlots());

export { Vehicle, Car, Bike, Bus, Slot, ParkingFloor };
