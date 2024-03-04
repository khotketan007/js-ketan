// Advance Loop in array
// for-of Loop

// Array
const arr = [1, 2, 3, 4, 5]
//for-of Loop
for (let number of arr) {
    // console.log(number);
}

// Loop on Strings
let greeting = "Ketan Khot"
for (const greet of greeting) {
    // If it contain space the break the Loop
    if (greet == ' ') {
        break
    }
    // console.log(greet);
}

// Maps in JavaScript
// It is Known for the Key-value pair and it's unique
// By creating the Object
let newMap = new Map()
newMap.set(1, "Ketan")
newMap.set(2, "Snehal")
newMap.set(3, "Nagesh")
// print
// console.log(newMap)

// Now We are using for loop on Map
for (const [key, value] of newMap) {
    console.log(key, '=>', value);
}