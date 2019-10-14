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
console.log("Dice Game, the Doom-Bringers' health is set to",(bossHealth));

let bossPower = 10;
console.log("Dice Game, the Doom-Bringers' power is set to",(bossPower));

alert("Battle begins\nYou will now enter your attack phase!");

let rollSixSidedDice = Math.round(Math.random() * 6);
let isValid = false;
let userInputOne = "Normal Attack";
let userInputTwo = "Heavy Attack";

while(!isValid){
    userInput = prompt("Please enter Normal or Heavy attack")
    if(userInput === userInputOne) userInput = rollSixSidedDice;
    }
    console.log(rollSixSidedDice);
    
//    if(userInput === userInputTwo){

//    }
// //  let normalAttack = rollSixSidedDice + rollForPower
//  function rollForNormalAttackDamage(side){
//      if(!sides) sides = 6
//     with(Math) return 1 + round(random() * sides);

//  }

//  }
//   console.log(rollSixSidedDice);
