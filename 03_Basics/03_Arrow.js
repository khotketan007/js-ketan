const user = {
    userName : "Ketan",
    price : 399,
    //Declaring Another Function
    welcomeMessage(){
        console.log(`${this.userName}, Welome in JS World`);
        console.log(this);
    }
}
// Calling function
// user.welcomeMessage()
// user.userName = "Ram"
// user.welcomeMessage()

// Below Line refer the empty Objects
// console.log(this);

// Function Def
// function one() {
//     let uname = "Rajesh"
//     console.log(this.uname);
// }
// one()

// Arrow function declaration
const arrowFunction = () => {
    Name = "Ketan",
    age = 25
    // console.log(this);
}
arrowFunction()

// Core Discussion on Arrow Function
// Synyax => () => {CODE}
// Basic Arrow Funtion
const Add = (num1 , num2) => {
    // Code
    return num1 + num2
}
// Printing
console.log(Add(3,44));

// Another Implicit Basic return function
// let min = (n1, n2) => n2 - n1

// let min = (n1, n2) => (n2 - n1)

let min = (n1, n2) => ({myName : "Jagdish", myAge : 23})

console.log(min(34,45));