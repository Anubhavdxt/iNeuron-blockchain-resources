// ARRAYS
var arr = [1, 4, 5, 78, 5, 20, 154, 0, 100, 10000];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 154) arr[i] = 78;
  console.log(arr[i]);
}

// STRINGS
let str = "Hello World";
console.log(str);

for (let i = 0; i < str.length; i++) {
  // It will not show any error but it won't work
  // We can't do this in string
  if (str[i] === "H") str[i] = "h";
  console.log(str[i]);
}

// OBJECTS
let obj = {
  name: "Zano",
  course: "MCA",
};
console.log(obj);
console.log(Object.keys(obj));
var keys = Object.keys(obj);
let temp;
for (let i = 0; i < keys.length; i++) {
  //   console.log(keys[i]);
  temp = keys[i];
  console.log(obj[temp]);
}
