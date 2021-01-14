// The function returns one of the following strings, based on the value of age:
// // Elementary School if age is below 13
// // Secondary School if age is between 13 and 18 (both inclusive)
// // Lighthouse Labs in all other cases.

// console.log("I am 35. Which school should I go to?");
// console.log(whichSchool(35));
// console.log("I am 8. Which school should I go to?");
// console.log(whichSchool(8));
// console.log("I am 14. Which school should I go to?");
// console.log(whichSchool(14));

const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School"; } 
  else if (age >= 13 && age <= 18) {
    return "Secondary School"; } 
  else {
    return "Lighthouse Labs";
  }
}


