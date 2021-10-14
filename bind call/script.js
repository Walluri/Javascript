//1. What  does bind do
// It return a new function + It sets the value of this in a function
// + allows us to even pass arguments to the bounded function

//Example 1 : Simple Demo
const obj1 = {
  x: 20,
  getX() {
    return this.x;
  },
};

console.log(obj1.getX()); // prints 20;

const unBoundedGetX = obj1.getX;
console.log(unBoundedGetX()); //prints undefined - as it is invoked in global scope
let boundedGetX = obj1.getX;
boundedGetX = boundedGetX.bind(obj1);
console.log(boundedGetX()); // prints 20 as it is bound properly

//Note : Use of bind
// is to make a function, no matter how it is called is called with a particular this value.

//Example 2 : Another use of bind is to make a function with pre specified initial arguments
