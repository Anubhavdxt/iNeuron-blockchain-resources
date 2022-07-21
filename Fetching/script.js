// jsonplaceholder.typicode.com/users

const url = "jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const fetching = async () => {
//   const res = await fetch(url);
//   const data = await res.json();
//   var name = "";
//   var address = "";
//   data.forEach((obj) => {
//     name = name + "<br/>" + obj.name;
//     address = address + "<br/>" + JSON.stringify(obj.address);
//     console.log(name);
//   });
//   var element = document.querySelector("h1");
//   element.innerHTML = name;
// };
// fetching();

const fetching = async () => {
  const res = await fetch(url);
  const data = await res.json();

  let name = "";
  let city = "";
  let phone = "";

  var nameE = document.querySelector("#name");
  var cityE = document.querySelector("#city");
  var phoneE = document.querySelector("#phone");

  data.forEach((obj) => {
    name = name + "<br/>" + obj.name;
    city = city + "<br/>" + obj.city.city;
    phone = phone + "<br/>" + obj.phone;
  });

  nameE.innerHTML = name;
  cityE.innerHTML = city;
  phoneE.innerHTML = phone;
};
fetching();
