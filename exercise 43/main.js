/*Unchanged Magicians: Start with your work from Exercise 42.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one array of the original names and one array with
 the Great added to each magician’s name.*/
// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name, "."); });
}
// define an array of magicians names
var magicians_names = ["harry potter", "hamza", "husaina"];
// Making a copy of original array through .slice() function
var copy_magician_names = magicians_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Original and Copied
//Original
console.log("original Array\n");
show_magicians(magicians_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
