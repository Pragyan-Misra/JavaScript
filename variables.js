const accountId = 144553 // cannot be changed
let accountEmail = "example@example.com"
var accountPassword = "password123"
accountCity = "Lucknow"

console.log(accountId);
accountEmail = "pm.pm@example.com"

accountPassword = "newpassword456"
/*

prefer not to use var
because of issue with scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

//  alert() is used in browser and not in node js, it has a seperate syntax

// null is a standalone value
// undefined means no value is assigned

// type of null is obejct
// tyope of undefined is undefined

// type conversion
let score = 33
 
console.log(typeof(score));
score = String(score)
console.log(typeof(score));
value = "33Abc"
let valueinNumber = Number(value); // NaN -> Not a number, beacause of alphabets in string
console.log(valueinNumber);
// number value of null is 0
// number value of undefined is NaN
// number value of true is 1 and false is 0

// 1 => true; 0 => false
// "" => false; "abc" => true

// *****************Operations*****************

console.log("1"+2+3);
console.log(1+2+"3");

let gamecoutner=100;
gamecoutner++;
console.log(gamecoutner);

let num1, num2,num3;
num1 = num2 = num3 = 25;
console.log(num1, num2, num3);

console.log("2" > 1);
console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);
console.log(undefined == 0);
console.log(undefined > 0);

// == compares only value
// === compares value and data type both
// == checks for equality and >,>=,<,<= checks for comparison