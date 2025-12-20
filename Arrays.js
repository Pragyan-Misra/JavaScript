const arr = [1, 2, 3, 4, 5];
// arrays also have keys, these keys are implicitly decleared as 0,1,2,3,4.. and so on. 0 is assigned to the first element and so on just like indexing.
console.log(arr);
console.log(typeof arr);
// when ever an operation is performed on an array is makes a shallow copy of the array. means it is copy that shares same reference point in memory ie any change in the copy will reflect in the original array.
console.log(arr[0]); // accessing element at index 0
//Array Methods
arr.push(6); // adds element at the end
console.log(arr);
arr.pop(); // removes element from the end
console.log(arr);
arr.unshift(10); // adds element at the beginning
console.log(arr);
arr.shift(); // removes element from the beginning
console.log(arr);

console.log(arr.includes(8));
console.log(arr.indexOf(3)); // returns index of element if found else -1

const newArr = arr.join(); // converts array to string
console.log(newArr);
console.log(typeof newArr);
const newArr1 = arr.join("-");
console.log(newArr1); // joins elements with specified separator

// slice and splice
const slicedArr = arr.slice(1, 4); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(slicedArr);
console.log(arr); // original array remains unchanged

const splicedArr = arr.splice(0,4); // changes the contents of an array by removing existing elements, it starts at the given start index and removes the given number of elements.
console.log(splicedArr);
console.log(arr); // original array is changed

// Slice - it does not modify the original array but returns a new array. It does not include the end index element.
// Splice - it modefies the original array and returns the removed elements. It includes the start index element and removes the specified number of elements.

const marvelHeroes = ["Ironman", "Spiderman", "Hulk", "Thor"];
const dcHeroes = ["Batman", "Superman", "Flash", "Wonderwoman"];

// marvelHeroes.push(dcHeroes); // adds dcHeroes array as a single element at the end of marvelHeroes array
// console.log(marvelHeroes);

const allHeroes = marvelHeroes.concat(dcHeroes); // merges two arrays
console.log(allHeroes);

const heroes = [...marvelHeroes, ...dcHeroes, ...arr]; // merges two or more arrays using spread operator. Preferred way, as more than two arrays can be merged easily.
console.log(heroes);

// concat creates a new array and does not modify the original arrays.
// push modifies the original array.

const numbers = [5, 3, [9,11,12,13], 8, 1,[14,6,[4,1]], 2];
const flatNumbers = numbers.flat(2); // flattens the array up to the specified depth
console.log(flatNumbers);

console.log(Array.isArray("Pragyan"));
console.log(Array.from("Pragyan")); // creates an array from an iterable or array-like object

console.log(Array.from({naem: "Pragyan"})) //creates an empty array as it is not specified from where to take elements, ie whether from keys, values or entries

const s1 = "Pragyan";
const s2 = 2;
const s3 = true;
const arr2 = Array.of(s1,s2,s3); // creates a new array instance with a variable number of arguments
console.log(arr2);

