const Post = require("../model/Post.js");

async function getAllPosts(req, res) {
  let posts = await Post.find({});
  res.render("index", {
    posts,
  });
}
async function getPost(req, res) {
  let id = req.params.id;
  let post = await Post.findById(id);
  res.render("post", {
    post,
  });
}

async function updatePost(req, res) {
  let id = req.params.id;
  let post = Post.findById(id);
  await Post.findByIdAndUpdate(
    id,
    {
      title: req.body.title || post.title,
      detail: req.body.detail || post.detail,
    },
    {
      new: true,
    }
  );
  res.redirect(`/posts/${id}`);
}
async function deletePost(req, res) {
  await Post.findOneAndDelete({ _id: req.params.id });
  res.redirect("/");
}
async function createPost(req, res) {
  await Post.create({
    title: req.body.title,
    detail: req.body.detail,
  });
  res.redirect("/");
}

module.exports = {getAllPosts, getPost, updatePost, deletePost, createPost };
