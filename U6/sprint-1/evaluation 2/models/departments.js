module.exports = (sequelize, DataTypes) => {
  const departments = sequelize.define("departments", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return departments;
};
// Departments
// id(Number)
// title(string)
// description(tring)

// {
//   "title": "operations",
//   "description": "operations works here",
// }
