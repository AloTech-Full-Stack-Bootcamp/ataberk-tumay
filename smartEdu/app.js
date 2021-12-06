const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");

const app = express();
const PORT = "3000";
//%

//connect to db
mongoose
  .connect("mongodb://localhost/smartedu-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

app.set("view engine", "ejs");
//Middlewares
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
