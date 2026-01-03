// value of Math.PI cannot be overwritten, it is hardcoded. It is not enumerable, not configurable and not writable
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)

//  we can also define same type properties in our code
const user = {
  name : 'ginger',
  price :  123,
  isAvailable : true,
  order : function(){
    console.log("order sucessful")
  }
}
console.log(Object.getOwnPropertyDescriptor(user, "price"));

Object.defineProperty(user, 'price', {
  writable: false,
  enumerable: false,
  configurable: false
})
user.price = 200000
console.log(user.price)

console.log(Object.getOwnPropertyDescriptor(user, 'price'))

for(let [key, value] of Object.entries(user)){
  if(typeof(value) !== 'function')
    console.log(`${key} : ${value}`)
} // since enumrable is false so we cannot iterate 'price'

console.log(Object.entries(user))