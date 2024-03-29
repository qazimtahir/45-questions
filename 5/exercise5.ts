console.log(`
Q5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
`);

console.log(`
SOLUTION: using concatenation
`);

let famous_person: string = "William Shakespeare";
let message: string =
  '"There is nothing either good or bad, but thinking makes it so."';

console.log(famous_person + " said in Hemlet, " + message);

console.log(`
SOLUTION: using string literals
`);
console.log(`${famous_person} said in Hemlet, ${message}`);
