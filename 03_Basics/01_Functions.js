// Function in Javascript

// Function Definition
function myName() {
    // console.log("Hello JS");
}
// Functionn Call
myName()

// Add two number function
function addTwoNumber(num1, num2){      //=> num1 and num2 is parameter
    return num1 + num2
    // console.log(num1 + num2);

    //=> After return statement 
    //=> Whatever you retunr it is not executable
} 
const addition = addTwoNumber(2,6)                                    //=> 2 and 6 is argument here
// console.log(addition)

// Argument and Parameter passing different method
function logInUserMessage(userName) {
    return `${userName} Just Logged In`
}
// To print above statement 
console.log(logInUserMessage("Ketan"));