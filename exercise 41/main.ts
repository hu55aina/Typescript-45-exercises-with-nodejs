// define a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Define an array containing magicians name
let magicians_names = ["harry potter" , "Hamza" , "Hussaina"]

//Call the function to print each magician name
show_magicians(magicians_names)