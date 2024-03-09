// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    // BUTTONS 
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    // watching Carrie's break down of this and going to use her way of coding this
    // const upButton = document.getElementById("up");
    // const downButton = document.getElementById("down");
    // const leftButton = document.getElementById("left");
    // const rightButton = document.getElementById("right");
    
    // AREAS
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");


    const rocketImage = document.getElementById("rocket");

    takeoffButton.addEventListener("click", function() {
        const confirmTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");

        if (confirmTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            shuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocketImage.style.marginBottom = rocketPosY + "px";
        }
    });

    landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        resetRocket();
    });

    abortButton.addEventListener("click", function () {
        const confirmAbort = confirm("Confirm that you want to abort the mission.");

        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            resetRocket();
        };

    });
   
     // use event delegation for directional buttons
     document.addEventListener("click", function(event){
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        // console.log(event.target.id);
        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocketImage.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocketImage.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocketImage.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            shuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocketImage.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            shuttleHeight.innerHTML = altitude;
        }
     });


     function resetRocket() {
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        shuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocketImage.style.marginLeft = rocketPosX + "px";
        rocketImage.style.marginBottom = rocketPosY + "px";
     }

})