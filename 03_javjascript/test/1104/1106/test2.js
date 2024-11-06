let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]

let same = []
let def = []

fruits1.forEach((name) => {
    if ( fruits2.includes(name)){
        same.push(name)
    }

    else {
        def.push(name)
    }
})


console.log(same)
console.log(def)

