// Array Declaration
const fruits = ["Apple", "Guava", "Graps", "Mango"]
// Use for-Each loop
let values = fruits.forEach( (items) => {
    return items
} )
// console.log(values); //=>Output : Undefined 

// Number Array
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter function
// const newNums = myNumber.filter( (num) => {
//    return num > 5
// })

// Using For each Loop
// const newNums = []
// myNumber.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const cars = [
    { type: "Fiat", model: "500", color: "white" },
    { type: "Ford", model: "Mustang", color: "red" },
    { type: "Ford", model: "Endavour", color: "white" },
    { type: "Audi", model: "A4", color: "black" },
    { type: "Toyota", model: "Camry", color: "red" },
    { type: "Honda", model: "Civic", color: "blue" },
    { type: "BMW", model: "X3", color: "gray" },
    { type: "Tesla", model: "Model 3", color: "red" },
    { type: "Mercedes-Benz", model: "C-Class", color: "black" },
    { type: "Volkswagen", model: "Golf", color: "red" },
]

// User Requrienment
// print the black color name
const userRe1 = cars.filter( (col) => 
        col.color === 'black'
)
console.log(userRe1);
const userRe2 = cars.filter((item) => {
    return item.color === 'red' && item.type === 'Ford'
})
console.log(userRe2);

