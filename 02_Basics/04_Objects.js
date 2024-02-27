// Constructor/Signleton object declaration

//Object Declaration (Singleton object)
const tinderUser = new Object()

tinderUser.id = "353Ketan5"
tinderUser.myName = "Ketan Tanaji Khot"
tinderUser.myAge = 25
tinderUser.myLocation = "Pune"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(tinderUser.myAge)

// To Access the Keys in tinderUser following method
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// Entries to Delcare the Every value is in seperate object
console.log(Object.entries(tinderUser));
// To check the Value is present or not
console.log(tinderUser.hasOwnProperty("id")); //=> It Return the Boolean value

// New Object Declaration Non-SingleTon Object
const regularUser = {
    eMail : "KetanKhot25@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Ketan",
            lastName : "Khot"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1 : "A",
    2 : "B"
}
const obj2 = {
    3 : "C",
    4 : "D"
}

// Combination of Two Arrays
// Assign Operator to combine the Two object into single Objedt
// This method also you use very rearly
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

//Another method to combine the two object in single object
const obj3 = {...obj1, ...obj2}
// console.log(obj3);