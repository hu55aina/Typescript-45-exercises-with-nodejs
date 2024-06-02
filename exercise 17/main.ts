//Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.

let guestlist: string[] = ["alfiya" , "ruqaiya" ,"mariya","ummesalma" , "habiba"]

//print message
console.log("unfortunately! the new dinner table won't arrive so we can invite only two guest.");

//remove guest from the list
while(guestlist.length > 2){
    let removeguest : string | undefined = guestlist.pop();
    if(removeguest !== undefined){
        console.log(`sorry ${removeguest}, we can't invite you.`);
    }
}

//Print a message to each of the two people still on your list, 
//letting them know they’re still invited.
 guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for dinner.`)
 })

// remove last two names from the list
guestlist.splice(0,guestlist.length)

// print updated empty list
console.log("updated list of guests:", guestlist);
