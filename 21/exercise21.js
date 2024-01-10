/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
var cars = [
    {
        made: "Suzuki",
        model: "Cultus",
        colour: "Grey",
    },
];
console.log(cars);
// adding new car in cars:
var arrayOfCars = [];
arrayOfCars.push(cars);
var Honda = [
    {
        made: "Honda",
        model: "City",
        colour: "White",
    },
];
arrayOfCars.push(Honda);
console.log(cars);
