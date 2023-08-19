type Gender = "Male" | "Female" | "Other";

interface PersonType {
  name: string;
  age?: number;
}

// Type alias
const p: PersonType = {
  name: "",
  age: 20,
};

class Person implements PersonType {
  name: string;
  gender: Gender;
  aadhar_id: number;
  constructor(name: string, gender: Gender, aadhar_id: number) {
    this.name = name;
    this.gender = gender;
    this.aadhar_id = aadhar_id;
  }
  //   isMarriageable() {
  //     if (this.age < 21) return false;
  //     return true;
  //   }
}
