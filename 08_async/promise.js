function goMart() {
  console.log("마트에 갑니다.");
}

function pickDrink() {
  // 3초동안 고민하는 함수
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끗!");
      product = "콜라";
      price = 1500;
      //   resolve("구매완료"); // then의 콜백의 인자로 전달
      reject("구매실패");
    });
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price}지불.`);
}

//   실행함수
function exec() {
  goMart();
  pickDrink()
    .then((result) => {
      //pickdrink가 끝나고 나서 실행되는 작업
      pay();
      console.log("result?", result);
      // result는 resolve로 전달된 값
    })
    .catch((err) => {
      console.log(err);
      //   reject로 전달된 값
    })
    .finally(() => {
      console.log("집으로 돌아갑니다.");
    });
}

let price, product;
exec();
