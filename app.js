const express = require("express");
const connection = require("./database/connection");
const Product = require("./models/Product");
const User = require("./models/User");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.use("/users", require("./routes/user"));
app.use("/auth", require("./routes/auth"));
app.use("/products", require("./routes/product"));

const run = async () => {
  try {
    await connection.sync();
    // insertValues();
    console.log("[DATABASE] Ready");

    await app.listen(port);
    console.log("[SERVER] Listening on port,", port);
  } catch (error) {
    console.log(error);
  }
};
run();

const insertValues = async () => {
  await connection.sync({ force: true }); // wipes all table data

  await User.create({
    username: "nine",
    email: "nine@emailcom",
    password: "nine",
  });
  await User.create({
    username: "nfire",
    email: "nfire@emailcom",
    password: "nfire",
    is_seller: true,
  });
  await User.create({
    username: "jess",
    email: "jess@emailcom",
    password: "jess",
    is_seller: true,
  });
  for (let i = 1; i <= 10; i++) {
    await Product.create({
      name: `product ${i}`,
      description: `description ${i}`,
      price: i,
      quantity: i,
      seller_id: 2,
    });
  }
  for (let i = 11; i <= 20; i++) {
    await Product.create({
      name: `product ${i}`,
      description: `description ${i}`,
      price: i,
      quantity: i,
      seller_id: 3,
    });
  }
};
