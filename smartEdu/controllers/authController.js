const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if(user){
      bcrypt.compare(password, user.password, function(err, result){
        if(result){
          res.status(200).send("Yey");
        }
      })
    } 
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
