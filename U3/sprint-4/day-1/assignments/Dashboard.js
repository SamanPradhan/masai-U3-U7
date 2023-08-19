let table = document.getElementById("table");
let tbody = document.querySelector("tbody");
let masaiVaccineArray = JSON.parse(localStorage.getItem("VaccineData")) || [];
let VaccinatedArray = JSON.parse(localStorage.getItem("Vaccinated")) || [];

Display(masaiVaccineArray);

console.log(masaiVaccineArray);

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
    OTP.innerText = Math.ceil(Math.random() * 10000);
    Delete.innerText = "Delete";
    Vaccinate.innerText = "Vaccinate";

    Delete.addEventListener("click", () => {
      tbody.innerHTML = "";
      masaiVaccineArray = masaiVaccineArray.filter((el, i) => {
        if (index == i) {
          return false;
        } else {
          return true;
        }
      });
      localStorage.setItem("VaccineData", JSON.stringify(masaiVaccineArray));

      Display(masaiVaccineArray);
    });

    Vaccinate.addEventListener("click", () => {
      let correctID = id.innerText;
      let correctOTP = OTP.innerText;
      let correctName = name.innerText;
      let correctVaccine = Vaccine.innerText;
      console.log(correctOTP);
      OTPPrompt(correctID, correctOTP, correctName, correctVaccine);
      VaccinatedArray.push(element);
      localStorage.setItem("Vaccinated", JSON.stringify(VaccinatedArray));
      console.log(VaccinatedArray);
    });
    tr.append(
      id,
      name,
      Age,
      Designation,
      Priority,
      Vaccine,
      OTP,
      Delete,
      Vaccinate
    );
    tbody.append(tr);
  });
}
function OTPPrompt(id, otp, name, vaccine) {
  let enterOTP = prompt("Enter your OTP for further access", "OTP");
  if (enterOTP == otp) {
    masaiVaccineArray = masaiVaccineArray.filter((el, i) => {
      if (el.id == id) {
        return false;
      } else {
        return true;
      }
    });
    tbody.innerHTML = "";
    // setTimeout(() => {
    localStorage.setItem("VaccineData", JSON.stringify(masaiVaccineArray));
    Display(masaiVaccineArray);
    // }, "10000");
    alert(`${name} Added to Queue`);
    setTimeout(() => {
      alert(`Vaccinating ${vaccine}`);
    }, "5000");
    setTimeout(() => {
      alert(`${name} Vaccinated`);
    }, "10000");
  } else {
    alert("wrong OTP");
  }
}
