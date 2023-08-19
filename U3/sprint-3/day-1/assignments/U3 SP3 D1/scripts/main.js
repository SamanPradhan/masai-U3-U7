// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

// register
let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassword = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

// login
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

//fetch employee details
let fetchEmployeeData = document.getElementById("fetch-employees");

// getTodo
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// cats
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let catsData = [];

// employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

let employeesData = [];

// ***** Event listeners ***** //
// window.addEventListener("load", () => {
//   fetchAndRenderEmployees();
// });

sortAtoZBtn.addEventListener("click", () => {});

sortZtoABtn.addEventListener("click", () => {});

empCreateBtn.addEventListener("click", () => {});

fetchEmployeeData.addEventListener("click", fetchEmployee);

updateScoreEmpSalaryButton.addEventListener("click", function () {});

updateEmpUpdateBtn.addEventListener("click", function () {});

loginUserButton.addEventListener("click", loginUser);

registerUserButton.addEventListener("click", registerUser);

async function registerUser() {
  try {
    let obj = {
      username: registerUserUsername.value,
      firstname: registerUserFirstname.value,
      lastname: registerUserLastname.value,
      email: registerUserEmail.value,
      password: registerUserPassword.value,
    };

    let register_request = await fetch(`${baseServerURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    console.log(register_request);
  } catch (error) {
    console.log(error);
  }
}

async function loginUser() {
  try {
    let loginObj = {
      username: loginUserUsername.value,
      password: loginUserPassword.value,
    };

    let login_request = await fetch(`${baseServerURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    });
    console.log(login_request);
  } catch (error) {
    console.log(error);
  }
}

async function fetchEmployee() {
  try {
    let getEmployee = await fetch(`${baseServerURL}/employees`);
    let data = await getEmployee.json();

    console.log(data);
    renderCardList(data);
  } catch (error) {
    console.log(error);
  }
}
// ***** Utilities ***** //
// array of objects
// id, title, desc, linkText, linkUrl, imageUrl
function renderCardList(cardData) {
  let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            `${baseServerURL}/${item.image}`,
            item.name,
            item.salary
          )
        )
        .join("")}
    </div>
  `;

  mainSection.innerHTML = cardList;

  // let editLinks = document.querySelectorAll(".card__link");
  // for (let editLink of editLinks) {
  //   editLink.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     let currentId = e.target.dataset.id;
  //     populateEditForms(currentId);
  //   });
  // }
}

function getCard(id, image, name, salary) {
  let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=${image} alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${name}</h3>
          <div class="card__item card__description">
            ${salary}
          </div>
          
        </div>
      </div>
  `;
  return card;
}
