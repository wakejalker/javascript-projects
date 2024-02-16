//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
    }

    average(){
        // let total = this.scores.reduce((a, b));
        let total = 0;
        for (let i = 0; i<this.scores.length; i++){
            total += this.scores[i];
        }


        let avg = total / this.scores.length;
        avg = Math.round(avg * 10) / 10;
        return avg;
    }

    status(average){
        if(average > 90){
            return "accepted";
        } else if (average >= 80){
            return "reserved";
        } else if (average >= 70){
            return "probationary"
        } else {
            return "rejection";
        }
    }

}


let bubbaBear = new CrewCandidate ("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);




//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


// console.log(bubbaBear.status(bubbaBear.average()));
// console.log(merryMaltese.status(merryMaltese.average()));
// console.log(gladGator.status(gladGator.average()));


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// gladGator.addScore(100);
// gladGator.addScore(90);
// gladGator.addScore(95);
// gladGator.addScore(100);
// gladGator.addScore(95);

// console.log(gladGator.average());
// console.log(gladGator.status(gladGator.average()));

// create a loop that adds scores until Glad Gator is accepted
while(gladGator.average() < 90){ // exit condition: average > 90
    console.log(gladGator.average());
    console.log(gladGator.scores);
    gladGator.addScore(100);
}

console.log(gladGator.average());
console.log(gladGator.status(gladGator.average()));