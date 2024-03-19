// A promise is an object that represents the eventual completion or failure of an //// asynchronous operation and its resulting value. It is a way to handle

// Promise Creatinon
// Creating a promise using the new keyword.
// Promise take CallBack inside the Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task\
    // DB Calls, Cyrptography
    // Networkcall
    setTimeout(() => {
        console.log('Async task is Complete');
        resolve()
    }, 2000)
}) 

promiseOne.then(function(){
    console.log("Promise Consumed");
})