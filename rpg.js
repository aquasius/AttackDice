let playerHealth;
let chooseName;
let armorScore;
let playerPower;
let bossHealth;
let bossPower;



function runGame(){ 
     rollDice(); //changed
     setStartGameVariables(); //changed
}
function rollDice(sides){
   return Math.ceil(Math.random() * sides)
}
function setStartGameVariables(){
    alert("Welcome to the arena peasant! Your objective is to defeat the great and powerful Dice Game, the Doom Bringer\nIf your attack misses it will initiate combat for the Boss. Be careful!")

     chooseName = prompt("Please choose your character name","Name...");
    console.log(chooseName);

    alert("The dice will now decide your character attributes");

     playerHealth = rollDice(80);
    
     console.log("Your health is now",(playerHealth));
   
    // Generated stats for character

     armorScore = rollDice(4);

    console.log("Your armor is set to",(armorScore));

     playerPower = rollDice(10);
    console.log("Your power is set to",(playerPower));

     bossHealth = 100;
console.log("Dice Game, the Doom-Bringers' health is set to",(bossHealth));

     bossPower = 10;
console.log("Dice Game, the Doom-Bringers' power is set to",(bossPower));

alert("Battle begins\nYou will now enter your attack phase!");

}

// alert("Welcome to the arena peasant! Your objective is to defeat the great and powerful Dice Game, the Doom Bringer\nIf your attack misses it will initiate combat for the Boss. Be careful!")

// let chooseName = prompt("Please choose your character name","Name...");
//     console.log(chooseName);

//     alert("The dice will now decide your character attributes");

//      let playerHealth = rollDice(80);
    
//      console.log("Your health is now",(playerHealth));
   
//     // Generated stats for character

// let armorScore = rollDice(4);

// console.log("Your armor is set to",(armorScore));

// let playerPower = rollDice(10);
// console.log("Your power is set to",(playerPower));

// let bossHealth = 100;
// console.log("Dice Game, the Doom-Bringers' health is set to",(bossHealth));

// let bossPower = 10;
// console.log("Dice Game, the Doom-Bringers' power is set to",(bossPower));

// alert("Battle begins\nYou will now enter your attack phase!");


// attack functions 

function normalAttack(){
    let normalHitChance = rollDice(6);
    if(normalHitChance===4){
        let normalDamage = playerPower;
        bossHealth -= normalDamage;
    console.log("You choose to play it safe. You step in for a swift slash! Doom Bringer says Bring it peasant! His health is now");
    console.log(bossHealth);
    }
   else if(normalHitChance===3){
        let normalDamage = playerPower
        bossHealth -= normalDamage;
        console.log("You lunge for a quick chop! Doom Bringers' arm is badly cut! His health is now");
        console.log(bossHealth);
    }
    
    else if(normalHitChance===2){
        let normalDamage = playerPower; // changed
        bossHealth -= normalDamage;
        console.log("Ayyyyyyahhh! You perform a leaping slash attack that just graces Doom Bringers' chest! YOU FOOL yells Doom Bringer. His health is now");
        console.log(bossHealth);
    }


    else if(normalHitChance===1){
        let normalDamage = playerPower
        bossHealth -= normalDamage;
        console.log("Shhhhckkk! You attempt a normal slash attack, but Doom Bringer brushes it off for minimal damage. His health is now");
        console.log(bossHealth);
    }


    else if(normalHitChance>4){
        console.log("Your attack missed! Watch out!");
        bossSwing();
        }
    }
//  created scenarios for each instance of possible dice that could be rolled and assign different dialogue for them
function heavyAttack(){
    let heavyHitChance = rollDice(7);
    if(heavyHitChance===5){
        let heavyDamage = rollDice(7) + playerPower;
        bossHealth -= heavyDamage;
        console.log("With all your might you grasp your sword with two hands and execute a lacerating slash! Doom Bringers' health is now");
        console.log(bossHealth);
    }
    if(heavyHitChance===6){
        let heavyDamage = rollDice(6) + playerPower;
        bossHealth -= heavyDamage;
        console.log("You feint an attack! Doom Bringer falls for the feint and exposes an opening! You execute a perfectly placed blow! Doom Bringers' health is now");
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
        else if(bossAttack<5){
        let bossAttackDamage = bossPower; //changed
        playerHealth -= bossAttackDamage - armorScore;
            console.log("Doom Bringer attacks and lands a crushing blow! Your health is now");
        console.log(playerHealth);
        if(playerHealth<=0){
            console.log("Argggghhhh! Doom Bringer lands a devastating blow!")
            loseCondition();
            
        }
        document.getElementById("currentHealth").innerHTML = playerHealth;
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



function loseCondition(){
    let endPrompt;
    if(playerHealth<=0){
        endPrompt = prompt("You have failed to defeat the powerful Doom Bringer. Would you like to try again?");
    }
    if(endPrompt == "yes"){
      return runGame();
    }
}

//     if(endPrompt = yes){
//     runGame();
// }
function winCondition(){
    let endPrompt;
 if(bossHealth<=0){
    endPrompt = prompt("You defeated the almighty Doom Bringer! You are now the Champion! Would you like to play again?");
 } 
   if(endPrompt == "yes"){
    runGame();
   }
}


runGame();