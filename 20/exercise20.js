/*
Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
var myFavouriteCountries = [
    "Pakistan",
    "China",
    "Japan",
    "Switzerland",
    "Saudi Arabia",
    "UAE",
];
console.log("List of my favourite countries:");
for (var _i = 0, myFavouriteCountries_1 = myFavouriteCountries; _i < myFavouriteCountries_1.length; _i++) {
    var list = myFavouriteCountries_1[_i];
    console.log(list);
}
