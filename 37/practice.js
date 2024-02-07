// making a function:
function myCustomShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript."; }
    console.log("Making a ".concat(size, " shirt with the message: ").concat(message, "."));
}
myCustomShirt();
myCustomShirt("Medium");
myCustomShirt("Small", "Code with passion!");
