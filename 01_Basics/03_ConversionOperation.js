// Variable Declaration
let score = "33";

// Checking the type of the variable
console.log(typeof score);
console.log(typeof(score));

// Converting the String to Number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33se" => NaN
// True => 1, False => 0

// this is for boolean operation
let istrue = 1
let check = Boolean(istrue)
console.log(istrue);

// **********Operations*************
console.log("Modulo : ",2 % 3)
console.log("Division : ",2 / 3);

// String Operation
let str1 = "Hi"
let str2 = " Ketan"
let str3 = str1 + str2
console.log(str3);

// Complex Situation
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 3 + "0");

// Tricky Converison
console.log(+true);     // OP => 1
console.log(+"");       // OP => 0

// Prefix and Postfix
// prefix => ++varName
// postfix => varName++