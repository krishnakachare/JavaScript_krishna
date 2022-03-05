// let x = 10 
// x = 30
// console.log(x)

// const y = 20
// y = 30
// console.log(y)

// --------------------->

let x = 10 
let y = 20

console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x%y)
console.log(x*y)


let x1 = 10 
let y1 = 20

console.log(x1+y1)
console.log(x1-y1)
console.log(x1/y1)
console.log(x1%y1)
console.log(x1*y1)

//----------------------------->

// Function declaration

function add(x,y){
    console.log(x+y)
    return x + y
}

let rr = add(12,13)
console.log(rr)

// Function expression

let add1 = function (x,y){
    console.log(x+y)
    return x + y
}

let rrq = add1(12,13)
console.log(rrq)

// Arrow function 


let add2 =  (x,y) =>{
    console.log(x+y)
    return x + y
}

let rrqa = add2(12,13)
console.log(rrqa)




let add3 =  (x,y) => x + y
let rrqaq = add3(12,13)
console.log(rrqaq)



//-----------------------------------

//Data types


let aa = true
console.log(typeof aa)

let bb = 1
console.log(typeof bb)

let cc = "chinmay"
console.log(typeof cc)

// String 


let abc = "hello"

//     0  1  2  3  4
//     h  e  l  l  0

console.log(abc[0])
console.log(abc.length)
console.log(abc[abc.length-1])

// Loops 


for(let i = 0 ; i < 5 ; i++){
     //console.log(i)
     console.log(abc[i])

}

// String 

let qq = "Chinmayea"

//obj  -- properties and methods

//Every method have  

//Action

//Return 

// let gg = qq.toLowerCase()
// let aaa = qq.toUpperCase()
// let ii = qq.indexOf('C')
// let iii = qq.lastIndexOf('a')
// let j = "i am new to javascript"
// console.log(j.split("new"))
//qq.startsWith('c')
//qq.endsWith('a')
// 0   1   2   3
// A   m   o   l 
// -4 -3  -2  -1

let  tt ='amol'
console.log(tt.slice(1,3))
console.log(tt.slice(1,3))
console.log(tt.slice(-4,3))
console.log(tt.slice(-4,-2))
console.log(tt.slice(-1,-2))
// Start point should be ahead of ending [pint ]


// Array -- 
let r = 10

r = [1,2,3,4,5]
for(let i = 0 ; i < r.length ; i++){
    console.log(r[i])
}

// map reduce filter join forEach

let uy = r.map(function(el,index,array){
    return el * 5
})
console.log(uy)

// filter

let uh = uy.filter(function(el){
    return el >= 15
})
console.log(uh)

// reduce 

let jjs = r.reduce(function(acc,el,index,arr){
    return acc + el
},0)

console.log(jjs)

// forEach

r.forEach(ele => {
    console.log(ele+1)

}); 

console.log(r.join('-'))

//obj

//let person  = ["chinmay","deshpande",12,13]

let person = {

    firstName:"chinmay",
    lastName:"deshpande",
    roll:12,
    age:13

}

// Retrive the value 
console.log(person.age)
console.log(person['age'])

// Update the value 

person.age = 34

// add the value 

person.lan = "Hindi"

// del the value 
//delete person.lan

for(let key in person){
    console.log(key,person[key])
}

// ---------------------------- 

// user defined data type

class Persona {

    constructor(firstName, lastName){

        this.firstName = firstName
        this.lastName = lastName
    }


}

let am = new Persona("cha","des")


// let am = {

//     firstName:"cha",
//     lastName:"des"

// }

// DOM

// index.html -- to write text on html page
// style.css  --  design web
//script.js -- to change , update, retrive ,delete on htlm element based
//on user action 

// <h1 id = "ad">ad<h1>
// <h1 class = "cd">ad<h1>




let b = 10
b = true


//[9:30 am string] --- 8 pm ist










