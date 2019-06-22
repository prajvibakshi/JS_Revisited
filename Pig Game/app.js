/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevCount, winScore;
init();

//document.querySelector('#current-' + activePlayer).textContent = dice; //SETTER
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; //GETTER
//console.log(x);



//*****EVENT HANDLERS*******
/*Normally you would write and call a function as below -

function btn() {
  //Do something here
}

btn(); //Call function

CALLBACK FUNCTIONS
However, if you call this function as part of the Event Listener, then
what we have is called as a 'Callback function' --- which is basically a function
called another function (as opposed to you exclusively calling that function)
--> document.querySelector('.btn-roll').addEventListener('click', btn);

ANONYMOUS FUNCTIONS
Similarly, you can define the entire function as part of the EventListener argument
without a name. This is called 'Anonymous Function' which basically DOES NOT
have a name. Since there's no name, it cannot be reused by anyone else.
--> document.querySelector('.btn-roll').addEventListener('click', function() {
  //Do something here
});
*/

document.querySelector('.btn-roll').addEventListener('click', function() {
  //1. We need to have a Random number
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; //block displays the image
    diceDOM.src = 'dice-' + dice + '.png'; //changing the dice image src as per rolled dice number

    /****CHALLENGE 1
    CHECK IF 2 sixes in a row. Change the ENTIRE score to 0 and switch player
    */
    //console.clear();
    console.log('Previous: ' + prevCount);
    console.log('Dice: ' + dice);
    //If previous count is 6
    if (prevCount === 6) {
      //and if current dice is 6
      if (dice === 6) {
        //set the score and textcontent to 0
        document.querySelector('#score-' + activePlayer).textContent = 0;
        scores[activePlayer] = 0;
        prevCount = 0; //Sets previous count to 0 because player lost due to 6 and 6
        nextPlayer(); //switch to next player1
      }
    }

    prevCount = dice;

    //3. Update the round score ONLY IF Rolled Number !== 1
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
  //Update the score
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check for the winner
    if (scores[activePlayer] >= winScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      //Next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  prevCount = 0;  //set the previous count to 0 for the nextPlayer upon clicking Hold

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  prevCount = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none'; //None hides the image
  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0'; //you can also use this
  document.getElementById('current-1').textContent = '0'; //to getElementById
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');

  setWinScore();
}

function setWinScore() {
  winScore = document.getElementById('input-winscore').value ;
  console.log(winScore);
}
