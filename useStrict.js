"use strict";

// This will give error in use strict mode
// x = "abcd";

var x = "abcd";

function fun() {
  "use strict";

  //   use strict mode only inside the function
  y = "Hello";
}

// delete can't be called in use strict mode
// delete x;

// Duplicate parameter names are not allowed
function x(a, a) {
  console.log(a, a);
}
x(1, 2);
