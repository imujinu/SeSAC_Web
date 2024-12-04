const Visitor = require("../model/Visitior");
/* /GET */

exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */

exports.getVisitors = (req, res) => {
  // DB 연걸전
  //   console.log(Visitor.getVisitors());
  //   res.render("visitors", { data: Visitor.getVisitors() });

  // DB 연결 후
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};

/* /visitor/:id GET */
exports.getvistior = (req, res) => {
  // Visitor.getVisitor()
  console.log(req.params);
  console.log(req.params.id);
  const id = req.params.id;
  Visitor.getVisitor(id, (result) => {
    console.log("한개의 데이터 Cvisitor.js", result);
    res.send(result);
  });
};

/* /visitor POST 등록 INSERT INTO*/
exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};
/* /visitor DELETE 삭제 DELET FROM*/
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 id 삭제완료");
  });
};
/* /visitor PATCH 수정 UPDATE SET*/

exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 완료");
  });
};
