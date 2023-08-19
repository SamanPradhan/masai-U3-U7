let name = document.getElementById("name");
let age = document.getElementById("age");
let place = document.getElementById("place");
let batch_Name = document.getElementById("batch_Name");
let profession = document.getElementById("profession");
let button = document.getElementById("button");
let form = document.querySelector("form");

// let masaiVaccineArray = JSON.parse(localStorage.getItem("VaccineData")) || [];
// console.log(masaiVaccineArray);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let currName = name.value;
  let currAge = age.value;
  let currplace = place.value;
  let currbatch_Name = batch_Name.value;
  let currprofession = profession.value;

  var masaiVaccine = {
    name: currName,
    age: currAge,
    place: currplace,
    batch_Name: currbatch_Name,
    profession: currprofession,
  };

  console.log(masaiVaccine);
});
