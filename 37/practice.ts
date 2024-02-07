// making a function:
function myCustomShirt(
  size: string = "Large",
  message: string = "I love Typescript."
) {
  console.log(`Making a ${size} shirt with the message: ${message}.`);
}
myCustomShirt();
myCustomShirt("Medium");
myCustomShirt("Small", "Code with passion!");
