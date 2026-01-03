// MODERN WAY

class User {
  constructor(email, password){
    this.email = email
    this.password = password
  }
  // if a getter is defined then a setter has to be defined
  get password(){
    return this._password.toUpperCase()
  }
  // a setter on a variable whose value is already setted in constructor will raise an error inorder to overcome it define a new property under setter and use the same under getter
  set password(value){
    this._password = value
  }

  get email(){
    return this._email
  }
  set email(value){
    this._email = value.toUpperCase()
  }
}

const pragyan = new User("pra@xcvfb", '12sdf34')
console.log(pragyan.password)
console.log(pragyan.email)

// FUNCTION BASED

function User1(email, password){
  this._email = email,
  this._password = password,

  Object.defineProperty(this, 'email', {
    get : () => {
      return this._email.toUpperCase()
    },
    set : function(value){
      this._email = value
    }
}),
  Object.defineProperty(this, 'password', {
    get : () => {
      return this._password.toUpperCase()
    },
    set : function(value){
      this._password = value
    }
  })
}

const one = new User1("prscns24@aff","12345ed")
console.log(one.email)

// OBJECT BASED

const User2 = {
  _email : "nvdkjfnv@cvnf",
  _password : "abc",

  get email(){
     return this._email.toUpperCase()
  },

  set email(value){
    this._email = value
  }
}
console.log(User2.email)
const bro = Object.create(User2)

