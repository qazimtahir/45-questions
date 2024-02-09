// Array of magician names
var magicians = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];
// Function to print magician names
function show_magicians(magicians) {
    console.log("Here are the magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to modify names and add "the Great"
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " the Great");
    }
}
// Show initial list
show_magicians(magicians);
// Make them great!
make_great(magicians);
// Show updated list
console.log("\nNow they are the Great:");
show_magicians(magicians);
