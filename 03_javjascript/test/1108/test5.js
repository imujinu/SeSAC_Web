// let form= document.querySelector('form')
// let id = document.querySelector('input[name="userid"]')
// let comment = document.querySelector('input[name="comment"]')
// let ul = document.querySelector('ul')

// form.addEventListener('submit', (e)=>{
//     let user = id.value
//     let com = comment.value
//     e.preventDefault()
    
//     if (user!== "") {
//         if(com!==""){
//     let li = document.createElement('li')
//     li.innerHTML= `<b>${user}</b> - ${com}` //innerHtml은 태그값도 출력!
//     ul.append(li)
   
    

//     id.value = ""
//     comment.value = ""
// }}   })


let form1 = document.querySelector('form')
let id1 = document.getElementById('userid')
let co1= document.getElementById('comment')



form1.addEventListener('submit', (p)=>{
    p.preventDefault();

    id2 = id1.value.trim()
    co2 = co1.value.trim()

    {if(id2!=="") 
        { if(co2!=="") {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    ul.append(li)
    li.innerHTML = `<b>${id2}</b> - ${co2}`
    
    id1.value = ""
    co1.value = ""
}
}}}


)
