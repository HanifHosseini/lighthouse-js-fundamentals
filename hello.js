const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

const returnSayHello  = function (name) {
  return "Hello, " + name;
}

console.log(returnSayHello('John'));