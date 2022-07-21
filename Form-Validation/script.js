var form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  var name = document.querySelector("#name");
  var country = document.querySelector("#country");
  var number = document.querySelector("#number");
  var pass = document.querySelector("#password");
  var cpass = document.querySelector("#cpassword");
  var error = document.querySelector("span");
  var messages = [];

  if (name === null || name.length < 6 || name.length > 15) {
    messages.push("Error in Name");
  }
  if (country != "India") {
    messages.push("Error in Country");
  }
  if (number.length < 10) {
    messages.push("Error in Number");
  }
  if (pass != cpass || pass.length === 6 || pass === "") {
    messages.push("Error in Password");
  }

  if (messages.length === 0) e.preventDefault();
  error.innerText = messages.join(", ");
  error.style.backgroundColor = "red";
});
