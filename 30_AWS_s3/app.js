// npm i aws-sdk
// npm i multer-s3@2.10.0

const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const path = require("path");
const app = express();
const PORT = 8080;
dotenv.config();

// view engine 설정
app.set("view engine", "ejs");

//aws s3 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

// multer 설정
// 서버에 사진을 저장하는 기존 코드
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname); // 확장자
//     cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//   },
// });

// multer 설정2
// s3에 사진을 저장하는 코드
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한 설정

    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);

  /* 
  {
  fieldname: 'image',
  originalname: 'practice2.png',
  encoding: '7bit',
  mimetype: 'image/png',
  size: 296433,
  bucket: 'jinwoo-bucket98',
  key: '1738560933284-practice2.png',
  acl: 'public-read',
  contentType: 'application/octet-stream',
  contentDisposition: null,
  contentEncoding: null,
  storageClass: 'STANDARD',
  serverSideEncryption: null,
  metadata: null,
  location: 'https://jinwoo-bucket98.s3.ap-northeast-2.amazonaws.com/1738560933284-practice2.png',
  etag: '"2c747d9ee0d7b90f791becc8a7a640b7"',
  versionId: undefined
}
  */
  if (req.file) {
    const imageUrl = req.file.location; // S3에 업로드된
    res.render("index", { imageUrl });
  } else {
    res.send("이미지를주세요....");
  }
  res.send("이미지 잘 받았따!");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
