// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    preparedForLiftOff = true;
} else {
    preparedForLiftOff = false;
}
// I said I had completed this but I should've said I started it. Once I opened it back up I rememered got hung up here and was going to ask for help in studio. The code that we went over in our breakout was a bit confusing to me with stuff logged to the console, but I also wasn't fully understanding that I could use the preparedForLiftoff variable there until class/studio. 


// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
} else {
    preparedForLiftOff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
} else {
    preparedForLiftOff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius >= -300 || fuelTempCelcius <= -150){
} else {
    preparedForLiftOff = false;++ 
}
// I have to admit I got this solution from when Vincent was sharing his screen in our combined studio, I'm not sure what line 41 does exactly.
// But it's throwing this as an error?! Not really sure why. I have to close the bracket >:[
//Going to try to finish coding what it should print and then troubleshoot. 

// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%"){
} else {
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus = "clear");

// Verify shuttle launch can proceed based on above conditions
if (astronautCount && astronautStatus && totalMassKg && fuelTempCelcius && fuelLevel && weatherStatus){
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("------------------------------");
    console.log("Date: "  + date);
    console.log("Time: " +  time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg);
    console.log("Fuel Mass: " +  fuelMassKg);
    console.log("Shuttle Mass: " + shuttleMassKg);
    console.log("Total Mass: " + totalMassKg);
    console.log("Fuel Temperature: " + fuelTempCelcius);
    console.log("Weather Status: " + weatherStatus);  
    console.log("------------------------------");
    console.log("All clear for launch. Have a safe trip astronauts!");  
} else {
    console.log("WARNING: Check systems.")
    //I'm sure there's some super nifty thing I could do here that would display where and what the error is but I think that's beyond my knowledge. 
}