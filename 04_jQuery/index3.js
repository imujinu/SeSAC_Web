console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

//click(): 클릭했을 떄
//jQuery에서는 이벤트 이름으로 메서드가 존재함
//요소.click(function(){}), 요소.hover(function(){},function(){})

$('.p-msg').click(function(){
    $(this).css('color','red') //여기서 다시 선택해야함. 오 this도 됨
})

$('.nums').click(function(){
    // $('.nums').css('color','blue')
    // $(this).css('color','green') //자기 자신을 가리킵니다.
})

// $('.num').on('click',function(){
//     $(this).css('color', 'pink')
// })

let li = document.querySelectorAll('li')
// for (let el of li){
//     el.addEventListener('click',()=>{ 
//         el.style.color="pink"}
//     )
// }

// for(i=0; i<li.length; i++){
//     li[i].addEventListener('click', ()=>{
//         li.style.color='pink'
//     })
// }

// hover() : 마우스를 올렸을 때, 마우스를 떼었을 때 정의

$('.div-hover').hover(function(){
    $(this).addClass('hover')
},
    function(){
        $(this).removeClass('hover')
    }
)

$(window),scroll(function(){
    console.log('scrolling....')
})

/* 
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
    }) */

$('input').keydown(function(e){
    if(e.code== 'ArrowLeft'){
        console.log('왼쪽방향키눌렸습니다.')
    }
    else if (e.code == 'ArrowRight'){
        console.log('오른쪽방향키눌렸습니다.')
    }
    else if (e.code == 'ArrowUp'){
        console.log('위쪽방향키눌렸습니다.')
    }
    else if (e.code == 'ArrowDown'){
        console.log('아래쪽방향키눌렸습니다.')
    }
})

// $('#todo-form').submit(function(e){
//     // 기본동작 막기(새로고침 방지)
//     e.preventDefault()

//     // input 태그에 작성한 글자 가져오기
//     const inputValue =$('input[name="todo"]').val()
//     // li 태그를 만듦과 동시에 form아래의 ul태그에 붙여넣기
//     $('.todos').append(`<li>${inputValue}</li>`)
//     // input 초기화
//     $('input[name="todo"]').val('')
// })

$('#todo-form').submit(function(p){
    p.preventDefault()

    let value = $('input[name="todo"]').val()

  
    $('.todos').append(`<li>${value}</li>`)

    

    $('input[name=todo]').val('')


})