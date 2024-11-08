let btn = document.querySelector('button')
let body = document.querySelector('body')
let h2 = document.querySelector('h2')

btn.addEventListener("click", colorChange)

function colorChange(){
    let color_a = Math.floor(Math.random()*256)
    let color_b = Math.floor(Math.random()*256)
    let color_c = Math.floor(Math.random()*256)

    let color=`${color_a},${color_b},${color_c}`

    body.style.backgroundColor=`rgb(${color})`
    h2.textContent=`rgb ${color}`
    
}