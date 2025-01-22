function printSome<T>(x: T, y: T) {
  console.log(x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>("1", "2");
printSome<boolean>(true, false);
// printSome<boolean>(true, "false");

function printSome2<T, K>(x: T, y: K): T {
  console.log(x, y);
  return x;
}

printSome2<number, string>(1, "hello");

function arrLength(arr: any[]): number {
  return arr.length;
}

function getValue(val: any) {
  return val;
}

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

function getValue2<T>(val: any): T {
  return val;
}

console.log(arrLength2<string>(["a", "B"]));
console.log(arrLength2<string | number>(["a", "B", 1, 2]));
console.log(getValue2<string[]>(["a"]));

//interface generic 사용
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-13"),
  option: "black",
};

console.log(iphone);

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};
