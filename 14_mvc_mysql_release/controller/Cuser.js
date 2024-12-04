// TODO: 컨트롤러 코드
const user = require("../model/User");

exports.home = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  user.userInfo(req.body, () => {});
  res.send({ issuccess: true });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  user.userLogin(req.body.id, (result) => {
    const { userid, pw } = result;
    console.log(result);
    // id: 13, userid: '임진우', name: 'sd', pw: '1234'
    if (pw === req.body.pw) {
      res.send({ issuccess: true, id: userid });
    } else {
      res.send({ issuccess: false });
    }
  });
};

exports.postProfile = (req, res) => {
  console.log("reqbody는", req.body);
  user.userLogin(req.body.userid, (result) => {
    const { userid, pw, name } = result;
    res.render("profile", { id: userid, pw: pw, name: name });
  });
};
//   const { id, pw, name } = req.body;

//   user.userLogin(req.body, () => {});
exports.edit = (req, res) => {
  user.userprofile(req.body, () => {
    res.send({ issuccess: true });
  });
};
exports.delete = (req, res) => {
  user.deleteprofile(req.body.id, () => {
    res.send({ issuccess: true });
  });
};
