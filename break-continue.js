var res;
// Break when 16 comes in the table of 2
for (let i = 0; i <= 10; i++) {
  res = i * 2;
  if (res === 16) break;
  console.log(i * 2);
}
console.log("Loop End");

// Skip 16 in the table of 2
for (let i = 0; i <= 10; i++) {
  if (i === 8) continue;
  console.log(i * 2);
}
console.log("Loop End");
