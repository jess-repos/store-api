const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "database",
  process.env.SQL_USERNAME,
  process.env.SQL_PASSWORD,
  {
    dialect: "sqlite",
    host: "./database/database.sqlite",
  }
);

module.exports = sequelize;
