// In order to be iterable an object must IMPLEMENT the @@iterator method
// i.e the object must have a property with a KEY  @@iterator
// .. this is available via constant Symbol.iterator

//i.e @@iterator === [symbol.iterator]

//Case 1 : This can be a generator function or a ordinary function
let obj = {
  [Symbol.iterator]: function* () {
    yield 10;
    yield 20;
  },
};

for (const iterator of obj) {
  console.log(iterator);
}

//Case 2 :
//The property [Symbol.iterator] is a zero argument function that returns an object..
//...conforming to the ITERATOR protocol.

// ITERATOR PROTOCOL defines a standard way to produce a sequence of values.
// This function when invoked should return a ITERATOR  Object - which will be used to obtain the values to be iterated.
// An object is an iterator when it implements the next() method which returns {value:10,done:false}

let obj2 = {
  [Symbol.iterator]: function () {
    return {
      InteArray: ["apple", "banana"],
      pointer: -1,
      next: function () {
        this.pointer++;
        if (this.pointer === this.InteArray.length) return { done: true };
        return { done: false, value: this.InteArray[this.pointer] };
      },
    };
  },
};
console.log("--------------------");
for (const iterator of obj2) {
  console.log(iterator);
}

//case 3 :
//Why do you have to always have local variables to the object returned.
let obj3 = {
  names: ["mike", "smith", "jonas"],
  pointer: -1,
  //This time we are not going to have a generator function but a normal function
  [Symbol.iterator]: function () {
    //return a object that conforms to the iterator protocol i.e an object that has a next method.
    // it is simple implement the next method in the current object and just return this
    return this;
  },
  //how should the iteration behave
  next: function () {
    this.pointer++;
    if (this.pointer === this.names.length) return { done: true };
    return { done: false, value: this.names[this.pointer] };
  },
};

console.log("----------------------");
for (const iterator of obj3) {
  console.log(iterator);
}
