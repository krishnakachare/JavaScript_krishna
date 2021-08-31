// // 1. reverse for loop for string
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

// one word

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


//LOGICAL -- convert to upper case of each word first letter in given sentence

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

// Find what type of error are occured

// var v1;
// let v2;
// function pr(){
//     console.log(v1);
//     console.log(v2);
// }
// window.v1;
// window.v2;

// console.log(v1)
// console.log(v2)        /// ReferenceError: window is not defined

// ------------------------------------------------------------------------------------------------------------