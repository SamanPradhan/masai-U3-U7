module.exports = (sequelize, DataTypes) => {
  const batches = sequelize.define("batches", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return batches;
};
