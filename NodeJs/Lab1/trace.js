const console = require("console");

// Calling console.trace() method
console.trace("stack teace sample");

console.trace("stack trace sample with args: %d", 39);

function addCount() {
  var sum = 0;

  for (var i = 1; i < 1000; i++) {
    sum += i;
  }

  return sum;
}

console.time();
addCount();
console.timeEnd();
