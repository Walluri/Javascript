//A generator function returns a generator object.
function* generatorFoo(i) {
  yield i;
  yield i + 10;
  yield i + 20;
}

//call the generator function to get an iterator object
// An iterator object contains 3 methods {next:f(),return:f(),throw:f()}
const gen = generatorFoo(1);
console.log(gen);
document
  .querySelector("body")
  .appendChild(document.createTextNode(gen.next().value));

// When the iterator objects next method is called then the generator
// .. functions body is executed until the  first yeild expression.

// The yeild specifies the value to be returned from the iterator
//Or
// yeild* delegates to another generator function.

//Now the next method returns an object with a value property containing the yeilded value.
// +
// a done property which indicates if the generator has yeilded its last value
document
  .querySelector("body")
  .appendChild(document.createTextNode(gen.next().value));

document
  .querySelector("body")
  .appendChild(document.createTextNode(gen.next().value));

// Generator functions are functions that can be exited and entered later.
// Their context can be i.e variable bindings will be saved across re-entrances

//Why - generators
// Generators along with promises are a very powerful tool for asynchronous programming
// They entirely eliminate the problems with callbacks.
