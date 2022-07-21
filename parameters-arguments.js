// Parameters & Arguments

// Paarameter
function foo(a, b = 4, c) {
  // a = 4 => if nothing provided take a as 4
  console.log(a, b, c);
  console.log("Inside a function");
}

// Argument
foo(123, 71, [1, 4, 5, 6, 8]);

var a = 24;
var b = 2;
var c = "<== Both are numbers";
foo(a, b, c);
