const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/User");

const router = express.Router();

router.route("/signup").post(
  [
    body("name").not().isEmpty().withMessage("Please Enter Your Name!"),
    body("email")
      .isEmail()
      .withMessage("Please Enter a Valid E-Mail!")
      .custom(async (userEmail) => {
        const user = await User.findOne({ email: userEmail });
        if (user) {
          return Promise.reject("User already exists");
        }
      }),

    body("password").not().isEmpty().withMessage("Please Enter a Password!"),
  ],
  authController.createUser
);
router.route("/login").post(authController.loginUser);
router.route("/logout").get(authController.logoutUser);
router.route("/dashboard").get(authMiddleware, authController.getDashboardPage);

module.exports = router;
