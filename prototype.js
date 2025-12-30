function multiplyBy5(n) {
  return n*5;
}

multiplyBy5.power = 4

console.log(multiplyBy5(2))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

// Everything in JS is a Object

function createUser(username, score){
  this.username =username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.printMe = function(){
  console.log(`price is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

let arr = ['thor', 'spiderman', 'superman']
let heroPower = {
  thor : "Thunder",
  spiderman : "Web",
  superman : "Super Strenght",

  getSpiderPower : function(){
    console.log(`Spider power is ${this.spiderman}`)
  }
}

Object.prototype.pragyan = function(){
  console.log(`Pragyan is present in all objects`)
}
// all objects got this function
heroPower.pragyan()
arr.pragyan()

Array.prototype.heypragyan = function(){
  console.log(`Pragyan say hello`);
}

arr.heypragyan();

const user = {
  username : "Pragyan"
}

const Teacher = {
  makevideo : true
}
const TeacherSuppot = {
  isAvailable : true
}

const TASupport = {
  makeAssignment : 'JS Assignment',
  fullTime : true

}

Object.setPrototypeOf(TeacherSuppot, Teacher) // this always one to access other one's property