/* 
동작의 종류 : click, dblclick, scroll, change, submit, ....
-addEventListener(동작의 종류. function(){})
- <태그 onchange="함수의이름()" onclick="함수의이름"></태그> 
on[동작의 종류] 속성으로 이벤트 제어 가능 
*/

const btn1 = document.querySelector(".btn--black")
const btn2 = document.querySelector(".btn--green")
const btn3 = document.querySelector(".btn--blue")
const btn4 = document.querySelector(".btn--red")

console.log(btn1)
console.log(btn2)
console.log(btn3)
console.log(btn4)

// btn1.addEventListener("동작의 이름", function(){동작})
btn1.addEventListener("click", function(){
    console.log("버튼1이 클릭되었습니다!!")
    alert('버튼 1을 클릭하셨군요!!!!')
})

btn1.addEventListener("mouseover", function(){
    // this는 자기 자신을 가리킵니다. 
    // btn1.style.backgroundColor="aqua"
    this.style.backgroundColor="aqua"
})


// btn2를 눌렀을 때, div를 자식으로 붙이기 
const container = document.getElementById("container")
btn2.addEventListener("click", ()=>{
    let div = document.createElement('div')
    div.innerText="hi!"
    div.style.backgroundColor="pink"
    container.append(div)
}
    
)
// btn3
// 만들어진 div의 배경색 변경
// 함수 호출시 괄호 필수적으로 생략해야함, 괄호 작성시 즉시 호출

btn3.addEventListener("click", changeColor)
// btn4.addEventListener("click", changeColor)

    function changeColor(){
        const divs=document.querySelectorAll("#container div")
        for( let div of divs) {
            div.style.backgroundColor="skyblue"
        }
       divs[divs.length- 1].style.backgroundColor="yellow" 
    }

    // 막내 요소만 노랑색으로 변경


    // ** btn4
    // 배경색 노란색으로 변경, 글자색 검적색으로 변경

    btn4.addEventListener("click", changeBtnColor)
    function changeBtnColor(){
        this.style.backgroundColor="yellow"
        this.style.color ="#000"
    }

    // *btn5
    // alert창 띄우기

    function sayHi(){
        console.log(alert('하잉'))
    }

    //================================

    const btn = document.querySelector('button')
    const input = document.querySelector("input")

    // 1.[클릭 이벤트]

    btn.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target) //어떤 요소가 클릭되었는지 확인가능
    }) 

    // ===================================

    // 2. [키보드 이벤트] 
    input.addEventListener('keydown',function(event){
        // console.log(event)

        // 방향키 아래, 위, 왼쪽, 오른쪽
        console.log(event.code)
        console.log(event.key)
        // console.log(event.keyCode)
        if(event.code === 'ArrowLeft'){
            console.log('왼쪽방향키눌렸습니다.')}
        else if (event.code == 'ArrowRight'){
                console.log('오른쪽방향키눌렸습니다.')
        }
        else if (event.code == 'ArrowDown'){
            console.log('아래쪽방향키눌렸습니다.')
    }
       else if (event.code == "ArrowUp"){
        console.log('위쪽방향키눌렸습니다.')}
        else{
            console.log('방향키가 아닌 키보드 누르는 중...')
        }
    })

    //==================================
    // 3. [scroll 이벤트] 
    // console.log(window)

    window.addEventListener("scroll", (event)=>{
        // console.log(event)
        // console.log(event.target)
        // console.log(scrollY)

        // scrollY가 473에서 div opacity가 1이 되도록.

        if ( scrollY > 473){ 
            document.querySelector('.pos').style.opacity="1"

        }
    })


    //==============================
    // 폼이벤트
    // 4. [submit] 
    const todoForm= document.querySelector('#todo-form')
    const todos = document.querySelector('.todos')

    todoForm.addEventListener('submit' , function(e){
        e.preventDefault(); // 폼이 제출되는 것을 취소! 이벤트 전달을 막는 방법입니다. 새로고침도 막음!
        console.log('submit')

        //폼 내부의 input창 선택
        const todoInput = document.querySelector('input[name="todo"]') //속성선택자 대괄호
        // console.dir(todoInput) // 요소가 가지고 있는 데이터를 출력
        // console.log(todoInput.value) 

        //  공백으로 들어오는 문자는 추가되지 않도록

        const todo = todoInput.value.trim()
        
        console.log('todo:'+todo)
        if(todo !==""){
        // 그러니까 위의 이 과정이 그거잖아. 
        // 선택된 ul태그의 자식으로 <li>todo</li>

        const newLi = document.createElement('li')  
        newLi.textContent=todo
        todos.append(newLi)
        

        todoInput.value=""

    }
        else (
            alert('오늘의 할일을 작성해주세요')
        )
        // todo값이 공백이라면 li를 추가.. 아니 이게 먼 소리야 추가되지 않도록? 추가되지 않는다 = 실행되지 않는다?

    })

    // 아니근데 따라 쓰는게 중요한 게 아니고 이걸 하는 그 과정이 중요하잖아. 
    /* 그 원리를 생각해봐 뭐냐면 일단 submit창을 선택하고. 그  값의 밸류를 저장해. 
    
    */

    // ==========================================
    // 5. [change 이벤트]

    const chgInput = document.querySelector('#change-input')
chgInput.addEventListener('change',function(){
    console.log('changed!!!')
    })

    chgInput.addEventListener('input',function(){
        console.log('changing!!!')
        // input 창의 value에 변경이 발생되면 일어나는 이벤트
    
        let intro = document.querySelector('.intro')
        intro.innerHTML = this.value
    })
    // 