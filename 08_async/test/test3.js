function call(name) {
  return new Promise((res, rej) => {
    console.log(name);
    setTimeout(() => {
      res("반가워");
    }, 1000);
  });
}

function back() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("back");
      // res("back");
    }, 1000);
    setTimeout(() => {
      res("back을 실행했구나");
    }, 2000);
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
  })
  .then((res) => {
    return back(res);
  })
  .then((res) => {
    console.log(res);
    return hell(res);
  })
  .then((res) => {
    console.log(`여기는 ${res}`);
  });
