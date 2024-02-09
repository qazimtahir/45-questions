function order_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    if (ingredients.length === 0) {
        console.log("You haven't ordered any ingredients for your sandwich!");
        return;
    }
    console.log("Your sandwich includes:");
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        console.log("- ".concat(ingredient));
    }
}
// Call the function with different numbers of arguments
order_sandwich("bread", "cheese", "tomato"); // 3 arguments
order_sandwich("turkey", "lettuce", "mustard"); // 3 arguments
order_sandwich("ham", "swiss cheese", "pickles", "mayo"); // 4 arguments
