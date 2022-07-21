sessionStorage.setItem("data", "SomeData1");
sessionStorage.setItem("data2", "SomeData2");

var data = sessionStorage.getItem("data");
console.log(data);
sessionStorage.removeItem("data");

let array = [1, 2, 3, 4, 5, 6];
array.forEach((item) => sessionStorage.setItem(item, String(Date.now())));
