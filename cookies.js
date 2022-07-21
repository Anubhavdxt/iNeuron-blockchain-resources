document.cookie = "data=CookieData";

document.cookie =
  "data=CookieData; expires=" + new Date(2022, 01, 01).toUTCString();

var cookie = document.cookie;
console.log(cookie.split("; ")[2].split("="));

// Link for the image in next video
// * https://miro.medium.com/max/875/1*dMoXCZgsdlQoSITo5BdXoA.png
