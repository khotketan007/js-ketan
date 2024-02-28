// Scope of the Varible

//=> Globle Scope and Local Scope

// Variable Declaration
let a = 10;     //you can't access the value outside the scope
const b = 20;   //same as above IMP=> it's assigning the constant value to variable
var c = 50;    //you can access anywhere

if (true) {
    let a = 57865       //=> this a has global scope
    // console.log("Global Scope variable");
    // console.log(`Inner a val ${a}`);
}
// console.log("Local scope Varibale");
// console.log(`Outer a val ${a}`); //=> this a has a local scope

// Nested Scope
function one(){
    const userName = "Ketan"
    function two() {
        const userAge = 23
        console.log(userName)
    }
    // console.log(userAge)
    two()
}
one()