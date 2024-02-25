function whoWon(player1,player2){
  const  validChoices = ['rock', 'paper', 'scissors'];

  while (!validChoices.includes(player1) || !validChoices.includes(player2)) {
    if (!validChoices.includes(player1)) {
      player1 = prompt("Player 1");
    }
    if (!validChoices.includes(player2)) {
      player2 = prompt("Player 2");
    }
  }

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
  }

  function prompt(player){
    let choice = (`${player}, please choose 'rock', 'paper', or 'scissors':`).toLowerCase();
    while(!['rock', 'paper', 'scissors'].includes(choice)) {
      choice = promptInvalid(`Invalid choice. ${player}, please choose 'rock', 'paper', or 'scissors':`)
    }
    return choice;
  }
  // honestly not sure how to write a test for this.. will try..

 module.exports = whoWon;