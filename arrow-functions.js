function regularFunction() {
  console.log("regularFunction");
  console.log(this);
}
regularFunction();

const arrowFunction = () => {
  console.log("arrowFunction");

  //   We can't use this keyword in arrow functions as regular functions
  //   console.log(this);
};
arrowFunction();

// It's a good practice to calla function after declaration
const sum = (a, b) => {
  console.log(a + b);
};
sum(4, 5);
