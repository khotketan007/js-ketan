// Array Declaration
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Adding 10 Into the above Array
// const newNumbers = myNumbers.map( (num) => num + 10)
// console.log(newNumbers)

// Chaining of the Map Function
const myNums = myNumbers.map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 40)
console.log(myNums)