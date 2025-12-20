for (let index = 0; index < 5; index++) {
    //console.log(`Iteration number: ${index}`);
}

for (let i = 10; i > 0; i -= 2) {
  for (let j = 0; j < i; j++) {
      // console.log(`i: ${i}, j: ${j}`);
  }
}

const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
for (let k = 0; k < items.length; k++) {
    // console.log(`Item at index ${k}: ${items[k]}`);
}

let index =10;
while (index > 0) {
    // console.log(`Index: ${index}`);
    index-=2;
}

index=0
while (index < items.length) {
    // console.log(`Item at index ${index}: ${items[index]}`);
    index++;
}

index = 6;
do {
    // console.log(`Do-While Index: ${index}`);
    index++;
} while (index < 5);

// High oder Array Loop
 for( const i of items) {
    // console.log(`Item: ${i}`);
 }

 const greeting = "Hello guys";
 for ( const greet of greeting) {
    // console.log(`Character: ${greet}`);
 }

 