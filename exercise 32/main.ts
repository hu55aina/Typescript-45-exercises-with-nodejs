let current_users = ["Ali" , "osama", "Bilal" , "sana" , "Rehma"]

let new_users = ["Husaina" , "Asim" , "Osama" ,"Salman" ,"Sana"]

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase())
      if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`);
      }else {
        console.log(`this username ${new_one_user} is available`);
        
      }
})
