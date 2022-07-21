function change() {
  var element = document.querySelector("select").value;
  console.log(element);
}

function over() {
  console.log("Over is called");
  var element = document.querySelector("h1");
  element.style.backgroundColor = "red";
}

function out() {
  console.log("Out is called");
  var element = document.querySelector("h1");
  element.style.backgroundColor = "yellow";
}

// function firstdiv() {
//   var element = document.querySelector("div");
//   element.style.backgroundColor = "red";
// }

// function firstdivout() {
//   var element = document.querySelector("div");
//   element.style.backgroundColor = "yellow";
// }

// function seconddiv() {
//   var element = document.querySelectorAll("div")[1];
//   element.style.backgroundColor = "yellow";
// }

// function seconddivout() {
//   var element = document.querySelectorAll("div")[1];
//   element.style.backgroundColor = "red";
// }

function swap() {
  var element = document.querySelector("div");
  var bg = element.style.backgroundColor;
  console.log(bg);

  var element2 = document.querySelectorAll("div")[1];
  var bg2 = element2.style.backgroundColor;
  console.log(bg2);

  element.style.backgroundColor = bg2;
  element2.style.backgroundColor = bg;
}
