// localStorage.setItem("name", "Zano-Ashraf");
// localStorage.setItem("college", "IU");
// localStorage.setItem("age", 24);

var name = localStorage.getItem("name");
console.log(name, typeof name);

var college = localStorage.getItem("college");
console.log(college, typeof college);

localStorage.clear();
localStorage.removeItem("college");

var obj = {
  name: "Zano",
  age: 24,
  college: "IUL",
};
// console.log(obj);
// console.log(JSON.stringify(obj));

localStorage.setItem("details", obj);
var details = localStorage.getItem("details");
console.log(JSON.parse(details).name);

// Handler function to save the value of textarea
