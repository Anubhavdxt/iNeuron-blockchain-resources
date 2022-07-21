// Scopes in Function

// function foo() {
//   var x = 1;
//   let y = 2;
//   const z = 3;
//   console.log(x, y, z);
// }
// foo();

// Below line will produce a reference error
// console.log(x);

// var x = 24;
// function foo() {
//   var x = 1;
//   console.log(x);
// }
// foo();

// Below line will print 24
// console.log(x);

// var x = 24;
// function foo() {
//   x = 1;
//   console.log(x);
// }
// foo();

// Below line will print 1
// console.log(x);

// const x = 24;
// function foo() {
//   x = 1;
//   console.log(x);
// }
// foo();

// Below line will give a TypeError: Assignment to a constant variable
// console.log(x);

function foo() {
  let x = 1;
  console.log(x);

  //   This was added to JS in 2020
  globalThis.y = 1;
}
foo();

// Below line will print 1
console.log(y);
