// const sec_in_day = 84600;
// function isValid(sec) {
//   if (sec > sec_in_day) {
//     return;
//   }
//   for (let i = 0; i <= sec; i++) {
//     console.log(i);
//   }
// }

// name,gender,aadhar_id, age
// getter / setter
class Person {
  constructor(name, gender, aadhar_id, age) {
    this.name = name;
    this.gender = gender;
    this.aadhar_id = aadhar_id;
    this.age = age;
  }
  isMarriageable() {
    if (this.age < 21) return false;
    return true;
  }
}

const p = new Person("a", "M", 1, 20);
console.log(p);
p.isMarriageable();
