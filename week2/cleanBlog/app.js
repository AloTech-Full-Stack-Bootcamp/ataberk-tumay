const express = require("express");
const app = express();
let ejs = require("ejs");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const {
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  createPost,
} = require("./controllers/postController");
const {
  getAbout,
  getAddPost,
  getPostEditPage,
} = require("./controllers/pageController");
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
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//ROUTES
app.get("/",   getAllPosts);
app.get("/about", getAbout);
app.get("/add_post", getAddPost);
app.get("/posts/:id", getPost);
app.get("/posts/edit/:id", getPostEditPage);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", deletePost);
app.post("/posts", createPost);

//LISTENS TO THE SERVER
app.listen(process.env.PORT || 5000, () => {
  console.log("started at http://localhost:5000/");
});
