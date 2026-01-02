class User{
  constructor(username, email, password){
    this.username = username
    this.email = email
    this.password = password
  }

  encryptPassword(){
    return `${this,this.password}abc`
  }

  changeUsername(){
    let str = this.username 
    return `${str.toUpperCase()}`
  }
}

const user = new User("Pragyan", "asdv@adf", "12123")

console.log(user)
console.log(user.changeUsername());
console.log(user.encryptPassword());

// behind the scene

User.prototype.encryptPassword = function(){
  return `${this.password}bcd`
}

User.prototype.changeUsername = function(){
  let str = this.username 
  return `${str.toUpperCase()}`
}

const user1 = new User("Misra", "phwhf@df", "67123")

console.log(user1)
console.log(user1.changeUsername());
console.log(user1.encryptPassword());

