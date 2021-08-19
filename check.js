// we required to convert all arrays values in absulute when we required total of array
// Example = 

let a = [-100, -100, 100, 500]

let x = a.reduce(function (acc, el) {
    
    // return acc + el                           // 400
    // return acc + Math.abs(el)                 // 600
    return Math.abs(acc) + Math.abs(el)          // 800
    
},0)

console.log(x)

