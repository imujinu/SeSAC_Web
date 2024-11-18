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

async function execute() {
  let user = await call("kim");
  console.log("kim" + user);
  let videos = await back();
  console.log(videos + "을 실행했구나");
  let title = await hell();
  console.log("여기는" + title);
}

execute();
