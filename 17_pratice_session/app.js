const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
  if (req.session.user) {
    // console.log(req.session.user);
    res.render("index", { islogin: true, user: req.session.user });
  } else {
    res.render("index", { islogin: false });
  }
});

app.get("/login", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
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
    res.send(`<script>
      alert('아이디 또는 비밀번호가 틀렸어요. 다시 시도하세요.')
      document.location.href='/login'
      </script>`);
  }
});

app.get("/login", (req, res) => {
  const user = req.session.user;
  console.log(user);
  if (user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

// GET / logout

app.get("/logout", (req, res) => {
  //실제 로그아웃 진행
  // 세션 삭제
  // console.log(req.session);
  const user = req.session.user;
  if (user) {
    // 로그인된 유저라면 >> 로그아웃 시켜주기
    req.session.destroy((err) => {
      if (err) throw err;

      res.redirect("/"); //로그아웃 종료 후 home으로
    });
  } else {
    res.send(`<script>
      alert('이미 세션이 만료되었습니다.')
      document.location.href = '/'
      </script>`);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
