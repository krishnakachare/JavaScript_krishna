// Problem = concate subarray in array

// let arr = [ [20,30],[40,50,60],[70,80,90]]
// let array = [ ]

// for (let i = 0; i < arr.length; i++){

//   for (let m = 0; m < arr[i].length; m++){

//     array.push(arr[i][m])
//   }
// }
// console.log(array)                         // [ 20, 30, 40, 50, 60, 70, 80, 90 ]

//-----------------------------------------------------------------------------------------------------------------

// find no. of characters in string

// let kk = 'Shrikrishna G Kachare'
// let count  = 0

// for(let i = 0 ; i < kk.length ; i++){
//     if(kk[i]){
//         count  = count + 1
//     }
// }
// console.log(count)

//----------------------------------------------------------------------------------------------------------------

// compress given string

// let compstri = ''
// let count = 0

// function comp(stri){

// for(let i = 0; i < stri.length; i++){
//     count = count + 1
//     if(stri[i] != stri[i+1]){
//         compstri += count + stri[i]
//         count = 0
//     }      
// }
//     console.log(compstri)      //6a7c6v4n6y
// }
// comp('aaaaaacccccccvvvvvvnnnnyyyyyy')    


// let compstri = ''
// let count = 1

// function  comp(stri){

//     for(let i=0; i < stri.length; i++){

//         if(stri.charAt(i) === stri.charAt(i+1)){
//             count = count + 1
//         }else{
//             compstri +=`${count}${stri.charAt(i)}`
//             count = 1
//         }
        
        
//     }

//     console.log(compstri)
// }

// comp('aaaaaacccccccvvvvvvnnnnyyyyyy') 


//--------------------------------------------------------------------------------------------------------------

//  expand in string

// let stri = '2z3x2c'
// let num = [ ]
// let char = [ ]

// for (let i = 0; i < stri.length; i++ ){

//   if( i % 2 == 0){
//     num.push(stri[i])
//   }else{
//     char.push(stri[i])
//   }
// }
// console.log(num)
// console.log(char)

// let expstri = ''

// for (let i = 0; i < num.length; i++){

//   expstri = expstri + char[i].repeat(Number(num[i]))
// }
// console.log(expstri)                                             // zzxxxcc



//-----------------------------------------------------------------------------------------------------------------

// print output is ans=123 from given input is [123]

// let arr = [123]
// let stri = ""

// for (let i = 0; i < arr.length; i++){
//   stri = stri + `ans=${arr[i]}`
// }
// console.log(stri)

//-------------------------------------------------------------------------------------------------------------------


// let stri = 'aabbbbxxxxzzzz'
// let obj = { }

// for (let i = 0; i < stri.length; i++){

//     if(obj.hasOwnProperty(stri[i])){
//         obj[stri[i]] =  obj[stri[i]]  +  1         // updating properties value
//     }else{
//             obj[stri[i]] = 1                     //  adding property in object with intial value 1
//     }
// }
// console.log(obj)        // { a: 2, b: 4, x: 4, z: 4 }


//-------------------------------------------------------------------------------------------------------------------



// //Problem 7---->find out count of word in given string

// let statementA =
//   "I am new to javascript and i wish to learn every concept of javascript . javascript is great";
// let spr = statementA.split(" ");

// let count = 0;
// for (let a = 0; a < spr.length; a++) {
//   if (spr[a].includes("javascript")) {
//     count++;
//   }
// }
// console.log(count);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 10---->Compresing the string

// function compress(string) {
//   let stringC = "";
//   let countC = 1;
//   let index = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === string.charAt(i + 1)) {
//       countC += 1;
//     } else {
//       stringC += `${string.charAt(i)}${countC}`;
//       countC = 1;
//     }
//   }
//   console.log(stringC);
// }

// compress("aaaabbbccd");

// //or

// function Compressed2(stringA) {
//   let CompressedString = "";
//   let countU = 0;
//   for (let i = 0; i < stringA.length; i++) {
//     countU++;
//     if (stringA[i] != stringA[i + 1]) {
//       CompressedString += stringA[i] + countU;
//       countU = 0;
//     }
//   }
//   console.log(CompressedString);
// }
// Compressed2("aaaabbbccd");

// console.log(
//   "----------------------------------------------------------------------------------------"
// );



// problem 13---->
// let input ="abdkahajfadka"
// output ={
//   a : count of a;
// }





// Problem 9---->Sorting the array have differant type of elements

// let multiArray = [67, [4, 5, 6], "karan", true, 22.4, "rajshree", [1, 2, 3], false, -365,];

// function SortElementWithDataType(x) {
//     let sorted = []
//     let types = []
//     for (let i = 0; i < x.length; i++) {
//         let type = typeof (x[i])
//         if (!types.includes(type)) {
//             types.push(type)
//         }
//     }
//     for (let i = 0; i < types.length; i++) {
//         for (let j = 0; j < x.length; j++) {
//             if (types[i] == typeof (x[j])) {
//                 sorted.push(x[j])
//             }
//         }
//     }
//     console.log(types)
//     return sorted
// }

// let f = SortElementWithDataType(multiArray)
// console.log(f)


// //13 Return occurrence of chr in string into object and json

// var input = "abdkahajfadka"
// function ReturnJson(x) {

//     function Common(x) {
//         var chr = []
//         for (let i = 0; i < x.length; i++) {
//             if (!(chr.includes(x[i]))) {
//                 chr.push(x[i])
//             }
//         }
//         console.log(chr)
//         return chr
//     }

//     function MakeJson(x, y) {
//         let chr = y(x)
//         let obj = {}
//         for (let i = 0; i < chr.length; i++) {
//             var c = 0
//             for (let j = 0; j < input.length; j++) {
//                 if (input[j] == chr[i]) {
//                     c++
//                 }
//             }
//             obj[`${chr[i]}`] = `count of ${chr[i]} is ${c}`
//         }
//         //console.log(obj)
//         return JSON.stringify(obj)
//     }
//     return MakeJson(x, Common)
// }

// let f = ReturnJson(input)
// console.log(f)























