const express = require("express");
const app = express();
const PORT = "3000";
//%

app.set("view engine", "ejs");
//Middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    pageName: "index",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageName: "about",
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
