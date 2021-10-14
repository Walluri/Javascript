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
function List() {
  return Array.prototype.slice.call(arguments);
}

function addArgument(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = List(1, 2, 3);

const result1 = addArgument(1, 2);

const LeadingthirtysevenList = List.bind(null, 37);

const otherLeadingthirtysevenList = LeadingthirtysevenList(2, 3, 4);
console.log(otherLeadingthirtysevenList);

//Example 3 : bind with setTimeOut
// the scope inside settimeout is window scope... so one should bind the 'this' properly before passing a callback to settimeout

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12);
}

LateBloomer.prototype.declare = function () {
  console.log(`No of Petals : ${this.petalCount}`);
};

LateBloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000);
};

let flowerObj = new LateBloomer();
flowerObj.bloom();
