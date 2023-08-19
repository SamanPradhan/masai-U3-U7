// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const userLoginURL = `${baseServerURL}/login`;
const urlTodos = `${baseServerURL}/todos/`;

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let userAuthToken = localStorage.getItem("localAccesstoken") || [];
let getTodoButton = document.getElementById("fetch-todos");

let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");

// loginUserButton.addEventListener("click", () => {
//   let username = loginUserUsername.value;
//   let password = loginUserPassword.value;
//   login(username, password);
// });

function login(username, password) {
  fetch(`${baseServerURL}/login`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.accesstoken);

      //console.log(data);

      if (data) {
        let m = document.createElement("h5");
        m.getAttribute("class", "notification info");
        m.innerText = `hey ${loginUserUsername.value}, welcome back!`;
        notificationWrapper.append(m);
      }
      localStorage.setItem("localAccesstoken", data.accessToken);
      localStorage.setItem("userId", data.user.id);
      // localStorage.setItem("username", data.u)
    });
}

getTodoButton.addEventListener("click", toDos);

async function toDos() {
  console.log(" todo clicked");

  try {
    let toDoRequest = await fetch(`${baseServerURL}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${userAuthToken}`,
      },
    });

    let data = await toDoRequest.json();
    console.log(data);
    // console.log(toDoRequest);
    // console.log(data);
    // mainSection.innerHTML = null;
    // let g = document.createElement("input");
    // g.getAttribute("type", "checkbox");
    // let maSection = document.createElement("div");
    // maSection.innerHTML = JSON.stringify(data);
    // mainSection.append(g, maSection);
  } catch (error) {
    console.log(error);
  }
}

// sortLowToHigh.addEventListener("click", ()=>{
//   try {
//     let toDoRequest = await fetch(`${baseServerURL}/todos`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userAuthToken}`,
//       },
//     });

//     let data = await toDoRequest.json();
//     console.log(toDoRequest);
//     console.log(data);
//     mainSection.innerHTML = null;
//     mainSection.innerHTML = JSON.stringify(data);
//   } catch (error) {
//     console.log(error);
//   }
// })
