// // // Arithmetic operators 

// // let a = 10
// // console.log(typeof a)
// // let b = 30


// // // * - + / % (Modulus)

// // console.log(a + b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log(a % b)
// // console.log(a - b)

// // // 45 % 2 --- Remainder ----> 1

// // let r = 600
// // let h = 300


// // console.log('--------------------')
// // console.log(r + h)
// // console.log(r * h)
// // console.log(r / h)
// // console.log(r % h)
// // console.log(r - h)


// // DRY ---- Don't repear yourself

// //function


// //function declartion 

// //function  expression

// // Arrow function 



// // console.log('********** Using function ***************')

// // //function declartion 

// // // keyword  //function name
// // function cal(a, b) {  // parameter  // curly blocks 
// //     // statemetns
// //     console.log(a + b)
// //     console.log(a * b)
// //     console.log(a / b)
// //     console.log(a % b)
// //     console.log(a - b)

// // }
// // cal(20,5)  // function calling  -- // arguments 
// // console.log('*************************')
// // cal(50,25)

// // // function declartion 


// // function greeting(name){
// //     console.log(`Welcome ${name} !!`)
// // }
// // greeting("chinmay")


// // // ---------------------------------->


// // //Functions

// // // function with out parameter and without return type

// // // function add(){
// // //     console.log(7+8)
// // // }
// // // add()
// // // add()
// // // add()

// // // function  with parameter and without return type 
// // // function add(x,y){
// // //     console.log(x+y)  // 25 // 400
// // // }

// // // let radd = add(12,13)
// // // console.log(radd)
// // // add(100,300)



// // // 100   show
// // // 100  given 

// // // Function with parameter and with return type 


// // function add(x,y){
// //     //console.log(x+y)
// //     return x+y
// // }

// // let addition = add(25,24)
// // console.log(addition)
// // console.log(addition + 10)
// // console.log(addition * 10)
// // console.log(addition * 0.10)

// // // function without parameter and with return type


// // function piValue(){
// //     return 3.14
// // }
// // let y = piValue()
// // console.log(y)



// // function declaration


// // function add(x,y){
// //     return  x + y
// // }
// // let u = add(12,13)
// // console.log(u)

// // function expression


// // let add = function(x,y){
// //     return  x + y
// // }
// // let u = add(100,200)
// // console.log(u)


// // Arrow function

// // let add = (x,y)=>{
// //     return  x + y
// // }
// // let u = add(100,200)
// // console.log(u)




// // let sub = function(x,y){
// //     return x-y
// // }
// // let y = sub(12,13)
// // console.log(y)




// // let sub = (x,y)=>{
// //     return x-y
// // }
// // let y = sub(12,13)
// // console.log(y)




// // function sub(x,y){
// //     return x-y
// // }
// // let y = sub(12,13)
// // console.log(y)


// // Arrow function if consist of only one statement , we can remove blocks as well as 
// //return keyword

// // let sub = (x,y)=>x-y  // statements
// // let y = sub(12,13)
// // console.log(y)


// // ---------------------------------------->


// // let cal = function(a,b){
// //     console.log(a+b)
// // }
// // //cal(23,24)

// // // let u = 10
// // // console.log(u)



// // console.log(cal)
// // cal(12,13) // 25


// // passing function as a parameter to another function




// let  add = function(x,y){
//     return x + y
// }

// //add(12,13)

// // let fn = function(x,y){
// //     //console.log(x+y)
// //     return x + y
// // }



// function cal(fn){

//     // function(x,y){
//     //     return x + y
//     // }

//     let adda = fn(12,13) // 25
//     return adda  // 25
// }
// let y = cal(add)
// console.log(y)








// //let a = 12
// // let b = 13

// // function add(a,b){
// //     console.log(a+b)  // 25
// // }

// // add(12,13)



// // function as a parameter to another function 


// let sub = function(a,b){
//     console.log(a-b)
// }

// //sub(12,6)

// // console.log(sub) // Definition
// // sub(12,13) // calling function

// let fn = function(a,b){
//     console.log(a-b)
// }


// function subResult(fn){
//     let result = fn(12,13)

//     return result // -1
// }

// let d = subResult(sub)  // -1
// console.log(d) // -1


// --------------------------->



// action - addition 

// return - Number

function add(x,y){
    return x + y
}

let d = add(12,13)
console.log(d)

// ----------->

// String

let firstName = "Chinmay"
console.log(typeof firstName)

console.log(firstName.length)

let cap = firstName.toUpperCase()
console.log(typeof cap)
console.log(cap)

console.log("---------------------")
let lower = firstName.toLowerCase()
console.log(typeof lower)
console.log(lower)

let count = firstName.toUpperCase().toLowerCase().length
console.log(count)



// Strings stores the value by 
// javascript is case sentitive language 

//"A" or a

let firstName2= "amol"


/*
0  1   2  3
A  M   O  L
*/

let e = firstName2.indexOf('o') // -1
console.log(typeof e)
console.log(e)


// Array -----?


let  rollNumber = [33,44,55,66,77,88,99]
console.log(rollNumber.length)


let h = rollNumber.push(101)
console.log(h)
console.log(rollNumber)


let da = rollNumber.pop()
console.log(da)
console.log(rollNumber)




















































































