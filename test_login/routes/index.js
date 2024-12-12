const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.home);

router.get("/register", controller.register);

router.post("/register", controller.regist);

router.get("/login", controller.login);

router.post("/login", controller.user);

router.post("/logout", controller.logout);

module.exports = router;
