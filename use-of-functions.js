// How functions are useful

// let a = 4;
// let b = 3;
// let total = a + b;
// console.log(total);

// let d = 4;
// let e = 3;
// let sum = d + e;
// console.log(sum);

function sum(num1, num2 = 3) {
  let a = num1;
  let b = num2;
  let total = a + b;
  console.log(total);
}

sum(4, 5);
sum(6, 8);
sum(45);
sum(10, -5);
sum("First Part =", "Second Part");
