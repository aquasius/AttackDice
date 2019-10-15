

function rollDice(sides){
   return Math.ceil(Math.random() * sides)
}


alert("Welcome to the arena peasant! Your objective is to defeat the great and powerful Dice Game, the Doom Bringer\nIf your attack misses it will initiate combat for the Boss. Be careful!")

let chooseName = prompt("Please choose your character name","Name...");
    console.log(chooseName);

    alert("The dice will now decide your character attributes");

     let playerHealth = rollDice(80);
    
     console.log("Your health is now",(playerHealth));
    
    

let armorScore = rollDice(4);

console.log("Your armor is set to",(armorScore));

let playerPower = rollDice(10);
console.log("Your power is set to",(playerPower));

let bossHealth = 100;
console.log("Dice Game, the Doom-Bringers' health is set to",(bossHealth));

let bossPower = 10;
console.log("Dice Game, the Doom-Bringers' power is set to",(bossPower));

alert("Battle begins\nYou will now enter your attack phase!");


// attack functions 

function normalAttack(){
    let normalHitChance = rollDice(6);
    if(normalHitChance<=4){
        let normalDamage = playerPower
        
    bossHealth -= normalDamage;
    console.log("Doom Bringers' health is now");
    console.log(bossHealth);
    return;
    }
    else if(normalHitChance>4){
        console.log("Your attack missed! Watch out!");
        bossSwing();
        }
    }

function heavyAttack(){
    let heavyHitChance = rollDice(6);
    if(heavyHitChance>4){
        let heavyDamage = rollDice(6) + playerPower;
        bossHealth -= heavyDamage;
        console.log("Doom Bringers' health is now");
        console.log(bossHealth);
    }
    else if(heavyHitChance<4){
        console.log("You swing a brutal attack, but Dice Game - The Doombringer evades and gets a chance to attack!")
     bossSwing();   
    }
}

// boss attack stipulations 
function bossSwing(){
    let bossAttack = rollDice(6);
    if(bossAttack===5){
        console.log("Dice Game hurls his axe and exerts an exhausting breath! You roll out of the way and escape damage!")
    }
    if(bossAttack===6){
        console.log("Dice Game, the Doom Bringer unleashes a monstrous slash! You slide underneath the axe in perfect range to execute your next attack!");
    }
        else if(bossAttack<=5){
        let bossAttackDamage = bossPower 
        playerHealth -= bossAttackDamage - armorScore;

        console.log("Doom Bringer attacks and lands a crushing blow! Your health is now");
        console.log(playerHealth);
        if(playerHealth<=0){
            console.log("Argggghhhh! Doom Bringer lands a devastating blow!")
        alert("Muhahahha! Another mortal human added to my boneyard! Who will be added next to my bone collection!?")
        }

    }
}


    // assigning health loss to boss
function printBossHealth(){
    if(normalDamage){
        let currentBossHealth = bossHealth -= normalDamage;
        console.log("Doom Bringers' health is now");
         console.log(printBossHealth);
    }
    if(heavyDamage){
        let currentBossHealth = bossHealth -= heavyDamage;
        console.log("Doom Bringers' health is now");
        console.log(printBossHealth);
    }
    
}


function playerDies(){
    if(playerHealth<= 0);
}


function bossDies(){

}