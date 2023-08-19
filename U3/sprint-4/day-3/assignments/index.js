let name = document.getElementById("name");
let password = document.getElementById("password");
let form = document.querySelector("form");
let button = document.getElementById("button");

form.addEventListener("click", (e) => {
  e.preventDefault();
  let username = name.value;
  let pantone_value = password.value;
  login(username, pantone_value);
});

function login(username, password) {
  fetch(`https://reqres.in/api/login`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      pantone_value: pantone_value,
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

      localStorage.setItem("localAccesstoken", data.accessToken);
      localStorage.setItem("userId", data.user.id);
      // localStorage.setItem("username", data.u)
    });
}
