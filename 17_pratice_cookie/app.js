const express = require("express");
const app = express();
const PORT = 8080;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//TODO : 쿠키 미들웨어 설정

app.use(cookieParser());

const cookieConfig = {
  expires: new Date(2024, 12, 10),
};

app.get("/", (req, res) => {
  res.render("index", { popup: req.cookies.myCookie });
  // TODO : 쿠키값 가져오기 및 index.ejs에 보내기
  //  res.render ('index', {popup : 쿠키값})
});

app.post("/set-cookie", (req, res) => {
  // 쿠키 생성 하기
  res.cookie("myCookie", "cookie~", cookieConfig);
  res.send(req.cookies);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
