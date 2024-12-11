const crypto = require("crypto");

/* 
1. crypto를 통해 단방향 암호화 구현 > 복호화 불가능
- createHash(알고리즘)
- pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1) createHash(알고리즘).update(평문),digest(인코딩방식)
// 인코딩 방식 : base64, hex, ascii, binary
// 암호화된 문장을 우리가 읽을 수 있는 문자열로 인코딩하는 것

const createHashPW = (pw) => {
  return crypto.createHash("sha-512").update(pw).digest("base64");
};

console.log(createHashPW("1234"));
console.log(createHashPW("1234")); // 전부 똑같은 값
console.log(createHashPW("1234.")); // 조금만 변해도 전혀 다른 해시값이 나옴

// 1-2) pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘).toString(인코딩방식)

function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha-512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //Buffer 객체를 리턴하는 중
    .toString("base64");
  return { salt, hash };
} // DB에 salt와 hash 모두 저장해야함

console.log("pbkdf2Syc>>", saltAndHashPw("1234"));
console.log("pbkdf2Syc>>", saltAndHashPw("1234"));
console.log("pbkdf2Syc>>", saltAndHashPw("1234"));

// 암호 비교 함수
function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100; // 반복횟수 saltAndHashPw와 같아야함
  const keylen = 64; // saltAndHashPw와 같아야함
  const algorithm = "sha-512"; // saltAndHashPw와 같아야함
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");

  return hash === savedHash;
}

const realPw = "qwer1234";
console.log("---------------------------");
const data = saltAndHashPw(realPw);
console.log(data);
const { salt: DBsalt, hash: DBhash } = data;
console.log("=========비밀번호 일치 여부 확인=========");
const isMatch = checkPw("qwer1234!", DBsalt, DBhash);
const isMatch2 = checkPw("qwer1234", DBsalt, DBhash);
console.log(isMatch);
console.log(isMatch2);

/* 
2. 양방향 알고리즘
-crateCipheriv : 암호화
-crateDeCipheriv : 암호화
*/

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // (비밀수)
const algorithm = "aes-256-cbc";
const originalMessage = "hello, world!"; // 원본 메시지, 평문
//암호화
function encrypt(text) {
  //1. 암호화 객체 생성
  // const cipher = crypto.createCipheriv(알고리즘,키,iv)
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // 2. 실제 데이터 암호화
  //   let encrypted =  cipher.update(평문,입력 인코딩,출력 인코딩)
  let encrypted = cipher.update(text, "utf8", "base64");

  // 3. 최종 결과 생성
  encrypted += cipher.final("base64");

  return encrypted; //암호화된 데이터
}
// console.log(encrypt(originalMessage));
// console.log(encrypt(originalMessage));

//복호화
function decrypt(encryptedText) {
  // 1. 복호화 객체를 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 전역변수를 사용해야함. 다 똑같은 값이어야 하기 때문에

  // 2. 실제 데이터 복호화
  let decrypted = decipher.update(encryptedText, "base64", "utf8");

  // 3. 최종 결과 생성

  decrypted += decipher.final("utf8");

  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log("암호화된 문장", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("복호화된 문장", decryptedMessage);
