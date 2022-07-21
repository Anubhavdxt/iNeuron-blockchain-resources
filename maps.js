let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.map((element) => element * 2);
console.log(newArr);

// This will give undefined because forEach doesn't returns the modified array
// let newArr = arr.forEach((element) => element * 2);
