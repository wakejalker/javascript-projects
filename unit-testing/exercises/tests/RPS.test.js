const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("returns 'TIE!' when players tie", function() {
        let result = whoWon('rock','rock');
        expect(result).toBe('TIE!');
    });

    test("returns 'Player 2 wins!' when Player 1 throws rock and Player 2 throws paper", function() {
        let result = whoWon('rock', 'paper');
        expect(result).toBe('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' when Player 1 throws paper and Player 2 throws scissors", function() {
        let result = whoWon('paper','scissors');
        expect(result).toBe('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' when Player 1 throws scissors and Player 2 throws rock", function() {
        let result = whoWon('scissors','rock');
        expect(result).toBe('Player 2 wins!');
    });

    // test("returns `Invalid choice. ${player}, please choose 'rock', 'paper', or 'scissors':` when either player inputs an invalid choice", function(){
    //     let choice = player("meatball");
    //     expect(choice).toBe(!["rock", "paper", "scissors"])
    // })


})