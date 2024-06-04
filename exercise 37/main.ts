//mAKING A FUNCTION
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
  console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt.`);

}

//calling a function with by-default values
make_shirt();

// Calling a Function now with Medium size and default message
make_shirt("Medium")

// Calling a function now with small size and Different print message
make_shirt("small" , "i love javascript")