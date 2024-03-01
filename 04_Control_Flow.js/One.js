// If statement
// Comparesion operator
// > < <= >= != == ===(Check con and also check type also) !==
// Simple if Statement 

let score = 300
if (score > 100) {
    let power  = "Fly"
    // console.log(`User Power : ${power}`);
}

// Short Hand Notation of if Statement
let balance = 1000
// if(balance > 500) console.log("Test");

// Nested If-Else Statement
// if (balance < 500) {
//     console.log("Less then 500");
// } else if(balance < 700){
//     console.log("Less then 700");
// }else if (balance < 900) {
//     console.log("Less then 900");
// } else {
//     console.log("Balance is less then 1500");
// }

// Another Example
let userLoggedin = true
let debitCard = true
// Condition using AND Operator
if (userLoggedin && debitCard) {
    console.log("You can buy the Items");
}


let userloggedInbyeGoogle = false
let userloggedInbyeEmail = true
// Condition by using OR operator
if (userloggedInbyeGoogle || userloggedInbyeEmail) {
    console.log("User can Log in");
}
