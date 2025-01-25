let num: number = 1;
num = 2;
// num = "ssss";// number 형 변수에 string 타입을 할당하려고 해서 err
console.log(num);

let str1: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

//array 선언
let numArr: number[] = [1, 2, 3, 10];
let strArr: Array<string> = ["a", "b", "c"];

let arr1: (number | string)[] = [1, 2, 3, "A", "b"];
let arr4: string[] = ["A", "b", "c", "D"];
let arr2: Array<boolean | null | number[]> = [true, false, null, [1]];

let arr3: any = [1, 2, "a", [], {}, null, true];

// object
let obj1: object = {
  name: "aa",
};

//타입스크립트는 알아서 타입추론을 한다.
//암묵적 타입 지정
let aa = 5;
let bb = "hello";

// aa = "DDD / "
