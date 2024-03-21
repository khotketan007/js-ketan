class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const ketan = new user("Ketan")
// console.log(ketan.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const lap = new Teacher("Apple", "Apple@phone.com")
console.log(lap.logMe());