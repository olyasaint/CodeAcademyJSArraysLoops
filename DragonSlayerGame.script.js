//In this game, you’ll battle a dragon. 
//It will take 4 hits to slay the dragon, and if you miss even one hit, the dragon will defeat you!
var slaying = true
var youHit = Math.floor (Math.random () * 2)
var damageThisRound = Math.floor (Math.random () * 5 + 1)
var totalDamage = 0
while (slaying) {
    if (youHit) {console.log ("You hit!");
    totalDamage += damageThisRound;
    if (totalDamage >=4) {
        console.log ("You win!");
        slaying = false
    } else {
        youHit = Math.floor (Math.random () * 2);
    }
    } else {
        console.log ("You missed!");
    }
    slaying = false;
}
