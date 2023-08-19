// Write code related to Calender page here
let data = JSON.parse(localStorage.getItem("meets")) || [];
console.log(data);

let filteredMonth = document.getElementById("month");
let Week_1 = document.getElementById("Week-1");
let Week_2 = document.getElementById("Week-2");
let Week_3 = document.getElementById("Week-3");
let Week_4 = document.getElementById("Week-4");

filteredMonth.addEventListener("change", () => {
  console.log(filteredMonth.value, data);
  let datafilter = data.filter((e) => {
    if (filteredMonth.value == e.month) {
      console.log(e);
      return true;
    }
  });
  Display(datafilter);
});

let datajan = data.filter((e) => {
  if (filteredMonth.value == e.month) {
    console.log(e);
    return true;
  }
});

function Display(mainData) {
  Week_1.innerHTML = null;
  Week_2.innerHTML = null;
  Week_3.innerHTML = null;
  Week_4.innerHTML = null;

  mainData.forEach((element) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let description = document.createElement("p");
    let weekSelect = document.createElement("select");
    let del = document.createElement("p");

    let week1 = document.createElement("option");
    let week2 = document.createElement("option");
    let week3 = document.createElement("option");
    let week4 = document.createElement("option");
    weekSelect.addEventListener("change", () => {
      console.log(element);
      element.week = weekSelect.value;
      console.log(element);
      localStorage.setItem("meets", JSON.stringify(mainData));
      Display(mainData);
    });

    del.addEventListener("click", () => {
      console.log(element);
      mainData = mainData.filter((e, i) => {
        if (element != e) {
          return true;
        }
      });
      localStorage.setItem("meets", JSON.stringify(mainData));
      Display(mainData);
    });

    let meetType = document.createElement("p");
    del.innerText = "Delete";
    name.innerText = element.name;
    description.innerText = element.description;
    week1.innerText = "Week-1";

    week2.innerText = "Week-2";

    week3.innerText = "Week-3";

    week4.innerText = "Week-4";

    meetType.innerText = element.meetType;
    weekSelect.append(week1, week2, week3, week4);
    div.append(name, description, meetType, weekSelect, del);
    if (element.week == "Week-1") {
      Week_1.append(div);
      console.log(element.week);
    }
    if (element.week == "Week-2") {
      Week_2.append(div);
      console.log(element.week);
    }
    if (element.week == "Week-3") {
      Week_3.append(div);
      console.log(element.week);
    }
    if (element.week == "Week-4") {
      Week_4.append(div);
      console.log(element.week);
    }
  });
}

Display(datajan);
