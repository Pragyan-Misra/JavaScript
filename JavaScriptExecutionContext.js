// JavaScript is single-threaded

// Execution context stack
// 1-Global Execution Context
// 2-Function Execution Context
// 3-Eval Execution Context

// Memory creation phase
// execution phase

let val1 = 10;
let val2 = 20; 
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(50, 70); 
// now how will this code be executed in JS engine?
// 1- Global Execution, it is allocated firstly in 'this'.
// 2- Memory phase/ creation phase: 
// val1 = undefined
// val2 = undefined
// addNum = function addNum(num1, num2) {....} function definition is stored
// result1 = undefined
// result2 = undefined
// 3- Execution phase:
// val1 = 10
// val2 = 20
// result1 = addNum(10, 20) => function is called, a new variable environment + new execution thread is created for this function call.
// now again for addNum(10, 20) we have to create Memory phase and executionn phase.
// Memory phase:
// val1 - undefined
// val2 - undefined
// total - undefined
// Execution Phase:
// num1 - 10
// num2 - 20
// total - 30 and this value is returned to global execution context
// so result1 = 30 and global executional context of result1 is deleted from the stack
// now again addNum(50, 70) is called, so a new variable environment + new execution thread is created for this function call.
// Memory phase:
// val1 - undefined
// val2 - undefined
// total - undefined
// Execution Phase:
// num1 - 50
// num2 - 70
// total - 120 and this value is returned to global context in result2. 

// call stack
// | |
// | |
// | |
// | |
// | | 
// |_| - global execution context