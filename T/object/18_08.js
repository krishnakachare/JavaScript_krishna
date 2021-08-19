//////////////////////////////////////////   EXAMPLE ON CLASS BANK   ////////////////////////////////////////////////

// class bank {

//     constructor(name, accno, bal) {

//         this.fullname = name
//         this.accno = accno
//         this.bal = bal
//         this.transaction = []
//     }

//     deposite(amount) {

//         this.transaction.push(amount)
//         this.bal = this.bal + amount
//         console.log(`Dear ${this.fullname}, The amount of ${amount} is added to your account number ${this.accno}`)
//         console.log(`Your current account balance is ${this.bal}`)
//         //return this.bal

//     }

//     withdraw(amount) {

//         if (this.bal > amount) {

//             this.transaction.push(-amount)
//             this.bal = this.bal - amount
//             console.log(`Dear ${this.fullname}, The amount of ${amount} is deducted to your account number ${this.accno}.`)
//             console.log(`Your current account balance is ${this.bal}.`)
//             //return this.bal

//         }
//         else {
//             console.log(`Account number ${this.accno} have in-sufficient balance to withdraw amount.`)
//         }
//     }

// }


// let kk = new bank('krishna', 111, 20)
// //console.log(kk)                                            // bank { fullname: 'krishna', accno: 111, bal: 20, transaction: [] }
// kk.deposite(100)                            // Dear krishna, The amount of 100 is added to your account number 111 Your current account balance is 120

// //console.log(kk)                            // Dear krishna, The amount of 100 is added to your account number 111
// // Your current account balance is 120
// // bank {
// //   fullname: 'krishna',
// //   accno: 111,
// //   bal: 120,
// //   transaction: [ 100 ]
// // }

// kk.withdraw(500)                           // Account number 111 have in-sufficient balance to withdraw amount.    
// kk.withdraw(100)                           // Dear krishna, The amount of 100 is deducted to your account number 111.Your current account balance is 20.                    
// //console.log(kk)  
// kk.deposite(100)
// kk.deposite(100)
// kk.withdraw(100)
// kk.withdraw(100)
// kk.deposite(100)
// console.log(kk)
// console.log(kk.transaction)              // [ 100, -100,  100, 100, -100, -100, 100 ]


// // find last 5 transactions

// let last5 = kk.transaction.slice(-5)
// console.log(last5)                            // [ 100, 100, -100, -100, 100 ]

// // find total deposite

// let totaldeposite = kk.transaction.filter(function (el, index, arr) {
//     return el > 0
// }).reduce(function (acc, el, index, arr) {
//     return acc + el
// }, 0)
// console.log(totaldeposite)                // 400  


// // find total withdraw

// let totalwithdraw = kk.transaction.filter(function (el, index, arr) {
//     return el < 0
// }).reduce(function (acc, el, index, arr) {
//     return acc + (el)
// }, 0)
// console.log(totalwithdraw)                // -300

// // find total transaction

// let totaltransaction = kk.transaction.reduce(function (acc, el) {
//     return Math.abs(acc) + Math.abs(el)
// }, 0)
// console.log(totaltransaction)             // 700



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CLASS EXTENDS  = Parent all properties and methods can access on child object

class grandfather {

    constructor(gname,lastname){
        this.grandfathername = gname
        this.lastname = lastname
    }

    walk(){
        console.log('I can walk')
    }
}

class father extends grandfather {

    fname(){

        console.log(this.lastname)
    }
}

let gopal = new grandfather('shankar','kachare')
console.log(gopal.lastname)                          // kachare
console.log(gopal.walk())
