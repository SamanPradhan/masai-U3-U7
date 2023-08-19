let VaccinatedArray = JSON.parse(localStorage.getItem("Vaccinated")) || [];

let table = document.getElementById("table");
let tbody = document.querySelector("tbody");

Display(VaccinatedArray);

console.log(VaccinatedArray);

function Display(data) {
  tbody.innerHTML = "";
  data.forEach((element, index) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let name = document.createElement("td");
    let Age = document.createElement("td");
    let Designation = document.createElement("td");
    let Priority = document.createElement("td");
    let Vaccine = document.createElement("td");
    let OTP = document.createElement("td");
    let Delete = document.createElement("td");
    let Vaccinate = document.createElement("td");

    id.innerText = element.id;
    name.innerText = element.name;
    Age.innerText = element.age;
    Designation.innerText = element.designation;
    Priority.innerText = element.priority;
    Vaccine.innerText = element.vaccine;

    Delete.innerText = "Delete";

    Delete.addEventListener("click", () => {
      tbody.innerHTML = "";
      VaccinatedArray = VaccinatedArray.filter((el, i) => {
        if (index == i) {
          return false;
        } else {
          return true;
        }
      });
      localStorage.setItem("VaccineData", JSON.stringify(VaccinatedArray));

      Display(VaccinatedArray);
    });

    tr.append(
      id,
      name,
      Age,
      Designation,
      Priority,
      Vaccine,

      Delete
    );
    tbody.append(tr);
  });
}
