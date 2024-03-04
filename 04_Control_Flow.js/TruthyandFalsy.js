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
// val1 = 3 ?? 5
val1 = null ?? 10

console.log(val1);