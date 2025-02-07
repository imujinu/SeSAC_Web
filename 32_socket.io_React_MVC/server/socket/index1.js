const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("test", (str) => {
      console.log(str);
      socket.emit("test2", "메세지 잘 받았습니다!");
    });

    socket.on("bye", (str) => {
      console.log(str);
      socket.emit("bye2", "잘가요요");
    });
    socket.on("study", (str) => {
      console.log(str);
      socket.emit("study2", "공부하자");
    });
    socket.on("hello", (str) => {
      console.log(str);
      socket.emit("hello2", "안녕하세요");
    });
  });
}

module.exports = socketHandler;
