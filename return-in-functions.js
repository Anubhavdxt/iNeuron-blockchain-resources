// Return keyword in functions => returns data to the caller

function sum(a, b) {
  let total = a + b;
  return total;
  //   After retun statement nothing will wxecute
  console.log(total);
}
console.log(sum(4, 5));

let funExp = function (a, b) {
  // We can also directly return an expression
  return a + b;
};
console.log(funExp(2, 3));
