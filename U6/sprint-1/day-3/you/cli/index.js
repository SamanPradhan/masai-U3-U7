const { sequelize, students, batches } = require("./models");
const express = require("express");
const { Op } = require("sequelize");

const app = express();
app.use(express.json());

app.get("/api/students", async (req, res) => {
  try {
    batches.hasMany(students, { foreignkey: "batcheID" });
    students.belongsTo(batches, { foreignkey: "batcheID" });
    const data = await students.findAll({
      include: [batches],
    });
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});
app.get("/api/students/:search", async (req, res) => {
  try {
    batches.hasMany(students, { foreignkey: "batcheID" });
    students.belongsTo(batches, { foreignkey: "batcheID" });
    const data = await students.findAll({
      include: [batches],
      where: {
        name: {
          [Op.like]: `%${req.params.search}%`,
        },
      },
    });
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

app.post("/api/students", async (req, res) => {
  try {
    // ! Never trust your users they are evil
    const { name, email, age, batcheID } = req.body;
    const data = await students.create({ name, email, age, batcheID });
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

app.put("/api/students/:id", async (req, res) => {
  try {
    const data = await students.upsert({
      id: req.params.id,
      ...req.body,
    });
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

app.post("/api/batches", async (req, res) => {
  try {
    const { name } = req.body;
    const data = await batches.create({ name });
    res.status(200).json({
      isError: false,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Started");
  });
});
