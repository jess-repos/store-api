const express = require("express");
const connection = require("./database/connection");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.use("/user", require("./routes/user"));
app.use("/auth", require("./routes/auth"));

const run = async () => {
  try {
    await connection.sync();
    // await connection.sync({ force: true }); // wipes all table data
    console.log("[DATABASE] Ready");
    await app.listen(port);
    console.log("[SERVER] Listening on port,", port);
  } catch (error) {
    console.log(error);
  }
};
run();
