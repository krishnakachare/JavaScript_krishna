// Proccess to learn any datatype

// 1. About its information ( like Requirements, Use, Limitations)
// 2. CURD operation on it

// Ways to create it
// How to update it
// How to retrive properties from its
// How to delete properties from its

// 3. Loop on that datatype
// 4. Properties and methods for it

//-------------------------------------------------------------------------------------------------------------------


// MAP DATATYPE (Information)

// our regular object we can set keys in only string datatype
// Map is simillar to object but in map we can set keys in different datatype like (array,object,boolean,undefined,string)
// its not allow DUPLICATE properties(KEY NOT ALLOW)
// but we can use duplicate value
// but when we use same key that time its value UPDATED
// NOTE= when we going to update property value pass same key (here we cant seperatly update key and values)
//   when we will pass different key and same value for the purpose of update property value here not that happen here we going to create new property  

// CURD OPERATIONS

// we can made Object from map  by two different way

// 1. Directly pass values to constructor = structure is multidimensional array in that first element is array and in its first postion have key name and second position have value of property  , one array one property and its comma seperated
//Example=

// let mapobj=new Map([
//     ['fullName','Krishna'],
//     [83,"inchHeight"],
//     [true,"graduate"],
//     [['ravi','abhi'],"friend"],

// ])

// console.log(mapobj)
// console.log(typeof(mapobj))          // object
// Map(4) {
//     'fullName' => 'Krishna',
//     83 => 'inchHeight',
//     true => 'graduate',
//     [ 'ravi', 'abhi' ] => 'friend'
//   }

// 2. Using set method we can set properties of map = Pass first parameter is key name and second parameter is value of property

// let mapS = new Map()

// mapS.set('fullName', 'krishna')
// mapS.set(83, "inchHeight")
// mapS.set(true, "graduate")
// mapS.set(['ravi', 'abhi'], "friend")

// console.log(mapS)
// // Map(4) {
// //     'fullName' => 'krishna',
// //     83 => 'inchHeight',
// //     true => 'graduate',
// //     [ 'ravi', 'abhi' ] => 'friend'
// // }

// // Updating map properties
// // set method = Action = adding new property in map  ,  Return = all map object

// console.log(mapS.set(true, "hi"))              // here we update property value ( passing same(existing) key )
// mapS.set("graduate", "graduate")   // we going to add new property not updating key ( key updating means adding new property )


// // Retrive properties from map ( here we have get method ) = for get property from map simply pass key to get method
// // get method  =>  Action = Find property value by using key name  ,   Return = property value

// console.log(mapS.get(83))            // inchHeight
// console.log(mapS.get(true))          // hi
// console.log(mapS.get('graduate'))    // graduate

// // Deleting properties from map = pass key name to which we want to delete property
// // delete method => Action = deleting property,   Return type =  Boolean , Return => true = sucssefully deleting property   false = cant delete property (when property is not present) 

// //mapS.delete('graduate')
// console.log(mapS.delete('graduate'))       // true
// console.log(mapS)



// // PROPERTIES FOR MAP DATATYPE

// // 1. SIZE =>  Action = count properties in map  ,  Returntype = number 

// console.log(mapS.size)        // 4

// // Methods FOR MAP DATATYPE

// // 1. has() =>   Action = check property present or not by the help of key         Return type = Boolean 

// console.log(mapS.has(83))     //  true

// // 2. clear()  =>  Action = delete all properties present in the map              return = undefined

//  console.log(mapS.clear())


// LOOP ON MAP

// console.log(mapS.keys())       // [Map Iterator] {  }
// console.log(mapS.values())     // [Map Iterator] {  }
// console.log(mapS.entries())    // [Map Entries] {  }         // Return multidiamensional array

// for(let kk of mapS.keys()){
//     console.log(kk)
    
// }

// for(let kk of mapS.values()){
//     console.log(kk)
// }

// for(let kk of mapS.entries()){
//     console.log(kk)                   // return array
// }

// for(let [key,value] of mapS.entries()){
//     console.log(key,value)                   // return array
// }





















//=========================================================================================================
// Quize Example

// let kk
// let m = new Map([
//     ['U R Name', 'kk'],
//     ['U R Age', '26'],
//     ['U R Hight', 20],
//     ['U R Weight', 64],
//     ['U R Known About', 'jS', 'Cypress'],
//     ['U R learn', 'Python'],
//     [[1, 2], 'array'],
//     [{ n: 'kk' }, 'object'],
//     [true, 'boolean'],
//     [1, 'number'],
//     ['boolean', true],
//     ['object', { n: 'kk' }],
//     ['array', [1, 2]],
//     [kk, 'variable'],
//     ['variable', kk]
// ])
// console.log(m)  
//   Map(6) {
//     'U R Name' => 'kk',
//     'U R Agr' => '26',
//     'U R Hight' => 20,
//     'U R Weight' => 64,
//     'U R Known About' => 'jS',
//     'U R learn' => 'Python'
// }
//--------------------------------------------------------------------------------------------------


// Quize using map datatype (used different datatype which was handle in prompt)

// let kk
// let mapObj = new Map([

//     [true, 'boolean'],
//     [1, 'number'],
//     [kk, 'variable'],
//     ["", 'Empty String']
// ])

// let count = 0
// for (let [key, val] of mapObj.entries()) {

//     let inp = prompt(val)
//     console.log(inp, typeof (inp))

//     if (key) {
//         key = String(key)
//     } else {
//         key = key === undefined ? null : key
//     }
//     console.log(key, typeof ((key)))

//     if ((inp) === (key)) {
//         count++
//     }
// }
// count = count === 4 ? `U R SCORE IS ${count} U WIN GOLD` : count
// count = count === 3 ? `U R SCORE IS ${count} U WIN SILVER` : count
// count = count === 2 ? `U R SCORE IS ${count} U WIN BRONZE` : count
// count = count === 1 ? `U R SCORE IS ${count} ` : `${count}`
// console.log(count)













































































//==============================================================================================================

// let h = {
//     fullName:'chinmay',
//     age:23,
//     rollNo:25
// }

// for(let key of Object.keys(h)){
//     console.log(key)
// }
// for(let val of Object.values(h)){
//     console.log(val)
// }
// for(let [key,val] of Object.entries(h)){
//     console.log(key,val)
// }

// //------------------------------

// let vb = new Map()

// let r = [1,2,45]
// let hum = {"age":12,"j":8}

// vb.set(true,"i can go")
// vb.set(false,"i can't go")
// vb.set(r,"array3")
// vb.set(hum,"array2")
// vb.set(1,"arrayf")

// console.log(vb)
// console.log(vb.size)
// console.log(vb.get(hum))
// let vba = new Map([
//     ['john','admin'],
//     ['mark','developer'],
//     ['shawn','tester'],
//     ['bob','BA']

// ])

// console.log(vba.size)
// console.log(vba.has('bob'))
// console.log(vba.delete('bob'))
// console.log(vba)
// // vba.clear()
// // console.log(vba)


// // ---------------------------

// for(let key of vba.keys()){
//     console.log(key)
// }

// for(let key of vba.values()){
//     console.log(key)
// }

// for(let [key,val] of vba.entries()){
//     console.log(key,val)
// }




// -----------> map , quiz using map