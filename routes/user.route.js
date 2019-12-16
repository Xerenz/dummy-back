const express = require("express");
const router = express.Router();

const user_controller = require("../controller/user.controller");

router.get("/new", user_controller.new_test);
router.post("/create", user_controller.user_create);

module.exports = router;