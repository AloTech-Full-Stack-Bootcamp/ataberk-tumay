const Post = require("../model/Post");


function getAbout(req, res) {
  res.render("about");
}
function getAddPost(req, res) {
  res.render("add_post");
}
async function getPostEditPage(req, res) {
  let id = req.params.id;
  let post = await Post.findById(id);
  res.render("edit", {
    post,
  });
}
module.exports = {getAbout, getAddPost, getPostEditPage};