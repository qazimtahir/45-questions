/*
19. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order. */
var myFavouriteCountries = [
    "Pakistan",
    "China",
    "Japan",
    "USA",
    "Germany",
    "Poland",
];
// Print your array in its original order.
console.log("The original array is in this order.\n");
var originalArray = myFavouriteCountries;
console.log(myFavouriteCountries);
// Print your array in alphabetical order without modifying the actual list
console.log("After sorting the array of countries in Alphabetical order using .sort() function.\n");
console.log(myFavouriteCountries.sort());
// Show that your array is still in its original order by printing it.
console.log(originalArray);
