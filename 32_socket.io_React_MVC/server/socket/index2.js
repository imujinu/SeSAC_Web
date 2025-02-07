const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const nickInfo = {};
  io.on("connection", (socket) => {
    console.log(socket.id);
    // [chatting1.jsx]

    // [chatting2.jsx]
    // 닉네임 사용2. 닉네임중복 체크
    socket.on("checkNick", (nickName) => {
      if (Object.values(nickInfo).includes(nickName)) {
        // 닉네임이 nickInfo에 존재하는 경우(닉네임 중복)
        socket.emit("error", "이미 존재하는 닉네임 입니다.");
      } else {
        //닉네임이 nickInfo에 존재하지 않는 경우 (중복 x, 사용 가능)
        nickInfo[socket.id] = nickName;

        //중복되지 않는 닉네임 클라이언트로 전달
        socket.emit("entrySuccess", nickName);

        //입장 성공시 입장메세지 보내기
        io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다.");
        // 입장성공시 해당 클라이언트에게 전체 user정보 넘겨줌
        io.emit("updateNicks", nickInfo);
      }
    });
    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + "님이 퇴장했습니다.");
      delete nickInfo[socket.id];
    });
  });
}

module.exports = socketHandler;
