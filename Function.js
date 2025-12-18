function saymyname(name) {
  console.log(`My name is ${name}`);
}

saymyname; //refers to the function but does not invoke it
saymyname("Pragyan"); //invokes the function
const result = saymyname;
result("Pragyan"); //invokes the function through the variable

function add(a, b){ // a & b are parameters
  return a+b;
}

const sum = add( 2 , 3 ); // 2 & 3 are arguments
console.log(sum);

function loginusername(username) {
  if(!username){
    return "Please provide a username";
  }
  return `${username} just logged in`;
}
console.log(loginusername("Pragyan"));
console.log(loginusername());

// Rest Parameters: storing multiple arguments into an array
function calculateCartPrice(...price){
  let total = 0;
  price.forEach(element => {
    total += element;
  });
  return total;
}
console.log(calculateCartPrice(200, 300, 400));
console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
  firstName: "Pragyan",
  lastName: "Misra"
}
function getFullName(anyobject) {
  console.log(`${anyobject.firstName} ${anyobject.lastName}`);
}
getFullName(user);
getFullName({firstName: "John", lastName: "Doe"});


// Arrow Functions

const user1 = {
  username : "Pragyan",
  price : 1000,
  welcomeMessage : function() {
    console.log(`Welcome ${this.username} to website`);
  }
};

user1.welcomeMessage();
user1.username = "Sam";
user1.welcomeMessage();

console.log(this); // refers to global object 
// In browser global object is 'window' object
// In nodejs global object is an empty object {}

// this is used in object methods to refer to the calling object itself but not in functions

const chai1 = function() {
  let username = "Pragyan";
  console.log(this);
}
chai1();

const chai = () => {
  let username = "Pragyan";
  console.log(this);
}
chai();
// in arrow function 'this' gives the empty object in nodejs and 'window' object in browser. whereas in normal function 'this' gives the global object in both nodejs and browser.

const addTwo = (num1, num2) => {
  return num1 + num2;
}
console.log(addTwo(20, 30)); 

const add2 = (num1, num2) => num1 + num2; // implicit return
console.log(add2(20, 30));

const add3 = (num1, num2) => (num1 + num2); // implicit return with parentheses.
//we have to use return keyword if we use curly braces {} and with parantheses () we get implicit return.
console.log(add3(20, 30));

const obj = (name) => ({name : name}); // for returning object from arrow function we have to wrap it into {} and then wrap it into ().
console.log(obj("Pragyan"));

// Immediately Invoked Function Expression (IIFE)
// to avoid the pollution of global namespace we use IIFE

(function name(){ // named IIFE
  console.log("IIFE executed");
})();

( () => {
  console.log("IIFE arrow function executed");
})();

// IIFE with parameters
( (name) => {
  console.log(`IIFE arrow function executed by ${name}`);
} )("Pragyan");