// Define a function with rest parameter that accept items arguments representing our sandwich.
function makeSAndwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Your Sandwich\n");
}
// Call the function 3 times with 3 different number of arguments
makeSAndwich("chicken", "cheese", "mayo", "veggies");
makeSAndwich("bread", "butter");
makeSAndwich("bread", "butter", "cheese", "mayo", "lettuce", "garlic sauce", "tomato");
