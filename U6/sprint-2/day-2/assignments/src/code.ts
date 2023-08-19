export class Entity {
  health: number;
  strength: number;
  defense: number;
  name: string;

  constructor(health: number, strength: number, defense: number, name: string) {
    this.health = health;
    this.strength = strength;
    this.defense = defense;
    this.name = name;
  }

  movement(): void {
    console.log(`${this.name} is moving.`);
  }
}

// Different Player Characters
export class Player extends Entity {
  level: number;

  constructor(health: number, strength: number, defense: number, name: string) {
    super(health, strength, defense, name);
    this.level = 1;
  }

  attack(): void {
    console.log(`${this.name} is attacking.`);
  }
}

export class Swordsman extends Player {
  constructor() {
    super(100, 10, 20, "Swordsman");
  }

  slashAttack(): void {
    console.log(`${this.name} is performing a slash attack.`);
  }
}

export class Mage extends Player {
  constructor() {
    super(80, 15, 10, "Mage");
  }

  magicAttack(): void {
    console.log(`${this.name} is casting a magic attack.`);
  }
}

export class Spearman extends Player {
  constructor() {
    super(120, 12, 15, "Spearman");
  }

  stabAttack(): void {
    console.log(`${this.name} is performing a stab attack.`);
  }
}

// All Enemies
export class Enemy extends Entity {
  followPlayer(): void {
    console.log(`${this.name} is following the player.`);
  }
}

export class Zombies extends Enemy {
  constructor() {
    super(50, 8, 5, "Zombie");
  }

  poisonAttack(): void {
    console.log(`${this.name} is performing a poison attack.`);
  }
}

export class Werewolf extends Enemy {
  constructor() {
    super(150, 20, 15, "Werewolf");
  }

  biteAttack(): void {
    console.log(`${this.name} is performing a bite attack.`);
  }

  roar(): void {
    console.log(`${this.name} is roaring.`);
  }
}
