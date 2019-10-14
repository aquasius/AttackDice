let chooseName = prompt("Please choose your character name","Name...");
    console.log(chooseName);

    alert("The dice will now decide your character attributes");

     let fiftySidedDice = Math.floor(Math.random() * 50);
     function rollDie(sides){
        if(!sides) sides = 50
        with(Math) return 1 + floor(random() * sides);
     }
     console.log("Your health is now",(fiftySidedDice));
    
    

let fourSidedDice = Math.floor(Math.random() * 4);
function rollDice(sides){
    if(!sides) sides = 4
    with(Math) return 1 + floor(random() * sides);
}
console.log("Your armor is set to",(fourSidedDice));

let tenSidedDice = Math.floor(Math.random() * 10);
function rollForPower(sides){
    if(!sides) sides = 10
    with(Math) return 1 + floor(random() * sides);
}
console.log("Your power is set to",(tenSidedDice));

let bossHealth = 100;
console.log("Dice Game, the Doom-bringers' health is set to",(bossHealth));

let bossPower = 10;
console.log("Dice Game, the Doom-Bringers' power is set to",(bossPower));

alert("Battle begins\nYou will now enter your attack phase!");

let rollSixSidedDice = Math.floor(Math.random() * 6);
let normalAttack = 
function rollSixSidedDice(side){
prompt("Choose attack type")
    if("" )
    if(!sides) side = 6
with(Math) return 1 + floor(random() * sides);

}

}