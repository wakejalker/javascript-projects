// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your buildCrewArray function here:
let callCount = 0;
let newArray = [];
let crewArray = [];

function buildCrewArray(idNumbers, animals) {

  while (idNumbers.length !== 0 && callCount < 3){
    let id = selectRandomEntry(idNumbers);
    if (!newArray.includes(id)) {
      newArray.push([id]);
      callCount++;
    }
  }
      
    for (let i = 0; i < animals.length; i++) {
      let candidateObj = animals[i];
        for (let j = 0; j < newArray.length; j++) {
          if (candidateObj.astronautID === newArray[j]) {
            crewArray.push(candidateObj.name);
          }
        }
    }
}


let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
console.log(`${crewArray[0]}, ${crewArray[1]}, and ${crewArray[2]} are going to space!`);
