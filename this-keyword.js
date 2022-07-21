console.log(this);

// Inside the function
// function abc() {
//   console.log(this);
// }
// abc();

let obj = {
  first: "Syed",
  last: "Ashraf",
  language: "English",
  fullName: () => {
    // This will print the window object
    console.log(this);
  },
  //   fullName: function () {
  //     return obj.first + " " + obj.last;
  //   },
};
let name = obj.fullName();
console.log(name);
