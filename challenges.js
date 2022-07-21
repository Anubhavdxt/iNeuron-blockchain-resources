var volunteers = [
  { name: "Sanjay", collection: 2800, age: 24 },
  { name: "Vivek", collection: 3500, age: 27 },
  { name: "John", collection: 2500, age: 17 },
  { name: "Syed", collection: 500, age: 44 },
  { name: "Dhruv", collection: 0, age: 55 },
];

// var filtered = volunteers.filter((obj) => {
//   return obj.collection > 2500;
// });

// var name = filtered.map((obj) => obj.name);
// console.log(filtered);

// How many collected more than 2500

var name = volunteers
  .filter((obj) => {
    return obj.collection > 2500;
  })
  .map((obj) => obj.name);
console.log(name);

var age = volunteers
  .filter((obj) => {
    return obj.collection > 2500;
  })
  .map((obj) => obj.age);
console.log(age);

// How many collected less than 2500

name = volunteers
  .filter((obj) => {
    return obj.collection < 2500;
  })
  .map((obj) => obj.name);
console.log(name);

age = volunteers
  .filter((obj) => {
    return obj.collection < 2500;
  })
  .map((obj) => obj.age);
console.log(age);

// Total Collection

var total = volunteers.reduce((accu, curr) => {
  return accu + curr.collection;
}, 0);
console.log(`Total Collection ${total}`);

// Collection more than 2500 their total

total = volunteers
  .filter((obj) => {
    return obj.collection > 2500;
  })
  .reduce((accu, curr) => {
    return accu + curr.collection;
  }, 0);
console.log(total);

// Did everyone collected

var every = volunteers.every((obj) => {
  return obj.collection > 0;
});
console.log(every);

age = volunteers
  .filter((obj) => {
    return obj.collection > 0;
  })
  .map((obj) => {
    return obj.age;
  });
console.log(every);
