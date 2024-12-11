const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");
const session = require("express-session");
const crpyto = require("crypto");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter);

// app.use(session({}))

app.get("*", (req, res) => {
  res.render("404");
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected!");

    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection err!", err);
  });
