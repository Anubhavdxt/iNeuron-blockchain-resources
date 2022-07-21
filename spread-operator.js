// ...spread
// a = [10, 2, 3, 4, 5];
// b = [1, 2, 3, 4, 5];

var obj = [
  { name: "Zano", age: 14 },
  { name: "Zano", age: 1478 },
];
var a = [1, 2, 3, 4, 5];
var c = [85, 67, 954];
var b = [...a, ...c, ...obj];
a[0] = 10;

console.log(a);
console.log(b);
