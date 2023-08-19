const express = require("express");
const Sequelize = require("sequelize");

const app = express();

// 1. Database, 2. username 3. Password

const sequelize = new Sequelize("nxm301", "root", "GQ$e&1YEYQbp", {
  host: "localhost",
  dialect: "mysql", // postgress, mariadb
});

//schema
const students = sequelize.define("saman", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

//route
app.get("/", (req, res) => {
  res.status(200).json({
    isError: false,
    data: "All Ok",
  });
});

sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log("server is running");
  });
});
