// A promise is an object that represents the eventual completion or failure of an //// asynchronous operation and its resulting value. It is a way to handle

// Promise Creatinon
// Creating a promise using the new keyword.
// Promise take CallBack inside the Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task\
    // DB Calls, Cyrptography
    // Networkcall
    setTimeout(() => {
        // console.log('Async task is Complete');
        resolve()
    }, 2000)
}) 
promiseOne.then(function(){
    // console.log("Promise Consumed");
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        // console.log('Async task 2');
        resolve()
    },3000)
})
promiseTwo.then(() => {
    // console.log("Promise Consumed 2");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({userName : "Chai", email : "Chai@Example.com"})
    }, 1000)
})
promiseThree.then(function(data){
    // console.log(data.email);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({userName : "Ketan@github", password : "Ketan@123"})
        } else {
            reject('Error! Data not Fetched')
        }
    }, 1000)
})
promiseFour.then((data) => {
    // console.log(data);
    return data.userName
}).then((username) => {
    // console.log(username);
}).catch((error) => {
    // console.log(error);
}).finally(() => {
    // console.log("The Promise Either Resolved or Rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({userName : "Javascript", password : "js@123"})
        } else {
            reject('Error! JS Failed')
        }
    }, 1000)
})
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

//Function Call
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// Function Call
// getAllUsers()

// I'd be glad to explain the code you provided:

// **Code Breakdown:**

// ```javascript
// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// ```

// **Explanation:**

// 1. **`async function getAllUsers()`:**
//    - This line defines an asynchronous function named `getAllUsers`.
//    - The `async` keyword indicates that this function will potentially perform asynchronous operations (operations that might take time to complete).

// 2. **`try { ... }` Block:**
//    - This block contains the code that will be executed to fetch and process user data.
//    - The `try...catch` statement is used for error handling.

// 3. **`const response = await fetch('https://jsonplaceholder.typicode.com/users');`:**
//    - This line attempts to fetch user data from the provided URL using the `fetch` API.
//    - `fetch` is a built-in JavaScript function for making asynchronous HTTP requests.
//    - The URL points to a free, public API that provides sample user data in JSON format.
//    - The `await` keyword is used before `fetch` because it's an asynchronous operation. The function execution will pause at this point until the fetch operation completes (either successfully or with an error).
//    - The fetched data is stored in the `response` constant.

// 4. **`const data = await response.json();`:**
//    - This line attempts to parse the JSON response from the server into a JavaScript object.
//    - The `.json()` method is called on the `response` object to achieve this.
//    - Again, `await` is used because parsing JSON can be asynchronous. The function waits for the parsing to finish before proceeding.
//    - The parsed user data (as a JavaScript object) is stored in the `data` constant.

// 5. **`console.log(data);`:**
//    - This line assumes you're working in a browser environment or a Node.js environment with access to a console.
//    - It prints the contents of the `data` variable (the parsed user data) to the console for debugging or inspection purposes.

// 6. **`catch (error) { ... }` Block:**
//    - This block is part of the `try...catch` statement.
//    - If any errors occur during the asynchronous operations (fetching or parsing), the code within this block will be executed.
//    - The `catch` statement takes a parameter, usually named `error`, which will contain details about the error that occurred.
//    - In this case, the line `console.log(error);` simply logs the error message to the console for debugging purposes.

// **In Summary:**

// This code defines an asynchronous function `getAllUsers` that fetches user data from a JSON API and then logs the parsed data to the console. It uses `async/await` syntax to handle asynchronous operations in a cleaner way compared to traditional callback-based approaches.

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error)  => {
    console.log(error);
})

