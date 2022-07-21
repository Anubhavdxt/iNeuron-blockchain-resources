var num1 = Number(document.getElementById("one").innerText);
console.log(num1);
var num2 = Number(document.getElementById("one").innerText);
console.log(num2);
var opr = document.getElementById("operation").innerText;
console.log(opr);

const res = (a, b, opr) => {
  if (opr === "Addition") return a + b;
  if (opr === "Substraction") return a - b;
  if (opr === "Multiplication") return a * b;
  return a / b;
};

var result = res(num1, num2, opr);
document.getElementById(
  "result"
).innerHTML = `<strong>Result for  ${opr} of  ${num1} & ${num2} is ${result}</strong>`;
