// Date
// Method => toString(), toISOString(),toJSON(),toLocaleDateString(),   
// => toLocalString()
let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());   //=> Date
// console.log(myDate.toLocaleTimeString());   //=> Time
// console.log(myDate.toLocaleString());       //=> Useful method(Date, Time)

// Date Declaration
// let myCreatedDate = new Date(2023, 0, 21)
// let myCreatedDate = new Date(2023, 1, 21, 7, 10)
let myCreatedDate = new Date("2024-02-21")
// console.log(myCreatedDate.toLocaleDateString());

// Time Declaration
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);