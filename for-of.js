// Objects
let obj = {
  name: "Zano",
  course: "MCA",
  country: "India",
};
console.log(obj);

// * Objects are not iterable so we can't use for-of loop
// for (let x of obj) {
//   console.log(x, " : ", obj[x]);
// }

// Arrays
let arr = [1, 2, 4, 5, 87, 89, 4, 4, 1];
console.log(arr);

for (let x of arr) {
  console.log(x);
}

// Strings
let str = "Hello World";
console.log(str);

for (let x of str) {
  console.log(x);
}
