console.log("\nQ3.\nName Cases: Store a person\u2019s name in a variable, and then print that person\u2019s name in lowercase, uppercase, and title case.\n\n-\nAnswer:");
var myName = "MUHammad TaHIr IqBAl";
console.log("default: ".concat(myName, "\n"));
console.log("lowercase: ".concat(myName.toLowerCase(), "\n"));
console.log("uppperrcase: ".concat(myName.toUpperCase(), "\n"));
console.log("\nTitle Case by function:\n");
function convertToTitleCase(str) {
    if (!str) {
        return "";
    }
    return str.toLowerCase().replace(/\b\w/g, function (s) { return s.toUpperCase(); });
}
console.log(convertToTitleCase("to title case: ".concat(myName)));
// Title Case through mapping method:
console.log("\nTitle Case by mapping and function:\n");
var myMsg = myName;
function titleCase(msg) {
    return msg
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); })
        .join(" ");
}
console.log(titleCase(myMsg));
console.log("");
