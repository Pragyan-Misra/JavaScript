class User{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
  }
  addCourse(){
    console.log(`A new course was added by teacher by ${this.username}`)
  }
}

const one = new Teacher('Pragyan', '1323@dghg','123345')

one.addCourse()
one.logMe();

const two = new User("misra")
two.logMe()

console.log(one instanceof Teacher)