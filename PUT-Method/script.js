var maximum = 9;
var minimum = 1;

var random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(random);

var element = document.querySelector("input");
var result = document.querySelector("span");
var chance = 0;

function check() {
  if (chance === 3) {
    result.innerText = "Your Chance is UP";
    return;
  }
  chance = chance + 1;
  var value = element.value;
  console.log(value);
  value = Number(value);
  if (random === value) {
    result.innerText = "Guessed it Right";
  } else {
    result.innerText = "You have selected a wrong number";
    if (value > random) {
      result.innerText = "A little lower";
    } else {
      result.innerText = "A little above";
    }
  }
}
