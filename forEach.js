// function myFunction() {
//   console.log("My function");
// }
let arr = [1, 2, 3, 4, 5, 6, 7, "any string"];

function myFunction(element, index) {
  console.log(element, index);
}

arr.forEach(myFunction);

// Both of the codes below will produce same output
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((element) => console.log(element));

// forEach can't be used with strings and objects
