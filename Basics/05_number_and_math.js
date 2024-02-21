//This is the Number Datatype 
//=> type is number
const score = 500
console.log(typeof score)

//this is the Object datatype in number
//=> type is object(number)
const balance = new Number(500)
console.log(typeof balance);

//Convert number to string
console.log(balance.toString());

//Tofixed Property
console.log(balance.toFixed(1));

//Precision property
const otherNumber = 23.4843
console.log(otherNumber.toPrecision(3));