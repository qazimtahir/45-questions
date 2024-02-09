// Array of magician names
var magicians = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];
// Function to print magician names
function show_magicians(magicians) {
    console.log("Here is a list of amazing magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Call the function to display the magicians
show_magicians(magicians);
