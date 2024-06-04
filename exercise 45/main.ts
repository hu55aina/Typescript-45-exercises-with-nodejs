 // Define a function to create a car object with options...
function create_car(manufacturer,model,...options){
 // Intialize a car object with manufacturer and model
 let Car = {
    manufacturer: manufacturer,
    model: model
 };

 // Add additional object to the car object
 options.forEach(option =>{
    let [key, value] = option.split(":");
    Car[key.trim()] = value.trim();
 });

 return Car;

}

// Call the function to create a car object
let my_car= create_car("Toyota" , "Corolla" , "color: Black", "Sunroof: True" , "Year: 2024");

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
