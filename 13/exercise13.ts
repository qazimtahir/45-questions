console.log(`Q13.
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

SOLUTION
`);
let myCars: string[] = [
  "Honda Civic",
  "Suzuki Swift",
  "Mercedes",
  "BMW",
  "Audi",
  "Kia Sportage",
  "Kia Picanto",
];
for (let i = 0; i < myCars.length; i++) {
  console.log(`I like ${myCars[i]} car best. It is very economical car.`);
}
