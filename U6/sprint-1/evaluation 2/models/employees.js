module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define("employees", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    departmentID: {
      type: DataTypes.INTEGER,
      reference: {
        model: "departments",
        key: "id",
      },
    },
  });
  return employees;
};

// Employees
// id(Number)
// Name(string)
// Email(string)
// Sallary(Number)
// DepartmentID(Number)

// {
//   "name": "Saman",
//   "email":"saman@gmail.com",
//   "salary": 20000,
//   "departmentID": 5

// }
