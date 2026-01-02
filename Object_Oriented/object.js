const single = new Object(); // singleton object
const object = {}; // non singleton object

// Singleton - object made by using constructor

// if object is created using object literal, it is not singleton as multiple instances can be created using the same literal

// Object literal

const sym = Symbol("key1"); // symbol declaration

const obj  = {
  name : "Pragyan", // behind the scenes it is "name" : "Pragyan" ie key is treated as string
  age : 20,
  [sym] : "myvalue", // symbol as key. it cannot be used as sym as it is a symbol so square brackets are used
  location : "Lucknow",
  gmail : "real@gmail.com",
  isonline : true,
  lastonline : ["monday", "wednesday"]
};

console.log(obj.age); // dot notation
console.log(obj["location"]); // square notation, here string notation is used as key is treated as string
console.log(obj[sym]); // accessing symbol key using square brackets

obj.gmail = "newreal@gmail.com";
Object.freeze(obj); // freezes the object, ie properties cannot be changed or added or deleted
obj.age = 31; // will not change as object is frozen
console.log(obj);

const obj1 = {
  greeting : function() {
    console.log("Hello Buddy!");
  } // function as value
};

console.log(obj1.greeting()); // calling function inside object. it returns undefined as function does not return anything and just prints message.

obj1.greeting(); // correct way to call function inside object. it will just print the message.

console.log(obj1.greeting); // return the reference of the function.

obj1.greeting2 = function() {
  console.log(`Hello friends, My name is ${obj.name}`)
};
obj1.greeting2();

// usually access the properties using dot notation. square brackets are used when key is stored in a variable (like "your name" : "Pragyan") or key is symbol.


// Singleton object (object created using constructor)

const obj2 = new Object(); // object created using constructor

obj2.id = "123qwe";
obj2.name = "newUser";
obj2.isloggedin = false;

console.log(obj2);

// Nested Object
const user = {
  email : "user@gmail.com",
  fullname : {
    userfullname1 : {
      firstname : "first",
      lastname : "last"
    },
    idname : {
      idfirstname : "idfirst",
      idlastname : "idlast"
    }
  },
  age : 25
}

console.log(user.fullname.userfullname1.firstname); // accessing nested object

console.log(user.fullname.userfullname?.firstname); // optional chaining, it checks if userfullname exists or not. if it exists then access firstname else return undefined

const obj3 = {1: "a", 2: "b"};
const obj4 = {3: "a", 4: "b"};

const mergeobj = {...obj3, ...obj4}; // merging two objects using spread operator
console.log(mergeobj);

const mergeobj1 = Object.assign({}, obj3, obj4); // merging two objects using Object.assign
console.log(mergeobj1);

// Object.assign modifies the target object (first parameter) and adds properties of source objects (next parameters) to it. Here an empty object is passed as target so that original objects are not modified.
// Spread operator creates a new object and does not modify the original objects.

const user1 = [
  {
    id: 1,
    email: "user1@user.com"
  },
  {
    id: 2,
    email: "user2@user.com"
  },
  {
    id: 3,
    email: "user3@user.com"
  },
  {
    id: 4,
    email: "user4@user.com"
  },
  {
    id: 5,
    email: "user5@user.com"
  }
]

console.log(user1[1].email);

console.log(Object.keys(user)); // returns an array of keys of the object
console.log(Object.values(user)); // returns an array of values of the object
console.log(Object.entries(user)); // returns an array of key-value pairs of the object as arrays

console.log(user.hasOwnProperty("age")); // checks if the object has the specified property

// Destructuring

const course = {
  coursename : "Javascript",
  price : 1999,
  coruseInstructor : "Pragyan"
}

const {coruseInstructor : ins} = course; // destructuring object
console.log(ins);
