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

alert("Make sure to check the console log for your current stats!");
alert("Battle begins\nYou will now enter your attack phase!");
}


// attack functions 

function normalAttack(){
    var popup = document.getElementById("myPopup");
    popup.innerHTML = "Take that you beast!";
    popup.classList.toggle("show");
    let normalHitChance = rollDice(6);
    if(normalHitChance===4){
        let normalDamage = playerPower;
        bossHealth -= normalDamage;
        document.getElementById("battleText").innerHTML ="You choose to play it safe. You step in for a swift slash! Doom Bringer says Bring it peasant!";
    }
   else if(normalHitChance===3){
    var popup = document.getElementById("myPopup");
    popup.innerHTML = "Taste your own blood, bastard!";
    popup.classList.toggle("show");    
    let normalDamage = playerPower
        bossHealth -= normalDamage;
        document.getElementById("battleText").innerHTML ="You lunge for a quick chop! Doom Bringers' arm is badly cut!";
        
    }
    
    else if(normalHitChance===2){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "UGHH! You're lucky that wasn't fatal!";
        popup.classList.toggle("show"); 
        let normalDamage = playerPower; // changed
        bossHealth -= normalDamage;
        document.getElementById("battleText").innerHTML = "You perform a leaping slash attack that just graces Doom Bringers' chest!";
    }


    else if(normalHitChance===1){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "AHHHH! Why won't you DIE!?";
        popup.classList.toggle("show"); 
        let normalDamage = playerPower
        bossHealth -= normalDamage;
        document.getElementById("battleText").innerHTML ="Shhhhckkk! You attempt a normal slash attack, but Doom Bringer brushes it off for minimal damage.";
    }

    if(bossHealth<=0){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "I AM THE NEW KING!!";
        popup.classList.toggle("show"); 
        winCondition();
    }

    else if(normalHitChance>4){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "WHAAAA? How?!";
        popup.classList.toggle("show"); 
        document.getElementById("battleText").innerHTML = "Your attack missed! Watch out!";
        bossSwing();
        }
    document.getElementById("currentBoss").innerHTML = bossHealth;
    }
//  created scenarios for each instance of possible dice that could be rolled and assign different dialogue for them
function heavyAttack(){
    var popup = document.getElementById("myPopup");
        popup.innerHTML = "AYYYYYAHHHH!!!";
        popup.classList.toggle("show"); 
    let heavyHitChance = rollDice(7);
    if(heavyHitChance===5){
        let heavyDamage = rollDice(7) + playerPower;
        bossHealth -= heavyDamage;
        document.getElementById("battleText").innerHTML = "With all your might you grasp your sword with two hands and execute a lacerating slash!";
        
    }
    if(heavyHitChance===6){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "HAHA! You aren't as smart as you are UGLY!";
        popup.classList.toggle("show"); 
        let heavyDamage = rollDice(6) + playerPower;
        bossHealth -= heavyDamage;
        document.getElementById("battleText").innerHTML = "You feint an attack! Doom Bringer falls for the feint and exposes an opening! You execute a perfectly placed blow!";
        
    }  
    
    if(bossHealth<=0){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "Knowledge ALWAYS outweighs physicality. AHHHH!";
        popup.classList.toggle("show"); 
        
}

    else if(heavyHitChance<4){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "What?! but.. but HOW?!";
        popup.classList.toggle("show"); 
        document.getElementById("battleText").innerHTML ="You swing a brutal attack, but Doombringer evades and gets a chance to attack!"
     bossSwing();   
    }
    document.getElementById("currentBoss").innerHTML = bossHealth;
}
    


// boss attack stipulations 
function bossSwing(){
    var popup = document.getElementById("myPopup");
    popup.innerHTML = "YOU FOOL!";
    popup.classList.toggle("show");
    let bossAttack = rollDice(6);
if(bossAttack===5){
    document.getElementById("battleText").innerHTML ="Dice Game hurls his axe and exerts an exhausting breath! You roll out of the way and escape damage!"; 
    
    }
    if(bossAttack===6){
        var popup = document.getElementById("myPopup");
        popup.innerHTML = "WHAT?! HOW?!";
        popup.classList.toggle("show");
        document.getElementById("battleText").innerHTML ="Dice Game, the Doom Bringer unleashes a monstrous slash! You slide underneath the axe in perfect range to execute your next attack!";
        }
    
        else if(bossAttack<5){
            var popup = document.getElementById("myPopup");
            popup.innerHTML = "You puny peasant!";
            popup.classList.toggle("show"); 
            let bossAttackDamage = bossPower; //changed
            playerHealth -= bossAttackDamage - armorScore;
            document.getElementById("battleText").innerHTML ="Doom Bringer attacks and lands a crushing blow!";
            
    
        if(playerHealth<=0){
            var popup = document.getElementById("myPopup");
            popup.innerHTML = "Barely broke a sweat!";
            popup.classList.toggle("show"); 
            // console.log("Argggghhhh! Doom Bringer lands a devastating blow!")
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
        document.getElementById("battleText").innerHTML ="Argggghhhh! Doom Bringer lands a devastating blow!";
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