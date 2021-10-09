var x = 10;

function getDynamicfunction() {
  var x = 20;
  return new Function("return x");
}

console.log(getDynamicfunction()());

function getStaticFunction() {
  var x = 30;
  return function () {
    return x;
  };
}

console.log(getStaticFunction()());

/* Javascript functions created with a function constructor will always be executed in the global scope */
