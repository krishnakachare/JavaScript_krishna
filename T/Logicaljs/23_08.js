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





// //Problem 7---->find out count of word in given string

let statementA =
  "I am new to javascript and i wish to learn every concept of javascript . javascript is great";
let spr = statementA.split(" ");

let count = 0;
for (let a = 0; a < spr.length; a++) {
  if (spr[a].includes("javascript")) {
    count++;
  }
}
console.log(count);

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

// //Problem 11---->

// let h = "4a3c2b";

// let even = [];
// let odd = [];

// for (let i = 0; i < h.length; i++) {
//   if (i % 2 == 0) {
//     even.push(h[i]);
//   } else {
//     odd.push(h[i]);
//   }
// }
// console.log(even);
// console.log(odd);

// newString = " ";

// for (let i = 0; i < even.length; i++) {
//   newString = newString + odd[i].repeat(Number(even[i]));
// }
// console.log(newString);

// console.log(
//   "------------------------------------------------------------------------"
// );

// //Problem 12---->

// let numString = [123];
// let newstr = "";
// for (let i = numString.length - 1; i >= 0; i--) {
//   newstr += numString[i];
// }
// console.log(`ans${newstr}`);



// problem 13---->
// let input ="abdkahajfadka"
// output ={
//   a : count of a;
// }



// "4a3bc2"
// "aaaabbbcc"

// aaaabbbccd
//"4ab3c2d1"

//123= ans321










// 3. 

// let x = 'a4b2'            // output  aaaabb
// let y = 'aaaabbbcc'        //  output a4b3c2


// Problem 9---->Sorting the array have differant type of elements

let multiArray = [67, [4, 5, 6], "karan", true, 22.4, "rajshree", [1, 2, 3], false, -365,];

function SortElementWithDataType(x) {
    let sorted = []
    let types = []
    for (let i = 0; i < x.length; i++) {
        let type = typeof (x[i])
        if (!types.includes(type)) {
            types.push(type)
        }
    }
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (types[i] == typeof (x[j])) {
                sorted.push(x[j])
            }
        }
    }
    console.log(types)
    return sorted
}

let f = SortElementWithDataType(multiArray)
console.log(f)


//13 Return occurrence of chr in string into object and json

var input = "abdkahajfadka"
function ReturnJson(x) {

    function Common(x) {
        var chr = []
        for (let i = 0; i < x.length; i++) {
            if (!(chr.includes(x[i]))) {
                chr.push(x[i])
            }
        }
        return chr
    }

    function MakeJson(x, y) {
        let chr = y(x)
        let obj = {}
        for (let i = 0; i < chr.length; i++) {
            var c = 0
            for (let j = 0; j < input.length; j++) {
                if (input[j] == chr[i]) {
                    c++
                }
            }
            obj[`${chr[i]}`] = `count of ${chr[i]} is ${c}`
        }
        console.log(obj)
        return JSON.stringify(obj)
    }
    return MakeJson(x, Common)
}

let f = ReturnJson(input)
console.log(f)


// And fixture folder is configurable and you can load file from any folder ...

// disadvantages is if cypress library ...but can be achievable via js The cypress can be easily integrated with FE and BE that makes it grow rapidly