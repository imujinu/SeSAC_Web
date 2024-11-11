

$('button').css('color','red') // => querySelectorAll로 했으면 모두 선택후 배열로 for of문을 써서 그 안에서 스타일을 지정해줬어야 했는데 간편해졌다!

function submitjs(){
    // $('.div1').text('반갑습니다')
    document.getElementById('div1').innerText='반갑습니다'
    document.getElementById('div1').setAttribute('style','border : 2px solid red')
}

function submitjq(){
    $('#div1').text('hello jquey')
    $('#div1').css('border', '3px dotted blue')
    
}