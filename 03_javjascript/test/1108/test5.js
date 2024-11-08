let form= document.querySelector('form')
let id = document.querySelector('input[name="userid"]')
let comment = document.querySelector('input[name="comment"]')
let ul = document.querySelector('ul')

form.addEventListener('submit', (e)=>{
    let user = id.value
    let com = comment.value
    e.preventDefault()
    
    if (user!== "") {
        if(com!==""){
    let li = document.createElement('li')
    li.innerHTML= `<b>${user}</b> - ${com}` //innerHtml은 태그값도 출력!
    ul.append(li)
   
    

    id.value = ""
    comment.value = ""
}}   })