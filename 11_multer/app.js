const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");

/* 미들웨어 설정 */
// 1. view eingine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. static 폴더 설정
// app.use("/static", express.static(__dirname + "/public"));
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
// 클라이언트에서 여기에 있는 정보를 읽어오기 위하여

// 4. multer 설정

const upload = multer({
  dest: "uploads/", // 어디에 저장될지!
});
//파일을 uploads로 보내주는 역할

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); // 경로를 설정
      //uploads라는 경로가 미리 설정되어 있어야함
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자) >> 확장자만
      const extension = path.extname(file.originalname); // .png . webp , ...

      //   path.basename(파일이름.확장자, 확장자) >>파일이름만 리턴
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      ); // 언제 올렸는지 알려주기 위해서

      console.log("path.basename", path.basename(file.originalname, extension));
      console.log("path.basename", path.basename(file.originalname));
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 }, // 5MB
});

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  // single의 인자에는 name값을 입력해준다.
  console.log(req.body); // 파일 정보는 req.file 에서 확인
  console.log(req.file);
  /* 
  fieldname: 'userfile', // 폼 내부에 정의한 name값
  originalname: 'ì\x8A¤í\x81¬ë¦°ì\x83· 2024-11-24 184434.png', // 원본 파일명
  encoding: '7bit', //파일 인코딩 타입
  mimetype: 'image/png', // 파일 타입
  destination: 'uploads/', // 파일 저장경로
  filename: '9df2c4c7e1fb03006aa557d1b077ac39', //저장된 파일명
  path: 'uploads\\9df2c4c7e1fb03006aa557d1b077ac39', // 업로드된 파일 전체 경로
  size: 109714 // 파일 크기 (byte)
  */
  res.send("응답!");
});

//하나의 input에 여러개의 파일
// . array()

app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  //   console.log(req.file);
  console.log(req.files); // 파일 여러 개일 때는 files로 확인!!
  /* 
   fieldname: 'multifiles',
    originalname: 'ì\x8A¤í\x81¬ë¦°ì\x83· 2024-11-21 164722.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'ì\x8A¤í\x81¬ë¦°ì\x83· 2024-11-21 1647221732518400706.png',
    path: 'uploads\\ì\x8A¤í\x81¬ë¦°ì\x83· 2024-11-21 1647221732518400706.png',
    size: 1841
  */
  console.log(req.body);
  res.send("업로드 완료!!");
});

// 여러 개의 input에 파일 업로드
// .fields() 사용
// fields의 매개변수는 배열 [{name : 'name값1'},...]

app.post(
  "/upload/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    console.log(req.files); // 객체 형태로 들어옴
    console.log(req.body);
    /* 
        {filename1 : [{업로드 파일 정보}], 파일name2:[{업로드 파일 정보}]}
    */
    res.send("업로드 완료");
  }
);

app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  /* 
  fieldname: 'dynamicFile',
  originalname: 'ì\x8A¤í\x81¬ë¦°ì\x83· 2024-11-25 122632.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'ì\x8A¤í\x81¬ë¦°ì\x83· 2024-11-25 1226321732520704539.png',
  path: 'uploads\\ì\x8A¤í\x81¬ë¦°ì\x83· 2024-11-25 1226321732520704539.png',
  size: 218034
  */
  // 하나의 객체에 합쳐서 보내는 방법
  // res.send(...req.body, ...req.file);
  res.send({ file: req.file, fileInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
