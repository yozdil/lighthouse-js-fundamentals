var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

var x = 1;

function addTwo() {
  // Here using var declares a different function scope variable x.
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);