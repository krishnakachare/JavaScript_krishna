// Problem  = Seperate Alphabets,Numbers and Symbols(Special Chara) from given string

///////////////////////////////////////////////ME//////////////////////////////////////////////////////

//EXAMPLE ---1.

// let str = 'AAAAAC2345@#$&6CCCDD%Z'
// let x = str.split('')
// //console.log(x)                              // // we can get results with or without
// let num = 0
// let special = 0
// let alpha = 0

// for (let i = 0; i < x.length; i++) {
//     if (Number(x[i])) {
//         num = num + 1
//     }

//     else if ((x[i] == '@') || (x[i] == '#') || (x[i] == '$') || (x[i] == '&') || (x[i] == '%')) {
//         special = special + 1
//     }

//     else { alpha = alpha + 1 }
// }
// console.log(num, special, alpha)


//EXAMPLE---2.

// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let aa = 0
// let nn = 0
// let ss = 0

// for (let i = 0; i < caa.length; i++) {
//     if (Number(caa[i])) {
//         nn = nn + 1
//     }

//     else if ((caa[i] == '@') || (caa[i] == '!') || (caa[i] == '&') ) {
//         ss = ss + 1
//     }

//     else { aa = aa + 1 }
// }
// console.log(aa, nn, ss)  // 11 24 9



////////////////////////////////////////////////SARIKA////////////////////////////////////////////////////////



// let str = 'AAAAAC2345@#$&6CCCDD%Z'
// let numbers = 0             
// let alpha = 0
// let specialChar = 0

// for (let i = 0; i < str.length; i++) {

//     //console.log((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z'))
// 	if (Number(str[i])) {
// 		numbers = numbers + 1;
// 	}
// 	else if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {     // its gives all alphabets in abcd order from a to z 
// 		alpha = alpha + 1;
// 	}
// 	else{
// 		specialChar = specialChar + 1;
// 	}
		
// }

// console.log(numbers, alpha, specialChar)      // 5 12 5


//////////////////////////////////////////CHINMAY SIR///////////////////////////////////////////////////////

// FIRST APPROACH

// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let n = 0
// let a = 0
// let symbol = 0

// for(let i = 0; i < caa.length; i++){

// 	if((caa[i].charCodeAt() >= 65 && caa[i].charCodeAt() <= 90) || (caa[i].charCodeAt() >= 97 && caa[i].charCodeAt() <= 122) ){
// 		a = a + 1
// 	}
// 	else if ((caa[i].charCodeAt() >= 48 && caa[i].charCodeAt() <= 57)) {
//          n = n + 1
// 	}
// 	else{
// 		symbol = symbol + 1
// 	}                                   // rather than alphabets (upper and lower),numbers all are here (all symboles/special char,space,del)
// }
// console.log(n,a,symbol)                    // 24 11 9


//-----------------------------------------------------------------------------------------------------------
// SECOND APPROACH


// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let n = 0
// let a = 0
// let symbol = 0

// for(let i = 0; i < caa.length; i++){

// 	if(Number(caa[i])){
		
// 		n = n + 1
// 	}
// 	else if ((caa[i] >= 'A' && caa[i] <= 'Z') || (caa[i] >= 'a' && caa[i] <= 'z')) {
// 		a = a + 1
// 	}
// 	else{
// 		symbol = symbol + 1
// 	}                                   // rather than alphabets (upper and lower),numbers all are here (all symboles/special char,space,del)
// }
// console.log(n,a,symbol)                    // 24 11 9


//-----------------------------------------------------------------------------------------------------------
//THIRED APPROACH

// Prob = seperate the numbers and strings from given array

// FIRST APPROACH

// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];

// for (let i = 0; i < arr.length; i++){

//     if(typeof(arr[i]) == 'number'){
//         number.push(arr[i])
//     }
//     else{
//         char.push(arr[i])
//     }
// }
// console.log(number)      // [ -6, 2, 0, 22, 78 ]
// console.log(char)        // [ 'krishna', 'swapnil', 'vishwajit' ]
// console.log(number.concat(char))     // [ -6, 2, 0, 22, 78, 'krishna', 'swapnil', 'vishwajit' ]
//------------------------------------------------------------------------------------------------------------
//SECOND APPROACH ( USING FOREACH METHOD)

// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];

// arr.forEach(arr => {
//   if (typeof arr == 'number'){
//     number.push(arr);
//   } 
//   else {
//     char.push(arr);
//   }
// })
// let sortedNum = number.concat(char);
// console.log(sortedNum)                      // [ -6, 2, 0, 22, 78, 'krishna', 'swapnil', 'vishwajit' ]

//---------------------------------------------------------------------------------------------------------------

//********************************************  REGULAR EXPRESSION  *************************************************/

// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"

// let C  = str.match(/[A-Z]/g).join("")
// let L = str.match(/[a-z]/g).join("")

// console.log(`Original string = ${str}`)
// console.log(`Capital Letters = ${C}`)
// console.log(`Lower Letters = ${L}`)


// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  
// let regex =  /[A-Z]/
// let bigavi = str.split('').filter(function(el,index,arrey){
//     if(regex.test(el)){
//          return true
//     }
// })
//  console.log(bigavi.join(''))


//  let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  
//   let regex =  /[A-Z]/m
//   let smallstr = "" 
//   let capstr = ""
// for(let i = 0; i< str.length; i++){
//     if(regex.test(str[i])){
//         capstr = capstr + str[i]
//     }
//     else{
//         smallstr = smallstr + str[i] 
//     }
// }
// console.log(smallstr)
// console.log(capstr)


// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj" 
// let capstr = ""
// let smallstr = ""
// for(let i = 0; i<str.length; i++){
//     if(str[i] >= 'A' && str[i] <= 'Z' ){
//     capstr = capstr + str[i]
//     }
//     else{
//         smallstr = smallstr + str[i]
//     }
// }
// console.log(capstr)
// console.log(smallstr)


//=====================================================================================================

// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function print(...a) {
//    let sum = 0
//     a.map((el, i) => {
//         if(i >= 2 && i <= a.length - 4 ){
//             sum = sum + el
//         }
//     })

//     return sum
// }

// let s = print(...abc)
// console.log(s)

//====

// NOTE = By using destructuring  we can access STARTING, MIDDLE (anywhere) , LAST values of array and also object

// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [a,b,c,d,e] = abc.slice(3,8)
// let xyz = [a,b,c,d,e].reduce((acc,el)=>{
//     return acc + el
// })
// console.log(xyz)     // 30

// we can change slice parameters by our requirement to get array elements















































// Using for loop

//find age

// let birthYear = [1990,1989,2001]
// let ages = []

// //console.log(2021-1990)
// // [31,32,20]

// for(let i = 0 ; i < birthYear.length ; i++){
//    // console.log(i)
//     //console.log(2021 -birthYear[i])
//     let age = 2021 - birthYear[i]  
//     ages.push(age)
// }

// console.log('---Ages--------')
// console.log(ages)

// //-------------------------------------

// // program -2 filter

// let ages2 = [11,13,15,16,44,34,55,56,23,44,66]
// //[] // obove 
// let above25 = []
// for(let i = 0 ; i < ages2.length ; i++){
//     if(ages2[i] > 25){
//         above25.push(ages2[i])
//     }
// }

// console.log(above25)
// //console.log(7>8)

//------------------------------------------------------------------------------------------------------------------
// // program - 3

// let marks = [22,33,44]
// let sum = 0
// for(let i = 0 ; i < marks.length ; i++){
//     sum = sum + marks[i]  // sum --> 22--> 55
// }
// console.log(sum/marks.length)

//------------------------------------------------------------------------------------------------------------
//USING METHODS

// // Map

// birthYear =[1990,1989,2001]
// //[31,32,20]
// let xx = birthYear.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return 2021-el
// })
// console.log('------Map--------')
// console.log(xx)


// // Filter

// ages2 = [11,13,15,16,44,34,55,56,23,44,66]
// let rrrr = ages2.filter(function(el,index,arr){
//     return el > 25
// })
// console.log(rrrr)


// marks = [22,33,44]
// // Reduce
// let jkl = marks.reduce(function(sum,el,index,arr){
//     return sum + el
// },0)
// console.log(jkl/marks.length)

// //------------------------
// let transactions = [13,14,55,-56,66,-88,99,150,556,-131]

// // deposit 
// // withdrawl

// // filter and 