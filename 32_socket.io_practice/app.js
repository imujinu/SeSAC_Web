const express = require("express");
const app = express();
const PORT = 8080;

const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("chat");
});

app.get("/talk", (req, res) => {
  res.render("talk");
});
io.on("connection", (socket) => {
  socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다.`);
  //   나를 제외한 모든 클라이언트에게 입장 공지문 발송

  // [4-2 ] 메세지를 하나의 클라이언트에게 받아서 전체 클라이언트에게 전달
  socket.on("send", (msg) => {
    console.log(`${socket.id} : ${msg}`);
    io.emit("message", { id: socket.id, message: msg });
  });

  socket.on("chat", (msg, cb) => {
    cb(msg);
    socket.broadcast.emit("text", msg);
  });

  socket.on("join", (room) => {
    socket.join(room);
    socket.room = room;
    console.log(socket.id);
    socket.broadcast.to(room).emit("enter", `${socket.id}님이 입장하셨습니다.`);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
