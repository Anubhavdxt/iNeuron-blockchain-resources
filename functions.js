/*
* A block of code which is reusable
    1. Function Definition/Declaration
    2. Piece/Block of code.
    3. Calling the function
    4. Reusable
*/

var num = 10;

console.log("Auto Reloading");
function functionName() {
  console.log("Hello World");
}
console.log("Outside the function");
functionName();

/**OUTPUT
 * Auto Reloading
 * outside the function
 * Hello World
 */

console.log("Before Function");
functionName();
function functionName() {
  console.log("Inside function");
}
console.log("Outside the function");
console.log("Function has been called");

/**OUTPUT
 * Before Function
 * Inside function
 * Outside the function
 * Function has been called
 */

function foo() {
  //   console.log("Name = John");
  //   console.log("Age = 24");

  //   for (let i = 0; i <= 10; i++) {
  //     console.log(i);
  //   }

  var name = "John";
  console.log(name);
}
foo();
