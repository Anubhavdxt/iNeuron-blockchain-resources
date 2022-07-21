var element = document.getElementsByTagName("span");
console.log(element[0]);

element = document.getElementById("one");
console.log(element);

element = document.getElementsByClassName("two");
console.log(element[0]);

element = document.querySelectorAll("span");
console.log(element[0]);

element = document.querySelector("#one");
console.log(element);

element = document.querySelector(".two");
console.log(element);

element.innerText = "<strong>First element of class two</strong>";
