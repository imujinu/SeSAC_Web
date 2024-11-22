const express = require("express");
const app = express();
const PORT = 8080;

// 미들 웨어 설정
// ejs views 미들 웨어 설정

app.set("view engine", "ejs");
app.set("views", "./views"); // 뷰파일 폴더 경로 설정

//정적 파일 관리
// app.use("/static", express.static(__dirname + "/public"));

//body-parser 설정

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // json형식으로 파일을 주고받겠다.

// 요청 > 응답
app.get("/", function (req, res) {
  console.log("nodemon 실행!!!");
  res.render("index");
});

// form get요청
app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("form data get 요청 성공!");
  // title "GET"
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
});

// form post요청
app.post("/postForm", function (req, res) {
  console.log(req.body);
  //   res.send("form data post 요청 성공!");

  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
});

// form validation post 요청
app.post("/js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사");
});

// 1. /practice1에 대한 GET 요청
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});

// 2. /practice2에 대한 GET 요청
app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});

// 3. 주소 지정 form GET 요청
app.get("/practice_result", (req, res) => {
  console.log(req.query);
  res.render("practice/practice_result", {
    userInfo: req.query,
    addInfo: false, // practice1에서는 적은 정보를 주고 있음
  });
});
//  4. 주소 지정 form POST 요청

app.post("/practice_result2", (req, res) => {
  // res.send("응답완료");
  // console.log(req.body);
  res.render("practice/practice_result", {
    userInfo: req.body,
    addInfo: true,
  });
});

// API 4개 작업해야함

// 실습문제!
// practice1으로 들어갔을 때, practice1.ejs를 화면에 보여줘
// practice2으로 들어갔을 때, practice2.ejs를 화면에 보여줘
//  practice1, practice2,ejs에는 각각 get post를 통한 폼 요청이 있고
// 결과 페이지는 practice_result.ejs를 공통으로 사용

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
