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
    // return `${userName} Just Logged In`
}
// To print above statement 
// console.log(logInUserMessage("Ketan"));

function calculatePrice(val1, val2, ...num1) {
    // console.log(val1, val2);
    return num1
}
// console.log(calculatePrice(100, 200, 300, 400));

// How to pass the object into function
const myInfo = {
    name : "Ketan",
    age : 25
}
// function to pass the object
function handleObject(anyObject) {
    console.log(`Hello ${anyObject.name} you are ${anyObject.age} year old`);
}
// Calling Function
// 1st way to pass the Information
// handleObject(myInfo)

// 2nd way to pass the infromation
// you can pass the direct object
handleObject({
    name : "Rajesh",
    age : 46
})

// Array declaration
const myNewArray = [100, 400, 500, 260, 550]

function returnSecondValue(getArray){
    return getArray[1] //=>You can put the index here to access the element
}
// Printing
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));