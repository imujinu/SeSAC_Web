const express = require("express");
const app = express();
const PORT = 8000;
const { sequelize } = require("./models/index");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리

const indexRouter = require("./routes/user");
app.use("/user", indexRouter);
// 기본 주소: localhost:PORT/user <- 주의!!

// TODO: 404 에러 처리

app.get("*", (req, res) => {
  res.render("404");
});

sequelize.sync({ force: false }).then(() => {
  console.log("db연결완료");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
