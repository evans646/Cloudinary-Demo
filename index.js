//require dotenv here
const express = require("express");
const app = express();
const path = require("path");
require("ejs");
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("", (req, res) => {
  res.render("home");
});

// code goes here



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
