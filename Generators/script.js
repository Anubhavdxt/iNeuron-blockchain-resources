// function* numberGen() {
//   console.log("Inside the Generator");
//   yield 1;
//   console.log("After yield 1");
//   yield 2;
//   console.log("After yield 2");
//   yield 3;
// }

// let num = numberGen();
// let num2 = numberGen();

// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().done);
// console.log(num.next());
// console.log(num.next());

// console.log(num2.next());

// Function to generate unique IDs everytime it is called

function* idGen() {
  let i = 0;
  while (true) {
    i++;
    yield i;
  }
}

let id = idGen();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().done);
console.log(id.next());
console.log(id.next());

function* numberGen(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

let num = numberGen([1, 2, 3, 4, 5]);

while (true) {
  console.log(num.next().value);
  if (num.next().done === true) break;
}
