// TODO: 컨트롤러 코드
const user = require("../models");
const Sequelize = require("sequelize");

exports.home = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  user.User.create({
    userid: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  })
    .then(() => {
      res.send({ issuccess: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  user.User.findOne({
    where: {
      userid: req.body.id,
    },
  }).then((result) => {
    console.log(result.userid);
    if (req.body.pw === result.pw) {
      res.send({ issuccess: true, id: result.userid });
    } else {
      res.send({ issuccess: false });
    }
  });
};

exports.postProfile = (req, res) => {
  console.log("reqbody는", req.body);

  user.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    res.render("profile", {
      id: result.userid,
      pw: result.pw,
      name: result.name,
    });
  });
};

exports.edit = (req, res) => {
  user.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        userid: req.body.id,
      },
    }
  ).then(() => {
    res.send({ issuccess: true });
  });
};
exports.delete = (req, res) => {
  user.User.destroy({
    where: {
      userid: req.body.id,
    },
  }).then(() => {
    res.send({ issuccess: true });
  });
};
