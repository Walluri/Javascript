//Example 1 : Iterators with arguments
// function* GetFruits() {
//   console.log(1, yield);
//   console.log(2, yield);
//   console.log(3, yield);
// }

// let genFoo = GetFruits();

// genFoo.next(); //the first call gets executed from the beginning of the function body till the first yeild statement.
// genFoo.next("apple");
// genFoo.next("banana");
// genFoo.next("mango");

//Example 2 : Example with yeild *

// function* genFunc1() {
//   yield "apple";
//   yield "banana";
// }

// function* genFunc2() {
//   yield "fruits";
//   yield* genFunc1();
// }

// let genFoo2 = genFunc2();
// console.log(genFoo2.next().value);
// console.log(genFoo2.next().value);
// console.log(genFoo2.next().value);

//Example 3 : We can use generator as a object PROPERTY

// const someObj = {
//   *generatorFoo() {
//     yield "apple";
//     yield "banana";
//   },
// };

// let iterObj = someObj.generatorFoo();
// console.log(iterObj.next().value); //apple
// console.log(iterObj.next().value); //banana

//Example 4 : generator as an object METHOD.
// class Foo {
//   *generatorFoo() {
//     yield "apple";
//   }
// }

// const fooObj = new Foo();
// let itrObj = fooObj.generatorFoo();
// console.log(itrObj.next().value);

//Example 5 : Generator as a computed property.
class Foo {
  *[Symbol.iterator]() {
    // notice the square brackets for symbol.iterator
    yield 1;
    yield 2;
  }
}

let fooObj = new Foo();
for (const iterator of fooObj) {
  //console.log(iterator);
}
// The for - of loop iterates over iterable objects... like string and array
// The above function is iterable because - we can get a iterable object {next:f(),throw:f()..}
// ..and we continously keep calling next in that.

//Example 6 : RnD - If you understand the concept well you will be able to write such stuff....!!!
class Foo2 {
  *genFoo() {
    // notice the square brackets for symbol.iterator
    yield 1;
    yield 2;
  }
}

let fooObj2 = new Foo2();
let genFooIns = fooObj2.genFoo();
for (const iterator of genFooIns) {
  console.log(iterator);
}
