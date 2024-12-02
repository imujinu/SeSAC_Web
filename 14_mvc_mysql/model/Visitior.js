const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});
exports.getVisitors = (cb) => {
  // [DB연결 전]
  // return [
  //   { id: 1, name: "홍길동", comment: "내가 왔다." },
  //   { id: 2, name: "이찬혁", comment: "으라차차" },
  // ];

  // [DB 연결 후]
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("visitor 테이블 전체 조회", rows);

    cb(rows);
  });
};
