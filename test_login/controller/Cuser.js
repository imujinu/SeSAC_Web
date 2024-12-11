const { user, sequelize } = require("../models");

exports.home = (req, res) => {
  res.render("index");
};

exports.login = async (req, res) => {
  try {
    console.log("body>>>>>", req.body);
    const { id, pw } = req.body;
    const login = await user.create({
      id: req.body.id,
      pw: req.body.pw,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
