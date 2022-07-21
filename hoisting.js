// Debugger

debugger;
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

Zfun();
console.log(Zfun);
console.log(z);

// It will return the whole function code before the execution of the below code
function Zfun() {
  console.log("Function has been called");
}

// It will be undefined
const Zfun2 = () => {
  console.log("Function has been called");
};
var z = "Variable it is";
