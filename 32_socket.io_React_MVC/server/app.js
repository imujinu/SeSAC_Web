const express = require("express");
const http = require("http");
const cors = require("cors");
const socketHandler = require("./socket/index3"); // 추가
const indexRouter = require("./routes");
const PORT = 8080;
// const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
// const io = socketIO(server);
socketHandler(server); // 추가

app.use(cors());
const prefix = "/api";
app.use(prefix, indexRouter);

server.listen(PORT, () => {
  console.log("server is open!! Port is", PORT);
});
