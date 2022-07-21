function popup() {
  var element = document.querySelector("input");
  var value = element.value;

  alert(`You have entered ${value} \n Everything is okay`);
  let res = confirm(`Should I save it?`);
  console.log(res);
  if (res) console.log("Data Saved");
  else console.log("Data not saved");

  if (!value) {
    let name = prompt("Enter your name?");
    console.log(name);
  }
  console.log(value);
}
