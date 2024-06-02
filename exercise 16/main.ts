//Add one new guest to the middle of your array. 
// Use append() to add one new guest to the end of your list. 
// Print a new set of invitation messages, one for each person in your list.


let guestlist : string[] = ["husaina","sakina","lamya"];
console.log(`Great news! we found a bigger table`);

//unshift
guestlist.unshift("sadaf");
console.log(guestlist);

//splice()
guestlist.splice(Math.floor(guestlist.length/2),0, "Ali");


//push
guestlist.push("Areeb")

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited to dinner.`)
})
