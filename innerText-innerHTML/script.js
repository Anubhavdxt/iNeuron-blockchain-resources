var element = document.getElementsByTagName("body");
element[0].innerText = "Inserting";
console.log(document.getElementsByTagName("body")[0]);

element = document.getElementsByTagName("h1");
console.log(element[1]);
element[0].innerText = "Yesterday was Monday";
element[1].innerText = "Today is Tuesday";

// element = document.getElementById("saturday");
// console.log(element);
// element.innerText = "No, it's Saturday";
// element = document.getElementsByClassName("harsh");
// element[1].innerText = "It was a cool day";

element = document.getElementsByClassName("harsh");
element[0].innerText = "I'm Cool";
console.log(element);

// This is a HTML collection so first we need to convert it into an array
element = Array.from(element);

element.forEach((element) => {
  element.innerText = "Cool";
});

element = document.getElementById("one");
element.innerText = "JavaScript is Beautiful";

element = document.getElementById("body");
element.innerHTML = "<h1>JavaScript is Beautiful</h1>";
