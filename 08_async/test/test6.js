// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

//   콜백 함수 실행

// call("kim", function (name) {
//   console.log(`${name}반가워`);

//   back(function (text) {
//     console.log(`${text}를 실행했구나`);
//     hell(function (msg) {
//       console.log("여기는" + msg);
//     });
//   });
// });

// 기존 콜백 코드
function callPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function backPromise(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// callPromise("kim")
//   .then((result) => {
//     console.log(`${result}반가워`);
//     return backPromise();
//   })
//   .then((text) => {
//     //text는 이전 then 리턴값입니다. = 'back'이라는 문자열
//     console.log(text + "를 실행했구나");
//     //  return 안녕하세요라고 하면 다음 매개변수에 안녕하세요가 들어간다.
//   })
//   .then((msg)=>{
//     console.log(msg)
//   })

// async / await

async function execute() {
  const name = await callPromise("allie");
  console.log(name + "반가워");
  const back = await backPromise();
  console.log(back + "를 실행했구나");
  const hell = await hellPromise();
  console.log(hell + "지옥");
}

execute();
