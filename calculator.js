function calculator(a, b, type) {
  //   if ((a || b) === Nan) return "Doesn't looks like a number";
  //   if (typeof a != "number") return "Doesn't looks like a number";
  //   if (typeof b != "number") return "Doesn't looks like a number";

  //   VALIDATIONS
  if (isNaN(a)) return "Doesn't looks like a number";
  if (isNaN(b)) return "Doesn't looks like a number";

  if (!a) return "Doesn't looks like a number";
  if (!b) return "Doesn't looks like a number";

  a = parseInt(a);
  b = parseInt(b);

  if (type === "Addition") return a + b;
  if (type === "Subtraction") return a - b;
  if (type === "Multiplication") return a * b;
  if (type === "Division") return a / b;
  return "The spelling is wrong";
}

let a = 1;
let b = 1;
console.log(calculator(a, b, "Addition"));
console.log(calculator(a, b, "Subtraction"));
console.log(calculator(a, b, "Multiplication"));
console.log(calculator(a, b, "Division"));
