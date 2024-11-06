// 문자열에서 사용하는 속성과 메소드
// length
// toUppercase(), toLowercas, trim, indexof, slice
// replace, replaceAll, repeat, split

let str1 = "Strawberry Moon"
let str2 = "  Strawberry Moon  "

// 문자열 인덱싱

console.log(str1[0])
console.log(str1[0] + str1[11])

// sonny 단어 만들기

console.log(str1[0] + str1[13] + str1[14] + str1[14] + str1[9])

// length 속성 확인
console.log(str1.length)
console.log(str2.length)

// 메서드 사용해보기
// trim, toUpperCase, toLowerCase
// 문자열 . method()의 형태로 사용

console.log(str1)
console.log(str2)
console.log(str2.trim()) //trim은 매개변수없이 앞뒤의 공백을 없애준다.
console.log(str2.trim().length)

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, charAt, slice 인자가 들어간다는 의미? 문자나 숫자가 들어가야 한다?
let fruit = "applemango"
// indexOf : 내가 찾고 싶은 무자열의 인덱스번호 반환.

console.log(fruit.indexOf("e")) // 4문자열이기 때문에 따옴표 꼭 붙이기 
console.log(fruit.indexOf("a")) // 0 
console.log(fruit.indexOf("apple")) //가장 앞에 문자열 반환 0 
console.log(fruit.indexOf("mango")) //5
console.log(fruit.indexOf("z")) //없는 문자열을 찾으려고하면 -1을 반환합니다.

// charAt 은 indexOf와 반대로 그 순번의 무슨 문자열이 있는지 반환
console.log(fruit.charAt(0))  // a
console.log(fruit.charAt(8)) //g
console.log(fruit.charAt(40)) // ''반환

console.log(fruit.slice(5)) // mango
console.log(fruit.slice(3,6)) // 3번부터 6번 전까지 
console.log(fruit.slice(-1)) // 맨 뒤에서부터
console.log(fruit.slice(-4)) // -4부터 끝까지. 여기서 순서는 정순. 

console.log(fruit)

// replace , replaceAll
let msg1 =  "Wow~ It is so amazing!! Wow" // 변수를 만들때 순번을 정해주기!
console.log(msg1.replace("Wow", "Hey~~~"))
console.log(msg1.replaceAll("o" , "OO"))
console.log(msg1)

let date = "2024.11.06"
//YYYY-MM--DD
date = date.replaceAll(".","--")
console.log(date.replaceAll(".","--"))

let hello = "hello"
console.log(typeof hello)

let hello2 = hello.split()

console.log(hello2)

hello2 = hello.split("")
console.log(hello2)

hello2 = hello.split("e") //e가 기준이 되어 양분된다. 
console.log(hello2)
console.log(typeof hello2)

// ['2024' , '11', '06']
//date = "2024-11-06"
// 문자열을 => 배열로 바꿔야 한다. 그러면 split을 떠올려야한다!!

console.log(date.split('-')) // 기준점을 설정해주는것! split은 단순히 공백 단위로만 쪼개지는 것이 아니다. 중간에 공통 문자를 넣어주고 짤라줄 수 있다

let numbers = [1, 2, 3, 4, 5, 6]

console.log(numbers.includes(3))

let color = ["yellow" , "red" , "green" , "blue"]

console.log(color.join("red"))

// -------------------------------배열------------------------------! 
console.log('------------------')

let arr1 = [1,2,3,4,5]
let arr2 = ["quakka" , "rabbit" , "puppy", "hamster"]

arr1[5] = 6  // 이렇게 할 경우 맨 끝에 번호를 계산을 해야함.  
arr1[8] = 8  // 중간에 빈값이 존재. 
console.log(arr1)
arr1 = [1,2,3,4,5]

arr1.push(6);
arr1.push(7);
arr1.push(8);
console.log(arr1);

console.log(arr1.pop()) //제거하는 값 반환
arr1.pop()
arr1.pop()
console.log(arr1);

arr2.unshift("cat")
console.log(arr2)
console.log(arr2.shift()) //제거하는 값 반환
console.log(arr2)

//배열. inclues(요소) 배열에 요소가 있는지 없는지 확인.

console.log(arr2.includes("puppy"))
console.log(arr2.includes("cat"))

arr1 = [1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4)) // 3 , 요소가 몇번 인덱스에 있는지

// reverse() , 순서 뒤집기 
arr1.reverse(); // 기존 배열이 변경됩니다. 
console.log(arr1) 
    
// join('') , 배열 > 문자열로 병합
str1 = arr1.join()
console.log(str1) 
// join의 인자로 아무것도 전달이 되지 않으면 
// 배열 안의 컴마까지 같은 문자열로 반환됨

console.log(str1)
str1 = arr1.join("") //컴마를 찍어주면 문자별로 반환됨.
console.log(str1)

// for of, forEach
let arr3 = [1,5,3,4,5]
let alphabets = ['a', 'b', 'c','d','e','f']

// 기본 for문

for( i=0; i<arr3.length ; i++){
   console.log(arr3[i]) 
}

//  for of 문 = > 배열을 모두 한번씩 반복해서 출력할때 사용하면 편하다. for  let 변수

for ( let el of arr3){
    console.log(el)
}

// forEach(익명함수)
// forEach(function(a[,b,c])) a는 필수 b,c는 있어도되고 없어도된다.  a는 el b는 index의 의미 c는 배열

arr3.forEach(function(num,i,arr){
    console.log("요소", num)
    console.log("배열의 인덱스", i)
    console.log("arr3", arr)
    console.log("--------")
})

arr3.forEach((el ) => {
    console.log(el)
})

// filter , map , find
// 매개변수로 들어가는 익명함수에 리턴값이 필수

console.log('------filter------')
//  return 이후의 조건에 만족하는 요소를 찾아서 \
// 새로운 배열로 반환 => 새로운 변수를 지정해주어야함. 

arr2 = ["quakka" , "rabbit" , "puppy", "hamster"]

let six = arr2.filter(function(el){
    return el.length===6 
})

console.log(six)

console.log('---find----')

let six2=arr2.find(function(word){
    return word.length===6
})

console.log(six2)

console.log('----map-----')

let arr4 = [1,2,3,4,5]
// let mlutiArr = arr4.map(function(number){
//     return number*3
// })

let multiiArr = arr4.map((number) => number*3
)
console.log(multiiArr)

// 오브젝트 반복 
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

// for in 구문은 

for (let area in areaNum) {
    console.log(area) //key > 문자열로 반환중
    //값에 접근? 대괄호 접근법으로만 사용가능 
    console.log(areaNum[area])
}
