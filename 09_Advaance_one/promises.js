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

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error)  => {
    console.log(error);
})
