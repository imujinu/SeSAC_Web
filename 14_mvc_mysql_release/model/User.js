// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

exports.userInfo = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUES (NULL,"${data.id}","${data.name}","${data.pw}")`,
    (err, rows) => {
      if (err) throw err;

      cb(rows);
    }
  );
};

exports.userLogin = (id, cb) => {
  conn.query(`SELECT * from user WHERE userid="${id}"`, (err, rows) => {
    if (err) throw err;

    cb(rows[0]);
  });
};

exports.userprofile = (data, cb) => {
  conn.query(
    `UPDATE user SET name = "${data.name}", pw= "${data.pw}" WHERE userid="${data.id}" `,
    (err, rows) => {
      if (err) throw err;
      cb();
    }
  );
};

exports.deleteprofile = (id, cb) => {
  conn.query(`DELETE FROM user WHERE userid="${id}"`, (err, rows) => {
    if (err) throw err;
    cb();
  });
};
