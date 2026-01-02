// For Loop
for (let index = 0; index < 5; index++) {
    //console.log(`Iteration number: ${index}`);
}

for (let i = 10; i > 0; i -= 2) {
  for (let j = 0; j < i; j++) {
      // console.log(`i: ${i}, j: ${j}`);
  }
}

const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
for (let k = 0; k < items.length; k++) {
    // console.log(`Item at index ${k}: ${items[k]}`);
}

// While Loop
let index =10;
while (index > 0) {
    // console.log(`Index: ${index}`);
    index-=2;
}

index=0
while (index < items.length) {
    // console.log(`Item at index ${index}: ${items[index]}`);
    index++;
}

// Do-While Loop
index = 6;
do {
    // console.log(`Do-While Index: ${index}`);
    index++;
} while (index < 5);


// High oder Array Loop

// for-of loop: it provides the complete value or key-value pair arrays,string, map but not objects.
 for( const i of items) {
    // console.log(`Item: ${i}`);
 }

 const greeting = "Hello guys";
 for ( const greet of greeting) {
  if (greet === ' ') 
    continue;
  // console.log(`Character: ${greet}`);
 }

// Maps: no duplicate values
const map = new Map();
// values are stored as key-value pairs and keys are unique
// set method to add key-value pairs
map.set('name', 'Alice'); // key, value
map.set('age', 30);
map.set('city', 'New York');

// console.log(map);
map.set('age', 31); // updating value for key 'age'
// console.log(map);

// get method to retrieve value by key
const name = map.get('name');
const age = map.get('age');
// console.log(`Name: ${name}, Age: ${age}`);

// has method to check if a key exists
const hasCity = map.has('city');
// console.log(`Map has key 'city': ${hasCity}`);

for( const [key, value] of map) {
  // console.log(key, value);
}

const myobj = {
  a: 1,
  b: 2,
  c: 3  
}
for( const [key, value] of Object.entries(myobj)) {
  // console.log(key, value);
}

// for-in loop: it provides the key for each value, in object,arrays.
const lang = {
  js : 'JavaScript',
  cpp : 'C++',
  rb : 'Ruby',
  py : 'Python'
};
for( const key in lang) { 
  // console.log(key, lang[key]);
}

// for-in loop does not work for maps so we use for-of loop.
const arr = ['js', 'py', 'cpp', 'rb', 'java'];
for (const key in arr){
  // console.log(`${key} this is the key value for ${arr[key]}`);
}

// forEach loop
let value="";
arr.forEach( function (i) {
  // console.log(i);
  // value+=`${i} `
}  )
// console.log(value)

arr.forEach( (i) => {
  // console.log(i);
})

function printme(item){
  // console.log(item);
}
arr.forEach(printme)

// in forEach loop the function gets only the value but also the complete arrayList with the key of current value. The order of incoming values are (value, key, arrayList)
arr.forEach((item, index, arrlist) => {
  // console.log(item, index, arrlist);
})

const mycoding = [
  {
    langName : "Javascript",
    langFileName : "js"
  },
  {
    langName : "Java",
    langFileName : "java"
  },
  {
    langName : "C",
    langFileName : "exe"
  }
]
mycoding.forEach((item) => {
  // console.log(item.langFileName)
})


const values = arr.forEach( (item) => {
  // console.log(item);
}) 
// console.log(values) // forEach never returns any values


// filter: it filter-outs the value base on the given condition.
const mynum = [1,2,3,4,5,6,7,8,9,10];
const newnums = mynum.filter( (value) => value > 4);
// console.log(newnums)
const newnums1 = mynum.filter( (value) => {
 return value > 4
}); // if scope is started {} then we have to use return statement.
// console.log(newnums1)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbook = books.filter( (bk) => bk.genre == "History");
// console.log(userbook);
 const bookyear = books.filter( (bk) => {
  return bk.publish >= 1980 && bk.genre == 'History'
});
//  console.log(bookyear);


// map: performs work in Lall elements of the array
const mynms = [1,2,3,4,5,6,7,8,9,10];
const newnum = mynms.map( (item) => {
  item+=10;
  return item;
})
// console.log(newnum)

// Chaining

const mynums = [1,2,3,4,5,6,7,8,9,10];
const newnum1 = mynums
.map( (num) => num+10)
.map( (num) => num*10 )
.filter( (num) => num<=150)

// console.log(newnum1)

//reduce(): method executes a user-supplied "reducer".
// it perform a operation using th eaccumulator and currentval, in starting the value entered with comma is taken as accumulator and then afterward the new value after performing operation is stored in accumulator and in the end final value is returned.
const arr1 =[1,2,3];
//using call back function
// const myTotal = arr1.reduce(function (accumulator, currentval) {
//   console.log(`accumulator: ${accumulator} and current value: ${currentval}`)
//   return accumulator+ currentval

// },0 
// );
// console.log(myTotal)

// using arrow function
const myTotal = arr1.reduce( (acc,curr) => {
  return acc+curr
},0);
// console.log(myTotal);

const cart = [
  {
    course: "web dev",
    price : 2999
  },
  {
    course: "app dev",
    price : 12999
  },
  {
    course: "devOps",
    price : 999
  },
  {
    course: "Software dev",
    price : '15000'
  },
  {
    course: "game dev",
    price : 1999
  },
]

const totalCart = cart.reduce(
  (acc,cartItem) => {
    if(Number.isFinite(cartItem.price))
     return acc+ cartItem.price
    else return acc
  },0
)
console.log(totalCart)