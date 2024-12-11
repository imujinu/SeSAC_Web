const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.home);

router.post("/", controller.login);

module.exports = router;
