// 1. Linear Search Algorithm (Naive approach)
// Array Declaration
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Function Definition
function check(element){
    // For Loop
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] == element) {
            return element + ` is present in array`
        }
    }
    return element + ` is not present in array`
}

// Function Call
console.log(check(554));

// Using indexOf() function:
let n = 23
if (numbers.indexOf(n) > 0) {
    console.log(`Present`);
}else{
    console.log(`Not Present`);
}
