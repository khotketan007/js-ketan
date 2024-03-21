class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        return `UserName : ${this.username}`
    }
}

class access extends user{
    constructor(name, email, password){
        // Super keyword
        super(name)
        this.email = email
        this.password = password
    }
    // Adding Function
    addCourse(){
        console.log(`New Course Add by ${this.username}`);
    }
}

const d1 = new access("JAVA", "JAVA@mail.com", "123")
d1.addCourse()
