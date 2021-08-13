let fName = "Hare Krishna! Hare Rama!"
let fName1 = fName.split("").sort().join();
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





let fName = "HareKrishnaHareRama"
  let fName1 = fName.split("").sort();
  let counter = 1;

  for (let i = 0; i < fName1.length; i++) 
  {
    if (fName1[i] == fName1[i + 1])
     {
      counter++;
     }
     else
      {
                 console.log(fName1[i] + " " + counter);
                 counter = 1;
                 
               }
    }





    // https://www.w3schools.com/jsref/jsref_substring.asp