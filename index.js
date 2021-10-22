const express = require("express");
const sequelize = require("./connection/database");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/users", require("./routes/user"));
app.use("/auth", require("./routes/auth"));

const run = async () => {
  try {
    await sequelize.sync();
    // await sequelize.sync({ force: true }); // wipes all table data
    console.log("[DATABASE] Ready");
    await app.listen(7000);
    console.log("[SERVER] Listening on port 7000");
  } catch (error) {
    console.log(error);
  }
};
run();
