

function rollDice(sides){
   return Math.ceil(Math.random() * sides)
}

let chooseName = prompt("Please choose your character name","Name...");
    console.log(chooseName);

    alert("The dice will now decide your character attributes");

     let fiftySidedDice = rollDice(50);
    
     console.log("Your health is now",(fiftySidedDice));
    
    

let fourSidedDice = rollDice(4);

console.log("Your armor is set to",(fourSidedDice));

let playerPower = rollDice(10);
console.log("Your power is set to",(playerPower));

let bossHealth = 100;
console.log("Dice Game, the Doom-Bringers' health is set to",(bossHealth));

let bossPower = 10;
console.log("Dice Game, the Doom-Bringers' power is set to",(bossPower));

alert("Battle begins\nYou will now enter your attack phase!");





function heavyAttack(){
    let heavyHitChance = rollDice(6);
    if(heavyHitChance>4){
        let heavyDamage = rollDice(6) + playerPower;
        bossHealth -= heavyDamage;
    }
}


function normalAttack(){
    let normalHitChance = rollDice(6);
    if(normalHitChance<=4){
        let normalDamage = playerPower
        bossHealth -= normalDamage;
    }
}
// let rollSixSidedDice = Math.round(Math.random() * 6);
// let isValid = false;
// let userInputOne = "Normal Attack";
// let userInputTwo = "Heavy Attack";

// while(!isValid){
//     userInput = prompt("Please enter Normal or Heavy attack")
//     if(userInput === userInputOne) userInput = rollSixSidedDice;
//     }
//     console.log(rollSixSidedDice);
    
// //    if(userInput === userInputTwo){

// //    }
// // //  let normalAttack = rollSixSidedDice + rollForPower
// //  function rollForNormalAttackDamage(side){
// //      if(!sides) sides = 6
// //     with(Math) return 1 + round(random() * sides);

// //  }

// //  }
// //   console.log(rollSixSidedDice);
