// const users = {
    // userName : 'Ketan',
    // logInCount : 8,
    // getUserDetails : function(){
        // console.log('Data Fetch SuccessFully');
        // console.log(`Username : ${this.userName}`);
        // console.log(this);
//     }
// }
// console.log(users.logInCount);
// console.log(users.getUserDetails());
// console.log(this);

function userData(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.LoginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
const data1 = new userData("Ketan", 10, true)
const data2 = new userData("Hitesh", 15, false)
console.log(data1);
console.log(data2);

function userData2(Name, City, Pin_code){
    this.Name = Name
    this.City = City
    this.Pin_code = Pin_code
    return this
}
const nextData = new userData2("Ramu Kaka", "Saudi-Arebia", 23032)
console.log(nextData);