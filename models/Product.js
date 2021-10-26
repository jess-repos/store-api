const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      validate: { len: [4, 128] },
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      validate: { len: [4, 128] },
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    seller_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "product",
  }
);

module.exports = Product;
