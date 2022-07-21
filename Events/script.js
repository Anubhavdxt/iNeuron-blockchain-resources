var element = document.querySelector("h1");
console.log(element);

element.addEventListener("click", () => {
  location.href = "//google.com";
  element.style.color = "red";
  console.log("Someone Clicked ID");
});

element.addEventListener("click", () => {
  console.log("Some Other task here");
});

// element.onclick = () => {
//   console.log("On Click called");
// };

// element.onclick = () => {
//   console.log("On Click called Second time");
// };

// This will override above two onclick functions
// element.onclick = () => {
//   console.log("Clicked Clicked");
// };

element.addEventListener("click", (e) => console.log(e));

const print = () => {
  console.log("Something printed");
};

const p = () => {
  console.log("Something printed");
};

function change(e) {
  console.log(e);
  if (e === "bg") element.style.backgroundColor = "red";
  if (e === "color") element.style.color = "yellow";
}

function remove(e) {
  console.log(e);
  if ((element.style.backgroundColor = "")) alert("Color Already Removed");
  if (e === "bg") element.style.backgroundColor = "";
  if (e === "color") element.style.color = "";
}
