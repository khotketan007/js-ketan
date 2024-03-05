// Reduce Method
const myNums = [1, 2, 3]
// // Applying Reduce Method
// const myTotal = myNums.reduce(function (preVal, currVal) {
//     console.log(`Previous Val : ${preVal} and Current Val : ${currVal}`);
//     return preVal + currVal
// }, 0)

// Now Wrtting in Arrow Function
const myTotal = myNums.reduce((Acc, Curr) => Acc + Curr, 0)
// console.log(myTotal);

// Another Object 
const shoppingCart = [
    {
        itemName : "js Course",
        itemPrice : 2999
    },
    {
        itemName : "java Course",
        itemPrice : 3599
    },
    {
        itemName : "Python Course",
        itemPrice : 3999
    },
    {
        itemName : "DotNet Course",
        itemPrice : 1599
    }
]

const totalPrice = shoppingCart.reduce((acc, curr) => (
    acc + curr.itemPrice
), 0)
console.log(totalPrice);