function call(name) {
  return new Promise((res, rej) => {
    console.log(name);
    setTimeout(() => {
      res(`${name}반가워`);
    }, 1000);
  });
}

function back() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("back");
    }, 1000);
    setTimeout(() => {
      res("back을 실행합니다.");
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

async function execute() {
  const a = await call("kim");
  console.log(a);
  const b = await back();
  console.log(b);
  const c = await hell();
  console.log(c);
}

execute();
