const user ={
  username: "Pragyan",
  loginCount : 8,
  signedIn : true,

  getUserDetails : function(){
    console.log(`Got user details of ${this.username} from DataBase`)
    console.log(this)
  }
}

console.log(user.username)
user.getUserDetails()

function User(username, isLoggedIn, loginCount) {
  this.username = username
  this.isLoggedIn = isLoggedIn
  this.loginCount = loginCount

  return this
}

const userone = User("Pragyan", true, 12)
const usertwo = User("Yash", true, 21)
console.log(userone) // all the values will get overridden thats why we use new keyword to always declear a new instance

const user1 = new User("Pragyan", true, 12)
const user2 = new User("Yash", true, 21)
console.log(user1)
console.log(user2)
// when a new keyword is used a new object is create. now a constructor function is called. Thirdly all argument inject in this keyword.

console.log(user1 instanceof User) //true
console.log(user1.constructor)
console.log(user2.constructor)