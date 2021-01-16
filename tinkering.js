function lastIndexOf(array, val) {
  // To create a reversed array.
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]); }

    console.log("The value is: " + val);
    console.log("The reveresed array is: " + reversedArray);
    

  for (let j = 0; j < array.length; j++) {
    if (reversedArray[j] === val) {
      return "the index is: " + reversedArray.indexOf(j);
    }
    
  }  
  


}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);