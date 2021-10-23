const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");


class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { len: [4, 128] },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { len: [4, 128] },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [4, 128] },
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;