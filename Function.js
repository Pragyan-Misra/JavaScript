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

