const express = require("express"); //
const router = express.Router();

//controller
const { create, list, read, remove } = require("../controller/category");
const { requireSignin, adminMiddleware } = require("../controller/auth");

//validators
const { runValidation } = require("../validators/index");
const { categoryCreateValidator } = require("../validators/category");

//signout user
router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/categories", list);
router.get("/category/:slug", read);
router.delete("/category/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
