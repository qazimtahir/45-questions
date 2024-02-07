function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// Make a large shirt (with default size and message)
make_shirt();
// Make a medium shirt (specifying size, using default message)
make_shirt("medium");
// Make a shirt with a different size and message
make_shirt("small", "Code with passion!");
