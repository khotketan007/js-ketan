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
        // console.log(userName)
    }
    // console.log(userAge)
    two()
}
one()

if(true){
    const firstname = "Ketan"
    if (firstname === "Ketan") {
        const lastname = " Khot"
        // console.log(firstname + lastname);
    }
    // console.log(lastname); => you can't Access the lastname here
}
// console.log(firstname); => you can't access the firstname here

//-----------Interesrting-----------------
// This is Called General Function
// you can calling the function before it's declaration
// Calling Function
console.log(addOne(5))
function addOne(number){
    return number + 1
}



// Some how we called expression in form of Object
// In this method you can't call the function varable it throws the error
// addition(5)
const addition = function (num){
    return num + 1
}
console.log(addition(587));