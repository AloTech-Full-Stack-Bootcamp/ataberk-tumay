const express = require("express");
const app = express();
let ejs = require("ejs");
//%

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.get("/post", (req, res) => {
  res.render("post");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("started at http://localhost:5000/");
});
