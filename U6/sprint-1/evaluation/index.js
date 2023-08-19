const express = require("express");

const app = express();

app.use(express.json());

//students
app.use("/students", studentRouter());
//listening
app.listen(4500, () => {
  console.log("connected to server");
});
