// Object are Key:Value Pair
//Type 1 => Constructor  (singleton)
//=> Object Declaration => object.create
//Type 2 => Object literals

// Symbol Declaration
const mySymbol = Symbol("myFirstKeySymbol")

// Object Declaration 
// This is Obejct Literals
const jsUsers = {
    myName : "Ketan",
    "my_Last_name" : "Khot",
    [mySymbol] : "Hello Symbol",
    myAge : 25,
    myPhno : 7499552629,
    myCity : "Sangli",
    lastLogInDays : ["Monday", "Friday"]
}

// console.log(jsUsers);
// console.log(jsUsers["myName"]);
// console.log(jsUsers.myAge);
// console.log(jsUsers["my_Last_name"]);
// console.log(typeof jsUsers.mySymbol); => type of Data : String 
// console.log(typeof jsUsers[mySymbol]); // You can access using this type

jsUsers.myCity = "Pune"
// Object.freeze(jsUsers)  // You Can't update the Value after using this Object
jsUsers.myCity = "Sangli"
// console.log(jsUsers)

// First Function
jsUsers.greeting = function (){
    console.log("Hello Js Users");
}

//Second Function
jsUsers.greetingTwo = function (){
    console.log(`Hii JS User, ${this.myName}`); // Taking the Value from the same object to using this keyword
}

console.log(jsUsers.greeting());
console.log(jsUsers.greetingTwo());
// console.log(jsUsers.greeting);