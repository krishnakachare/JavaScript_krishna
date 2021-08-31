let fName = "Hare Krishna! Hare Rama!"
let fName1 = fName.split("").sort().join();
console.log(fName1)
let counter = 1;

for (let i = 0; i < fName1.length; i++) {
    if (fName1[i] == fName1[i + 1]) {
        counter++;
    }
    else {
        console.log(fName1[i] + " " + counter);
        counter = 1;

    }
}
//console.log(counter)





// let fName = "HareKrishnaHareRama"
//   let fName1 = fName.split("").sort();
//   let counter = 1;

//   for (let i = 0; i < fName1.length; i++) 
//   {
//     if (fName1[i] == fName1[i + 1])
//      {
//       counter++;
//      }
//      else
//       {
//                  console.log(fName1[i] + " " + counter);
//                  counter = 1;
                 
//                }
//     }





    // https://www.w3schools.com/jsref/jsref_substring.asp