
// for ( let i = 1 ; i<10000 ; i+=2){
//     if(i%2===1 && i%13===0) {
//             console.log(i)

//         }
//     }

let userInput=Number(prompt('숫자를 입력해주세요'))


for ( let j = 1 ; j< userInput ; j+=2){
    if (j%2===1 && j%13===0){
        console.log(j)
    }
}

console.log(userInput)