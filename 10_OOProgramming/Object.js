function multipleBy5(num){
    return num * 5
}
multipleBy5.power = 5

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    console.log(this.userName);
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);    
}

const firstUser = new createUser("Ram", 78)
const secUser = new createUser("Ganesh", 88)

firstUser.increment()
secUser.printMe()