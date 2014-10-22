// This loop will print "I'm looping!" 3 times 

var count = 0

var loop = function(count){
	while(count<3){console.log ("I'm looping!"); count++;
		}
};

loop(0);


//Inside the soloLoop function, write a while loop that takes an initial condition that's true.
// Your loop should log "Looped once!" to the console, then change that initial condition to false.
//Below are 2 versions with different syntax: 1) function (condition) and function (). Both work.
// 1st version
var condition = true
var soloLoop = function(){while (condition) {
	console.log("Looped once!");
condition=false;
}
  
};

soloLoop();

// 2nd version
var condition = true
var soloLoop = function(condition){
    while (condition) {
        console.log("Looped once!");
            condition=false;
}
};

soloLoop(true);
