// const URL = "jsonplaceholder.typicode.com/posts";
// const data = JSON.stringify({ title: "Book", body: "bar", userId: 1 });
// const header = {
//   "Content-type": "application/json",
// };
// const posting = async () => {
//   const posted = await fetch(URL, {
//     method: "POST",
//     body: data,
//     headers: header,
//   });
//   const res = await posted.json();
//   console.log(res);
// };
// posting();

var form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

const register = async () => {
  var name = document.querySelector("#name").value;
  var age = document.querySelector("#age").value;
  var college = document.querySelector("#college").value;
  var city = document.querySelector("#city").value;

  const URL = "jsonplaceholder.typicode.com/posts";
  const data = JSON.stringify({
    name: name,
    age: age,
    college: college,
    city: city,
  });

  const header = {
    "Content-type": "application/json",
  };

  const posted = await fetch(URL, {
    method: "POST",
    body: data,
    headers: header,
  });
  const status = posted.status;
  const res = await posted.json();
  console.log(res);

  var element = document.querySelector("h1");
  if (status === 201) element.innerText = "Registered";
  else element.innerText = "You were not registered";
};
