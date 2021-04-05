const { check } = require("express-validator");

exports.tagValidator = [
  check("name").not().isEmpty().withMessage("Please enter category name"),
];
