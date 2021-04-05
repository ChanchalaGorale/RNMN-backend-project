const express = require("express"); //
const router = express.Router();

//controller
const { create, list, read, remove } = require("../controller/tag");
const { requireSignin, adminMiddleware } = require("../controller/auth");

//validators
const { runValidation } = require("../validators/index");
const { tagValidator } = require("../validators/tag");

//signout user
router.post(
  "/tag",
  tagValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/tags", list);
router.get("/tag/:slug", read);
router.delete("/tag/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
