let condition = true;
if (condition) {
    // Execute this block if condition is true
} else {
    // Execute this block if condition is false
}

// Switch statement example
let value = 2;
switch(value){
  case 1: 
    console.log("Value is 1");
    break;
  case 2: 
    console.log("Value is 2");
    break;
  default:
    console.log("Value is not 1 or 2");
} 
// if any value is matched, whole code after that case will be executed until a break is encountered, if breal is not used, all the code after that case will be executed except default case.

// falsy values
// false, 0 , -0, "", null, undefined, NaN, BigInt 0n

// truthy values
// Any value that is not falsy is truthy
// Examples: true, {}, [], 42, "0", " ", "false", function(){}, new Date(), -42, 3.14, -3.14, Infinity, -Infinity, BigInt other than 0n

// checking array emptiness
const arr = [];
if( arr.length === 0 ){
  console.log("Array is empty");
}

// checking object emptiness
const obj = {};
if( Object.keys(obj).length === 0 ){
  console.log("Object is empty");
}

// Nullish coalescing operator example (??): null undefined
let val1;
val1 =5 ?? 10;
console.log(val1); // Output: 5
val1 = null ?? 10;
console.log(val1); // Output: 10
val1 = undefined ?? 10;
console.log(val1); // Output: 10
val1 = null ?? undefined;
console.log(val1);