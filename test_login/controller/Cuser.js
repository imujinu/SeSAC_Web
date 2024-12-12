const { user, sequelize } = require("../models");
const crypto = require("crypto");

// 암호화 함수
const saltAndHashPw = async function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha-512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //Buffer 객체를 리턴하는 중
    .toString("base64");
  return { salt, hash };
};

// 확인 함수
const checkPw = async function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100; // 반복횟수 saltAndHashPw와 같아야함
  const keylen = 64; // saltAndHashPw와 같아야함
  const algorithm = "sha-512"; // saltAndHashPw와 같아야함
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");

  return hash === savedHash;
};

exports.home = (req, res) => {
  const name = req.session.name;

  console.log("session------", req.session);
  if (name) {
    res.render("index", { login: true, name });
  } else {
    res.render("index", { login: false });
  }
};

exports.register = (req, res) => {
  res.render("register");
};

exports.regist = async (req, res) => {
  try {
    const { userid, name, pw } = req.body;
    const hashPw = await saltAndHashPw(pw);
    const login = await user.create({
      userid,
      name,
      pw,
      hash: hashPw.hash,
      salt: hashPw.salt,
    });
    res.send("회원가입성공!");
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

exports.login = (req, res) => {
  const name = req.session.name;

  if (name) {
    res.render("login", { login: true, name });
  } else {
    res.render("login", { login: false });
  }
};

exports.user = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const result = await user.findOne({
      where: {
        userid,
      },
    });
    const { userid: dbid, name: dbname, salt, hash, pw: dbpw } = result;

    if (userid === dbid && pw === dbpw) {
      if (await checkPw(pw, salt, hash)) {
        req.session.name = dbname;
        res.send({ login: true });
      }
    } else {
      res.send({
        login: false,
        message: "아이디 또는 비밀번호가 일치하지 않습니다.",
      });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

exports.logout = (req, res) => {
  const name = req.session.name;

  if (true) {
    req.session.destroy((err) => {
      if (err) throw err;
      res.send({ delete: true });
    });
  } else {
    res.send({ delete: false });
  }
};
