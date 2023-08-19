let id = document.getElementById("id");
let name = document.getElementById("name");
let Age = document.getElementById("Age");
let Designation = document.getElementById("Designation");
let Priority = document.getElementById("Priority");
let Vaccine = document.getElementById("Vaccine");
let button = document.getElementById("button");
let form = document.querySelector("form");

let masaiVaccineArray = JSON.parse(localStorage.getItem("VaccineData")) || [];
console.log(masaiVaccineArray);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let currId = id.value;
  let currName = name.value;
  let currAge = Age.value;
  let currDesignation = Designation.value;
  let currPriority = Priority.value;
  let currVaccine = Vaccine.value;

  var masaiVaccine = {
    id: currId,
    name: currName,
    age: currAge,
    designation: currDesignation,
    priority: currPriority,
    vaccine: currVaccine,
  };

  if (
    currAge >= 18 &&
    currAge <= 40 &&
    currName.length >= 4 &&
    currPriority &&
    currVaccine &&
    currDesignation
  ) {
    // for (let i = 0; i < masaiVaccine.length; i++) {
    //   if (masaiVaccineArray[i].id == currId) {
    //     alert("User already exist with same ID");
    //     console.log(currId);
    //     break;

    //   }
    // }
    console.log(masaiVaccine);
    masaiVaccineArray.push(masaiVaccine);
    console.log(masaiVaccineArray);
    localStorage.setItem("VaccineData", JSON.stringify(masaiVaccineArray));
  } else {
    alert("Please enter correct details");
  }
});
