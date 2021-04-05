const express = require("express");
const router = express.Router();

//controller
const {
  signup,
  signin,
  signout,

  forgotPassword,
} = require("../controller/auth");

//validators
const { runValidation } = require("../validators");
const {
  userSigninValidator,
  forgotPasswordValidator,
} = require("../validators/auth");

router.post("/signup", signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);
router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);

module.exports = router;
