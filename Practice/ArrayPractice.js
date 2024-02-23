// Various Ways to Declare the Array

// Method 1: Using JavaScript array() constructor
let methodArray1 = new Array(5)
// console.log(`Method 1 : ${methodArray1.length}`);
// console.log(methodArray1)

// Method 2: Using apply(), and Map()
let methodArray2 = Array.apply(null, Array(5))
                                         .map(function (y, i) {return i})
// console.log(methodArray2);

// Method 3: Array.from()
let methodArray3 = Array.from("Ketan")
// console.log(methodArray3);

// Method 4: Using for loop
let arraySize = 5
let Array1 = []
for (let index = 0; index < arraySize; index++) {
    Array1.push("Value") 
}
// console.log(Array1);

// Ways of iterating over a array in JavaScript
// Console log method
// For Loop method
// While Loop method

// Using forEach() Method
// let index = 1;
let newarray = [1,2,3,4,5,6]
newarray.forEach(myFunction) //=> Looping on Array ForEach Element
// function declaration
function myFunction(item){
    // console.log(`Array in Item : ${item}`);
}

// Using every() Method
let Arr1 = [1,2,3,4,5,6]
//Function Declaration
let underFive = x => x<5
if (Arr1.every(underFive)) {
    // console.log(`All are Less then 5`);
}else{
    // console.log('At least one element is not less than 5');
}

// map() Method
let Arr2 = [1, 2, 3, 4, 5, 6]
let sq = x => Math.pow(x , 2)
sq = Arr2.map(sq)
// console.log(sq);

// Using filter() Method
let square = x => x % 2 === 0
let square1 = Arr2.filter(square)
// console.log(square1);

// Using the reduce() Method
const number = Arr2.reduce((pre, cur) => {
    return pre + cur
})
// console.log(number);