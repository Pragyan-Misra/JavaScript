// Math is a built-in object that has properties and methods for mathematical constants and functions. It is not a function object.

console.log(Math.PI.toPrecision(3)); // 3.14

console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5

console.log(Math.random()); // random number between 0 and 1 
const min =10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20

// **********************Date**********************

let myDate = new Date();
console.log(myDate);

console.log(typeof myDate); // object

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());

let date = new Date(2024, 0 ,15,5,3,7);
console.log(date.toLocaleString());

let date1 = new Date("02-01-2025"); // MM-DD-YYYY
console.log(date1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //milliseconds since Jan 1, 1970
console.log(date.getTime());

console.log(myTimeStamp/1000); // seconds since Jan 1, 1970


console.log(date.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long'
}));