
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
    launchOutput: function (num) {
        let result = "";

        if (num % 2 === 0) {
            result += "Launch";
        } 
        if (num % 3 === 0){
            result+= "Code";
        } 
        if (num % 5 === 0){
            if (result.length > 0) {
                result += " ";
            }
            result+= "Rocks"
        }
        if (result.length > 0) {
            result += "!";
            if (result === "Launch Rocks!") {
                result += " (CRASH!!!!)";
            }
        } else {
            result += "Rutabagas! That doesn't work.";
        }

        return result;
    }
};

module.exports = launchcode;

