/*
 *FLAGS
 * i - Case insensitivity
 * g - Search in the whole string (global)
 */

/*
 * REGEX
 * exec() - For searching regex
 * test() - Returns true or false
 * /[abc]/ - Will give the index of any letter of the group
 * /[0-9]/ - Will give the index of any number of the group
 * /\d/ - Will give the index of any digit
 */

/*
 * Regex Resources
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * https://www.w3schools.com/js/js_regexp.asp
 */

let s = "This is my Computer computer is mine";

let reg = /computer/i;
// let reg = /computer/g;
console.log(reg);
console.log(reg.source);

// Will give the 1st computer
let res = reg.exec(s);
console.log(res);

// Will give the 2nd computer
// res = reg.exec(s);
// console.log(res);

res = reg.test(s);
console.log(res);
