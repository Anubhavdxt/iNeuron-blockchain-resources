// var a = 1;
// var c = a / 0;

// function fun() {
//   console.log("Function Called");
// }

// try {
//   fun();
// } catch (err) {
//   console.log(err, err.name, err.message);
// } finally {
//   console.log("Finally Ran");
// }

// console.log("Number");
// var a = 1;

// if (a === 1) throw "It should be 1";
// console.log("Number123");

var b = 24;
function fun() {
  try {
    var element = document.querySelector("input");
    var txt = element.value;
    var result = txt * b;
    console.log(result);
  } catch (err) {
    fun();
  }
}
