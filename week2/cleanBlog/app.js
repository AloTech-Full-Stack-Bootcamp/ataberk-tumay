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

//create post
// Post.create({
//   title: "Cat",
//   detail: "Test Cat"
//   (has default date now)
// });

//read all posts
// Post.find({},(err, data)=>{
//   console.log(data);
// });

//update post
// Post.findByIdAndUpdate(
//   "61812fbe42008d7db1709967",
//   {
//     title: "Updated Cat",
//     detail: "This is also updated",
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete post
// Post.findByIdAndDelete("61812fbe42008d7db1709967", (err, data)=>{
//   console.log("Item is deleted");
// });

//MIDDLEWARES
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"));

//ROUTES
app.get("/", async (req, res) => {
  let posts = await Post.find({});
  res.render("index", {
    posts
  });
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
app.post("/posts", async (req, res)=>{
  await Post.create({
    title: req.body.title,
    detail: req.body.detail 
  })
  res.redirect("/");
});
app.listen(process.env.PORT || 5000, () => {
  console.log("started at http://localhost:5000/");
});
