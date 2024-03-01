// Immediately invoked function expreesion

// Function Def
// IIFE function 1
(function con(){
    console.log("DB CONNECTED");
})();   
// => We want to put the ; for the end the fucntion 
//=> otherwise it throws the error
//=> we need to terminate the function


// IIFE Function 2
// (() => {
//     console.log("DB CONNECTED TOO");
// })();

// IIFE function 3
( (naam) => {
    console.log(`My name is ${naam}`);
} )('KetanKhot');
