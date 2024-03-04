// For Loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        // console.log("5 Number is Best");
    }
    // console.log(i)
}

for (let i = 1; i <= 3; i++) {
    // console.log(`Outer Loop : ${i}`);
    for (let j = 1; j <= 3; j++) {
        // console.log(`Inner Loop : ${j}`);
    }
}

// Wroking on Array
const myArray = [10,20,30,40,50,60,70,80,90,100]
// Applying For Loop
for (let i = 0; i < myArray.length; i++) {
    // const element = myArray[i];
    // console.log(`At Index ${i} Value : ${myArray[i]}`);
}

// KeyWords
// break and continue
// Break
// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`Detected 5 breaking Loop`)
//         break
//     }
//     console.log(`Value of i is ${index}`);
 
// }

// continue
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index}`);
 
}