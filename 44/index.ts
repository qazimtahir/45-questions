function order_sandwich(...ingredients: string[]): void {
  if (ingredients.length === 0) {
    console.log("You haven't ordered any ingredients for your sandwich!");
    return;
  }

  console.log("Your sandwich includes:");
  for (const ingredient of ingredients) {
    console.log(`- ${ingredient}`);
  }
}

// Call the function with different numbers of arguments
order_sandwich("bread", "cheese", "tomato"); // 3 arguments
order_sandwich("turkey", "lettuce", "mustard"); // 3 arguments
order_sandwich("ham", "swiss cheese", "pickles", "mayo"); // 4 arguments
