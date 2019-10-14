let chooseName = prompt("Please choose your character name","Name...");
    console.log(chooseName);

    alert("Now you will decide your character attributes");

     let fiftySidedDice = Math.floor(Math.random() * 50);
     function rollDie(sides){
        if(!sides) sides = 50
        with(Math) return 1 + floor(random() * sides);
     }
     alert("Your health is now",(fiftySidedDice));
     console.log("Your health is now",(fiftySidedDice));
    

let fourSidedDice = Math.floor(Math.random() * sides);
function rollDice(sides){
    if(!sides) sides = 4
    with(Math) return 1 + floor(random() * sides);
}
alert("Your armor is currently",(fourSidedDice));
console.log("Your armor is set to",(fourSidedDice));