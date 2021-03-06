const bcrypt = require("bcrypt");
const User = require("../models/User");
const Category = require("../models/Category");
const Course = require("../models/Course");
const { validationResult } = require("express-validator");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect("/login");
  } catch (e) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      for (let i = 0; i < errors.array().length; i++) {
        req.flash("error", `${errors.array()[i].msg}`);
      }
      res.status(400).redirect("/register");
    }
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          req.session.userID = user._id;
          res.status(200).redirect("/users/dashboard");
        } else {
          req.flash("error", `Your password is not correct!`);
          res.status(400).redirect("/login");
        }
      });
    } else {
      req.flash("error", `User does not exist!`);
      res.status(400).redirect("/login");
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

exports.getDashboardPage = async (req, res) => {
  try {
    let id = req.session.userID;
    let user = await User.findById(id).populate("courses");
    let categories = await Category.find();
    const courses = await Course.find({ user: req.session.userID });
    let users = await User.find();
    res.render("dashboard", {
      pageName: "dashboard",
      user: user,
      categories,
      courses,
      users,
    });
  } catch (error) {}
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete({ id: req.params.id });
    await Course.many({ user: req.params.id });
    res.status(201).redirect("/users/dashboard");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
