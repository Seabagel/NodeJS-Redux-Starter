// A. Pass function as argument
  function greet(fnMessage) {
    console.log(fnMessage());
  }
  greet(sayHello);

  // B. Returns another function
  function sayHello() {
    return function () {
      return "Hello World";
  };

  let fn = sayHello();
  let message = fn();