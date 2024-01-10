console.log("Q13.\nYour Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as \u201CI would like to own a Honda motorcycle.\u201D\n\nSOLUTION\n");
var myCars = [
    "Honda Civic",
    "Suzuki Swift",
    "Mercedes",
    "BMW",
    "Audi",
    "Kia Sportage",
    "Kia Picanto",
];
for (var i = 0; i < myCars.length; i++) {
    console.log("I like ".concat(myCars[i], " car best. It is very economical car."));
}
