const name= "Pragyan";
const repocount = 50;

//console.log(name + repocount); //outdated way

console.log(`Hello ${name}, your repo count is ${repocount}`); // modern and prefered way.

const gameName = new String("Minecraft"); 
// stores in key-value pair,
// type is object
console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes("Mine"));
console.log(gameName.indexOf("c"));

//***************Numbers*****************

const num = 455;
console.log(num);

const balance = new Number(455);
console.log(balance);
console.log(typeof balance); // type is object

console.log(balance.toString());
console.log(balance.toFixed(2));

const othernumber = 123.4567;
console.log(othernumber.toPrecision(4));

const number = 1000000000;
console.log(number.toLocaleString("en-IN")); // 1,00,00,000
console.log(number.toLocaleString("de-DE")); // 10.000.000
console.log(number.toLocaleString()); // 10000000