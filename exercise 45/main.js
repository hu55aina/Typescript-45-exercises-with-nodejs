// Define a function to create a car object with options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Intialize a car object with manufacturer and model
    var Car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional object to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        Car[key.trim()] = value.trim();
    });
    return Car;
}
// Call the function to create a car object
var my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: True", "Year: 2024");
// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
