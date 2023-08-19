let form = document.querySelector("form");
let name = document.getElementById("name");
let description = document.getElementById("desc");
let month = document.getElementById("month");
let week = document.getElementById("week");
let meetType = document.getElementById("meetType");
let data = JSON.parse(localStorage.getItem("meets")) || [];
console.log(data);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    name: name.value,
    description: description.value,
    month: month.value,
    week: week.value,
    meetType: meetType.value,
  };
  data.push(obj);
  localStorage.setItem("meets", JSON.stringify(data));
  console.log(data);
});
