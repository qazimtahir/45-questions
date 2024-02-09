function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city.toUpperCase(), " is in ").concat(country.toUpperCase(), "."));
}
// Call the function for three different cities
describe_city("Karachi");
describe_city("London", "England");
describe_city("Tokyo", "Japan");
