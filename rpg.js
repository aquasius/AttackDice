

function rollDice(sides){
   return Math.ceil(Math.random() * sides)
}

let chooseName = prompt("Please choose your character name","Name...");
    console.log(chooseName);

    alert("The dice will now decide your character attributes");

     let playerHealth = rollDice(50);
    
     console.log("Your health is now",(playerHealth));
    
    

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
        console.log(bossHealth);
    }
    else if(heavyHitChance<4){
        let 
        
        console.log("You swing a brutal attack, but Dice Game - The Doombringer evades!")
}
    
}

function bossSwing(){
    if(heavyHitChance<4){
    let bossAttack = rollDice(6);
    if(bossAttack>5){
        console.log("Dice Game hurls his axe and exerts an exhausting breath! You roll out of the way and escape damage!")

    }
    
    let bossAttackDamage = bossPower -= playerHealth;
}
return; 
}




function normalAttack(){
    let normalHitChance = rollDice(6);
    if(normalHitChance<=4){
        let normalDamage = playerPower
        
    bossHealth -= normalDamage;
    console.log(bossHealth);
    return;
    }
    else if(normalHitChance>4){
        console.log("Your attack missed!");
    }
}

function printBossHealth(){
    if(normalDamage){
        let currentBossHealth = bossHealth -= normalDamage;
    }
    if(heavyDamage){
        let currentBossHealth = bossHealth -= heavyDamage;
        console.log(printBossHealth);
    }
}

