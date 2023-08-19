const express = require("express");
const { sequelize, departments, employees } = require("./models");
const { Op } = require("sequelize");
const app = express();
app.use(express.json());

// app.get("/api/employees", async (req, res) => {
//   try {
//     const empData = await employees.findAll();
//     res.status(200).send({ data: empData });
//   } catch (error) {
//     res.status(400).send({ error: error });
//   }
// });

//joined data all and pagination
app.get("/api/employees/", async (req, res) => {
  try {
    console.log(req.query);
    console.log("starts here");
    const page_no = req.query.page_no;
    const employee_per_page = req.query.employee_per_page;
    const search_value = req.query.search_value;
    const search_key = req.query.search_key;
    console.log(page_no, employee_per_page);
    departments.hasMany(employees, { foreignkey: "departmentID" });
    employees.belongsTo(departments, { foreignkey: "departmentID" });

    const empData = await employees.findAll({
      include: [departments],
    });

    if (page_no != undefined && employee_per_page != undefined) {
      let a = (+page_no - 1) * +employee_per_page;
      let b = +page_no * +employee_per_page;
      console.log("a is", a);
      let arr = [];
      for (let i = a; i < b; i++) {
        console.log("yes");
        arr.push(empData[i]);
      }
      res.status(200).send({ data: arr });
    } else if (search_value != undefined) {
      console.log("search value", search_value);
      const empData_search_value = await employees.findAll({
        include: [departments],
        where: {
          name: {
            [Op.like]: `%${search_value}%`,
          },
        },
      });
      res.status(200).send({ data: empData_search_value });
    } else if (search_key != undefined) {
      const empData_search_key = await employees.findAll({
        include: [departments],
        where: {
          id: search_key,
        },
      });
      res.status(200).send({ data: empData_search_key });
    } else {
      res.status(200).send({ data: empData });
    }
  } catch (error) {
    console.log(error.msg);
    res.status(400).send({ error: error });
  }
});

// app.get("/api/employees/:search_value", async (req, res) => {
//   try {
//     const search_value = req.params.search_value;

//     departments.hasMany(employees, { foreignkey: "departmentID" });
//     employees.belongsTo(departments, { foreignkey: "departmentID" });
//     const empData = await employees.findAll({
//       include: [departments],
//       where: {
//         name: {
//           [Op.like]: `%${search_value}%`,
//         },
//       },
//     });
//     res.status(200).send({ data: empData });
//   } catch (error) {
//     res.status(400).send({ error: error });
//   }
// });

// app.get("/api/employees/:search_key ", async (req, res) => {
//   try {
//     const search_key = req.params.search_key;
//     departments.hasMany(employees, { foreignkey: "departmentID" });
//     employees.belongsTo(departments, { foreignkey: "departmentID" });
//     const empData = await employees.findAll({
//       include: [departments],
//       where: {
//         id: {
//           [Op.like]: search_key,
//         },
//       },
//     });
//     res.status(200).send({ data: empData });
//   } catch (error) {
//     res.status(400).send({ error: error });
//   }
// });
app.post("/api/employees", async (req, res) => {
  try {
    const { name, email, salary, departmentID } = req.body;
    const empData = await employees.create({
      name,
      email,
      salary,
      departmentID,
    });
    res.status(200).send({ data: empData });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

app.put("/api/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.query);
    const empData = await employees.upsert({ id: id, ...req.body });
    res.status(200).send({ data: empData, msg: "the employee is updated" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

app.delete("/api/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(req.query);
    const empData = await employees.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({ msg: "the employee is deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
});

app.post("/api/departments", async (req, res) => {
  try {
    const { title, description } = req.body;

    const deptData = await departments.create({ title, description });
    res.status(200).send({ data: deptData });
  } catch (error) {
    res.status(400).send({ error: error.msg });
  }
});

app.get("/api/departments", async (req, res) => {
  try {
    const deptData = await departments.findAll();
    res.status(200).send({ data: deptData });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});
sequelize.sync().then(() => {
  app.listen(5050, () => {
    console.log("server connected at 5050");
  });
});
