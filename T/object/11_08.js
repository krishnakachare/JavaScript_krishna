// ${}  we can print variable(operation) values in backtiks    ( no. of variables = no. of ${})  [ place holder ]
// actual thing is memory and particular memory we can called as object
// class = User defined data type  ( our made data type )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // backstick 

// let myname = 'krishna'
// let lastname = 'kachare'
// console.log(`Hello ! Everyone im ${myname} and my surname is ${lastname}`)       // Hello ! Everyone im krishna and my surname is kachare

// // loop working
// let y = [10,20,30,40,50,60]
// for(let i = 0; i < y.length; i++){    // 1  2  3  4  5  6
//     //console.log(i)                  // 0  1  2  3  4  5
//     console.log(y[i])                 // 10 20 30 40 50 60
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let students = [
    {
        firstname: 'krishna',
        age: 25,
        fsub: ['som', 'tom', 'vibration']
    },
    {
        firstname: 'ravi',
        age: 32,
        fsub: ['mech', 'dom', 'rac']
    },
    {
        firstname: 'akshay',
        age: 26,
        fsub: ['fm', 'tom', 'thermo', 'python']
    }

]

// console.log(students[1]['firstname'])   // ravi
// console.log(students[2]['fsub'].length) // 4

// // Find avg age of student

// let sum = null

// for(let i = 0; i < students.length; i++){
//     //sum = sum + students[i].age
//     sum = students[i].age + sum 
// }
// console.log(sum/students.length)     // 83
// console.log(sum/students.length)     // 27.666666666666668

// // name of students whos age is greater than 30

// for (let i = 0; i < students.length; i++){

//     if(students[i].age > 30){
//         console.log(students[i].firstname)       // ravi
//     }
//     else{ 
//         console.log('no student')             // no student      ravi       no student
//     }
// }


// // made list oe student with its firstname and no. of fsub

// for (let i = 0; i < students.length; i++) {
    
//     console.log(`${students[i].firstname} : ${students[i].fsub.length}`)      // krishna : 3        ravi : 3       akshay : 4
  
// }       // we can use dot notation in array for fetching the values from object


// print name of student with its fsub thermo

//console.log((students[i].fsub.indexOf=='thermo'))

//  for(let i =0; i < students.length; i++){
//     //console.log((students[i].fsub.indexOf('thermo')>=0))            // false   false   true
//      if(students[i].fsub.indexOf('thermo')>=0){
//          console.log(students[i].firstname)                           // akshay
//      }
//  }

//  for(let i =0; i < students.length; i++){
//     //console.log((students[i].fsub.indexOf('thermo')>=0))            // false   false   true
//      if(students[i].fsub.includes('thermo')){
//          console.log(students[i].firstname)                           // akshay
//      }
//  }
















































































































// let students = [
//     {
//         firstName:"chinmay",
//         age:25,
//         skills:["python","javascript","css","jquery"]
//     },
//     {
//         firstName:"poorva",
//         age:28,
//         skills:["javascript","css"]
//     },
//     {
//         firstName:"abhisha",
//         age:27,
//         skills:["python","javascript"]
//     }
// ]
//  //console.log(students[0]['firstName'])
// // console.log(students[2]['firstName'])
// // console.log(students[2]['skills'].length)
// // Average age of all students

// for(let i = 0 ; i < students.length ;i++){
//     if(students[i].age < 25){
//         console.log(students[i].firstName)
//     }
// }

// let sum = 0 

// for(let i = 0 ; i < students.length ;i++){
//     sum = students[i].age  + sum
// }
// console.log(sum/students.length)

// // Name with skills
// for(let i = 0 ; i < students.length ;i++){
//     console.log(` ${students[i].firstName} : ${students[i].skills.length} `)
//     // chinmay : 4
// }

// // Name the person with python skill

// for(let i = 0 ; i < students.length ;i++){
//     if(students[i].skills.indexOf("python")>=0){
//         console.log(students[i].firstName)
//     }
// }

// let firstName = "chinmay"
// let lastName = "deshpande"
// console.log(`My first name is ${firstName} and my last name is ${lastName}`)

// let y = [1,23,33]

// for(let i = 0 ; i < y.length ;i++){  //1 , 2 , 3
//     console.log(i)  // 0  , 1  , 2
//     console.log(y[i])
// }

// let person3 = {
//     firstName:"ram",
//     age:34
// }

// for(let key in person3){
//     console.log(key,person3[key])
// }

// class Person {

//     fullName= null
//     age= null
//     rollNumber= null

// }

// let amol = new Person()
//console.log(amol)
// amol.age = 23
// console.log(amol)

// let chinmay = new Person()
//console.log(chinmay)
// chinmay.language = "marathi"
// console.log(chinmay)

//let chinmay

// {
//     fullName:null,
//     age:null,
//     rollNumber:null
// }

//let amol

// {
//     fullName:null,
//     age:null,
//     rollNumber:null
// }

