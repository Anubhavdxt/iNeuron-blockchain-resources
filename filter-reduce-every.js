let arr = [1, 2, 3, 4, 5, 6];

var filtered = arr.filter((element) => {
  return element > 3;
});

console.log(filtered);

var objArr = [
  { name: "John", age: 14 },
  { name: "Zano", age: 19 },
  { name: "Christian", age: 44 },
  { name: "Johnnny", age: 23 },
  { name: "Delta", age: 22 },
];

var filtered = arr.filter((person) => {
  return person.age > 18;
});

// Accumilated => Storing/Storage/Groud
// CurrIndex => Current value
// It returns one element

// accu => 0 => 1 => 3 => 6
// curr => 1 => 2 => 3

var arr1 = [1000, 2000, 3000];

var reduced = arr1.reduce((accu, curr) => {
  return accu + curr;
}, -4000);
console.log(reduced);

var every = arr1.every((element) => {
  element > 2000;
});
console.log(every);

var grade = [
  {
    name: "Akshay",
    grades: "A",
  },
  {
    name: "John",
    grades: "B",
  },
  {
    name: "Zano",
    grades: "A",
  },
];

var gradeA = grade.every((person) => {
  person.grades === "A";
});
console.log(gradeA);
