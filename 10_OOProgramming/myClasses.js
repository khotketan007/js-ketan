class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPass(){
        return `Encrypted Password : ${this.password}abc`
    }
    capitalUserName(){
        return `Username : ${this.username.toUpperCase()}`
    }
}   
const Data = new User("Ketan", "Ketan220@IBM.com", "123")
console.log(Data.encryptPass());
console.log(Data.capitalUserName());

// Behind the Seen
function users(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

// If I want to access the users using Prototype
users.prototype.encryptPassword= function(){
    return `Pass : ${this.password}abc`
}

const updatedData = new users("Rajit", "ranjit34@Salesforec.com", "24243")
console.log(updatedData.encryptPassword());