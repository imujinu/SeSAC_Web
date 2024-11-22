// JSON
// JavaScript Object Notaition

/* 
{
    "name" : "allie",
    "married" : "false",
    "family" : {"father" : "ddd","mother" : "ddd"}

} */

const car = `{
    "model":"아이오닉6",
    "company" : "현대",
    "price" : 500000000,
    "year" : 2023,
    "isElectric":true,
    "option" : ["side mirror", "smart sensor"]
    

    }`;

// key값이 문자열이라고 모든 값도 문자열은 아니다.

console.log(typeof car);
// JSON.parse() > JSON ---> Object
const obj = JSON.parse(car);
console.log(obj);
console.log(typeof obj);
console.log(obj.model);
console.log(obj.option);

//JSON.stiringify() > object ---> JSON

const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

//  stringify()의 세 번째 인자 : 들여쓰기할 공백의 크기
const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);
console.log(carJson2.model);
