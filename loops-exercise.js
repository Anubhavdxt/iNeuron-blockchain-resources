//  Print all even & odd no.s b/w 0 to 15
// 0 is even
// 1 is odd
// 2 is even

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, " is even");
  } else {
    console.log(i, " is odd");
  }
}

// Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of 3 print "Fizz"
// For multiples of 5 print "Buzz"
// For numbers which are multiples of both 3 & 5 print "FizzBuzz"

for (let i = 0; i <= 100; i++) {
  console.log(i);
  if (i % 3 === 0) console.log("Fizz");
  if (i % 5 === 0) console.log("Buzz");
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
}

// Change every second letter of a word to uppercase

let str = "Hello how are you";

// for (const i of str) {
//   console.log(i);
// }

let split = str.split(" ");
console.log(split);

let temp = "";
for (const i of split) {
  //   i[1] = i[1].toUpperCase();

  temp = temp + " " + i.replace(i[1], i[1].toUpperCase());
}
console.log(temp);
