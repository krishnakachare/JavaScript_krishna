// // 1. reverse  string

// let myname = 'krishna'

// let reversedstring = ''
// for (let i = myname.length-1; i >= 0; i--){
//     //reversedstring = myname[i] + reversedstring    //  krishna
//     //reversedstring = reversedstring + myname[i]       // anhsirk       ( when intilization from last of string element)
// }
// console.log(reversedstring)

//--------------------------------------------------------------------------------------------------------------

// // 2. count vowels(a,e,i,o,u) in above string

// let count = 0
// for (let i = 0; i < myname.length; i++){
//     if(myname[i]== 'a' || myname[i]== 'e' || myname[i]== 'i' || myname[i]== 'o' || myname[i]== 'u' )
//     { count = count + 1 }
// }
// console.log(count)          //   2

//-----------------------------------------------------------------------------------------------------------------

//      Capital only first letter  in string

//1. one word

// let kk ='krishna'

// let KK = kk[0].toUpperCase() + kk.slice(1)
// console.log(KK)                                    // Krishna

// let KK2=' '
// for(let i = 0; i < kk.length; i++){

//     if(i === 0){
//       KK2 = KK2 + kk[i].toUpperCase()
//       console.log(kk[i])                     // K
//     }
//     else{
//         KK2 = KK2 + kk[i]
//     }
// }
// console.log(KK2)                  // Krishna

//-------------------------------------------------------------------------------------------
//2.LOGICAL -- convert to upper case of each word first letter in given sentence

// let sentence = 'my good name is krishna.'
// let arr = sentence.split(' ')
// //console.log(arr)                     
// let x = [ ]
// function cal(zz){
//     let sentence2 = ' '
//     for (let i = 0; i < zz.length; i++){
        
//         if(i == 0){
//            sentence2 = sentence2 + zz[i].toUpperCase()
//         }
//         else{
//             sentence2 = sentence2 + zz[i]
//         }
//     }
//         return sentence2
// }

// for (let i = 0; i < arr.length; i++){
//     x.push(cal(arr[i]))
// }

// let y = x.join(' ')
// console.log(y)                    //  My  Good  Name  Is  Krishna.


//-----------------------------------------------------------------------------------------------------------

// Find what type of error are occured (Pratiksha raut interv que )

// var v1 = 10
// let v2;
// function pr(){
//     console.log(v1);     // 10
//     console.log(v2);    //  undefined
// }
// pr()
// console.log(window.write)    //undefined
// console.log(window.v1)      // 10
// console.log(window.v2)      // undefined

// console.log(v1)         // 10
// console.log(v2)        /// undefined

// ------------------------------------------------------------------------------------------------------------

//================================================================================================
// Q. given email first letter convert upper case and only give before @ string ( its related to nikhil project)

// let email = "krishnakachare2@gmail.com"
// let ne =" "
// let r = /[\w]/
// let con = true
// for(let i=0; i<email.length; i++){
// if(con){
//     if(i==0){
//         ne = ne + email[i].toUpperCase()
//     }else if(r.test(email[i])){
//         ne = ne + email[i]
//     }else{
//         con = false
//     }
// }   
// }
// console.log(ne)  //  Krishnakachare2
//========================================================================================================

// Q. change date format

// let date = '27/09/2021'
// let arr = date.split('/')
// let requiredDate = arr.reverse().join('-')
// console.log(requiredDate)  // 2021-09-27
// //OR
// let requireddate = date.split('/').reverse().join('-')
// console.log(requireddate) // 2021-09-27


//==========================================================================

// Q. collect even PLACE numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenPlace = [ ]
//--------------------------------------------------------------------------
// By for loop

// for(let i =0; i < arr.length; i++){

//     if((i%2 == 0)){
//         evenPlace.push(arr[i])
//     }
// }
// console.log(evenPlace)         // [ 1, 3, 5, 7, 9 ]
//------------------------------------------------------------------
// By Using Method

// arr.filter((el,ind,arr)=>{
//     if((ind%2) == 0){
//         evenPlace.push(el)
//     }
// })
// console.log(evenPlace)       // [ 1, 3, 5, 7, 9 ]

//=======================================================================================================

// Q. collect even  numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenNo = [ ]
//--------------------------------------------------------------------------
// By for loop

// for(let i =0; i < arr.length; i++){

//     if((arr[i]%2 == 0)){
//         evenNo.push(arr[i])
//     }
// }
// console.log(evenNo)        // [ 2, 4, 6, 8, 10 ]
//------------------------------------------------------------------
// By Using Method

// arr.filter((el,ind,arr)=>{
//     if((el%2) == 0){
//         evenNo.push(el)
//     }
// })
// console.log(evenNo)     // [ 2, 4, 6, 8, 10 ]


//===========================================================================================================
// problem ----------
// // separate out the even and odd numbers from the arrey

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let evenarr = []
// let oddarr = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenarr.push(arr[i])
//   }
//   else {
//     oddarr.push(arr[i])
//     // console.log(arr[i])

//   }
// }

// console.log(evenarr)     //[ 2, 4, 6, 8, 10 ]
// console.log(oddarr)   // [ 1, 3, 5, 7, 9 ]

//----------------------------------------------------------------------------------------------

// problem ------------
// separate out  alphabets and numbers 

// let sss = ['a',2,'d',6,'y','j',8,55,'e','k']

// let alphaarr = []
// let numarr = []

// for(let i=0; i<sss.length; i++){
//   if(sss[i] === Number(sss[i])){
   
//     numarr.push(sss[i])
//   }
//   else{
//     alphaarr.push(sss[i])
//   }
// }
// console.log(alphaarr)  // [ 'a', 'd', 'y', 'j', 'e', 'k' ]  
// console.log(numarr)   // [ 2, 6, 8, 55 ]

// -------------------------------------------------------

// problem----------------

// use of  Number() method

// let dd = 'h'
// console.log(Number(dd))  // NaN

// let hh = '5'
// console.log(Number(hh))   // 5

// let  jj = 5
// console.log(Number(jj))   // 5

//=======================================================================================================

// problem ------------

// find the length of the number

// let kk = 1234568836892

// console.log(String(kk).length)   // 13

//========================================================================================================

// problem ------------
// count the characters from given string

// Using method
// let n = 'swapnil'
// console.log(n.length) // 7
//-------------------------------------
// For loop
//  let count = 0                    
// for(let i= 0; i<n.length; i++){
// count = 1 + i
// }
// console.log(count)   // 7

//===========================================================================







