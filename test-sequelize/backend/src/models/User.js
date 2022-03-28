const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
