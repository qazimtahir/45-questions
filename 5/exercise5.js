console.log("\nQ5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person\u2019s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.\n");
console.log("\nSOLUTION: using concatenation\n");
var famous_person = "William Shakespeare";
var message = '"There is nothing either good or bad, but thinking makes it so."';
console.log(famous_person + " said in Hemlet, " + message);
console.log("\nSOLUTION: using string literals\n");
console.log("".concat(famous_person, " said in Hemlet, ").concat(message));
