/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
var fName = "Muhammad";
var lName = "Tahir";
// testing for equality and inequality
console.log("First name is ".concat(fName, " and last name is ").concat(lName, ".\nnow comparing 1: equality and 2: inequality. \n1: ").concat(fName == lName, "\n2: ").concat(fName != lName, "\n"));
// changing to lowercase
console.log("changing the strings to lowercase");
console.log(fName.toLowerCase());
console.log(lName.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Dealing with numbers:");
var num1 = 10;
var num2 = 20;
console.log("1: ".concat(num1 == num2, "\n2: ").concat(num1 != num2, "\n3: ").concat(num1 > num2, "\n4: ").concat(num1 < num2, "\n5: ").concat(num1 >= num2, "\n6: ").concat(num1 <= num2, "\n"));
// testing AND OR operator
console.log("Dealing with AND OR operator:");
console.log("1: ".concat(num1 == num2 && num1 > num2, "\n2: ").concat(num1 == num2 && num1 < num2, "\n3: ").concat(num1 == num2 && num1 >= num2, "\n4: ").concat(num1 == num2 && num1 <= num2, "\n"));
//Test whether an item is in an array
var anArray = ["One", "Two", "Three", "Four"];
console.log(anArray["Five"]);
