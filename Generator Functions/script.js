//A generator function returns a generator object.
function* generatorFoo(i) {
  yield i;
  yield i + 10;
  yield i + 20;
}

//get the generator object
const gen = generatorFoo(1);
document
  .querySelector("body")
  .appendChild(document.createTextNode(gen.next().value));

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
