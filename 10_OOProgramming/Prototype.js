let myName = "Ketan   "
// let myAddress = "Mahadevwadi    "
// Not Good way to Get length of the String
// console.log(myName.trim().lgth);


let myHeros = ["Thor", "Superman"]

let heroPower = {
    thor : "Hammer",
    superman : "Flying",

    // Inside the declare one Method
    getSupermanPower: function(){
        console.log(`Superman Power is ${this.superman}`);
    }
}

// This is Top level Hirarchi to add ketan Function in each object
Object.prototype.ketan = function (){
    console.log(`Ketan Present in all Object`);
    
}

Array.prototype.kitkat = function(){
    console.log(`Hi Kitkat! you are everywhere`)
}

// myHeros.kitkat()
// heroPower.kitkat()

// heroPower.ketan()
// myHeros.ketan()
// myName.ketan()


// Inheritance

const user = {
    username : "Dhoni",
    email : "Dhoni007@IPL.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailabe : false
}

const taSupport = {
    makeAssigment : "Js Assignment",
    fullTime : true,
    __proto__ : teachingSupport
}

// Teacher Can assess the property of the User
// Old syntax
// teacher.__proto__ = user

// Modern Syntax
// teachingSupport can Access all property of teacher
Object.setPrototypeOf(teachingSupport, teacher)

// String prototype property
let anotheruserName = "Ram Ram Ram Ram  "
String.prototype.trueLength = function (){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}
anotheruserName.trueLength()
"Ketan".trueLength()
"Icon".trueLength()