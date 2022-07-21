// Nested Functions

function outer() {
  console.log("Outer Function");

  function inner() {
    console.log("Inner Function");
  }
  inner();
}
outer();

// We can't call inner() outside the outer()
// inner()

function parent() {
  console.log("Parent Function");

  function child() {
    console.log("Child Function");
  }
  child();
}
parent();
