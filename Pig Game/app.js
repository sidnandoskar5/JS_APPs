/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Declare Variables
// Global Access.
var scores, roundScores, activePlayer, gamePlaying;

init();

// Setup Event Handler

/*
function rollButton(){
    do something here...
}
document.querySelector("btn-roll").addEventListener('click', rollButton);
*/

// Using Anonymus function
document.querySelector(".btn-roll").addEventListener('click', function(){
    if(gamePlaying){
        // varibale declaration and Defination. Local Access
        // 1. Generate random number between 1-6
        var dice = Math.floor(Math.random() * 6 ) + 1;
        
        // 2. Display Result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the roundscore if dice is not equal to 1.
        if(dice !== 1){
            roundScores += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScores;
        }else{
            // Next Player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // 1. Add Current score to player's global score.
        scores[activePlayer] += roundScores;

        // 2. Update UI.
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player wins
        if(scores[activePlayer] >= 100){
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
            
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    // Define Variables
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying = true;

    // DOM Manipulation
    document.querySelector('.dice').style.display = "none";

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');
}