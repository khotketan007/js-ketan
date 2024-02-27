// Basic Methods
// For Loop
for (let index = 1; index <= 5; index++) {
    // console.log(`Iteration : ${index}`);
}

// While Loop
let i = 1
while (i <= 5) {
    // console.log(`Iteration : ${i}`)
    i++
}

// Do-While Loop
let start = 0
do {
    // console.log(`Iteration : ${start}`);
    start++
} while (start < 5)

//For-in Loop
const person = {Name : "Ganesh", Age : 35}
for (const key in person) {
    // console.log(key, person[key]);
}

// For-of Loop
const name = ["Ketan", "Vishal", "Tejas", "Ram", "Rohit"]
for (const iterator of name) {
    console.log(iterator);
}