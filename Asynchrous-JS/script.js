// * Callbacks

// console.log("Start");

// function login(email, password, callback) {
//   setTimeout(() => {
//     console.log("Data Verified");
//     callback({ userEmail: email });
//   }, 5000);
// }

// function images(email, callback) {
//   setTimeout(() => {
//     let image = ["1.jpg", "2.jpg", "3.jpg"];
//     callback(image);
//   }, 3000);
// }

// login("qwerty@gmasil.com", 4568532, () => {
//   console.log(user);
//   console.log("Getting Images");
//   images(user.userEmail, (image) => {
//     console.log(image);
//   });
// });

// * Promises

// const user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Data not Verified");
//     reject(new Error("Not Verified"));
//   }, 5000);
// });

// user.then((user) => console.log(user)).catch((err) => console.log(err));

console.log("Start");

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Verified");
      resolve({ userEmail: email });
    }, 5000);
  });
}

function images(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let image = ["1.jpg", "2.jpg", "3.jpg"];
      resolve(image);
    }, 3000);
  });
}

// login("xyz@gmail.com", 123456)
//   .then((email) => images(email))
//   .then((image) => console.log(image));

// * Async

async function getDetails() {
  let email = await login("xyz@gmail.com", 123456);
  let array = await images(email);
  console.log(array);
  console.log("Images Fetched");
}

getDetails();

console.log("Ended");
