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

const promiseFive = new Promise( (resolve, reject) => {
  setTimeout(()=>{
    // let error = Math.floor(Math.random()*2) ? true : false;
    let error = false
    if(error){
      resolve({usernmae: "Pragyan", emial: "misra@123"})
    } else {
      reject('ERROR: Something went wrong') // reject means error code
    }
  }, 1000)
})

async function consumePromiseFive(){ // it does not handles error directly, it will stop if response doesnt come. So we have to use try-catch block
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json();
//   console.log(data)
//   }
//   catch(error){
//     console.log(error)
//   }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then( (response) => {
  return response.json()
})
.then( ( [data] ) => {
  console.log(data);
})
.catch( 
  (error) => {
    console.log(error)
  }
)