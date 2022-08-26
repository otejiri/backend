// server
require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const path = require("path");
const Routes = require("./routes");
const connection = require("./util/database");

app.get("api/", Routes);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
