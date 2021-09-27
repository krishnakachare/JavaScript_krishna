
// Problem = Reverse the only string elements

// let str = "Hello! Hi, i am 'krishna'."

// let strx = str.split(" ")
// console.log(strx)
// let x = [ ]

// function call(strf){ 
// let revstr =" "
//     for(let i = 0; i < strf.length; i++){

//         revstr = strf[i] + revstr             // .'anhsirk' ma i ,iH !olleH
//         //revstr =  revstr + strf[i]             // Hello! Hi, i am 'krishna'.   
//     } 
//     return revstr            // o/p is undefined when not return
// }

// for(let i = 0; i < strx.length; i++){

//     x.push(call(strx[i]))
// }
// console.log(x)
// let j = x.join(" ")
// console.log(j)                    // !olleH  ,iH  i  ma  .'anhsirk'
// console.log(typeof(j))            // string




//---------------------------------------------------------------------------------------------------------------

//Problem = Seperate the string where we required

// seperate string from . and print elements

// let x ='python.py' 
// let s =x.split(".")             // ['python','py']
// console.log(s[(s.length)-1])             // py
// console.log(s[0])                       // python

// Printing string elements by there index value

// let Y= "Script.js"
// let M = Y.substring(0,6)
// console.log(M)                           // Script

//-----------------------------------------------------------------------------------------------------------
//Problem = Remove string first and last characters(substring) from given string

// let kk = 'shrikrishnak'
// let rkk = " "

// for (let i = 0; i < kk.length; i++){

//     if ((i != 0)&&(i != 1)&&(i != 2)&&(i != 3)&&(i != kk.length-1)){                                 // kk[i] used when perform on elements and index value(i) used when we perform on index 

//         //rkk = kk[i] + rkk
//         rkk = rkk + kk[i] 

//     }
// }
// console.log(rkk)                     //  krishna

// Note = in this if condition think more (how its work) 

//--------------------------------------------------------------------------------------------------------------

//Problem = Peackup max and min values from array

// let arr = [1,2,3,66,22,34,78,45,-3,0,88]

// //let max = arr[0]
// let max = 0
// let min = arr[5]     // 1

// for (let i = 0; i < arr.length; i++){

//     if(arr[i] > max){
//         max = arr[i]                    // 1,2,3,66,78,88
//     }else if (arr[i] < min){
//          min = arr[i]              // 1,-3
//     }
// }
// console.log(max)    // 88
// console.log(min)    // -3



//--------------------------------------------------------------------------------------------



// remove duplicate elements from the arrey

let arr = [12, 34, 12, 44, 34, 12, 45, 34, 57]

let unarr = [];

for (let i = 0; i < arr.length; i++) {
    if (!unarr.includes(arr[i])) {
        unarr.push(arr[i])
    }
}
console.log(unarr)






// remove duplicate elements from the arrey


let arr = [15, 66, 88, 12, 66, 57, 88, 15]

let unarr = [];

for (let i = 0; i < arr.length; i++) {

    if (unarr.indexOf(arr[i]) == arr.indexOf(unarr[i])) {
        unarr.push(arr[i])
    }
}
console.log(unarr)







var unique = arr.filter(getunique)

function getunique(el, index, arrey) {
    if (arrey.indexOf(el) == index) {
        return true;

    }
    else {
        return false
    }
}
console.log(unique)








let arr = [15, 66, 88, 12, 66, 57, 88, 15]
let unique = arr.filter((el, index, arrey) => {

    if (arrey.indexOf(el) == index) {
        return true;
    }
})
console.log(unique)



