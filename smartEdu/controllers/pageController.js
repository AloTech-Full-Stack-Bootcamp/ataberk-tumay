exports.getIndexPage = (req, res) => {
  res.render("index", {
    pageName: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    pageName: "about",
  });
};