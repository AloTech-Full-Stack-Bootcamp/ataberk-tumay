const express = require("express");
const app = express();
let ejs = require("ejs");
const mongoose = require("mongoose");
const Post = require("./model/Post.js");
//%

//EJS ENGINE
app.set("view engine", "ejs");

//MONGODB CONNECTION
mongoose.connect("mongodb://localhost/cleanblog-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//ROUTES
app.get("/", async (req, res) => {
  let posts = await Post.find({});
  res.render("index", {
    posts,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.get("/posts/:id", async (req,res)=>{
  let id = req.params.id;
  let post = await Post.findById(id);
  res.render("post", {
    post
  });
});

app.post("/posts", async (req, res) => {
  await Post.create({
    title: req.body.title,
    detail: req.body.detail,
  });
  res.redirect("/");
});
//LISTENS TO THE SERVER
app.listen(process.env.PORT || 5000, () => {
  console.log("started at http://localhost:5000/");
});
