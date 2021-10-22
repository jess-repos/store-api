const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("thrello", "username", "password", {
  dialect: "sqlite",
  host: "./dev.sqlite",
});

module.exports = sequelize;
