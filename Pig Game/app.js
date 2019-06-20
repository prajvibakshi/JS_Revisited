/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

count = [0, 0];
round = 0;
activePlayer = 1;

//document.querySelector('#current-' + activePlayer).textContent = dice; //SETTER
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; //GETTER
//console.log(x);

document.querySelector('.dice').style.display = 'none'; //None hides the image
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.getElementById('current-0').textContent = '0'; //you can also use this
document.getElementById('current-1').textContent = '0'; //to getElementById

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
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block'; //block displays the image
  diceDOM.src = 'dice-' + dice + '.png'; //changing the dice image src as per rolled dice number

  //3. Update the round score ONLY IF Rolled Number !== 1
});
