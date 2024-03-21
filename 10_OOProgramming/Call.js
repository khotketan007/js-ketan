function setUserName (username){
    this.username = username
}
function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const data1 = new createUser("Ketan", "Ketan009@ibm.com", "123")
console.log(data1);