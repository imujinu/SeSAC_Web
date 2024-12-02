const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();
// router.get('/')

router.get("/", controller.main);

router.get("/comments", controller.comments);

router.get("/comment/:id", controller.comment);

// router.get('/user',)

module.exports = router;
