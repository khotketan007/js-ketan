const userEmail = []
if (userEmail) {
    console.log("Got User Email");
}else {
    console.log("Don't have User Email");
}

// Falsy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// "0", 'False', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObject = {}
// Checking for the Empty Object
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
}

// false == 0 op=> true
// false == '' op=> true
// 0 == '' op=> ture

// Nullish Coalescing Operator (??): null and undefined

let val1 
val1 = 3 ?? 5
// val1 = null ?? 10
// val1 = undefined ?? 17
// val1 = null ?? 12 ?? 45 // => Fist vlaue will be assigned

console.log(val1);

// Ternery Operator
// condition ? true : false
const iceTearPrice = 100
iceTearPrice <= 80 ? console.log(`Less then 80`) : console.log(`Gresater then 80`)