// const promise = new Promise(function(resolve, reject) {
//   // Do an async task
//   // DB calls, cryptography, network
//   setTimeout( function() {
//     console.log('Async function');
//     resolve();
//   }, 1000)
// } );

// promise.then(function() {
//   console.log("Promise Consumed");
// })

new Promise(function(resolve, reject) {
  setTimeout( function() {
    console.log('Async function 2');
    resolve();
  }, 1000)
} ).then(function() {
  console.log('promised consumed')
})

const promiseThree = new Promise(function(resolve, reject) {
  setTimeout( function() {
    resolve({usernmae: "Pragyan", emial: "misra@123"}) // sends value
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise( function(resolve, reject){
  setTimeout(function(){
    let error = Math.floor(Math.random()*2) ? true : false;
    if(error){
      resolve({usernmae: "Pragyan", emial: "misra@123"})
    } else {
      reject('Something went wrong')
    }
  },1000)
})

promiseFour
.then(function(user){
  console.log(user)
  return user.usernmae
}).then( (username) => {
  console.log(username)
}).catch(function(error){
  console.log(error)
}).finally(() => {
  console.log("Finally completed")
});

// .finally() always executes
// .then() when promise is resolved
// .catch() when inner work is not correct, reject is sent

