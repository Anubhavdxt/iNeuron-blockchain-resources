// setimeout
// To execute  a function/code after a certain period of time
// 1sec = 1000

// const timeOutt = () => {
//   console.log("Set Timeout function being Called");
//   var element = document.querySelector("p");
//   element.innerText = "Syed";
// };

// function nameSee() {
//   setTimeout(() => timeOutt, 2000);
// }

// setInterval
// To execute same code again & again after a specific time

// clearInterval
// To stop your interval

var t = 0;
var interval;
function running() {
  t = t + 1;
  var element = document.querySelector("p");
  element.innerText = t;
}

const timer = () => {
  interval = setInterval(() => running(), 1000);
};

function stopTimer() {
  clearInterval(interval);
}
