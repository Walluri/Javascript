// In order to be iterable an object must IMPLEMENT the @@iterator method
// i.e the object must have a property with a KEY  @@iterator
// .. this is available via constant Symbol.iterator

//i.e @@iterator === [symbol.iterator]

//The property [Symbol.iterator] is a zero argument function that returns an object..
//...conforming to the ITERATOR protocol.

let obj = {
  //This can be a ordinary function or a generator function
  // [Symbol.iterator]: function* () {
  //   yield 10;
  //   yield 20;
  // },
  // this function when invoked should return a ITERATOR  Object - which will be used to obtain the values to be iterated.
};

for (const iterator of obj) {
  console.log(iterator);
}

//Now lets take a look at the ITERATOR PROTOCOL
