// Each container on the space ship can hold exactly 100 bottles of maple syrup. 
// A container will only be sent if it's full.
// Given a certain number of bottles, we need to determine how many containers can be filled and sent.

function howManyHundreds(num) {
  let containers = ( num - ( num % 100 ) ) / 100; 
  return containers;
}









console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);