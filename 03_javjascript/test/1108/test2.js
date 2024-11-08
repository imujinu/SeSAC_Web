let first = document.querySelectorAll('.todo')
let second= document.querySelectorAll('.done')

for( let el of first){
    el.classList.remove('todo')
    el.classList.add('done')
}

for (let al of second){
    al.classList.remove('done')
    al.classList.add('todo')
}

// classList를 다룰때는 .을 붙일 필요는 없다!

