function call(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("반가워");
      console.log(name);
    }, 1000);
  });
}

function back() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("back");
      console.log("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("callback hell");
    }, 1000);
  });
}

call("kim")
  .then((res) => {
    console.log(`kim ${res} `);
    return back(res);
  })
  .then((res) => {
    console.log(`${res}을 실행했구나`);
    return hell(res);
  })
  .then((res) => {
    console.log(`여기는 ${res}`);
  });
