const URL = "jsonplaceholder.typicode.com/posts/2";
const URL2 = "jsonplaceholder.typicode.com/posts";
const header = {
  "Content-type": "application/json",
};
const data = JSON.stringify({ name: "Zano", age: 24 });

var id = document.querySelector("#id");
var title = document.querySelector("#title");
var body = document.querySelector("#body");
var form = document.querySelector("form");

var details;

fetch(URL2)
  .then((res) => res.json())
  .then((data) => (details = data[0]))
  .then(() => setValue());

function setValue() {
  id.setAttribute("value", details.id);
  title.setAttribute("value", details.title);
  body.setAttribute("value", details.body);
}

const update = async () => {
  const data = JSON.stringify({
    title: title.value,
    body: body.value,
    id: id.value,
  });
  const updated = await fetch(URL, {
    method: "PUT",
    body: data,
    headers: header,
  });
  const res = await updated.json();
  var element = document.querySelector("h1");
  element.innerText = "Data Updated";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  update();
});
