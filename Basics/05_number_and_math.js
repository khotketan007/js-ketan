//*********************Number**************************
//This is the Number Datatype 
//=> type is number
const score = 500
// console.log(typeof score)

//this is the Object datatype in number
//=> type is object(number)
const balance = new Number(500)
// console.log(typeof balance);

//Convert number to string
// console.log(balance.toString());

//Tofixed Property
// console.log(balance.toFixed(1));

//Precision property
const otherNumber = 23.4843
// console.log(otherNumber.toPrecision(4));

//Tolocalestring (Adding commas in bewteen)
const newNumber = 10002340
// console.log(newNumber.toLocaleString('en-IN'));

// *******************Maths*********************
// console.log(Math);
// Math Absolute function(convert neg to pos)
// console.log(Math.abs(-5));

// Round function
// console.log(Math.round(23.46));

// Ceil function (Up Value Return)
// console.log(Math.ceil(23.43));

// floor function (Down Value Return)
// console.log(`Floor Value : ${Math.floor(23.43)}`);

// Min Max Function
// console.log(`Min value in array : ${Math.min(4,2,5,6,77)}`);
// console.log(`Max value in array : ${Math.max(4,2,5,6,7,34)}`);

console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20
//Logic
// const randomValue = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomValue)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)