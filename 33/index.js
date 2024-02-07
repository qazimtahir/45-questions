// Store numbers 1 through 9 in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and determine the ordinal ending
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var suffix = void 0;
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    // Print the number with the ordinal ending
    console.log("".concat(number).concat(suffix));
}
