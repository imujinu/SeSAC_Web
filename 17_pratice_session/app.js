const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

//세션 설정, 10분 뒤 세션 종료하도록 설정
app.use(
  session({
    secret: "secret Key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.get("/", (req, res) => {
  //로그인이 안된 유저 > {isLogin :false}
  //로그인이 된 유저 > {lsLogin : true, user:유저}
  console.log(req.session);
  if (req.session.user !== "") {
    // console.log(req.session.user);
    res.render("index", { islogin: true, user: req.session.user });
  } else {
    res.render("index", { islogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

// POST /login

app.post("/login", (req, res) => {
  //실제 로그인 진행
  //세션 연결
  //세션의 user라는 키를 추가하여 userId값을 value로 전달
  const { userId, userPw } = userInfo;
  const { id, pw } = req.body;
  if (userId === id && userPw === pw) {
    req.session.user = userId;
    res.redirect("/");
  } else {
    res.send({ islogin: false });
  }
});

// GET / logout

app.get("/logout", (req, res) => {
  //실제 로그아웃 진행
  // 세션 삭제
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) throw err;

    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
