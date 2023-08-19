export enum ShowType {
  comedy = "Standup Comedy",
  dance = "Dance Show",
  singing = "Singing Show",
}

export class Show {
  private name: string;
  private type: ShowType;

  protected constructor(name: string, type: ShowType) {
    this.name = name;
    this.type = type;
  }

  protected book(money: number): void {
    throw new Error("Method not implemented.");
  }
}
type SeatType = {
  seat: string;
  availability: number;
  price: number;
};
export class DanceShow extends Show {
  private seats: SeatType[];

  constructor(name: string) {
    super(name, ShowType.dance);
    this.seats = [];
  }

  addSeat(seat: SeatType): void {
    this.seats.push(seat);
  }

  book(seat: string, money: number): void {
    const selectedSeat = this.seats.find((s) => s.seat === seat);

    if (
      selectedSeat &&
      selectedSeat.availability > 0 &&
      money >= selectedSeat.price
    ) {
      selectedSeat.availability -= 1;
      console.log(`Seat ${seat} booked for ${this.name}`);
    } else {
      console.log(`Failed to book seat ${seat} for ${this.name}`);
    }
  }
}

export class ComedyShow extends Show {
  private seats: number;
  private ticketPrice: number;

  constructor(name: string, seats: number, ticketPrice: number) {
    super(name, ShowType.comedy);
    this.seats = seats;
    this.ticketPrice = ticketPrice;
  }

  book(money: number): void {
    if (this.seats > 0 && money >= this.ticketPrice) {
      this.seats -= 1;
      console.log(`Ticket booked for ${this.name}`);
    } else {
      console.log(`Failed to book ticket for ${this.name}`);
    }
  }
}

export class SingingShow extends Show {
  private seats: SeatType[];

  constructor(name: string, seats: SeatType[]) {
    super(name, ShowType.singing);
    this.seats = seats;
  }

  book(seat: string, money: number): void {
    const selectedSeat = this.seats.find((s) => s.seat === seat);

    if (
      selectedSeat &&
      selectedSeat.availability > 0 &&
      money >= selectedSeat.price
    ) {
      selectedSeat.availability -= 1;
      console.log(`Seat ${seat} booked for ${this.name}`);
    } else {
      console.log(`Failed to book seat ${seat} for ${this.name}`);
    }
  }
}
