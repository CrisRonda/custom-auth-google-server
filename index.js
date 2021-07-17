const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 4321;
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/", require("./routes/auth"));

app.listen(PORT, (err) => {
  if (err) {
    throw new Error("Ocurrio un error");
  }
  console.log(`Server Listen in ${PORT} `);
});
