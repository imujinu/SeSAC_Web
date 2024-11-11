// 1. 태그 내부 내용 변경 
/* 
-innerText
-textContent
-innerHTML
 */

let div1 = document.getElementById('div1')
div1.innerText="     여기는 <b>첫번째</b> 태그입니다.&hearts;     /" 
// 2칸 이상의 공백문자 제거, 앞뒤로 공백문자 제거 
console.log(div1.innerText)
div1.innerHTML="     여기는 <b>첫번째</b> 태그입니다.&hearts;"
// 태그와 ntt코드를 읽는다! innerText와 textContent는 읽지못해!
div1.textContent="     여기는 <b>첫번째</b> 태그입니다.&hearts;     /" // 콘솔 창에 공백도 반영된다. 
console.log(div1.textContent)

// 2. 속성에 접근
/* 
-요소.속성명 
-getAttribute(): 속성값 가져오기
-setAttribute(): 속성값 설정
*/

// pooh,naver 아이디
let naver = document.getElementById("naver")
let pooh = document.getElementById("pooh")
console.log(naver)

// naver.setAttribute(속성이름, 바꿔줄 속성값)
naver.setAttribute("href" , "http://wwww.google.com")
console.log(naver.href)
naver.textContent="구글로 이동"
console.log(naver.getAttribute("href"))

console.log(document.querySelector('#pooh').src)
console.log(document.querySelector('#pooh').alt="푸사진") //setAttribute를 사용하지 않아도 요소.속성 = 값 지정으로 변경 가능

// 3.css 변경
let h1 = document.querySelector("h1")
let list= document.querySelectorAll("li")

console.log(h1)
console.log(list)

// for ( let el of list) { 
//     el.style.backgroundColor="pink"
//     el.style.color="#fff"
//     el.style.fontSzie="1.3rem"
// } => 인라인 속성으로 설정하는 방법

for (let el of list) {
 el.classList.add('friends')
}
// =>클래스만 추가하는 방법. 

// 클래스값을 추가시킬때에는 문자열이라고 지정을 해주어야 하네. 그치 ''없으면 변수가 되니까.


h1.classList.add("add-h1") // 클래스 추가
h1.classList.remove("add-h1") // 클래스 제거
h1.classList.toggle("add-h1") // 클래스가 없으면 추가, 있으면 제거

// 클래스가 있는지 없는지 확인 >> true, false "반환"
console.log(h1.classList.contains('add-h1')) // => if문에서 사용할 수 있겠네 만약 이 값을 포함하고 있다면 어쩌구 저쩌구 이런 식.
console.log(h1.classList.contains('add-h2'))
console.log(h1.classList) // 선택된요소의 클래스 목록 확인

// 4. 부모, 자식, 형제 노드 기
let friends = document.querySelector("#friends")
let tigger = document.querySelector("#tigger")

// 배열형태로 가지고 옴. 자식요소만 여러개 있기 때문에!! 배열 형태에는 바로 스타일을 적용할 수 없어용~
console.log('---자식 노드 접근---')
console.log(friends.children)
console.log(friends.children[0]) // queryselectorall에서 쓰려면 for of 로 뽑아낸다음에 queryselector[] 이렇게 적용해야겠네.

console.log('---부모 노드 접근---')
//배열형태가 아닌 요소 자체를 가져옴
console.log(tigger.parentNode)

console.log('이전형제', tigger.previousElementSibling)
console.log('다음형제', tigger.nextElementSibling)

// 실습!! 실습이 하고 싶어요 과제를 주세요~~~~~~

// 5. 노드 생성, 추가, 삭제 
let container = document.querySelector('.container')

// 요소 생성
let p = document.createElement('p')
p.innerText="새로 추가된 p"
p.style.fontWeight="700"
p.style.backgroundColor="red"
p.id = "append-p"

// 요소 추가
console.log(p)

// 선택된 요소 (container)의 맨 뒤 자식요소로 추가됨
container.append(p)

let p2 =document.createElement('p')
let p3 = document.createElement('p')
// 각 p2 p3에 글자 요소 추가, 클래스 (p-2, p-3)추가

p2.innerText="p2입니닷!"
p2.style.color = "orange"
p2.style.fontSize = "30px"
p2.classList.add('p-2')

console.log(p2)

p3.innerHTML="p3입니닷!"
p3.style.backgroundColor="lightgray"
p3.style.fontWeight="800"
p3.classList.add('p-3')

console.log(p3)

// container.append(p2) 여러개를 넣을 수 있다!
// container.appendChild(p3)

container.append(p2, p3 , "안녕하세요")

// prepend() : 선택된 요소의 맨 앞 자식으로 추가
// let friends = document.querySelector("#friends")
// li태그를 만들고, 글자로 "캉가!" , friends 클래스 추가

let newList = document.createElement('li')
newList.textContent="캉가"
newList.classList.add('friends')

friends.prepend(newList)

// before()
let h3 = document.createElement('h3')
h3.innerText="h3 tag"
h1.before(h3)
// let h1 = document.querySelector("h1")

// after()
let h2 = document.createElement('h2')
h2.textContent="h2 tag"
h1.after(h2)

//  요소 삭제 ! > remove() , romoveChild()
let firstLi = document.querySelector('li')
console.log(firstLi)
let ul = firstLi.parentElement
// console.log(ul)

// firstLi.romove() //선택된 요소가 삭제
// 삭제할요소.romove()

ul.removeChild(firstLi)
// 부모요소.romoveChild(삭제할 자식 요소)

// <div class="container"></div>

let div2 = document.createElement('div')
let img1 = document.createElement('img')

// img1.src="./이요르.jpg"
img1.setAttribute("src" , "./이요르.jpg")
img1.setAttribute("alt" , "요르르르르")


let span = document.createElement('span')
span.innerHTML="이요르"

container.append(div2)
div2.append( img1, span)

