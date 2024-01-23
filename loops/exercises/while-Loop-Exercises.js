//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let fuelLevel =0, astronautsAboard = 0, altitude = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
// testing if it works without this (it does) |   fuelLevel = input.question("Please enter the starting fuel level: ");
  while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)){
    fuelLevel = input.question("Please enter the starting fuel level: ");
  }
// I definitely overthought this and froze a bit. started with a for loop but figured while would be better and eventually had to check solution 
// code works after some readline-sync bumps. fixed it way faster this time though.


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  while (astronautsAboard > 7 || astronautsAboard < 1) {
    astronautsAboard = input.question("Please enter the number of astronauts: ");
  }   
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel - 100 * astronautsAboard >= 0) {
  altitude += 50;
  fuelLevel -= 100 * astronautsAboard;
}
// this stumped me and had to check solution. bonus, I at least ifgured out how to rename all instances of a variable at once! 

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
  output = "Orbit achieved!";
} else {
  output = "Failed to reach orbit.";
}

// i think this works? nothin is printing 
