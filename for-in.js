// Objects
let obj = {
  name: "Zano",
  course: "MCA",
  country: "India",
};
console.log(obj);

for (let x in obj) {
  console.log(x, " : ", obj[x]);
}

// Arrays
let arr = [1, 2, 4, 5, 87, 89, 4, 4, 1];
console.log(arr);

for (let x in arr) {
  console.log(arr[x]);
}

// Strings
let str = "Hello World";
console.log(str);

for (let x in str) {
  console.log(str[x]);
}
