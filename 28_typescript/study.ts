let olimpic_newgame: readonly [object, boolean] = [
  { name: "쇼트트랙", type: "혼성계주" },
  true,
];

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

function sum1(a: number, b: number) {
  console.log(a + b);
}

sum1(5, 11);

function sum2(...a: number[]): number {
  let sum = a.reduce((a, b) => a + b);
  return sum;
}

console.log(sum2(1, 2, 3, 4, 10));

function arrElement<K>(a: K[], b: number): string | false {
  if (a.length - 1 < b) {
    return false;
  } else {
    return String(a[b]);
  }
}

console.log(arrElement<string>(["a"], 1));
