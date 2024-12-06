// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.home);

router.get("/signup", controller.getSignup);

router.post("/signup", controller.postSignup);

router.get("/signin", controller.getSignin);

router.post("/signin", controller.postSignin);

router.post("/profile", controller.postProfile);

router.patch("/profile/edit", controller.edit);

router.delete("/profile/delete", controller.delete);

module.exports = router;
