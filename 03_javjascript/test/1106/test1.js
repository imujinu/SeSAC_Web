let arr = [];
for( i= 1 ; i<=100 ; i++)
    arr.push(i)

    console.log(arr)

sum1 = 0
for ( i= 1 ; i<=arr.length ; i++){
    sum1+=i
}
console.log(sum1)


sum2=0

for ( let num of arr) {
    sum2 += num
}

console.log(sum2)

sum3 = 0
arr.forEach((num1) => sum3+=num1)

console.log(sum3)

